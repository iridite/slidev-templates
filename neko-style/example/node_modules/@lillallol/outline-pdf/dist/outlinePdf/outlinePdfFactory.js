"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outlinePdfFactory = void 0;
const createOutlineDictFactory_1 = require("./createOutlineDictFactory");
const createOutlineNodeFactory_1 = require("./createOutlineNodeFactory");
const getPageRefsFactory_1 = require("./getPageRefsFactory");
const outline_pdf_data_structure_1 = require("@lillallol/outline-pdf-data-structure");
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
        const { outlineItems: pseudoOutlineItems, outlineRootCount } = outline_pdf_data_structure_1.outlinePdfDataStructure(inputOutline, pageRefsLength);
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
