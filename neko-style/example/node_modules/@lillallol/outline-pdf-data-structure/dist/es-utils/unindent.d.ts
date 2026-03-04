/**
 * @description
 * It removes the first and last line of the provided string. From the remaining lines it
 * calculates the common maximum indentation, ignoring empty lines, and then it subtracts it from
 * each non empty line.
 *
 * The subtraction happens also for empty lines that have length bigger than the common minimum
 * indentation length. If they have length less than the common minimum indentation length they are
 * replaced with an empty string;
 *
 * - If `\s` characters are encountered in the indentation string that are not ` ` (space), it throws error.
 * - If the first line is not an empty string, it throws error.
 * - If the last line is not only space characters it throws error.
 * @example
 * unindent(
 * `
 *                  transaction tree string representation
 *
 *             |_ "p"
 *                |_ "a"
 *                   |_ "t"
 *                      |_ "h"
 *                      |  |_ "prop1" -1 => 1
 *                      |_ "t"
 *                         |_ "prop" "11" => "1"
 * `);
 * //returns
 * `     transaction tree string representation
 *
 * |_ "p"
 *    |_ "a"
 *       |_ "t"
 *          |_ "h"
 *          |  |_ "prop1" -1 => 1
 *          |_ "t"
 *             |_ "prop" "11" => "1"`;
 */
export declare function unindent(s: string): string;
export declare const _errorMessage: {
    badFirstLine: string;
    badLastLine: string;
};
