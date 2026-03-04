"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexOfLastImmediateChild = void 0;
const errorMessages_1 = require("../errorMessages");
/**
 * @description Returns the index of the last immediate child for the provided outline node.
 * It throws if there is no child.
 */
function getIndexOfLastImmediateChild(outline, i) {
    let candidateIndex;
    const parentDepth = outline[i].depth;
    for (let ii = i + 1; ii < outline.length; ii++) {
        if (outline[ii].depth <= parentDepth)
            break;
        if (outline[ii].depth === parentDepth + 1)
            candidateIndex = ii;
    }
    if (candidateIndex === undefined)
        throw Error(errorMessages_1.internalErrorMessages.internalLibraryError);
    return candidateIndex;
}
exports.getIndexOfLastImmediateChild = getIndexOfLastImmediateChild;
