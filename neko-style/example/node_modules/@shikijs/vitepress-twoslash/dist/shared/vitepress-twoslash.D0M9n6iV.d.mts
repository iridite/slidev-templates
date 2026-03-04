import { TransformerTwoslashOptions } from '@shikijs/twoslash/core';
import { TwoslashReturn } from 'twoslash';
import { VueSpecificOptions } from 'twoslash-vue';
import { RendererRichOptions, TwoslashRenderer } from '@shikijs/twoslash';

interface TwoslashFloatingVueOptions {
    classCopyIgnore?: string;
    classFloatingPanel?: string;
    classCode?: string;
    classMarkdown?: string;
    floatingVueTheme?: string;
    floatingVueThemeQuery?: string;
    floatingVueThemeCompletion?: string;
}
interface TwoslashFloatingVueRendererOptions extends RendererRichOptions {
    /**
     * Class and themes for floating-vue specific nodes
     */
    floatingVue?: TwoslashFloatingVueOptions;
}
declare function rendererFloatingVue(options?: TwoslashFloatingVueRendererOptions): TwoslashRenderer;

interface TransformerTwoslashVueOptions extends TransformerTwoslashOptions {
    twoslashOptions?: TransformerTwoslashOptions['twoslashOptions'] & VueSpecificOptions;
}
interface VitePressPluginTwoslashOptions extends TransformerTwoslashVueOptions, TwoslashFloatingVueRendererOptions {
    /**
     * Requires adding `twoslash` to the code block explicitly to run twoslash
     * @default true
     */
    explicitTrigger?: TransformerTwoslashOptions['explicitTrigger'];
    /**
     * The options for caching resolved types
     *
     * @example
     * ```ts
     * import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
     * import { createFileSystemTypesCache } from '@shikijs/vitepress-twoslash/cache-fs'
     *
     * transformerTwoslash({
     *   typesCache: createFileSystemTypesCache({
     *     dir: './my-cache-dir'
     *   })
     * })
     * ```
     */
    typesCache?: TwoslashTypesCache;
}
interface TwoslashTypesCache {
    /**
     * Read cached result
     *
     * @param code Source code
     */
    read: (code: string) => TwoslashReturn | null;
    /**
     * Save result to cache
     *
     * @param code Source code
     * @param data Twoslash data
     */
    write: (code: string, data: TwoslashReturn) => void;
    /**
     * On initialization
     */
    init?: () => void;
}

export { type TwoslashFloatingVueOptions as T, type VitePressPluginTwoslashOptions as V, type TwoslashFloatingVueRendererOptions as a, type TwoslashTypesCache as b, rendererFloatingVue as r };
