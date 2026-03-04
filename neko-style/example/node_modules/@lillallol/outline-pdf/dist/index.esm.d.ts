import { PDFDict, PDFName, PDFNumber, PDFRef, PDFArray, PDFNull, PDFDocument, PDFPageLeaf, PDFHexString } from 'pdf-lib';

declare type IOutlinePdfFactory = (pdfLib: pdfLib) => IOutlinePdf;
/**
 * @description
 * Just use:
 *
 * ```ts
 * import * as pdfLib from "pdf-lib";
 * ```
 */
declare type pdfLib = {
    PDFDict: typeof PDFDict;
    PDFName: typeof PDFName;
    PDFNumber: typeof PDFNumber;
    PDFRef: typeof PDFRef;
    PDFArray: typeof PDFArray;
    PDFNull: typeof PDFNull;
    PDFDocument: typeof PDFDocument;
    PDFPageLeaf: typeof PDFPageLeaf;
    PDFHexString: typeof PDFHexString;
};
declare type IOutlinePdf = (_: {
    /**
     * @description
     * The pdf to outline.
     *
     * I you provide the pdf as a string, then make sure it is of base 64.
     */
    pdf: string | Uint8Array | ArrayBuffer | PDFDocument;
    /**
     * @description
     * String representation of the outline.
     *
     * Example:
     *
     * ```ts
     * `
     *    1||some title 1
     *   12|-|some title 2
     *  -30|--|some title 3
     *   34|---|some title 4
     *   35|---|some title 5
     *   60|--|some title 6
     *   67|-|some title 7
     *   80||some title 8
     * `
     * ```
     *
     * where the:
     *
     * * first column is the page number, and if it negative it means that this
     *   part of the outline is collapsed
     * * second column is the outline depth
     * * third column is the outline title
     */
    outline: string;
}) => Promise<PDFDocument>;

declare const outlinePdfFactory: IOutlinePdfFactory;

export { outlinePdfFactory };
