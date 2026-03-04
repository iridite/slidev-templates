import MarkdownIt from 'markdown-it';

interface MarkdownItMdcOptions {
    /**
     * Options for toggling each syntax feature.
     */
    syntax?: {
        /**
         * Enable block component syntax.
         *
         * @see https://content.nuxtjs.org/guide/writing/mdc#block-components
         * @default true
         */
        blockComponent?: boolean;
        /**
         * Enable inline props syntax.
         *
         * @see https://content.nuxtjs.org/guide/writing/mdc#inline-props
         * @default true
         */
        inlineProps?: boolean;
        /**
         * Enable inline span syntax.
         *
         * @see https://content.nuxtjs.org/guide/writing/mdc#inline-span
         * @default true
         */
        inlineSpan?: boolean;
        /**
         * Enable inline component syntax.
         *
         * @see https://content.nuxtjs.org/guide/writing/mdc#inline-component
         * @default true
         */
        inlineComponent?: boolean;
    };
}
declare const MarkdownItMdc: MarkdownIt.PluginWithOptions<MarkdownItMdcOptions>;

export { MarkdownItMdc as default };
export type { MarkdownItMdcOptions };
