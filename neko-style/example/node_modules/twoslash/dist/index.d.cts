import { T as TwoslashExecuteOptions, H as HandbookOptions, a as TwoslashReturn, b as TwoslashOptions, c as TwoslashInstance } from './shared/twoslash.662cb7fb.cjs';
export { C as CompilerOptionDeclaration, m as CreateTwoslashOptions, E as ExtraFiles, P as ParsedFlagNotation, l as TS, j as TwoslashError, k as TwoslashFunction, n as TwoslashReturnMeta, V as VirtualFile, h as defaultCompilerOptions, i as defaultHandbookOptions, f as findCutNotations, d as findFlagNotations, e as findQueryMarkers, g as getObjectHash, v as validateCodeForErrors } from './shared/twoslash.662cb7fb.cjs';
export * from 'twoslash-protocol/types';
export { removeTwoslashNotations } from './fallback.cjs';
import * as typescript from 'typescript';
import { CompilerOptions } from 'typescript';
import '@typescript/vfs';
import 'twoslash-protocol';

interface TwoslashOptionsLegacy extends TwoslashExecuteOptions {
    /**
     * @deprecated, use `handbookOptions` instead
     */
    defaultOptions?: Partial<HandbookOptions>;
    /**
     * @deprecated, use `compilerOptions` instead
     */
    defaultCompilerOptions?: CompilerOptions;
}
interface TwoslashReturnLegacy {
    /** The output code, could be TypeScript, but could also be a JS/JSON/d.ts */
    code: string;
    /** The new extension type for the code, potentially changed if they've requested emitted results */
    extension: string;
    /** Requests to highlight a particular part of the code */
    highlights: {
        kind: 'highlight';
        /** The index of the text in the file */
        start: number;
        /** What line is the highlighted identifier on? */
        line: number;
        /** At what index in the line does the caret represent  */
        offset: number;
        /** The text of the token which is highlighted */
        text?: string;
        /** The length of the token */
        length: number;
    }[];
    /** An array of LSP responses identifiers in the sample  */
    staticQuickInfos: {
        /** The string content of the node this represents (mainly for debugging) */
        targetString: string;
        /** The base LSP response (the type) */
        text: string;
        /** Attached JSDoc info */
        docs: string | undefined;
        /** The index of the text in the file */
        start: number;
        /** how long the identifier */
        length: number;
        /** line number where this is found */
        line: number;
        /** The character on the line */
        character: number;
    }[];
    /** Requests to use the LSP to get info for a particular symbol in the source */
    queries: {
        kind: 'query' | 'completions';
        /** What line is the highlighted identifier on? */
        line: number;
        /** At what index in the line does the caret represent  */
        offset: number;
        /** The text of the node which is highlighted */
        text?: string;
        /** Any attached JSDocs */
        docs?: string | undefined;
        /** The node start which the query indicates  */
        start: number;
        /** The length of the node */
        length: number;
        /** Results for completions at a particular point */
        completions?: typescript.CompletionEntry[];
        completionsPrefix?: string;
    }[];
    /** The extracted twoslash commands for any custom tags passed in via customTags */
    tags: {
        /** What was the name of the tag */
        name: string;
        /** Where was it located in the original source file */
        line: number;
        /** What was the text after the `// @tag: ` string  (optional because you could do // @tag on it's own line without the ':') */
        annotation?: string;
    }[];
    /** Diagnostic error messages which came up when creating the program */
    errors: {
        renderedMessage: string;
        id: string;
        category: 0 | 1 | 2 | 3;
        code: number;
        start: number | undefined;
        length: number | undefined;
        line: number | undefined;
        character: number | undefined;
    }[];
    /** The URL for this sample in the playground */
    playgroundURL: string;
}
declare function convertLegacyOptions<T extends TwoslashOptionsLegacy>(opts: T): Omit<T, 'defaultOptions' | 'defaultCompilerOptions'>;
/**
 * Covert the new return type to the old one
 */
declare function convertLegacyReturn(result: TwoslashReturn): TwoslashReturnLegacy;

/**
 * Create a Twoslash instance with cached TS environments
 */
declare function createTwoslasher(opts?: TwoslashOptions): TwoslashInstance;
/**
 * Get type results from a code sample
 */
declare function twoslasher(code: string, lang: string, opts?: TwoslashOptions): TwoslashReturn;
/**
 * Compatability wrapper to align with `@typescript/twoslash`'s input/output
 *
 * @deprecated migrate to `twoslasher` instead
 */
declare function twoslasherLegacy(code: string, lang: string, opts?: TwoslashOptionsLegacy): TwoslashReturnLegacy;

export { HandbookOptions, TwoslashExecuteOptions, TwoslashInstance, TwoslashOptions, type TwoslashOptionsLegacy, TwoslashReturn, type TwoslashReturnLegacy, convertLegacyOptions, convertLegacyReturn, createTwoslasher, twoslasher, twoslasherLegacy };
