'use strict';

const ts = require('typescript');
const core = require('./core.cjs');
const fallback = require('./shared/twoslash.9a66b1ce.cjs');
const types = require('twoslash-protocol/types');
require('@typescript/vfs');
require('twoslash-protocol');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const ts__default = /*#__PURE__*/_interopDefaultCompat(ts);

function convertLegacyOptions(opts) {
  return {
    ...opts,
    handbookOptions: opts.handbookOptions || opts.defaultOptions,
    compilerOptions: opts.compilerOptions || opts.defaultCompilerOptions
  };
}
function convertLegacyReturn(result) {
  return {
    code: result.code,
    extension: result.meta.extension,
    staticQuickInfos: result.hovers.map((i) => ({
      text: i.text,
      docs: i.docs || "",
      start: i.start,
      length: i.length,
      line: i.line,
      character: i.character,
      targetString: i.target
    })),
    tags: result.tags.map((t) => ({
      name: t.name,
      line: t.line,
      annotation: t.text
    })),
    highlights: result.highlights.map((h) => ({
      kind: "highlight",
      // it's a bit confusing that `offset` and `start` are flipped
      offset: h.start,
      start: h.character,
      length: h.length,
      line: h.line,
      text: h.text || ""
    })),
    queries: [
      ...result.queries.map((q) => ({
        kind: "query",
        docs: q.docs || "",
        offset: q.character,
        start: q.start,
        length: q.length,
        line: q.line + 1,
        text: q.text
      })),
      ...result.completions.map((q) => ({
        kind: "completions",
        offset: q.character,
        start: q.start,
        length: q.length,
        line: q.line + 1,
        completions: q.completions,
        completionsPrefix: q.completionsPrefix
      }))
    ].sort((a, b) => a.start - b.start),
    errors: result.errors.map((e) => ({
      id: e.id ?? "",
      code: e.code,
      start: e.start,
      length: e.length,
      line: e.line,
      character: e.character,
      renderedMessage: e.text,
      category: errorLevelToCategory(e.level)
    })),
    playgroundURL: ""
  };
}
function errorLevelToCategory(level) {
  switch (level) {
    case "warning":
      return 0;
    case "suggestion":
      return 2;
    case "message":
      return 3;
    case "error":
      return 1;
  }
  return 1;
}

const cwd = typeof process !== "undefined" && typeof process.cwd === "function" ? process.cwd() : "";
function createTwoslasher(opts) {
  return core.createTwoslasher({
    vfsRoot: cwd,
    tsModule: ts__default,
    ...opts
  });
}
function twoslasher(code, lang, opts) {
  return core.twoslasher(code, lang, {
    vfsRoot: cwd,
    tsModule: ts__default,
    ...opts
  });
}
function twoslasherLegacy(code, lang, opts) {
  return convertLegacyReturn(
    core.twoslasher(code, lang, convertLegacyOptions({
      vfsRoot: cwd,
      tsModule: ts__default,
      ...opts
    }))
  );
}

exports.validateCodeForErrors = core.validateCodeForErrors;
exports.TwoslashError = fallback.TwoslashError;
exports.defaultCompilerOptions = fallback.defaultCompilerOptions;
exports.defaultHandbookOptions = fallback.defaultHandbookOptions;
exports.findCutNotations = fallback.findCutNotations;
exports.findFlagNotations = fallback.findFlagNotations;
exports.findQueryMarkers = fallback.findQueryMarkers;
exports.getObjectHash = fallback.getObjectHash;
exports.removeTwoslashNotations = fallback.removeTwoslashNotations;
exports.convertLegacyOptions = convertLegacyOptions;
exports.convertLegacyReturn = convertLegacyReturn;
exports.createTwoslasher = createTwoslasher;
exports.twoslasher = twoslasher;
exports.twoslasherLegacy = twoslasherLegacy;
Object.keys(types).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = types[k];
});
