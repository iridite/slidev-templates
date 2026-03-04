import presetUno from '@unocss/preset-uno';
import WebpackPlugin__default from '@unocss/webpack';
export * from '@unocss/webpack';

function UnocssWebpackPlugin(configOrPath) {
  return WebpackPlugin__default(
    configOrPath,
    {
      presets: [
        presetUno()
      ]
    }
  );
}

export { UnocssWebpackPlugin as default };
