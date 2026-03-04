"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasImmediateNextSibling = void 0;
const getIndexOfImmediateNextSibling_1 = require("./getIndexOfImmediateNextSibling");
/**
 * @description It returns a predicate on whether the provided outline node has an immediate next sibling.
 */
function hasImmediateNextSibling(outline, i) {
    try {
        getIndexOfImmediateNextSibling_1.getIndexOfImmediateNextSibling(outline, i);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.hasImmediateNextSibling = hasImmediateNextSibling;
