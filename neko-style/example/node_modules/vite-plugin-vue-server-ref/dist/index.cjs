'use strict';

const mlly = require('mlly');
const utils = require('@antfu/utils');
const ufo = require('ufo');
const client = require('./client.cjs');
require('klona/json');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
const URL_PREFIX = ["/@server-ref/", "/@server-reactive/"];
const VIRTUAL_PREFIX = ["server-ref:", "server-reactive:"];
const WS_EVENT = "vue-server-ref";
const PREFIXES = [...URL_PREFIX, ...VIRTUAL_PREFIX];

function getBodyJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => body += chunk);
    req.on("error", reject);
    req.on("end", () => {
      try {
        resolve(client.parse(body) || {});
      } catch (e) {
        reject(e);
      }
    });
  });
}
function get(obj, key) {
  return key.split(".").reduce((acc, key2) => acc?.[key2], obj);
}
function set(obj, key, value) {
  const keys = key.split(".");
  let acc = obj;
  keys.slice(0, -1).forEach((key2) => {
    if (!acc[key2])
      acc[key2] = {};
    acc = acc[key2];
  });
  acc[keys[keys.length - 1]] = value;
}
function parseId(id) {
  for (const pre of PREFIXES) {
    if (id.startsWith(pre)) {
      const { pathname: key, search } = ufo.parseURL(id.substr(pre.length));
      const query = ufo.parseQuery(search);
      return {
        key: key.replace(/\//g, "."),
        type: pre.includes("ref") ? "ref" : "reactive",
        prefix: pre,
        diff: "diff" in query
      };
    }
  }
}

function genCode(options, id, clientUrl = "vite-plugin-vue-server-ref/client") {
  const { state, defaultValue, clientVue, debug, debounce } = options;
  const { key, type, prefix, diff } = id;
  const access = type === "ref" ? "data.value" : "data";
  return `
import { ${type}, watch } from "${clientVue}"
import { randId, stringify, parse, define, apply,${type === "reactive" ? " reactiveSet," : ""}${diff ? " clone, diff" : ""} } from ${JSON.stringify(clientUrl)}

const data = ${type}(${JSON.stringify(get(state, key) ?? defaultValue(key))})

let onSet = []
let onPatch = []

define(data, '$syncUp', true)
define(data, '$syncDown', true)
define(data, '$paused', false)
define(data, '$onSet', fn => onSet.push(fn))
define(data, '$onPatch', fn => onPatch.push(fn))

const id = randId()

if (import.meta.hot) {
  let skipWatch = false
  let timer = null
  ${diff ? "let copy = null" : ""}

  function post(payload) {
    ${debug ? `console.log("[server-ref] [${key}] outgoing", payload)` : ""}
    return fetch('${prefix + key}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: stringify(payload)
    })
  }

  ${diff ? `
  function makeClone() {
    copy = clone(${access})
  }

  function getDiff() {
    return diff(${access}, copy)
  }
  ` : ""}

  function applyPatch(patch, trigger = true) {
    skipWatch = true
    if (trigger) {
      onPatch.forEach(fn => fn(patch))
      ${debug ? `console.log("[server-ref] [${key}] patch incoming", patch)` : ""}
    }
    apply(${access}, patch)
    ${diff ? "makeClone()" : ""}
    skipWatch = false
  }

  function applySet(newData) {
    skipWatch = true
    onSet.forEach(fn => fn(newData))
    ${type === "ref" ? "data.value = newData" : "reactiveSet(data, newData)"}
    ${debug ? `console.log("[server-ref] [${key}] incoming", newData)` : ""}
    ${diff ? "makeClone()" : ""}
    skipWatch = false
  }
 
  ${debug ? `console.log("[server-ref] [${key}] ref", data)` : ""}
  ${debug ? `console.log("[server-ref] [${key}] initial", ${access})` : ""}
 
  import.meta.hot.on("${WS_EVENT}", (payload) => {
    if (!data.$syncDown || data.$paused || payload.key !== "${key}" || payload.source === id)
      return
    if (payload.patch)
      applyPatch(payload.patch)
    else
      applySet(payload.data)
  })

  define(data, '$patch', async (patch) => {
    if (!data.$syncUp || data.$paused)
      return false
    applyPatch(patch, false)
    return post({
      source: id,
      patch,
      timestamp: Date.now(),
    })
  })

  watch(data, (v) => {
    if (timer)
      clearTimeout(timer)
    if (!data.$syncUp || data.$paused || skipWatch)
      return

    timer = setTimeout(()=>{
      post({
        source: id,
        ${diff ? "patch: getDiff()" : `data: ${access}`},
        timestamp: Date.now(),
      })
    }, ${debounce})
  }, { flush: 'sync', deep: true })
}
else {
  define(data, '$patch', async () => false)
}

export default data
`.replace(/\n\s*\n/gm, "\n");
}

const defaultOptions = {
  state: {},
  debounce: 10,
  debug: false,
  defaultValue: () => void 0,
  clientVue: "vue",
  onChanged: () => {
  }
};
function resolveOptions(options) {
  return Object.assign({}, defaultOptions, options);
}

function VitePluginServerRef(options = {}) {
  const resolved = resolveOptions(options);
  const { state } = resolved;
  const idMaps = {};
  return {
    name: "vite-plugin-vue-server-ref",
    resolveId(id) {
      const idx = VIRTUAL_PREFIX.findIndex((pre) => id.startsWith(pre));
      if (idx > -1)
        return URL_PREFIX[idx] + id.slice(VIRTUAL_PREFIX[idx].length);
      return URL_PREFIX.some((pre) => id.startsWith(pre)) ? id : null;
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || req.method !== "POST")
          return next();
        const id = parseId(req.url);
        if (!id)
          return next();
        const key = id.key;
        const payload = await getBodyJson(req);
        for (const id2 of idMaps[key] || []) {
          const module = server.moduleGraph.getModuleById(id2);
          if (module)
            server.moduleGraph.invalidateModule(module);
        }
        if (payload.patch)
          set(state, key, client.apply(get(state, key), payload.patch));
        else
          set(state, key, payload.data);
        server.ws.send({
          type: "custom",
          event: WS_EVENT,
          data: { ...payload, key }
        });
        options.onChanged?.(key, get(state, key), payload.patch, payload.timestamp);
        res.write("");
        res.end();
      });
    },
    async load(id) {
      const res = parseId(id);
      if (!res)
        return;
      if (!idMaps[res.key])
        idMaps[res.key] = /* @__PURE__ */ new Set();
      idMaps[res.key].add(id);
      return genCode(
        resolved,
        res,
        toAtFS(await mlly.resolvePath("vite-plugin-vue-server-ref/client", { url: (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.cjs', document.baseURI).href)) }))
      );
    }
  };
}
function toAtFS(path) {
  return `/@fs${utils.ensurePrefix("/", utils.slash(path))}`;
}

module.exports = VitePluginServerRef;
