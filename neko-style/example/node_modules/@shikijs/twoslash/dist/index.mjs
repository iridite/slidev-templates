import { createTwoslasher } from 'twoslash';
import { createTransformerFactory, rendererRich } from './core.mjs';
export { ShikiTwoslashError, defaultCompletionIcons, defaultCustomTagIcons, defaultHoverInfoProcessor, defaultTwoslashOptions, rendererClassic } from './core.mjs';
import '@shikijs/core';

function transformerTwoslash(options = {}) {
  return createTransformerFactory(
    createTwoslasher({ cache: options?.cache }),
    rendererRich(options.rendererRich)
  )(options);
}

export { createTransformerFactory, rendererRich, transformerTwoslash };
