import { createJiti } from 'jiti';

async function loader(info, options) {
  const jiti = createJiti(info.parentPath, {
    ...info.cache === false ? {
      cache: false,
      requireCache: false
    } : {},
    ...options.loaderOptions?.jiti
  });
  const mod = await jiti.import(info.specifier);
  info.dependencies = Object.values(jiti.cache || {}).map((i) => i.filename).filter(Boolean);
  return mod;
}

export { loader };
