import presetUno__default from '@unocss/preset-uno';
import VitePlugin__default from '@unocss/vite';
export * from '@unocss/vite';

function UnocssVitePlugin(configOrPath) {
  return VitePlugin__default(
    configOrPath,
    {
      presets: [
        presetUno__default()
      ]
    }
  );
}

export { UnocssVitePlugin as default };
