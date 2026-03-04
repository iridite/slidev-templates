import { register, tsImport } from 'tsx/esm/api';

const apiESM = /* @__PURE__ */ new Map();
async function loader(info, options) {
  const dependencies = [];
  info.dependencies = dependencies;
  if (info.cache === true) {
    if (!apiESM.get(info.fullPath)) {
      apiESM.set(info.fullPath, register({
        onImport(url) {
          dependencies.push(url);
        },
        namespace: `importx_${Math.random().toString(36).slice(2)}`,
        ...options.loaderOptions?.tsx
      }));
    }
    return await apiESM.get(info.fullPath).import(
      info.specifier,
      info.parentPath
    );
  }
  return await tsImport(
    info.specifier,
    {
      onImport(url) {
        dependencies.push(url);
      },
      parentURL: info.parentPath,
      ...options.loaderOptions?.tsx
    }
  );
}

export { loader };
