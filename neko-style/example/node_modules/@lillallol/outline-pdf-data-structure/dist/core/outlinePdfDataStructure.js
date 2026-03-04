"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outlinePdfDataStructure = void 0;
const hasChild_1 = require("./hasChild");
const getIndexOfImmediateLastChild_1 = require("./getIndexOfImmediateLastChild");
const getIndexOfImmediateNextSibling_1 = require("./getIndexOfImmediateNextSibling");
const getIndexOfImmediatePreviousSibling_1 = require("./getIndexOfImmediatePreviousSibling");
const hasImmediatePreviousSibling_1 = require("./hasImmediatePreviousSibling");
const hasImmediateNextSibling_1 = require("./hasImmediateNextSibling");
const getIndexOfImmediateParentFactory_1 = require("./getIndexOfImmediateParentFactory");
const printedToOutline_1 = require("./printedToOutline");
const getNumberOfDescendants_1 = require("./getNumberOfDescendants");
/**
 * @description
 * It returns all the information needed to create a real pdf data structure.
 */
function outlinePdfDataStructure(inputOutline, totalNumberOfPages) {
    const outlineItems = [];
    const outline = printedToOutline_1.printedToOutline(inputOutline, totalNumberOfPages);
    outline.forEach((node, i) => {
        node.count = getNumberOfDescendants_1.getNumberOfDescendants(outline, i) * (node.collapse ? -1 : 1);
    });
    for (let i = 0; i < outline.length; i++) {
        outlineItems[i] = {
            Title: outline[i].title,
            Parent: getIndexOfImmediateParentFactory_1.getIndexOfImmediateParent(outline, i),
            ...(hasImmediatePreviousSibling_1.hasImmediatePreviousSibling(outline, i) && {
                Prev: getIndexOfImmediatePreviousSibling_1.getIndexOfImmediatePreviousSibling(outline, i),
            }),
            ...(hasImmediateNextSibling_1.hasImmediateNextSibling(outline, i) && {
                Next: getIndexOfImmediateNextSibling_1.getIndexOfImmediateNextSibling(outline, i),
            }),
            ...(hasChild_1.hasChild(outline, i) && {
                First: i + 1,
                Last: getIndexOfImmediateLastChild_1.getIndexOfLastImmediateChild(outline, i),
                Count: outline[i].count,
            }),
            Dest: outline[i].pageNumber - 1,
        };
    }
    return {
        outlineItems: outlineItems,
        outlineRootCount: outline.length,
    };
}
exports.outlinePdfDataStructure = outlinePdfDataStructure;
