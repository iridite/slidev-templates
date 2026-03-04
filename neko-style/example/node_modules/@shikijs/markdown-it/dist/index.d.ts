import MarkdownIt from 'markdown-it';
import { LanguageInput, BuiltinLanguage } from 'shiki';
import { MarkdownItShikiSetupOptions } from './core.js';
export { MarkdownItShikiExtraOptions, fromHighlighter, setupMarkdownIt } from './core.js';

type MarkdownItShikiOptions = MarkdownItShikiSetupOptions & {
    /**
     * Language names to include.
     *
     * @default Object.keys(bundledLanguages)
     */
    langs?: Array<LanguageInput | BuiltinLanguage>;
};
declare function markdownItShiki(options: MarkdownItShikiOptions): Promise<(markdownit: MarkdownIt) => void>;

export { type MarkdownItShikiOptions, MarkdownItShikiSetupOptions, markdownItShiki as default };
