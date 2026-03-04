import type { PDFDocument, PDFPageLeaf as _PDFPageLeaf, PDFRef } from "pdf-lib";
export declare function getPageRefsFactory(_: {
    PDFPageLeaf: typeof _PDFPageLeaf;
}): (pdfDoc: PDFDocument) => PDFRef[];
