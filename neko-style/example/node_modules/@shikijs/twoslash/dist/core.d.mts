import { CodeToHastOptions, ShikiTransformerContext, ShikiTransformerContextCommon, ShikiTransformer } from '@shikijs/types';
import { TwoslashReturn, TwoslashExecuteOptions, TwoslashGenericFunction, TwoslashOptions, NodeError, NodeTag, NodeQuery, NodeCompletion, NodeHover, NodeHighlight } from 'twoslash';
import { ElementContent, Element, Text } from 'hast';

type TwoslashShikiReturn = Pick<TwoslashReturn, 'nodes' | 'code'> & {
    meta?: Partial<Pick<TwoslashReturn['meta'], 'extension'>>;
};
type TwoslashShikiFunction = (code: string, lang?: string, options?: TwoslashExecuteOptions) => TwoslashShikiReturn;
declare module '@shikijs/core' {
    interface ShikiTransformerContextMeta {
        twoslash?: TwoslashShikiReturn;
    }
}
interface TransformerTwoslashOptions {
    /**
     * Languages to apply this transformer to
     */
    langs?: string[];
    /**
     * Requires `twoslash` to be presented in the code block meta to apply this transformer
     *
     * @default false
     */
    explicitTrigger?: boolean | RegExp;
    /**
     * Triggers that skip Twoslash transformation on the code block meta
     *
     * @default ['notwoslash', 'no-twoslash']
     */
    disableTriggers?: (string | RegExp)[];
    /**
     * Mapping from language alias to language name
     */
    langAlias?: Record<string, string>;
    /**
     * Custom filter function to apply this transformer to
     * When specified, `langs`, `explicitTrigger`, and `disableTriggers` will be ignored
     */
    filter?: (lang: string, code: string, options: CodeToHastOptions) => boolean;
    /**
     * Custom instance of twoslasher function
     */
    twoslasher?: TwoslashShikiFunction | TwoslashGenericFunction;
    /**
     * Options to pass to twoslash
     */
    twoslashOptions?: TwoslashOptions;
    /**
     * Custom renderers to decide how each info should be rendered
     */
    renderer?: TwoslashRenderer;
    /**
     * A map to store code for `@include` directive
     * Provide your own instance if you want to clear the map between each transformation
     */
    includesMap?: Map<string, string>;
    /**
     * Strictly throw when there is an error
     * @default true
     */
    throws?: boolean;
    /**
     * Custom error handler for twoslash errors
     * When specified, `throws` will be ignored
     * Optionally return a string to replace the code
     */
    onTwoslashError?: (error: unknown, code: string, lang: string, options: CodeToHastOptions) => string | void;
    /**
     * Custom error handler for Shiki errors
     * When specified, `throws` will be ignored
     */
    onShikiError?: (error: unknown, code: string, lang: string) => void;
}
interface TwoslashRenderer {
    lineError?: (this: ShikiTransformerContext, error: NodeError) => ElementContent[];
    lineCustomTag?: (this: ShikiTransformerContext, tag: NodeTag) => ElementContent[];
    lineQuery?: (this: ShikiTransformerContext, query: NodeQuery, targetNode?: Element | Text) => ElementContent[];
    lineCompletion?: (this: ShikiTransformerContext, query: NodeCompletion) => ElementContent[];
    nodeStaticInfo: (this: ShikiTransformerContext, info: NodeHover, node: Element | Text) => Partial<ElementContent>;
    nodeError?: (this: ShikiTransformerContext, error: NodeError, node: Element | Text) => Partial<ElementContent>;
    nodeQuery?: (this: ShikiTransformerContext, query: NodeQuery, node: Element | Text) => Partial<ElementContent>;
    nodeCompletion?: (this: ShikiTransformerContext, query: NodeCompletion, node: Element | Text) => Partial<ElementContent>;
    nodesError?: (this: ShikiTransformerContext, error: NodeError, nodes: ElementContent[]) => ElementContent[];
    nodesHighlight?: (this: ShikiTransformerContext, highlight: NodeHighlight, nodes: ElementContent[]) => ElementContent[];
}

declare class ShikiTwoslashError extends Error {
    constructor(message: string);
}

type CompletionItem = NonNullable<NodeCompletion['completions']>[number];
declare const defaultCompletionIcons: Record<string, Element | undefined>;
declare const defaultCustomTagIcons: Record<string, Element | undefined>;

/**
 * The default renderer aligning with the original `@shikijs/twoslash` output.
 */
declare function rendererClassic(): TwoslashRenderer;

