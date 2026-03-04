"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexOfImmediateParent = void 0;
/**
 * @description It returns the index of the parent of the provided outline node.
 * It returns `-1` when the provided outline node has zero depth.
 */
function getIndexOfImmediateParent(outline, i) {
    const contextDepth = outline[i].depth;
    for (let ii = i; ii > -1; ii--) {
        if (contextDepth - 1 === outline[ii].depth)
            return ii;
    }
    return -1;
}
exports.getIndexOfImmediateParent = getIndexOfImmediateParent;
