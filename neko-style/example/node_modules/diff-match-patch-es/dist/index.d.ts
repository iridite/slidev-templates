interface DiffMatchPathOptions {
    /**
     * Number of seconds to map a diff before giving up (0 for infinity).
     * @default 1.0
     */
    diffTimeout?: number;
    /**
     * Cost of an empty edit operation in terms of edit characters.
     * @default 4
     */
    diffEditCost?: number;
    /**
     * At what point is no match declared (0.0 = perfection, 1.0 = very loose).
     * @default 0.5
     */
    matchThreshold?: number;
    /**
     * How far to search for a match (0 = exact location, 1000+ = broad match).
     * @default 1000
     */
    matchDistance?: number;
    /**
     * When deleting a large block of text (over ~64 characters), how close do
     * the contents have to be to match the expected contents.
     * (0.0 = perfection, 1.0 = very loose).
     * @default 0.5
     */
    patchDeleteThreshold?: number;
    /**
     * Chunk size for context length.
     * @default 4
     */
    patchMargin?: number;
    /**
     * The number of bits in an int.
     * @default 32
     */
    matchMaxBits?: number;
}
type ResolvedOptions = Required<DiffMatchPathOptions>;
/**
 * DIFF_DELETE: -1
 *
 * DIFF_INSERT: 1
 *
 * DIFF_EQUAL: 0
 */
type DiffOperation = -1 | 0 | 1;
/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
type Diff = [DiffOperation, string];
interface Patch {
    diffs: Diff[];
    start1: number;
    start2: number;
    length1: number;
    length2: number;
}

declare const DIFF_DELETE = -1;
declare const DIFF_INSERT = 1;
declare const DIFF_EQUAL = 0;
/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param text1 Old string to be diffed.
 * @param text2 New string to be diffed.
 * @param options Diff options
 * @param opt_checklines Optional speedup flag. If present and false,
 *     then don't run a line-level diff first to identify the changed areas.
 *     Defaults to true, which does a faster, slightly less optimal diff.
 * @param opt_deadline Optional time when the diff should be complete
 *     by.  Used internally for recursive calls.  Users should set DiffTimeout
 *     instead.
 * @return {Diff[]} Array of diff tuples.
 */
declare function diffMain(text1: string, text2: string, options?: DiffMatchPathOptions | ResolvedOptions, opt_checklines?: boolean, opt_deadline?: number): Diff[];
/**
 * Split two texts into an array of strings.  Reduce the texts to a string of
 * hashes where each Unicode character represents one line.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
 *     An object containing the encoded text1, the encoded text2 and
 *     the array of unique strings.
 *     The zeroth element of the array of unique strings is intentionally blank.
 * @private
 */
declare function diffLinesToChars(text1: string, text2: string): {
    chars1: string;
    chars2: string;
    lineArray: string[];
};
/**
 * Rehydrate the text in a diff from a string of line hashes to real lines of
 * text.
 * @param {Diff[]} diffs Array of diff tuples.
 * @param {!Array.<string>} lineArray Array of unique strings.
 * @private
 */
declare function diffCharsToLines(diffs: Diff[], lineArray: string[]): void;
/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
declare function diffCommonPrefix(text1: string, text2: string): number;
/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
declare function diffCommonSuffix(text1: string, text2: string): number;
/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {Diff[]} diffs Array of diff tuples.
 */
declare function diffCleanupSemantic(diffs: Diff[]): void;
/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {Diff[]} diffs Array of diff tuples.
 */
declare function diffCleanupSemanticLossless(diffs: Diff[]): void;
/**
 * Reduce the number of edits by eliminating operationally trivial equalities.
 * @param {Diff[]} diffs Array of diff tuples.
 */
declare function diffCleanupEfficiency(diffs: Diff[], options?: DiffMatchPathOptions): void;
/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Diff[]} diffs Array of diff tuples.
 */
declare function diffCleanupMerge(diffs: Diff[]): void;
/**
 * loc is a location in text1, compute and return the equivalent location in
 * text2.
 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
 * @param {Diff[]} diffs Array of diff tuples.
 * @param {number} loc Location within text1.
 * @return {number} Location within text2.
 */
declare function diffXIndex(diffs: Diff[], loc: number): number;
/**
 * Convert a diff array into a pretty HTML report.
 * @param {Diff[]} diffs Array of diff tuples.
 * @return {string} HTML representation.
 */
declare function diffPrettyHtml(diffs: Diff[]): string;
/**
 * Compute and return the source text (all equalities and deletions).
 * @param {Diff[]} diffs Array of diff tuples.
 * @return {string} Source text.
 */
declare function diffText1(diffs: Diff[]): string;
/**
 * Compute and return the destination text (all equalities and insertions).
 * @param {Diff[]} diffs Array of diff tuples.
 * @return {string} Destination text.
 */
declare function diffText2(diffs: Diff[]): string;
/**
 * Compute the Levenshtein distance; the number of inserted, deleted or
 * substituted characters.
 * @param {Diff[]} diffs Array of diff tuples.
 * @return {number} Number of changes.
 */
