"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOutlineDictFactory = void 0;
function createOutlineDictFactory(_) {
    const { PDFDict, PDFName } = _;
    return function createOutlineDict(doc, _) {
        const outlinesDictMap = new Map();
        outlinesDictMap.set(PDFName.Type, PDFName.of("Outlines"));
        outlinesDictMap.set(PDFName.of("First"), _.First);
        outlinesDictMap.set(PDFName.of("Last"), _.Last);
        outlinesDictMap.set(PDFName.of("Count"), _.Count);
        return PDFDict.fromMapWithContext(outlinesDictMap, doc.context);
    };
}
exports.createOutlineDictFactory = createOutlineDictFactory;
