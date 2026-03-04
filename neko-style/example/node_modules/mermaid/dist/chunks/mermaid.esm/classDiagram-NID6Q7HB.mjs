import {
  ClassDB,
  classDiagram_default,
  classRenderer_v3_unified_default,
  styles_default
} from "./chunk-C4E7R7RU.mjs";
import "./chunk-SXA26SXQ.mjs";
import "./chunk-FE7ZF5LU.mjs";
import "./chunk-5TILSNIZ.mjs";
import "./chunk-BWGVRFNN.mjs";
import "./chunk-2UGCUMTX.mjs";
import "./chunk-2WMKEDXP.mjs";
import "./chunk-3BNJ34M7.mjs";
import "./chunk-UI623YTV.mjs";
import "./chunk-ERUUMNLS.mjs";
import "./chunk-MSCZ4H2C.mjs";
import "./chunk-Q5F2UZBA.mjs";
import "./chunk-3OTVAOVH.mjs";
import "./chunk-QM7ZX55A.mjs";
import "./chunk-VT6UTUSU.mjs";
import "./chunk-3QJOF6JT.mjs";
import {
  __name
} from "./chunk-FQFHLQFH.mjs";

// src/diagrams/class/classDiagram.ts
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
