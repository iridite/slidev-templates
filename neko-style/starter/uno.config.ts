import config from '@slidev/client/uno.config'
import { mergeConfigs, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config,
  {
    rules: [
      ['font-math', { 'font-family': 'Latin Modern Roman, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }],
    ],
    safelist: [
      ...Array.from({ length: 30 }, (_, i) => `delay-${(i + 1) * 100}`),
      'animate-pulse',
    ],
    presets: [
      presetUno({ dark: 'class' }),
      presetAttributify(),
      presetIcons({
        prefix: 'i-',
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
        },
        warn: true,
      }),
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          cn: 'Noto Serif SC',
          hand: 'Playwrite IT Moderna',
          rounded: 'Comfortaa',
        },
        timeouts: { failure: 30000, warning: 30000 },
      }),
    ],
  },
])
