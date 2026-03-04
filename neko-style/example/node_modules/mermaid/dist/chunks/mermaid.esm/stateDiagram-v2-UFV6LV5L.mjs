import {
  StateDB,
  stateDiagram_default,
  stateRenderer_v3_unified_default,
  styles_default
} from "./chunk-BYQDXZHU.mjs";
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

// src/diagrams/state/stateDiagram-v2.ts
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
