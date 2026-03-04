"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasImmediatePreviousSibling = void 0;
const getIndexOfImmediatePreviousSibling_1 = require("./getIndexOfImmediatePreviousSibling");
/**
 * @description It returns a predicate on whether the provided outline node has an immediate previous sibling.
 */
function hasImmediatePreviousSibling(outline, i) {
    try {
        getIndexOfImmediatePreviousSibling_1.getIndexOfImmediatePreviousSibling(outline, i);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.hasImmediatePreviousSibling = hasImmediatePreviousSibling;
