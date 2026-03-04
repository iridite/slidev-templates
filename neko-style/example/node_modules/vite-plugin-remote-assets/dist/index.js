// src/index.ts
import { dirname, extname, relative, resolve } from "node:path";
import axios from "axios";
import fs from "fs-extra";
import Debug from "debug";
import md5 from "blueimp-md5";
import MagicString from "magic-string";
import { slash } from "@antfu/utils";
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
var debug = Debug("vite-plugin-remote-assets");
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
    const writer = fs.createWriteStream(filepath);
    const response = await axios({
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
    const s = new MagicString(code);
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
        const hash = md5(url) + (rule.ext || extname(url));
        const filepath = slash(resolve(dir, hash));
        debug("detected", url, hash);
        if (!fs.existsSync(filepath) || tasksMap[filepath]) {
          if (!tasksMap[filepath]) {
            tasksMap[filepath] = (async () => {
              try {
                debug("downloading", url);
                await downloadTo(url, filepath, { retryTooManyRequests });
                debug("downloaded", url);
              } catch (e) {
                if (fs.existsSync(filepath))
                  await fs.unlink(filepath);
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
          newUrl = slash(relative(dirname(id), `${dir}/${hash}`));
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
            const module = server.moduleGraph.getModuleById(id);
            if (module)
              server.moduleGraph.invalidateModule(module);
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
      dir = slash(resolve(config.root, assetsDir));
      if ("force" in config.server && config.server.force || config.optimizeDeps.force)
        await fs.emptyDir(dir);
      await fs.ensureDir(dir);
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
export {
  DefaultRules,
  VitePluginRemoteAssets,
  src_default as default
};
