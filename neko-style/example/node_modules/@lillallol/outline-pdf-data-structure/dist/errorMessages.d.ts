export declare const errorMessages: {
    nodeIsCollapsedWithoutChildren: (line: string) => string;
    emptyOutline: string;
    wrongDepthDisplacement: (oldLine: string, newLine: string) => string;
    zeroPageInOutlineIsNotAllowed: (line: string) => string;
    pageNumberInOutlineExceedsMaximum: (line: string, max: number) => string;
    depthOfOutlineHasToStartWithZero: string;
    wrongPatternInLine: (line: string) => string;
    invalidDisplacementOfPage: (oldLine: string, newLine: string) => string;
};
export declare const internalErrorMessages: {
    internalLibraryError: string;
};
