import type { IOutline } from "../publicApi";
/**
 * @description It returns the index of the parent of the provided outline node.
 * It returns `-1` when the provided outline node has zero depth.
 */
export declare function getIndexOfImmediateParent(outline: IOutline, i: number): number;
