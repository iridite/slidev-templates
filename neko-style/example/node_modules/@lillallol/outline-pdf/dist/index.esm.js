function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var createOutlineDictFactory_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOutlineDictFactory = void 0;
function createOutlineDictFactory(_) {
    const { PDFDict, PDFName } = _;
    return function createOutlineDict(doc, _) {
        const outlinesDictMap = new Map();
        outlinesDictMap.set(PDFName.Type, PDFName.of("Outlines"));
        outlinesDictMap.set(PDFName.of("First"), _.First);
        outlinesDictMap.set(PDFName.of("Last"), _.Last);
        outlinesDictMap.set(PDFName.of("Count"), _.Count);
        return PDFDict.fromMapWithContext(outlinesDictMap, doc.context);
    };
}
exports.createOutlineDictFactory = createOutlineDictFactory;
});

unwrapExports(createOutlineDictFactory_1);
createOutlineDictFactory_1.createOutlineDictFactory;

var createOutlineNodeFactory_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOutlineNodeFactory = void 0;
function createOutlineNodeFactory(_) {
    const { PDFDict, PDFName } = _;
    return function createOutlineNode(doc, _) {
        const map = new Map();
        map.set(PDFName.Title, _.Title);
        map.set(PDFName.Parent, _.Parent);
        if (_.Prev !== undefined)
            map.set(PDFName.of("Prev"), _.Prev);
        if (_.Next !== undefined)
            map.set(PDFName.of("Next"), _.Next);
        if (_.First !== undefined)
            map.set(PDFName.of("First"), _.First);
        if (_.Last !== undefined)
            map.set(PDFName.of("Last"), _.Last);
        if (_.Count !== undefined)
            map.set(PDFName.of("Count"), _.Count);
        map.set(PDFName.of("Dest"), _.Dest);
        return PDFDict.fromMapWithContext(map, doc.context);
    };
}
exports.createOutlineNodeFactory = createOutlineNodeFactory;
});

unwrapExports(createOutlineNodeFactory_1);
createOutlineNodeFactory_1.createOutlineNodeFactory;

var getPageRefsFactory_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageRefsFactory = void 0;
function getPageRefsFactory(_) {
    const { PDFPageLeaf } = _;
    return function getPageRefs(pdfDoc) {
        const refs = [];
        pdfDoc.catalog.Pages().traverse((kid, ref) => {
            if (kid instanceof PDFPageLeaf)
                refs.push(ref);
        });
        return refs;
    };
}
exports.getPageRefsFactory = getPageRefsFactory;
});

unwrapExports(getPageRefsFactory_1);
getPageRefsFactory_1.getPageRefsFactory;

var hasChild_1 = createCommonjsModule(function (module, exports) {
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
});

unwrapExports(hasChild_1);
hasChild_1.hasChild;

var constants = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
exports.constants = {
    trimmedTocLineValidPattern: /^(?<collapse>[+\-]?)(?<pageNumber>\d+)\|(?<depth>-*)\|(?<title>.*)$/
};
});

unwrapExports(constants);
constants.constants;

var getLastLineOfString_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastLineOfString = void 0;
/**
 * @description
 * Return the last line of the provided string.
 */
function getLastLineOfString(string) {
    const lines = string.split("\n");
    return lines[lines.length - 1];
}
exports.getLastLineOfString = getLastLineOfString;
});

unwrapExports(getLastLineOfString_1);
getLastLineOfString_1.getLastLineOfString;

var commonMaxIndentLength_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports._errorMessages = exports.commonMaxIndentLength = void 0;
/**
 * @description
 * It returns the common maximum indentation length among the lines of the
 * provided string. Lines that are only spaces are not taken into account.
 *
 * It throws error if a `\s` character that is not ` ` (space) is encountered
 * in the indentation.
 * @example
 * commonMinIndentLength(
 * `   hello
 *      world!
 * `);
 * //returns
 * 3;
 */
