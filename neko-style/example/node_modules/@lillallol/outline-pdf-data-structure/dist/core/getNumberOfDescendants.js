"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOfDescendants = void 0;
/**
 * @description It returns the number of descendant outline nodes of the provided outline node.
 */
function getNumberOfDescendants(outline, i) {
    let count = 0;
    const contextDepth = outline[i].depth;
    for (let ii = i + 1; ii < outline.length; ii++) {
        if (contextDepth < outline[ii].depth) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}
exports.getNumberOfDescendants = getNumberOfDescendants;
