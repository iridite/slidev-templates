import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

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
        'display': 'inline-block',
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
        math: 'Latin Modern Roman',
      },
      timeouts: {
        warning: 30000,
        failure: 30000,
      },
    }),
  ],
})
