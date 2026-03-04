"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalErrorMessages = exports.errorMessages = void 0;
const constants_1 = require("./constants");
const es_utils_1 = require("./es-utils");
exports.errorMessages = {
    nodeIsCollapsedWithoutChildren: (line) => es_utils_1.tagUnindent `
        Outline node:

            ${line}

        has no children and it is collapsed. You have to un collapse it or add children.
    `,
    emptyOutline: "no outline has been provided",
    wrongDepthDisplacement: (oldLine, newLine) => es_utils_1.tagUnindent `
        Wrong depth displacement for the following part of the outline:
            
            ${oldLine}
        
            ${newLine}
        
    `,
    zeroPageInOutlineIsNotAllowed: (line) => es_utils_1.tagUnindent `
        Zero page number is not allowed in outline:
        
            ${line}
        
    `,
    pageNumberInOutlineExceedsMaximum: (line, max) => es_utils_1.tagUnindent `
        Pdf file has:

            ${max}
        
        number of pages and outline points out of this range: 
        
            ${line}
        
    `,
    depthOfOutlineHasToStartWithZero: `The outline should start with zero depth.`,
    wrongPatternInLine: (line) => es_utils_1.tagUnindent `
        The line:
        
            ${line}
            
        has wrong pattern. It does satisfy the following regular expression:

            ${constants_1.constants.trimmedTocLineValidPattern.source}
        
    `,
    invalidDisplacementOfPage: (oldLine, newLine) => es_utils_1.tagUnindent `
        The page is not displaced correctly:

            ${oldLine}
        
            ${newLine}
        
    `
};
exports.internalErrorMessages = {
    internalLibraryError: es_utils_1.tagUnindent `
        Something went wrong. If you have not used the library in a way
        it is not supposed to be used, then copy this error message and
        open an issue here:

            https://github.com/lillallol/outline-pdf-data-structure/issues
        
    `,
};
