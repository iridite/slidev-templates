import type { PDFDocument, PDFNumber, PDFRef, PDFHexString, PDFArray, PDFName as _PDFName, PDFDict as _PDFDict } from "pdf-lib";
export declare function createOutlineNodeFactory(_: {
    PDFName: typeof _PDFName;
    PDFDict: typeof _PDFDict;
}): (doc: PDFDocument, _: {
    Title: PDFHexString;
    Parent: PDFRef;
    Prev?: PDFRef;
    Next?: PDFRef;
    First?: PDFRef;
    Last?: PDFRef;
    Count?: PDFNumber;
    Dest: PDFArray;
}) => _PDFDict;
