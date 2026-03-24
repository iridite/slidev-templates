import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-white dark:bg-[#121212]',
  },
  rules: [
    ['font-math', { 'font-family': 'Latin Modern Roman, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }],
  ],
  safelist: [
    ...Array.from({ length: 30 }, (_, i) => `delay-${(i + 1) * 100}`),
    'animate-pulse',
  ],
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      warn: true,
    }),
    // Keep starter offline-friendly: avoid remote webfont fetch during build.
    // Use system/local font fallbacks instead.
  ],
})
