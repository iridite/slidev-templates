import { Range, Position, NodeStartLength, NodeWithoutPosition, TwoslashNode } from './types.js';
export { CompletionEntry, ErrorLevel, NodeBase, NodeCompletion, NodeError, NodeErrorWithoutPosition, NodeHighlight, NodeHover, NodeQuery, NodeTag, TwoslashGenericFunction, TwoslashGenericResult } from './types.js';

declare function isInRange(index: number, range: Range, inclusive?: boolean): boolean;
declare function isInRanges(index: number, ranges: Range[], inclusive?: boolean): Range | undefined;
/**
 * Merge overlapping ranges
 */
declare function mergeRanges(ranges: Range[]): Range[];
/**
 * Slipt a string into lines, each line preserves the line ending.
 */
declare function splitLines(code: string, preserveEnding?: boolean): [string, number][];
/**
 * Creates a converter between index and position in a code block.
 */
declare function createPositionConverter(code: string): {
    lines: string[];
    indexToPos: (index: number) => Position;
    posToIndex: (line: number, character: number) => number;
};
/**
 * Remove ranages for a string, and update nodes' `start` property accordingly
 *
 * Note that items in `nodes` will be mutated
 */
declare function removeCodeRanges<T extends NodeStartLength>(code: string, removals: Range[], nodes: T[]): {
    code: string;
    removals: Range[];
    nodes: T[];
};
declare function removeCodeRanges(code: string, removals: Range[]): {
    code: string;
    removals: Range[];
    nodes: undefined;
};
/**
 * - Calculate nodes `line` and `character` properties to match the code
 * - Remove nodes that has negative `start` property
 * - Sort nodes by `start`
 *
 * Note that the nodes items will be mutated, clone them beforehand if not desired
 */
declare function resolveNodePositions(nodes: NodeWithoutPosition[], code: string): TwoslashNode[];
declare function resolveNodePositions(nodes: NodeWithoutPosition[], indexToPos: (index: number) => Position): TwoslashNode[];

export { NodeStartLength, NodeWithoutPosition, Position, Range, TwoslashNode, createPositionConverter, isInRange, isInRanges, mergeRanges, removeCodeRanges, resolveNodePositions, splitLines };
