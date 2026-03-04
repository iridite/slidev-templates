import { c as WebFontProcessor } from './shared/preset-web-fonts.DSrOMtoz.js';
import '@unocss/core';

interface LocalFontProcessorOptions {
    /**
     * Current working directory
     *
     * @default process.cwd()
     */
    cwd?: string;
    /**
     * Directory to cache the fonts
     *
     * @default 'node_modules/.cache/unocss/fonts'
     */
    cacheDir?: string;
    /**
     * Directory to save the fonts assets
     *
     * @default 'public/assets/fonts'
     */
    fontAssetsDir?: string;
    /**
     * Base URL to serve the fonts from the client
     *
     * @default '/assets/fonts'
     */
    fontServeBaseUrl?: string;
}
declare function createLocalFontProcessor(options?: LocalFontProcessorOptions): WebFontProcessor;

export { type LocalFontProcessorOptions, createLocalFontProcessor };