function commonMaxIndentLength(s) {
    let minIndentLength = Infinity;
    s.split("\n").forEach((line) => {
        if (/^[ ]+$/.test(line) || line.length === 0)
            return;
        let newMinIndentLength = 0;
        for (let i = 0; i < line.length; i++) {
            if (/\s/.test(line[i]) && line[i] !== " ")
                throw Error(exports._errorMessages.badIndentSpaceCharacter);
            if (line[i] !== " ")
                break;
            newMinIndentLength++;
        }
        if (newMinIndentLength < minIndentLength)
            minIndentLength = newMinIndentLength;
    });
    return minIndentLength;
}
exports.commonMaxIndentLength = commonMaxIndentLength;
exports._errorMessages = {
    badIndentSpaceCharacter: "Only space characters are allowed in the indented part of the string",
};
});

unwrapExports(commonMaxIndentLength_1);
commonMaxIndentLength_1._errorMessages;
commonMaxIndentLength_1.commonMaxIndentLength;

var unindent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports._errorMessage = exports.unindent = void 0;

/**
 * @description
 * It removes the first and last line of the provided string. From the remaining lines it
 * calculates the common maximum indentation, ignoring empty lines, and then it subtracts it from
 * each non empty line.
 *
 * The subtraction happens also for empty lines that have length bigger than the common minimum
 * indentation length. If they have length less than the common minimum indentation length they are
 * replaced with an empty string;
 *
 * - If `\s` characters are encountered in the indentation string that are not ` ` (space), it throws error.
 * - If the first line is not an empty string, it throws error.
 * - If the last line is not only space characters it throws error.
 * @example
 * unindent(
 * `
 *                  transaction tree string representation
 *
 *             |_ "p"
 *                |_ "a"
 *                   |_ "t"
 *                      |_ "h"
 *                      |  |_ "prop1" -1 => 1
 *                      |_ "t"
 *                         |_ "prop" "11" => "1"
 * `);
 * //returns
 * `     transaction tree string representation
 *
 * |_ "p"
 *    |_ "a"
 *       |_ "t"
 *          |_ "h"
 *          |  |_ "prop1" -1 => 1
 *          |_ "t"
 *             |_ "prop" "11" => "1"`;
 */
function unindent(s) {
    const lines = s.split("\n");
    if (lines[0] !== "")
        throw Error(exports._errorMessage.badFirstLine);
    if (!/^[ ]*$/.test(lines[lines.length - 1]))
        throw Error(exports._errorMessage.badLastLine);
    const minIndentLength = commonMaxIndentLength_1.commonMaxIndentLength(s);
    return s
        .split("\n")
        .slice(1, -1)
        .map((line) => {
        if (/^\s*$/.test(line) && line.length < minIndentLength)
            return "";
        return line.slice(minIndentLength, line.length);
    })
        .join("\n");
}
exports.unindent = unindent;
exports._errorMessage = {
    badFirstLine: `first line has to be an empty string`,
    badLastLine: "last line has to be only space characters",
};
});

unwrapExports(unindent_1);
unindent_1._errorMessage;
unindent_1.unindent;

var tagUnindent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagUnindent = void 0;


/**
 * @description
 * Tag function that returns the template literal it is provided as a string, but
 * with its common maximum indentation removed.
 *
 * The placeholders that are provided as single string element arrays are multi-line indented.
 *
 * It throws if :
 *
 * - the first line is non empty
 * - the last line is not only spaces
 * - the string contains `\s` characters that are not space characters in its indentation
 *
 * @example
 * expect(
 *      tagUnindent`
 *          path : (${`"./some/where"`})
 *          index : ${0}
 *          message :
 *              ${["hello\nworld"]}
 *      `
 * ).toBe(
 *     `path : ("./some/where")\n` +
 *     `index : 0\n` +
 *     `message : \n` +
 *     `    hello\n` +
 *     `    world`
 * );
 */
function tagUnindent(stringArray, ...placeholders) {
    const stringToUnindent = (() => {
        if (placeholders.length === 0)
            return stringArray[0];
        let toReturn = "";
        for (let i = 0; i < placeholders.length; i++) {
            const currentPlaceholder = placeholders[i];
            if (Array.isArray(currentPlaceholder)) {
                const lastStringArrayLineLength = getLastLineOfString_1.getLastLineOfString(stringArray[i]).length;
                const [placeholderSingleElementArrayString] = currentPlaceholder;
                toReturn =
                    toReturn +
                        stringArray[i] +
                        placeholderSingleElementArrayString
                            .split("\n")
                            .map((line, i) => {
                            if (i === 0)
                                return line;
                            return " ".repeat(lastStringArrayLineLength) + line;
                        })
                            .join("\n");
            }
            else {
                toReturn = toReturn + stringArray[i] + currentPlaceholder;
            }
        }
        return toReturn + stringArray[stringArray.length - 1];
    })();
    return unindent_1.unindent(stringToUnindent);
}
exports.tagUnindent = tagUnindent;
});

