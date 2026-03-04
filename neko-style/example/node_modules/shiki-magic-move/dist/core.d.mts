import { HighlighterGeneric, ThemedToken } from 'shiki/core';
import { KeyedTokensInfo, MagicMoveDifferOptions, MatchedRanges } from './types.mjs';
export { KeyedToken, MagicMoveRenderOptions, Range } from './types.mjs';
import 'diff-match-patch-es';

type ArgumentsType<F extends Function> = F extends (...args: infer A) => any ? A : never;
declare function createMagicMoveMachine(codeToKeyedTokens: (code: string, lineNumbers?: boolean) => KeyedTokensInfo, options?: MagicMoveDifferOptions): {
    readonly current: KeyedTokensInfo;
    readonly previous: KeyedTokensInfo;
    commit: (code: string, override?: MagicMoveDifferOptions) => {
        current: KeyedTokensInfo;
        previous: KeyedTokensInfo;
    };
    reset(): void;
};
declare function codeToKeyedTokens<BundledLangKeys extends string, BundledThemeKeys extends string>(highlighter: HighlighterGeneric<BundledLangKeys, BundledThemeKeys>, code: string, options: ArgumentsType<HighlighterGeneric<BundledLangKeys, BundledThemeKeys>['codeToTokens']>[1], lineNumbers?: boolean): KeyedTokensInfo;
declare function toKeyedTokens(code: string, tokens: ThemedToken[][], salt?: string, lineNumbers?: boolean): KeyedTokensInfo;
/**
 * Run diff on two sets of tokens,
 * and sync the keys from the first set to the second set if those tokens are matched
 */
declare function syncTokenKeys(from: KeyedTokensInfo, to: KeyedTokensInfo, options?: MagicMoveDifferOptions): {
    from: KeyedTokensInfo;
    to: KeyedTokensInfo;
};
/**
 * Find ranges of text matches between two strings
 * It uses `diff-match-patch` under the hood
 */
declare function findTextMatches(a: string, b: string, options?: MagicMoveDifferOptions): MatchedRanges[];

export { KeyedTokensInfo, MagicMoveDifferOptions, MatchedRanges, codeToKeyedTokens, createMagicMoveMachine, findTextMatches, syncTokenKeys, toKeyedTokens };
