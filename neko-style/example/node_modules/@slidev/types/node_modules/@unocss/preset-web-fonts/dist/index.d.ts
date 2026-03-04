import * as _unocss_core from '@unocss/core';
import { W as WebFontMeta, a as WebFontsProviders, R as ResolvedWebFontMeta, P as Provider, b as WebFontsOptions } from './shared/preset-web-fonts.DSrOMtoz.js';
export { c as WebFontProcessor } from './shared/preset-web-fonts.DSrOMtoz.js';

declare function normalizedFontMeta(meta: WebFontMeta | string, defaultProvider: WebFontsProviders): ResolvedWebFontMeta;

declare function createGoogleCompatibleProvider(name: WebFontsProviders, host: string): Provider;

/**
 * Preset for using web fonts by provide just the names.
 *
 * @see https://unocss.dev/presets/web-fonts
 */
declare const presetWebFonts: _unocss_core.PresetFactory<any, WebFontsOptions>;

export { Provider, ResolvedWebFontMeta, WebFontMeta, WebFontsOptions, WebFontsProviders, createGoogleCompatibleProvider as createGoogleProvider, presetWebFonts as default, normalizedFontMeta, presetWebFonts };
