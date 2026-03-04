import ts from 'typescript';
import { createTwoslasher as createTwoslasher$1, twoslasher as twoslasher$1 } from './core.mjs';
export { validateCodeForErrors } from './core.mjs';
export { T as TwoslashError, d as defaultCompilerOptions, c as defaultHandbookOptions, f as findCutNotations, a as findFlagNotations, b as findQueryMarkers, g as getObjectHash, r as removeTwoslashNotations } from './shared/twoslash.a8564bda.mjs';
export * from 'twoslash-protocol/types';
import '@typescript/vfs';
import 'twoslash-protocol';

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
  return createTwoslasher$1({
    vfsRoot: cwd,
    tsModule: ts,
    ...opts
  });
}
function twoslasher(code, lang, opts) {
  return twoslasher$1(code, lang, {
    vfsRoot: cwd,
    tsModule: ts,
    ...opts
  });
}
function twoslasherLegacy(code, lang, opts) {
  return convertLegacyReturn(
    twoslasher$1(code, lang, convertLegacyOptions({
      vfsRoot: cwd,
      tsModule: ts,
      ...opts
    }))
  );
}

export { convertLegacyOptions, convertLegacyReturn, createTwoslasher, twoslasher, twoslasherLegacy };
