import type { IOutline } from "../publicApi";
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
export declare function printedToOutline(inputOutline: string, totalNumberOfPages: number): IOutline;
