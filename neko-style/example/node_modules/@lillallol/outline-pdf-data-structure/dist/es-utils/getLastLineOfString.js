"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastLineOfString = void 0;
/**
 * @description
 * Return the last line of the provided string.
 */
function getLastLineOfString(string) {
    const lines = string.split("\n");
    return lines[lines.length - 1];
}
exports.getLastLineOfString = getLastLineOfString;
