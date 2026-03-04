'use strict';

function unocss(options = {}) {
  let promise;
  return {
    postcssPlugin: options.directiveMap?.unocss || "unocss",
    plugins: [
      async (root, result) => {
        if (!promise)
          promise = import('@unocss/postcss/esm').then((r) => r.createPlugin(options));
        return await (await promise)(root, result);
      }
    ]
  };
}
unocss.postcss = true;
unocss.default = unocss;

module.exports = unocss;
