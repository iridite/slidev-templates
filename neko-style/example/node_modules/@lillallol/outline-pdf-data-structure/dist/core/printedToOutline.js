"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printedToOutline = void 0;
const constants_1 = require("../constants");
const errorMessages_1 = require("../errorMessages");
/**
 * @description Converts the outline string representation to its programmatic representation.
 * It throws if the outline string representation is not valid.
 * ```ts
 * //input
 * printedToOutline(`
 * 	 1||Document
 * 	 2|-|Section 1
 * 	-3|-|Section 2
 * 	 4|--|Subsection 1
 * 	 5|-|Section 3
 * 	 6||Summary
 * `,6)
 * //output
 * [
 * 	{ pageNumber: 1, depth: 0, title: "Document"     , collapse : false , line : "1||Document"},
 * 	{ pageNumber: 2, depth: 1, title: "Section 1"    , collapse : false , line : "2|-|Section 1"},
 * 	{ pageNumber: 3, depth: 1, title: "Section 2"    , collapse : true  , line : "-3|-|Section 2"},
 * 	{ pageNumber: 4, depth: 2, title: "Subsection 1" , collapse : false , line : "4|--|Subsection 1"},
 * 	{ pageNumber: 5, depth: 1, title: "Section 3"    , collapse : false , line : "5|-|Section 3"},
 * 	{ pageNumber: 6, depth: 0, title: "Summary"      , collapse : false , line : "6||Summary"},
 * ]
 * ```
 */
function printedToOutline(inputOutline, totalNumberOfPages) {
    if (inputOutline.trim() === "")
        throw Error(errorMessages_1.errorMessages.emptyOutline);
    let lastNode;
    const toReturn = inputOutline
        .trim()
        .split("\n")
        .map((untrimmedLine, i) => {
        const line = untrimmedLine.trim();
        const match = line.match(constants_1.constants.trimmedTocLineValidPattern);
        if (match === null)
            throw Error(errorMessages_1.errorMessages.wrongPatternInLine(line));
        const { groups } = match;
        if (groups === undefined)
            throw Error(errorMessages_1.internalErrorMessages.internalLibraryError);
        const { pageNumber, depth, title, collapse } = groups;
        if (pageNumber === undefined)
            throw Error(errorMessages_1.internalErrorMessages.internalLibraryError);
        if (title === undefined)
            throw Error(errorMessages_1.internalErrorMessages.internalLibraryError);
        const nodeToReturn = {
            pageNumber: Number(pageNumber),
            depth: depth === undefined ? 0 : depth.length,
            title: title,
            collapse: (() => {
                if (collapse === undefined)
                    return false;
                if (collapse === "-")
                    return true;
                if (collapse === "+")
                    return false;
                if (collapse === "")
                    return false;
                throw Error(errorMessages_1.internalErrorMessages.internalLibraryError);
            })(),
            line: line,
        };
        if (nodeToReturn.pageNumber === 0)
            throw Error(errorMessages_1.errorMessages.zeroPageInOutlineIsNotAllowed(line));
        if (nodeToReturn.pageNumber > totalNumberOfPages)
            throw Error(errorMessages_1.errorMessages.pageNumberInOutlineExceedsMaximum(line, totalNumberOfPages));
        if (i === 0 && nodeToReturn.depth !== 0)
            throw Error(errorMessages_1.errorMessages.depthOfOutlineHasToStartWithZero);
        if (i !== 0) {
            if (!(nodeToReturn.depth <= lastNode.depth + 1)) {
                throw Error(errorMessages_1.errorMessages.wrongDepthDisplacement(lastNode.line, nodeToReturn.line));
            }
            if (nodeToReturn.pageNumber < lastNode.pageNumber) {
                throw Error(errorMessages_1.errorMessages.invalidDisplacementOfPage(lastNode.line, nodeToReturn.line));
            }
            if (lastNode.collapse && lastNode.depth >= nodeToReturn.depth) {
                throw Error(errorMessages_1.errorMessages.nodeIsCollapsedWithoutChildren(lastNode.line));
            }
        }
        lastNode = nodeToReturn;
        return nodeToReturn;
    });
    return toReturn;
}
exports.printedToOutline = printedToOutline;
