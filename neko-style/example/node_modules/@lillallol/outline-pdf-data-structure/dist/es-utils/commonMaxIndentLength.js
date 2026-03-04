"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._errorMessages = exports.commonMaxIndentLength = void 0;
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
function commonMaxIndentLength(s) {
    let minIndentLength = Infinity;
    s.split("\n").forEach((line) => {
        if (/^[ ]+$/.test(line) || line.length === 0)
            return;
        let newMinIndentLength = 0;
        for (let i = 0; i < line.length; i++) {
            if (/\s/.test(line[i]) && line[i] !== " ")
                throw Error(exports._errorMessages.badIndentSpaceCharacter);
            if (line[i] !== " ")
                break;
            newMinIndentLength++;
        }
        if (newMinIndentLength < minIndentLength)
            minIndentLength = newMinIndentLength;
    });
    return minIndentLength;
}
exports.commonMaxIndentLength = commonMaxIndentLength;
exports._errorMessages = {
    badIndentSpaceCharacter: "Only space characters are allowed in the indented part of the string",
};
