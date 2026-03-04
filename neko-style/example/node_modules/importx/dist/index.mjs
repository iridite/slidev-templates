import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'pathe';
import Debug from 'debug';

let _loaderMatrix;
async function _createLoaderMatrix(options) {
  const matrix = [
    {
      name: "native",
      cache: [true],
      listDependencies: [false],
      type: ["module", "commonjs"],
      importTS: options.isNativeTsImportSupported ? [true, false] : [false]
    },
    {
      name: "tsx",
      supported: options.isRuntimeSupportsTsx,
      type: ["module", "commonjs"],
      cache: [true, false],
      listDependencies: [true, false],
      importTS: [true, false]
    },
    {
      name: "jiti",
      type: ["commonjs"],
      cache: [true, false],
      listDependencies: [true, false],
      importTS: [true, false]
    },
    {
      name: "bundle-require",
      type: ["module", "commonjs"],
      cache: [false],
      listDependencies: [true],
      importTS: [true, false]
    }
  ];
  return matrix.filter((i) => i.supported !== false);
}
async function getLoaderMatrix() {
  if (_loaderMatrix)
    return _loaderMatrix;
  _loaderMatrix = await _createLoaderMatrix({
    isNativeTsImportSupported: await isNativeTsImportSupported(),
    isRuntimeSupportsTsx: await isRuntimeSupportsTsx()
  });
  return _loaderMatrix;
}
let _isNativeTsImportSupported;
async function isNativeTsImportSupported() {
  if (_isNativeTsImportSupported === void 0) {
    try {
      const modName = "dummy.mts";
      const mod = await import(`../runtime-fixtures/${modName}`);
      _isNativeTsImportSupported = mod.default === "dummy";
    } catch {
      _isNativeTsImportSupported = false;
    }
  }
  return _isNativeTsImportSupported;
}
const nodeVersionNumbers = globalThis?.process?.versions?.node?.split(".").map(Number);
async function detectLoader(context, matrix) {
  matrix = matrix || await getLoaderMatrix();
  for (const loader of matrix) {
    if (context.excludeLoaders?.includes(loader.name))
      continue;
    if ((context.cache === null || loader.cache.includes(context.cache)) && (context.listDependencies === null || loader.listDependencies.includes(context.listDependencies)) && (context.type === null || loader.type.includes(context.type)) && loader.importTS.includes(context.isTs)) {
      return loader.name;
    }
  }
  return null;
}
async function isRuntimeSupportsTsx() {
  if (!nodeVersionNumbers || nodeVersionNumbers[0] < 18 || nodeVersionNumbers[0] === 18 && nodeVersionNumbers[1] < 19 || nodeVersionNumbers[0] === 20 && nodeVersionNumbers[1] < 8) {
    return false;
  }
  if (typeof process !== "undefined" && typeof process.versions.electron === "string") {
    return false;
  }
  return true;
}
const reIsTypeScriptFile = /\.[mc]?tsx?$/;
function isTypeScriptFile(path) {
  return reIsTypeScriptFile.test(path);
}

const debug = Debug("importx");
const _moduleInfoMap = /* @__PURE__ */ new WeakMap();
function getModuleInfo(mod) {
  return _moduleInfoMap.get(mod);
}
async function importx(_specifier, _options) {
  const options = typeof _options === "string" || _options instanceof URL ? { parentURL: _options } : _options;
  const {
    loaderOptions = {},
    parentURL: inputUserUrl,
    cache = null,
    type = null,
    excludeLoaders = [],
    listDependencies = null,
    ignoreImportxWarning = false,
    fallbackLoaders = ["jiti"],
    ...otherOptions
  } = options;
  let specifier = _specifier instanceof URL ? fileURLToPath(_specifier) : _specifier;
  specifier = specifier.match(/^[a-z]:/i) ? pathToFileURL(specifier).href : specifier;
  let loader = options.loader || getLoaderFromEnv() || "auto";
  if (loader === "auto") {
    const context = {
      cache,
      listDependencies,
      type,
      isTs: isTypeScriptFile(specifier),
      excludeLoaders
    };
    const _loader = await detectLoader(context);
    if (!_loader)
      throw new Error(`[importx] Cannot find a suitable loader for given requirements ${JSON.stringify(context)}`);
    loader = _loader;
  }
  const parentPath = typeof inputUserUrl === "string" && !inputUserUrl.includes("://") ? inputUserUrl : fileURLToPath(inputUserUrl);
  const parentURL = pathToFileURL(parentPath);
  const fullPath = specifier[0] === "." ? fileURLToPath(new URL(specifier, parentURL)) : specifier;
  const info = {
    loader,
    cache,
    specifier,
    fullPath,
    parentURL,
    parentPath,
    timestampInit: Date.now(),
    timestampLoad: -1
  };
  async function run(loader2) {
    info.loader = loader2;
    debug(`[${loader2}]`, "Importing", fullPath, "from", parentPath);
    switch (loader2) {
      case "native": {
        if (cache === false && !ignoreImportxWarning)
          throw new Error("`cache: false` is not compatible with `native` loader");
        return import(fullPath);
      }
      case "tsx": {
        return import('./chunks/tsx.mjs').then((r) => r.loader(info, options));
      }
      case "jiti": {
        return import('./chunks/jiti.mjs').then((r) => r.loader(info, options));
      }
      case "jiti-v1": {
        return import('./chunks/jiti-v1.mjs').then((r) => r.loader(info, options));
      }
      case "bundle-require": {
        if (cache === true && !ignoreImportxWarning)
          throw new Error("`cache: true` is not compatible with `native` loader");
        const cwd = dirname(parentPath);
        return import('bundle-require').then((r) => r.bundleRequire({
          format: type === "commonjs" ? "cjs" : "esm",
          ...loaderOptions.bundleRequire,
          filepath: fullPath,
          cwd
        })).then((r) => {
          info.dependencies = r.dependencies.map((d) => pathToFileURL(join(cwd, d)).href);
          return r.mod;
        });
      }
      default: {
        throw new Error(`Unknown loader: ${loader2}`);
      }
    }
  }
  const loaders = /* @__PURE__ */ new Set([
    loader,
    ...fallbackLoaders || []
  ]);
  let error;
  for (const loader2 of loaders) {
    try {
      const mod = await run(loader2);
      info.timestampLoad = Date.now();
      const previous = _moduleInfoMap.get(mod);
      if (previous)
        info.previousImportInfo = previous;
      _moduleInfoMap.set(mod, info);
      return mod;
    } catch (err) {
      error = err;
      debug(`[${loader2}]`, err);
    }
  }
  throw error;
}
function getLoaderFromEnv() {
  if (typeof process !== "undefined" && process.env)
    return process.env.IMPORTX_LOADER || void 0;
  return void 0;
}

export { getModuleInfo, importx as import, importx, isNativeTsImportSupported, isTypeScriptFile };