unwrapExports(tagUnindent_1);
tagUnindent_1.tagUnindent;

var esUtils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagUnindent = void 0;

Object.defineProperty(exports, "tagUnindent", { enumerable: true, get: function () { return tagUnindent_1.tagUnindent; } });
});

unwrapExports(esUtils);
esUtils.tagUnindent;

var errorMessages = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalErrorMessages = exports.errorMessages = void 0;


exports.errorMessages = {
    nodeIsCollapsedWithoutChildren: (line) => esUtils.tagUnindent `
        Outline node:

            ${line}

        has no children and it is collapsed. You have to un collapse it or add children.
    `,
    emptyOutline: "no outline has been provided",
    wrongDepthDisplacement: (oldLine, newLine) => esUtils.tagUnindent `
        Wrong depth displacement for the following part of the outline:
            
            ${oldLine}
        
            ${newLine}
        
    `,
    zeroPageInOutlineIsNotAllowed: (line) => esUtils.tagUnindent `
        Zero page number is not allowed in outline:
        
            ${line}
        
    `,
    pageNumberInOutlineExceedsMaximum: (line, max) => esUtils.tagUnindent `
        Pdf file has:

            ${max}
        
        number of pages and outline points out of this range: 
        
            ${line}
        
    `,
    depthOfOutlineHasToStartWithZero: `The outline should start with zero depth.`,
    wrongPatternInLine: (line) => esUtils.tagUnindent `
        The line:
        
            ${line}
            
        has wrong pattern. It does satisfy the following regular expression:

            ${constants.constants.trimmedTocLineValidPattern.source}
        
    `,
    invalidDisplacementOfPage: (oldLine, newLine) => esUtils.tagUnindent `
        The page is not displaced correctly:

            ${oldLine}
        
            ${newLine}
        
    `
};
exports.internalErrorMessages = {
    internalLibraryError: esUtils.tagUnindent `
        Something went wrong. If you have not used the library in a way
        it is not supposed to be used, then copy this error message and
        open an issue here:

            https://github.com/lillallol/outline-pdf-data-structure/issues
        
    `,
};
});

unwrapExports(errorMessages);
errorMessages.internalErrorMessages;
errorMessages.errorMessages;

var getIndexOfImmediateLastChild = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexOfLastImmediateChild = void 0;

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
        throw Error(errorMessages.internalErrorMessages.internalLibraryError);
    return candidateIndex;
}
exports.getIndexOfLastImmediateChild = getIndexOfLastImmediateChild;
});

unwrapExports(getIndexOfImmediateLastChild);
getIndexOfImmediateLastChild.getIndexOfLastImmediateChild;

var getIndexOfImmediateNextSibling_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexOfImmediateNextSibling = void 0;

/**
 * @description It returns the index of the immediate next sibling for the specified outline node.
 * It throws if it does not exist.
 */
function getIndexOfImmediateNextSibling(outline, i) {
    const contextDepth = outline[i].depth;
    for (let ii = i + 1; ii < outline.length; ii++) {
        if (outline[ii].depth < contextDepth)
            break;
        if (outline[ii].depth === contextDepth)
            return ii;
    }
    throw Error(errorMessages.internalErrorMessages.internalLibraryError);
}
exports.getIndexOfImmediateNextSibling = getIndexOfImmediateNextSibling;
});

unwrapExports(getIndexOfImmediateNextSibling_1);
getIndexOfImmediateNextSibling_1.getIndexOfImmediateNextSibling;

var getIndexOfImmediatePreviousSibling_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIndexOfImmediatePreviousSibling = void 0;

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
    throw Error(errorMessages.internalErrorMessages.internalLibraryError);
}
exports.getIndexOfImmediatePreviousSibling = getIndexOfImmediatePreviousSibling;
});

