"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOutlineNodeFactory = void 0;
function createOutlineNodeFactory(_) {
    const { PDFDict, PDFName } = _;
    return function createOutlineNode(doc, _) {
        const map = new Map();
        map.set(PDFName.Title, _.Title);
        map.set(PDFName.Parent, _.Parent);
        if (_.Prev !== undefined)
            map.set(PDFName.of("Prev"), _.Prev);
        if (_.Next !== undefined)
            map.set(PDFName.of("Next"), _.Next);
        if (_.First !== undefined)
            map.set(PDFName.of("First"), _.First);
        if (_.Last !== undefined)
            map.set(PDFName.of("Last"), _.Last);
        if (_.Count !== undefined)
            map.set(PDFName.of("Count"), _.Count);
        map.set(PDFName.of("Dest"), _.Dest);
        return PDFDict.fromMapWithContext(map, doc.context);
    };
}
exports.createOutlineNodeFactory = createOutlineNodeFactory;
