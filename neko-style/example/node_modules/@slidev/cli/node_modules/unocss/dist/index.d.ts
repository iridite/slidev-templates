import { UserConfig } from '@unocss/core';
export * from '@unocss/core';
import { Theme } from '@unocss/preset-uno';
export { Theme as PresetUnoTheme, default as presetUno } from '@unocss/preset-uno';
export { default as presetAttributify } from '@unocss/preset-attributify';
export { default as presetIcons } from '@unocss/preset-icons';
export { Theme as PresetMiniTheme, default as presetMini } from '@unocss/preset-mini';
export { default as presetTagify } from '@unocss/preset-tagify';
export { default as presetTypography } from '@unocss/preset-typography';
export { default as presetWebFonts } from '@unocss/preset-web-fonts';
export { Theme as PresetWindTheme, default as presetWind } from '@unocss/preset-wind';
export { default as transformerAttributifyJsx } from '@unocss/transformer-attributify-jsx';
export { default as transformerCompileClass } from '@unocss/transformer-compile-class';
export { default as transformerDirectives } from '@unocss/transformer-directives';
export { default as transformerVariantGroup } from '@unocss/transformer-variant-group';

/**
 * Define UnoCSS config
 */
declare function defineConfig<T extends object = Theme>(config: UserConfig<T>): UserConfig<T>;

export { defineConfig };
