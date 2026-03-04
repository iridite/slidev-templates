/**
 * @description
 * It returns the common maximum indentation length among the lines of the
 * provided string. Lines that are only spaces are not taken into account.
 *
 * It throws error if a `\s` character that is not ` ` (space) is encountered
 * in the indentation.
 * @example
 * commonMinIndentLength(
 * `   hello
 *      world!
 * `);
 * //returns
 * 3;
 */
export declare function commonMaxIndentLength(s: string): number;
export declare const _errorMessages: {
    badIndentSpaceCharacter: string;
};
