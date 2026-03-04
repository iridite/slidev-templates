import type { PDFDocument, PDFNumber, PDFRef, PDFName as _PDFName, PDFDict as _PDFDict } from "pdf-lib";
export declare function createOutlineDictFactory(_: {
    PDFName: typeof _PDFName;
    PDFDict: typeof _PDFDict;
}): (doc: PDFDocument, _: {
    First: PDFRef;
    Last: PDFRef;
    Count: PDFNumber;
}) => _PDFDict;
