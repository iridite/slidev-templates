"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasChild = void 0;
/**
 * @description Returns a predicate on whether the provided outline node has a child.
*/
function hasChild(outline, i) {
    if (i === outline.length - 1)
        return false;
    return outline[i].depth + 1 === outline[i + 1].depth;
}
exports.hasChild = hasChild;
