import { createHighlighter, bundledLanguages } from 'shiki';
import { setupMarkdownIt } from './core.mjs';
export { fromHighlighter } from './core.mjs';

async function markdownItShiki(options) {
  const themeNames = ("themes" in options ? Object.values(options.themes) : [options.theme]).filter(Boolean);
  const highlighter = await createHighlighter({
    themes: themeNames,
    langs: options.langs || Object.keys(bundledLanguages)
  });
  return function(markdownit) {
    setupMarkdownIt(markdownit, highlighter, options);
  };
}

export { markdownItShiki as default, setupMarkdownIt };
