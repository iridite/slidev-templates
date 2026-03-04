import JITI from 'jiti-v1';

async function loader(info, options) {
  const jiti = JITI(info.parentPath, {
    esmResolve: true,
    ...info.cache === false ? {
      cache: false,
      requireCache: false
    } : {},
    ...options.loaderOptions?.jitiV1
  });
  const mod = jiti(info.specifier);
  info.dependencies = Object.values(jiti.cache || {}).map((i) => i.filename).filter(Boolean);
  return mod;
}

export { loader };
