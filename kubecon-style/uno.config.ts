import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
// @ts-expect-error - Ignoring the error of missing types for the uno config
import config from '@slidev/client/uno.config'
import { mergeConfigs, presetAttributify, presetIcons, presetWebFonts, presetWind3 } from 'unocss'

export default mergeConfigs([
  config,
  {
    rules: [
      ['font-math', { 'font-family': 'Latin Modern Roman, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }],
    ],
    safelist: [
      ...Array.from({ length: 30 }, (_, i) => `delay-${(i + 1) * 100}`),
    ],
    presets: [
      presetWind3({
        dark: 'class',
      }),
      presetAttributify(),
      presetIcons({
        collections: {
          devicon: () => import('@iconify-json/devicon/icons.json').then(i => i.default),
          logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
          'simple-icons': () => import('@iconify-json/simple-icons/icons.json').then(i => i.default),
          solar: () => import('@iconify-json/solar/icons.json').then(i => i.default),
        },
      }),
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          cn: 'Noto Serif SC',
          hand: 'Playwrite IT Moderna',
          rounded: 'Comfortaa',
          math: 'Latin Modern Roman',
        },
        timeouts: {
          failure: 30000,
          warning: 30000,
        },
      }),
    ],
  },
])
