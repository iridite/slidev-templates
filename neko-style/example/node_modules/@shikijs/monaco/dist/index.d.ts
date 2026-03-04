import { ThemeRegistrationResolved, ShikiInternal } from '@shikijs/types';
import monacoNs from 'monaco-editor-core';

interface MonacoTheme extends monacoNs.editor.IStandaloneThemeData {
}
interface ShikiToMonacoOptions {
    /**
     * The maximum length of a line to tokenize.
     *
     * @default 20000
     */
    tokenizeMaxLineLength?: number;
    /**
     * The time limit in milliseconds for tokenizing a line.
     *
     * @default 500
     */
    tokenizeTimeLimit?: number;
}
declare function textmateThemeToMonacoTheme(theme: ThemeRegistrationResolved): MonacoTheme;
declare function shikiToMonaco(highlighter: ShikiInternal<any, any>, monaco: typeof monacoNs, options?: ShikiToMonacoOptions): void;

export { type MonacoTheme, type ShikiToMonacoOptions, shikiToMonaco, textmateThemeToMonacoTheme };
