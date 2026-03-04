export declare type IOutline = IOutlineNode[];
export declare type IOutlineNode = {
    depth: number;
    pageNumber: number;
    title: string;
    collapse: boolean;
    count?: number;
    line: string;
};
export declare type outlinePdfDataStructureReturnType = {
    /**
     * @description
     * It returns a low level programmatic representation of the outline.
     */
    outlineItems: outlineItem[];
    /**
     * @description
     * The total number of outline nodes.
     */
    outlineRootCount: number;
};
export declare type outlineItem = {
    /**
     * @description
     * The title that will be visible in the outline of the pdf for the context
     * outline node.
     */
    Title: string;
    /**
     * @description
     * The index (of the array that contains all the outline nodes) of the
     * parent outline node of the context outline node.
     *
     * Outline nodes of depth `0` have `-1` for this value.
     */
    Parent: number;
    /**
     * @description
     * The index (of the array that contains all the outline nodes) of the
     * previous sibling of the context outline node. It is `undefined` for the
     * case there is no previous sibling.
     */
    Prev?: number;
    /**
     * @description
     * The index (of the array that contains all the outline nodes) of the next
     * sibling of the context outline node. It is `undefined` for the case there
     * is no next sibling.
     */
    Next?: number;
    /**
     * @description
     * The index (of the array that contains all the outline nodes) of the first
     * immediate child of the context outline node. It is `undefined` for the
     * case there is no immediate child.
     */
    First?: number;
    /**
     * @description
     * The index (of the array that contains all the outline nodes) of the last
     * immediate child of the context outline node. It is `undefined` for the
     * case there is no immediate child.
     */
    Last?: number;
    /**
     * @description
     * Total number of outline nodes that are descendants to the context outline
     * node.
     */
    Count?: number;
    /**
     * @description
     * The page of the pdf that the outline node hyper links to.
     */
    Dest: number;
};