declare function diffLevenshtein(diffs: Diff[]): number;
/**
 * Crush the diff into an encoded string which describes the operations
 * required to transform text1 into text2.
 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
 * @param {Diff[]} diffs Array of diff tuples.
 * @return {string} Delta text.
 */
declare function diffToDelta(diffs: Diff[]): string;
/**
 * Given the original text1, and an encoded string which describes the
 * operations required to transform text1 into text2, compute the full diff.
 * @param {string} text1 Source string for the diff.
 * @param {string} delta Delta text.
 * @return {Diff[]} Array of diff tuples.
 * @throws {!Error} If invalid input.
 */
declare function diffFromDelta(text1: string, delta: string): Diff[];

/**
 * Locate the best instance of 'pattern' in 'text' near 'loc'.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 */
declare function matchMain(text: string, pattern: string, loc: number, options?: DiffMatchPathOptions): number;
/**
 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
 * Bitap algorithm.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @param [options] The options
 * @return {number} Best match index or -1.
 * @private
 */
declare function matchBitap(text: string, pattern: string, loc: number, options?: DiffMatchPathOptions): number;
/**
 * Initialise the alphabet for the Bitap algorithm.
 * @param {string} pattern The text to encode.
 * @return {!object} Hash of character locations.
 * @private
 */
declare function matchAlphabet(pattern: string): Record<string, number>;

declare const defaultOptions: ResolvedOptions;
declare function resolveOptions(options?: DiffMatchPathOptions): ResolvedOptions;

/**
 * Compute a list of patches to turn text1 into text2.
 * Use diffs if provided, otherwise compute it ourselves.
 * There are four ways to call this function, depending on what data is
 * available to the caller:
 * Method 1:
 * a = text1, b = text2
 * Method 2:
 * a = diffs
 * Method 3 (optimal):
 * a = text1, b = diffs
 * Method 4 (deprecated, use method 3):
 * a = text1, b = text2, c = diffs
 *
 * @param {string|Diff[]} a text1 (methods 1,3,4) or
 * Array of diff tuples for text1 to text2 (method 2).
 * @param {string|Diff[]=} opt_b text2 (methods 1,4) or
 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
 * @param {string|Diff[]=} opt_c Array of diff tuples
 * for text1 to text2 (method 4) or undefined (methods 1,2,3).
 * @return {Patch[]} Array of Patch objects.
 */
declare function patchMake(a: string | Diff[], opt_b?: string | Diff[], opt_c?: string | Diff[], options?: DiffMatchPathOptions): Patch[];
/**
 * Given an array of patches, return another array that is identical.
 * @param {Patch[]} patches Array of Patch objects.
 * @return {Patch[]} Array of Patch objects.
 */
declare function patchDeepCopy(patches: Patch[]): Patch[];
/**
 * Merge a set of patches onto the text.  Return a patched text, as well
 * as a list of true/false values indicating which patches were applied.
 * @param {Patch[]} patches Array of Patch objects.
 * @param {string} text Old text.
 * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
 *      new text and an array of boolean values.
 */
declare function patchApply(patches: Patch[], text: string, options?: DiffMatchPathOptions): (string | boolean[])[];
/**
 * Add some padding on text start and end so that edges can match something.
 * Intended to be called only from within patch_apply.
 * @param {Patch[]} patches Array of Patch objects.
 * @return {string} The padding string added to each side.
 */
declare function patchAddPadding(patches: Patch[], options?: DiffMatchPathOptions): string;
/**
 * Look through the patches and break up any which are longer than the maximum
 * limit of the match algorithm.
 * Intended to be called only from within patch_apply.
 * @param {Patch[]} patches Array of Patch objects.
 */
declare function patchSplitMax(patches: Patch[], options?: DiffMatchPathOptions): void;
/**
 * Take a list of patches and return a textual representation.
 * @param {Patch[]} patches Array of Patch objects.
 * @return {string} Text representation of patches.
 */
declare function patchToText(patches: Patch[]): string;
/**
 * Parse a textual representation of patches and return a list of Patch objects.
 * @param {string} textline Text representation of patches.
 * @return {Patch[]} Array of Patch objects.
 * @throws {!Error} If invalid input.
 */
declare function patchFromText(textline: string): Patch[];

export { DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT, type Diff, type DiffMatchPathOptions, type DiffOperation, type Patch, type ResolvedOptions, defaultOptions, diffMain as diff, diffCharsToLines, diffCleanupEfficiency, diffCleanupMerge, diffCleanupSemantic, diffCleanupSemanticLossless, diffCommonPrefix, diffCommonSuffix, diffFromDelta, diffLevenshtein, diffLinesToChars, diffMain, diffPrettyHtml, diffText1, diffText2, diffToDelta, diffXIndex, matchMain as match, matchAlphabet, matchBitap, matchMain, patchMake as patch, patchAddPadding, patchApply, patchDeepCopy, patchFromText, patchMake, patchSplitMax, patchToText, resolveOptions };
