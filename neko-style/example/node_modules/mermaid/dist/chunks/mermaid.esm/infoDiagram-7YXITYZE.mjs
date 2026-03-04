import {
  parse
} from "./chunk-G4KLJUHT.mjs";
import "./chunk-6Z463AZH.mjs";
import "./chunk-F5YS3Q3O.mjs";
import "./chunk-IGPWYRNW.mjs";
import "./chunk-NGJK4QVL.mjs";
import "./chunk-AIBVA4BS.mjs";
import "./chunk-EX755JQE.mjs";
import {
  package_default
} from "./chunk-N3LK7BG7.mjs";
import {
  selectSvgElement
} from "./chunk-VBUAZ3QA.mjs";
import {
  configureSvgSize
} from "./chunk-QM7ZX55A.mjs";
import {
  log
} from "./chunk-VT6UTUSU.mjs";
import "./chunk-INCAEYOW.mjs";
import "./chunk-HO6AHGX3.mjs";
import "./chunk-MFRUYFWM.mjs";
import "./chunk-UKL4YMJ2.mjs";
import "./chunk-3QJOF6JT.mjs";
import {
  __name
} from "./chunk-FQFHLQFH.mjs";

// src/diagrams/info/infoParser.ts
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};

// src/diagrams/info/infoDb.ts
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};

// src/diagrams/info/infoRenderer.ts
var draw = /* @__PURE__ */ __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };

// src/diagrams/info/infoDiagram.ts
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