unwrapExports(getIndexOfImmediatePreviousSibling_1);
getIndexOfImmediatePreviousSibling_1.getIndexOfImmediatePreviousSibling;

var hasImmediatePreviousSibling_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasImmediatePreviousSibling = void 0;

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
});

unwrapExports(hasImmediatePreviousSibling_1);
hasImmediatePreviousSibling_1.hasImmediatePreviousSibling;

var hasImmediateNextSibling_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasImmediateNextSibling = void 0;

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
});

unwrapExports(hasImmediateNextSibling_1);
hasImmediateNextSibling_1.hasImmediateNextSibling;

var getIndexOfImmediateParentFactory = createCommonjsModule(function (module, exports) {
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
});

unwrapExports(getIndexOfImmediateParentFactory);
getIndexOfImmediateParentFactory.getIndexOfImmediateParent;

var printedToOutline_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.printedToOutline = void 0;


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
        throw Error(errorMessages.errorMessages.emptyOutline);
    let lastNode;
    const toReturn = inputOutline
        .trim()
        .split("\n")
        .map((untrimmedLine, i) => {
        const line = untrimmedLine.trim();
        const match = line.match(constants.constants.trimmedTocLineValidPattern);
        if (match === null)
            throw Error(errorMessages.errorMessages.wrongPatternInLine(line));
        const { groups } = match;
        if (groups === undefined)
            throw Error(errorMessages.internalErrorMessages.internalLibraryError);
        const { pageNumber, depth, title, collapse } = groups;
        if (pageNumber === undefined)
            throw Error(errorMessages.internalErrorMessages.internalLibraryError);
        if (title === undefined)
            throw Error(errorMessages.internalErrorMessages.internalLibraryError);
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
                throw Error(errorMessages.internalErrorMessages.internalLibraryError);
            })(),
            line: line,
        };
        if (nodeToReturn.pageNumber === 0)
            throw Error(errorMessages.errorMessages.zeroPageInOutlineIsNotAllowed(line));
        if (nodeToReturn.pageNumber > totalNumberOfPages)
            throw Error(errorMessages.errorMessages.pageNumberInOutlineExceedsMaximum(line, totalNumberOfPages));
        if (i === 0 && nodeToReturn.depth !== 0)
            throw Error(errorMessages.errorMessages.depthOfOutlineHasToStartWithZero);
        if (i !== 0) {
            if (!(nodeToReturn.depth <= lastNode.depth + 1)) {
                throw Error(errorMessages.errorMessages.wrongDepthDisplacement(lastNode.line, nodeToReturn.line));
            }
            if (nodeToReturn.pageNumber < lastNode.pageNumber) {
                throw Error(errorMessages.errorMessages.invalidDisplacementOfPage(lastNode.line, nodeToReturn.line));
            }
            if (lastNode.collapse && lastNode.depth >= nodeToReturn.depth) {
                throw Error(errorMessages.errorMessages.nodeIsCollapsedWithoutChildren(lastNode.line));
            }
        }
        lastNode = nodeToReturn;
        return nodeToReturn;
    });
    return toReturn;
}
exports.printedToOutline = printedToOutline;
});

unwrapExports(printedToOutline_1);
printedToOutline_1.printedToOutline;

var getNumberOfDescendants_1 = createCommonjsModule(function (module, exports) {
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
});

unwrapExports(getNumberOfDescendants_1);
getNumberOfDescendants_1.getNumberOfDescendants;

var outlinePdfDataStructure_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.outlinePdfDataStructure = void 0;









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
            Parent: getIndexOfImmediateParentFactory.getIndexOfImmediateParent(outline, i),
            ...(hasImmediatePreviousSibling_1.hasImmediatePreviousSibling(outline, i) && {
                Prev: getIndexOfImmediatePreviousSibling_1.getIndexOfImmediatePreviousSibling(outline, i),
            }),
            ...(hasImmediateNextSibling_1.hasImmediateNextSibling(outline, i) && {
                Next: getIndexOfImmediateNextSibling_1.getIndexOfImmediateNextSibling(outline, i),
            }),
            ...(hasChild_1.hasChild(outline, i) && {
                First: i + 1,
                Last: getIndexOfImmediateLastChild.getIndexOfLastImmediateChild(outline, i),
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
});

