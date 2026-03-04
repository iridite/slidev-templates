"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DefaultRules: () => DefaultRules,
  VitePluginRemoteAssets: () => VitePluginRemoteAssets,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_node_path = require("path");
var import_axios = __toESM(require("axios"), 1);
var import_fs_extra = __toESM(require("fs-extra"), 1);
var import_debug = __toESM(require("debug"), 1);
var import_blueimp_md5 = __toESM(require("blueimp-md5"), 1);
var import_magic_string = __toESM(require("magic-string"), 1);
var import_utils = require("@antfu/utils");
var DefaultRules = [
  {
    match: /\b(https?:\/\/[\w#&?./-]*?\.(?:png|jpe?g|svg|ico))(?=[`'")\]])/gi
  }
];
function isValidHttpUrl(str) {
  let url;
  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
function sleep(seconds) {
  return new Promise((resolve2) => setTimeout(resolve2, seconds * 1e3));
}
var debug = (0, import_debug.default)("vite-plugin-remote-assets");
function VitePluginRemoteAssets(options = {}) {
  const {
    assetsDir = "node_modules/.remote-assets",
    rules = DefaultRules,
    resolveMode = "relative",
    awaitDownload = true,
    retryTooManyRequests = false
  } = options;
  let dir = void 0;
  let config;
  let server;
  async function downloadTo(url, filepath, { retryTooManyRequests: retryTooManyRequests2 }) {
    const writer = import_fs_extra.default.createWriteStream(filepath);
    const response = await (0, import_axios.default)({
      url,
      method: "GET",
      validateStatus: (status) => {
        if (status >= 200 && status < 300)
          return true;
        else if (retryTooManyRequests2 && status === 429)
          return true;
        else
          return false;
      },
      responseType: "stream"
    });
    if (response.status === 429) {
      const retryAfter = response.headers["retry-after"];
      if (!retryAfter) {
        throw new Error(`${url}: 429 without retry-after header`);
      } else {
        debug(`${url}: 429, retry after ${retryAfter} seconds`);
        await sleep(retryAfter);
        return await downloadTo(url, filepath, { retryTooManyRequests: retryTooManyRequests2 });
      }
    }
    response.data.pipe(writer);
    return new Promise((resolve2, reject) => {
      writer.on("finish", resolve2);
      writer.on("error", reject);
    });
  }
  const tasksMap = {};
  async function transform(code, id) {
    const tasks = [];
    const s = new import_magic_string.default(code);
    let hasReplaced = false;
    let match;
    for (const rule of rules) {
      rule.match.lastIndex = 0;
      while (match = rule.match.exec(code)) {
        const start = match.index;
        const end = start + match[0].length;
        const url = match[0];
        if (!url || !isValidHttpUrl(url))
          continue;
        const hash = (0, import_blueimp_md5.default)(url) + (rule.ext || (0, import_node_path.extname)(url));
        const filepath = (0, import_utils.slash)((0, import_node_path.resolve)(dir, hash));
        debug("detected", url, hash);
        if (!import_fs_extra.default.existsSync(filepath) || tasksMap[filepath]) {
          if (!tasksMap[filepath]) {
            tasksMap[filepath] = (async () => {
              try {
                debug("downloading", url);
                await downloadTo(url, filepath, { retryTooManyRequests });
                debug("downloaded", url);
              } catch (e) {
                if (import_fs_extra.default.existsSync(filepath))
                  await import_fs_extra.default.unlink(filepath);
                throw e;
              } finally {
                delete tasksMap[filepath];
              }
            })();
          }
          tasks.push(tasksMap[filepath]);
          if (!awaitDownload)
            continue;
        }
        hasReplaced = true;
        const mode = typeof resolveMode === "function" ? resolveMode(id, url) : resolveMode;
        let newUrl;
        if (mode === "relative") {
          newUrl = (0, import_utils.slash)((0, import_node_path.relative)((0, import_node_path.dirname)(id), `${dir}/${hash}`));
          if (newUrl[0] !== ".")
            newUrl = `./${newUrl}`;
        } else {
          let path = `${dir}/${hash}`;
          if (!path.startsWith("/"))
            path = `/${path}`;
          newUrl = `/@fs${path}`;
        }
        s.overwrite(start, end, newUrl);
      }
    }
    if (tasks.length) {
      if (awaitDownload) {
        await Promise.all(tasks);
      } else {
        Promise.all(tasks).then(() => {
          if (server) {
            const module2 = server.moduleGraph.getModuleById(id);
            if (module2)
              server.moduleGraph.invalidateModule(module2);
          }
        });
      }
    }
    if (!hasReplaced)
      return null;
    return {
      code: s.toString(),
      map: config.build.sourcemap ? s.generateMap({ hires: true }) : null
    };
  }
  return {
    name: "vite-plugin-remote-assets",
    enforce: "pre",
    async configResolved(_config) {
      config = _config;
      dir = (0, import_utils.slash)((0, import_node_path.resolve)(config.root, assetsDir));
      if ("force" in config.server && config.server.force || config.optimizeDeps.force)
        await import_fs_extra.default.emptyDir(dir);
      await import_fs_extra.default.ensureDir(dir);
    },
    configureServer(_server) {
      server = _server;
    },
    async transform(code, id) {
      return await transform(code, id);
    },
    transformIndexHtml: {
      order: "pre",
      async handler(code, ctx) {
        return (await transform(code, ctx.filename))?.code;
      }
    }
  };
}
var src_default = VitePluginRemoteAssets;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultRules,
  VitePluginRemoteAssets
});
