import { VirtualTypeScriptEnvironment } from '@typescript/vfs';
import * as typescript from 'typescript';
import { CompilerOptions, CustomTransformers } from 'typescript';
import { TwoslashGenericResult, NodeQuery, NodeCompletion, NodeError, NodeHighlight, NodeHover, NodeTag, Range, NodeWithoutPosition, createPositionConverter, NodeErrorWithoutPosition } from 'twoslash-protocol';

/**
 * Available inline flags which are not compiler flags
 */
interface HandbookOptions {
    /**
     * An array of TS error codes, which you write as space separated - this is so the tool can know about unexpected errors
     */
    errors: number[];
    /**
     * Suppress errors for diagnostics and display
     *
     * Setting true to suppress all errors, or an array of error codes to suppress
     */
    noErrors: boolean | number[];
    /**
     * Declare that you don't need to validate that errors have corresponding annotations, defaults to false
     */
    noErrorValidation: boolean;
    /**
     * Whether to disable the pre-cache of LSP calls for interesting identifiers, defaults to false
     */
    noStaticSemanticInfo: boolean;
    /**
     * Shows the JS equivalent of the TypeScript code instead
     */
    showEmit: boolean;
    /**
     * Must be used with showEmit, lets you choose the file to present instead of the source - defaults to index.js which
     * means when you just use `showEmit` above it shows the transpiled JS.
     */
    showEmittedFile?: string;
    /**
     * Do not remove twoslash notations from output code, the nodes will have the position of the input code.
     * @default false
     */
    keepNotations: boolean;
    /**
     * Do not check errors in the cutted code.
     * @default false
     */
    noErrorsCutted: boolean;
}

interface TwoslashReturn extends TwoslashGenericResult {
    /**
     * The meta information the twoslash run
     */
    meta: TwoslashReturnMeta;
    get queries(): NodeQuery[];
    get completions(): NodeCompletion[];
    get errors(): NodeError[];
    get highlights(): NodeHighlight[];
    get hovers(): NodeHover[];
    get tags(): NodeTag[];
}
interface TwoslashReturnMeta {
    /**
     * The new extension type for the code, potentially changed if they've requested emitted results
     */
    extension: string;
    /**
     * Ranges of text which should be removed from the output
     */
    removals: Range[];
    /**
     * Resolved compiler options
     */
    compilerOptions: CompilerOptions;
    /**
     * Resolved handbook options
     */
    handbookOptions: HandbookOptions;
    /**
     * Flags which were parsed from the code
     */
    flagNotations: ParsedFlagNotation[];
    /**
     * The virtual files which were created
     */
    virtualFiles: VirtualFile[];
    /**
     * Positions of queries in the code
     */
    positionQueries: number[];
    /**
     * Positions of completions in the code
     */
    positionCompletions: number[];
    /**
     * Positions of errors in the code
     */
    positionHighlights: [start: number, end: number, text?: string][];
}
interface ParsedFlagNotation {
    type: 'compilerOptions' | 'handbookOptions' | 'tag' | 'unknown';
    name: string;
    value: any;
    start: number;
    end: number;
}
interface VirtualFile {
    offset: number;
    filename: string;
    filepath: string;
    content: string;
    extension: string;
    supportLsp?: boolean;
    prepend?: string;
    append?: string;
}

type TS = typeof typescript;
interface CompilerOptionDeclaration {
    name: string;
    type: 'list' | 'boolean' | 'number' | 'string' | 'object' | Map<string, any>;
    element?: CompilerOptionDeclaration;
}
/**
 * Options for the `twoslasher` function
 */
interface TwoslashOptions extends CreateTwoslashOptions, TwoslashExecuteOptions {
}
/**
 * Options for twoslash instance
 */
