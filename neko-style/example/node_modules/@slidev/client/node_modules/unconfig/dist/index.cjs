'use strict';

const fs = require('node:fs');
const node_path = require('node:path');
const process = require('node:process');
const utils = require('@antfu/utils');
const defu = require('defu');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const fs__default = /*#__PURE__*/_interopDefaultCompat(fs);
const process__default = /*#__PURE__*/_interopDefaultCompat(process);
const defu__default = /*#__PURE__*/_interopDefaultCompat(defu);

const defaultExtensions = ["mts", "cts", "ts", "mjs", "cjs", "js", "json", ""];

function existsSync(fp) {
  try {
    fs__default.accessSync(fp, fs.constants.R_OK);
    return true;
  } catch {
    return false;
  }
}
async function findUp(paths, options = {}) {
  const {
    cwd = process__default.cwd(),
    stopAt = node_path.parse(cwd).root,
    multiple = false,
    allowSymlinks = true
  } = options;
  let current = cwd;
  const files = [];
  const stat = allowSymlinks ? fs.promises.stat : fs.promises.lstat;
  while (current && current !== stopAt) {
    for (const path of paths) {
      const filepath = node_path.resolve(current, path);
      if (existsSync(filepath) && (await stat(filepath)).isFile()) {
        files.push(filepath);
        if (!multiple)
          return files;
      }
    }
    const parent = node_path.dirname(current);
    if (parent === current)
      break;
    current = parent;
  }
  return files;
}

function interopDefault(mod) {
  if (mod == null || typeof mod !== "object" || !("default" in mod) || mod.default == null)
    return mod;
  const defaultValue = mod.default;
  if (typeof defaultValue !== "object")
    return defaultValue;
  for (const key in mod) {
    try {
      if (!(key in defaultValue)) {
        Object.defineProperty(defaultValue, key, {
          enumerable: key !== "default",
          configurable: key !== "default",
          get() {
            return mod[key];
          }
        });
      }
    } catch {
    }
  }
  return defaultValue;
}

function createConfigLoader(options) {
  const sources = utils.toArray(options.sources || []);
  const {
    cwd = process__default.cwd(),
    merge,
    defaults
  } = options;
  const results = [];
  let matchedFiles;
  async function findConfigs() {
    if (matchedFiles == null)
      matchedFiles = [];
    matchedFiles.length = 0;
    for (const source of sources) {
      const { extensions = defaultExtensions } = source;
      const flatTargets = utils.toArray(source?.files || []).flatMap(
        (file) => !extensions.length ? [file] : extensions.map((i) => i ? `${file}.${i}` : file)
      );
      const files = await findUp(flatTargets, { cwd, stopAt: options.stopAt, multiple: merge });
      matchedFiles.push([source, files]);
    }
    return matchedFiles.flatMap((i) => i[1]);
  }
  async function load(force = false) {
    if (matchedFiles == null || force)
      await findConfigs();
    for (const [source, files] of matchedFiles) {
      if (!files.length)
        continue;
      if (!merge) {
        const result = await loadConfigFile(files[0], source, options);
        if (result) {
          return {
            config: applyDefaults(result.config, defaults),
            sources: result.sources,
            dependencies: result.dependencies
          };
        }
      } else {
        results.push(
          ...(await Promise.all(
            files.map((file) => loadConfigFile(file, source, options))
          )).filter(utils.notNullish)
        );
      }
    }
    if (!results.length) {
      return {
        config: defaults,
        sources: []
      };
    }
    return {
      config: applyDefaults(...results.map((i) => i.config), defaults),
      sources: results.map((i) => i.sources).flat(),
      dependencies: results.flatMap((i) => i.dependencies || [])
    };
  }
  return {
    load,
    findConfigs
  };
}
function applyDefaults(...args) {
  return defu__default(...args.map((i) => ({ config: i }))).config;
}
async function loadConfig(options) {
  return createConfigLoader(options).load();
}
async function loadConfigFile(filepath, source, options) {
  let config;
  let parser = source.parser || "auto";
  let bundleFilepath = filepath;
  let code;
  async function read() {
    if (code == null)
      code = await fs.promises.readFile(filepath, "utf-8");
    return code;
  }
  if (source.transform) {
    const transformed = await source.transform(await read(), filepath);
    if (transformed) {
      bundleFilepath = node_path.join(node_path.dirname(filepath), `__unconfig_${node_path.basename(filepath)}`);
      await fs.promises.writeFile(bundleFilepath, transformed, "utf-8");
      code = transformed;
    }
  }
  if (parser === "auto") {
    try {
      config = JSON.parse(await read());
      parser = "json";
    } catch {
      parser = "import";
    }
  }
  let dependencies;
  try {
    if (!config) {
      if (typeof parser === "function") {
        config = await parser(filepath);
      } else if (parser === "require" || parser === "import") {
        config = await import('importx').then(async (r) => {
          let mod = await r.import(bundleFilepath, {
            parentURL: filepath,
            cache: false,
            loader: source.loader,
            fallbackLoaders: source.fallbackLoaders,
            loaderOptions: {
              ...options.importx?.loaderOptions,
              ...source.importx?.loaderOptions,
              jiti: {
                interopDefault: true,
                ...options.importx?.loaderOptions?.jiti,
                ...source.importx?.loaderOptions?.jiti
              },
              jitiV1: {
                interopDefault: true,
                ...options.importx?.loaderOptions?.jitiV1,
                ...source.importx?.loaderOptions?.jitiV1
              }
            },
            ...options.importx,
            ...source.importx
          });
          dependencies = r.getModuleInfo(mod)?.dependencies;
          mod = interopDefault(mod);
          return interopDefault(mod);
        });
      } else if (parser === "json") {
        config = JSON.parse(await read());
      }
    }
    if (!config)
      return;
    const rewritten = source.rewrite ? await source.rewrite(config, filepath) : config;
    if (!rewritten)
      return void 0;
    return {
      config: rewritten,
      sources: [filepath],
      dependencies
    };
  } catch (e) {
    if (source.skipOnError)
      return;
    throw e;
  } finally {
    if (bundleFilepath !== filepath)
      await fs.promises.unlink(bundleFilepath).catch();
  }
}

exports.createConfigLoader = createConfigLoader;
exports.defaultExtensions = defaultExtensions;
exports.loadConfig = loadConfig;
