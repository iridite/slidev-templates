"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexOfImmediatePreviousSibling = void 0;
const errorMessages_1 = require("../errorMessages");
/**
 * @description It returns the index of the immediate previous sibling for the provided outline node,
 * or throws if it does not find one.
 */
function getIndexOfImmediatePreviousSibling(outline, i) {
    const contextDepth = outline[i].depth;
    for (let ii = i - 1; ii > -1; ii--) {
        if (outline[ii].depth < contextDepth)
            break;
        if (outline[ii].depth === contextDepth)
            return ii;
    }
    throw Error(errorMessages_1.internalErrorMessages.internalLibraryError);
}
exports.getIndexOfImmediatePreviousSibling = getIndexOfImmediatePreviousSibling;