interface RendererRichOptions {
    /**
     * Render JSDoc comments in hover popup.
     *
     * @default true
     */
    jsdoc?: boolean;
    /**
     * Custom icons for completion items.
     * A map from completion item kind to a HAST node.
     *
     * If `false`, no icons will be rendered.
     * @default defaultCompletionIcons
     */
    completionIcons?: Partial<Record<string, ElementContent>> | false;
    /**
     * Custom icons for custom tags lines.
     * A map from tag name to a HAST node.
     *
     * If `false`, no icons will be rendered.
     * @default defaultCustomTagIcons
     */
    customTagIcons?: Partial<Record<string, ElementContent>> | false;
    /**
     * Custom formatter for the type info text.
     * Note that it might not be valid TypeScript syntax.
     *
     * @default defaultHoverInfoProcessor
     */
    processHoverInfo?: (info: string) => string;
    /**
     * Custom formatter for the docs text (can be markdown).
     *
     * @default undefined
     */
    processHoverDocs?: (docs: string) => string;
    /**
     * The way errors should be rendered.
     *
     * - `'line'`: Render the error line after the line of code
     * - `'hover'`: Render the error in the hover popup
     *
     * @default 'line'
     */
    errorRendering?: 'line' | 'hover';
    /**
     * Classes added to injected elements
     */
    classExtra?: string;
    /**
     * Language for syntax highlight.
     * @default the language of the code block
     */
    lang?: string;
    /**
     * Custom function to render markdown.
     *
     * By default it pass-through the markdown.
     */
    renderMarkdown?: (this: ShikiTransformerContextCommon, markdown: string) => ElementContent[];
    /**
     * Custom function to render inline markdown.
     *
     * By default it pass-through the markdown.
     */
    renderMarkdownInline?: (this: ShikiTransformerContextCommon, markdown: string, context: string) => ElementContent[];
    /**
     * The way query should be rendered.
     * - `'popup'`: Render the query in the absolute popup
     * - `'line'`: Render the query line after the line of code
     * @default 'popup'
     */
    queryRendering?: 'popup' | 'line';
    /**
     * Extensions for the genreated HAST tree.
     */
    hast?: {
        /**
         * The <code> block for in the hover popup.
         */
        popupTypes?: HastExtension;
        /**
         * The documentation block in the hover popup. Can be markdown rendered if `renderMarkdown` is provided.
         */
        popupDocs?: HastExtension;
        /**
         * The container of jsdoc tags in the hover popup.
         */
        popupDocsTags?: HastExtension;
        /**
         * The token for the hover informaton.
         */
        hoverToken?: HastExtension;
        /**
         * The container of the hover popup.
         */
        hoverPopup?: HastExtension;
        /**
         * The container of error popup.
         */
        popupError?: HastExtension;
        /**
         * Custom function to compose the hover token.
         */
        hoverCompose?: (parts: {
            popup: Element;
            token: Text | Element;
        }) => ElementContent[];
        /**
         * The token for the query informaton.
         */
        queryToken?: HastExtension;
        /**
         * The container of the query popup.
         */
        queryPopup?: HastExtension;
        /**
         * Custom function to compose the hover token.
         */
        queryCompose?: (parts: {
            popup: Element;
            token: Text | Element;
        }) => ElementContent[];
        /**
         * The token for the completion informaton.
         */
        completionToken?: HastExtension;
        /**
         * The cursor element in the completion popup.
         */
        completionCursor?: HastExtension;
        /**
         * The container of the completion popup.
         */
        completionPopup?: HastExtension;
        /**
         * Custom function to compose the completion token.
         */
        completionCompose?: (parts: {
            popup: Element;
            cursor: Element;
        }) => ElementContent[];
        /**
         * The token for the error informaton.
         */
        errorToken?: HastExtension;
        /**
         * The container of the error popup.
         * Only used when `errorRendering` is set to `'hover'`.
         */
        errorPopup?: HastExtension;
        /**
         * Custom function to compose the error token.
         * Only used when `errorRendering` is set to `'hover'`.
         */
        errorCompose?: (parts: {
            popup: Element;
            token: Text | Element;
        }) => ElementContent[];
        /**
         * The wrapper for the highlighted nodes.
         */
        nodesHighlight?: HastExtension;
    };
}
interface HastExtension {
    tagName?: string;
    properties?: Element['properties'];
    class?: string;
    children?: (input: ElementContent[]) => ElementContent[];
}
/**
 * An alternative renderer that providers better prefixed class names,
 * with syntax highlight for the info text.
 */
declare function rendererRich(options?: RendererRichOptions): TwoslashRenderer;
/**
 * The default hover info processor, which will do some basic cleanup
 */
declare function defaultHoverInfoProcessor(type: string): string;

/**
 * This file is the core of the @shikijs/twoslash package,
 * Decoupled from twoslash's implementation and allowing to introduce custom implementation or cache system.
 */

declare function defaultTwoslashOptions(): TwoslashExecuteOptions;
declare function createTransformerFactory(defaultTwoslasher: TwoslashShikiFunction | TwoslashGenericFunction, defaultRenderer?: TwoslashRenderer): (options?: TransformerTwoslashOptions) => ShikiTransformer;

export { type CompletionItem, type HastExtension, type RendererRichOptions, ShikiTwoslashError, type TransformerTwoslashOptions, type TwoslashRenderer, type TwoslashShikiFunction, type TwoslashShikiReturn, createTransformerFactory, defaultCompletionIcons, defaultCustomTagIcons, defaultHoverInfoProcessor, defaultTwoslashOptions, rendererClassic, rendererRich };
