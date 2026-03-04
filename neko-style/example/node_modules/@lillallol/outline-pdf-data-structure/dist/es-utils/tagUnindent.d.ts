/**
 * @description
 * Tag function that returns the template literal it is provided as a string, but
 * with its common maximum indentation removed.
 *
 * The placeholders that are provided as single string element arrays are multi-line indented.
 *
 * It throws if :
 *
 * - the first line is non empty
 * - the last line is not only spaces
 * - the string contains `\s` characters that are not space characters in its indentation
 *
 * @example
 * expect(
 *      tagUnindent`
 *          path : (${`"./some/where"`})
 *          index : ${0}
 *          message :
 *              ${["hello\nworld"]}
 *      `
 * ).toBe(
 *     `path : ("./some/where")\n` +
 *     `index : 0\n` +
 *     `message : \n` +
 *     `    hello\n` +
 *     `    world`
 * );
 */
export declare function tagUnindent(stringArray: TemplateStringsArray, ...placeholders: (number | string | [string])[]): string;
