import { m as CreateTwoslashOptions, c as TwoslashInstance, b as TwoslashOptions, a as TwoslashReturn } from './shared/twoslash.662cb7fb.js';
export { C as CompilerOptionDeclaration, E as ExtraFiles, H as HandbookOptions, P as ParsedFlagNotation, l as TS, j as TwoslashError, T as TwoslashExecuteOptions, k as TwoslashFunction, n as TwoslashReturnMeta, V as VirtualFile, h as defaultCompilerOptions, i as defaultHandbookOptions, f as findCutNotations, d as findFlagNotations, e as findQueryMarkers, g as getObjectHash, v as validateCodeForErrors } from './shared/twoslash.662cb7fb.js';
export * from 'twoslash-protocol/types';
export { removeTwoslashNotations } from './fallback.js';
import '@typescript/vfs';
import 'typescript';
import 'twoslash-protocol';

/**
 * Create a Twoslash instance with cached TS environments
 */
declare function createTwoslasher(createOptions?: CreateTwoslashOptions): TwoslashInstance;
/**
 * Run Twoslash on a string of code
 *
 * It's recommended to use `createTwoslash` for better performance on multiple runs
 */
declare function twoslasher(code: string, lang?: string, opts?: Partial<TwoslashOptions>): TwoslashReturn;

export { CreateTwoslashOptions, TwoslashInstance, TwoslashOptions, TwoslashReturn, createTwoslasher, twoslasher };
