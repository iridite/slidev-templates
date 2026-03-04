/**
 * A fallback function to strip out twoslash annotations from a string and does nothing else.
 *
 * This function does not returns the meta information about the removals.
 * It's designed to be used as a fallback when Twoslash fails.
 */
declare function removeTwoslashNotations(code: string, customTags?: string[]): string;

export { removeTwoslashNotations };