interface TwoslashExecuteOptions extends Partial<Pick<TwoslashReturnMeta, 'positionQueries' | 'positionCompletions' | 'positionHighlights'>> {
    /**
     * Allows setting any of the handbook options from outside the function, useful if you don't want LSP identifiers
     */
    handbookOptions?: Partial<HandbookOptions>;
    /**
     * Allows setting any of the compiler options from outside the function
     */
    compilerOptions?: CompilerOptions;
    /**
     * A set of known `// @[tags]` tags to extract and not treat as a comment
     */
    customTags?: string[];
    /**
     * A custom hook to filter out hover info for certain identifiers
     */
    shouldGetHoverInfo?: (identifier: string, start: number, filename: string) => boolean;
    /**
     * A custom predicate to filter out nodes for further processing
     */
    filterNode?: (node: NodeWithoutPosition) => boolean;
    /**
     * Extra files to to added to the virtual file system, or prepended/appended to existing files
     */
    extraFiles?: ExtraFiles;
}
type ExtraFiles = Record<string, string | {
    prepend?: string;
    append?: string;
}>;
interface CreateTwoslashOptions extends TwoslashExecuteOptions {
    /**
     * Allows applying custom transformers to the emit result, only useful with the showEmit output
     */
    customTransformers?: CustomTransformers;
    /**
     * An optional copy of the TypeScript import, if missing it will be require'd.
     */
    tsModule?: TS;
    /**
     * Absolute path to the directory to look up built-in TypeScript .d.ts files.
     */
    tsLibDirectory?: string;
    /**
     * An optional Map object which is passed into @typescript/vfs - if you are using twoslash on the
     * web then you'll need this to set up your lib *.d.ts files. If missing, it will use your fs.
     */
    fsMap?: Map<string, string>;
    /**
     * The cwd for the folder which the virtual fs should be overlaid on top of when using local fs, opts to process.cwd() if not present
     */
    vfsRoot?: string;
    /**
     * Cache the ts envs based on compiler options, defaults to true
     */
    cache?: boolean | Map<string, VirtualTypeScriptEnvironment>;
    /**
     * Cache file system requests
     *
     * @default true
     */
    fsCache?: boolean;
}

type TwoslashFunction = (code: string, extension?: string, options?: TwoslashExecuteOptions) => TwoslashReturn;
interface TwoslashInstance {
    /**
     * Run Twoslash on a string of code, with a particular extension
     */
    (code: string, extension?: string, options?: TwoslashExecuteOptions): TwoslashReturn;
    /**
     * Get the internal cache map
     */
    getCacheMap: () => Map<string, VirtualTypeScriptEnvironment> | undefined;
}

declare const defaultCompilerOptions: CompilerOptions;
declare const defaultHandbookOptions: HandbookOptions;

declare class TwoslashError extends Error {
    title: string;
    description: string;
    recommendation: string;
    code: string | undefined;
    constructor(title: string, description: string, recommendation: string, code?: string | undefined);
}

declare function getObjectHash(obj: any): string;
declare function findFlagNotations(code: string, customTags: string[], tsOptionDeclarations: CompilerOptionDeclaration[]): ParsedFlagNotation[];
declare function findCutNotations(code: string, meta: Pick<TwoslashReturnMeta, 'removals'>): Range[];
declare function findQueryMarkers(code: string, meta: Pick<TwoslashReturnMeta, 'positionQueries' | 'positionCompletions' | 'positionHighlights' | 'removals'>, pc: ReturnType<typeof createPositionConverter>): Pick<TwoslashReturnMeta, "positionQueries" | "positionCompletions" | "positionHighlights" | "removals">;

/** To ensure that errors are matched up right */
declare function validateCodeForErrors(relevantErrors: NodeErrorWithoutPosition[], handbookOptions: {
    errors: number[];
}, vfsRoot: string): void;

export { type CompilerOptionDeclaration as C, type ExtraFiles as E, type HandbookOptions as H, type ParsedFlagNotation as P, type TwoslashExecuteOptions as T, type VirtualFile as V, type TwoslashReturn as a, type TwoslashOptions as b, type TwoslashInstance as c, findFlagNotations as d, findQueryMarkers as e, findCutNotations as f, getObjectHash as g, defaultCompilerOptions as h, defaultHandbookOptions as i, TwoslashError as j, type TwoslashFunction as k, type TS as l, type CreateTwoslashOptions as m, type TwoslashReturnMeta as n, validateCodeForErrors as v };
