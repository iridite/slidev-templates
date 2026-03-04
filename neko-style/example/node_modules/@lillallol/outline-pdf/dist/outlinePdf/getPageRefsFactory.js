"use strict";
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