unwrapExports(outlinePdfDataStructure_1);
outlinePdfDataStructure_1.outlinePdfDataStructure;

var dist$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.outlinePdfDataStructure = void 0;

Object.defineProperty(exports, "outlinePdfDataStructure", { enumerable: true, get: function () { return outlinePdfDataStructure_1.outlinePdfDataStructure; } });
});

unwrapExports(dist$1);
dist$1.outlinePdfDataStructure;

var outlinePdfFactory_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.outlinePdfFactory = void 0;




const outlinePdfFactory = function outlinePdfFactory(pdfLib) {
    const { PDFArray, PDFDocument, PDFName, PDFNull, PDFNumber, PDFHexString } = pdfLib;
    const getPageRefs = getPageRefsFactory_1.getPageRefsFactory(pdfLib);
    const createOutlineNode = createOutlineNodeFactory_1.createOutlineNodeFactory(pdfLib);
    const createOutlineDict = createOutlineDictFactory_1.createOutlineDictFactory(pdfLib);
    return async function outlineToPdf(parameters) {
        const { outline: inputOutline, pdf: inputPdf } = parameters;
        const doc = await (() => {
            if (inputPdf instanceof PDFDocument)
                return inputPdf;
            return PDFDocument.load(inputPdf);
        })();
        const pageRefs = getPageRefs(doc);
        const pageRefsLength = pageRefs.length;
        const outlineRootRef = doc.context.nextRef();
        //Pointing the "Outlines" property of the PDF "Catalog" to the first object of your outlines
        doc.catalog.set(PDFName.of("Outlines"), outlineRootRef);
        const outlineItemRef = [];
        const outlineItem = [];
        // const outlineRootRef = outlinesDictRef;
        const { outlineItems: pseudoOutlineItems, outlineRootCount } = dist$1.outlinePdfDataStructure(inputOutline, pageRefsLength);
        for (let i = 0; i < pseudoOutlineItems.length; i++) {
            outlineItemRef.push(doc.context.nextRef());
        }
        for (let i = 0; i < pseudoOutlineItems.length; i++) {
            const { Title, Dest, Parent, Count, First, Last, Next, Prev } = pseudoOutlineItems[i];
            outlineItem[i] = createOutlineNode(doc, {
                Title: PDFHexString.fromText(Title),
                Parent: Parent !== -1 ? outlineItemRef[Parent] : outlineRootRef,
                ...(Prev !== undefined && {
                    Prev: outlineItemRef[Prev],
                }),
                ...(Next !== undefined && {
                    Next: outlineItemRef[Next],
                }),
                ...(First !== undefined && { First: outlineItemRef[First] }),
                ...(Last !== undefined && { Last: outlineItemRef[Last] }),
                ...(Count !== undefined && { Count: PDFNumber.of(Count) }),
                Dest: (() => {
                    const array = PDFArray.withContext(doc.context);
                    array.push(pageRefs[Dest]);
                    array.push(PDFName.of("XYZ"));
                    array.push(PDFNull);
                    array.push(PDFNull);
                    array.push(PDFNull);
                    return array;
                })(),
            });
        }
        const outlinesDict = createOutlineDict(doc, {
            First: outlineItemRef[0],
            Last: outlineItemRef[pseudoOutlineItems.length - 1],
            Count: PDFNumber.of(outlineRootCount),
        });
        //First 'Outline' object. Refer to table H.3 in Annex H.6 of PDF Specification doc.
        doc.context.assign(outlineRootRef, outlinesDict);
        //Actual outline items that will be displayed
        for (let i = 0; i < pseudoOutlineItems.length; i++) {
            doc.context.assign(outlineItemRef[i], outlineItem[i]);
        }
        return doc;
    };
};
exports.outlinePdfFactory = outlinePdfFactory;
});

unwrapExports(outlinePdfFactory_1);
outlinePdfFactory_1.outlinePdfFactory;

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.outlinePdfFactory = void 0;

Object.defineProperty(exports, "outlinePdfFactory", { enumerable: true, get: function () { return outlinePdfFactory_1.outlinePdfFactory; } });
});

var index = unwrapExports(dist);
var dist_1 = dist.outlinePdfFactory;

export default index;
export { dist_1 as outlinePdfFactory };
