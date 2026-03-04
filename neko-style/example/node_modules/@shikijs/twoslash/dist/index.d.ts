import { ShikiTransformer } from '@shikijs/types';
import { CreateTwoslashOptions } from 'twoslash';
import { TransformerTwoslashOptions, RendererRichOptions } from './core.js';
export { CompletionItem, HastExtension, ShikiTwoslashError, TwoslashRenderer, TwoslashShikiFunction, TwoslashShikiReturn, createTransformerFactory, defaultCompletionIcons, defaultCustomTagIcons, defaultHoverInfoProcessor, defaultTwoslashOptions, rendererClassic, rendererRich } from './core.js';
import 'hast';

interface TransformerTwoslashIndexOptions extends TransformerTwoslashOptions, Pick<CreateTwoslashOptions, 'cache'> {
    /**
     * Options for the default rich renderer.
     *
     * Available when no custom renderer is provided.
     */
    rendererRich?: RendererRichOptions;
}
/**
 * Factory function to create a Shiki transformer for twoslash integrations.
 */
declare function transformerTwoslash(options?: TransformerTwoslashIndexOptions): ShikiTransformer;

export { RendererRichOptions, type TransformerTwoslashIndexOptions, TransformerTwoslashOptions, transformerTwoslash };
