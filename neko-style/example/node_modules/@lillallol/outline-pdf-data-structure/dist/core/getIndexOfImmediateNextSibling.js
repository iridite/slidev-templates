"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexOfImmediateNextSibling = void 0;
const errorMessages_1 = require("../errorMessages");
/**
 * @description It returns the index of the immediate next sibling for the specified outline node.
 * It throws if it does not exist.
 */
function getIndexOfImmediateNextSibling(outline, i) {
    const contextDepth = outline[i].depth;
    for (let ii = i + 1; ii < outline.length; ii++) {
        if (outline[ii].depth < contextDepth)
            break;
        if (outline[ii].depth === contextDepth)
            return ii;
    }
    throw Error(errorMessages_1.internalErrorMessages.internalLibraryError);
}
exports.getIndexOfImmediateNextSibling = getIndexOfImmediateNextSibling;
