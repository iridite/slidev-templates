'use strict';

const languageCore = require('@vue/language-core');
const twoslash = require('twoslash');
const twoslashProtocol = require('twoslash-protocol');
const ts = require('typescript');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const ts__default = /*#__PURE__*/_interopDefaultCompat(ts);

function createTwoslasher(createOptions = {}) {
  const twoslasherBase = twoslash.createTwoslasher(createOptions);
  const cache = twoslasherBase.getCacheMap();
  const tsOptionDeclarations = ts__default.optionDeclarations;
  function getVueLanguage(compilerOptions, vueCompilerOptions) {
    if (!cache)
      return getLanguage();
    const key = `vue:${twoslash.getObjectHash([compilerOptions, vueCompilerOptions])}`;
    if (!cache.has(key)) {
      const env = getLanguage();
      cache.set(key, env);
      return env;
    }
    return cache.get(key);
    function getLanguage() {
      const resolvedVueOptions = languageCore.resolveVueCompilerOptions(vueCompilerOptions);
      resolvedVueOptions.__setupedGlobalTypes = languageCore.setupGlobalTypes(ts__default.sys.getCurrentDirectory(), resolvedVueOptions, ts__default.sys);
      const vueLanguagePlugin = languageCore.createVueLanguagePlugin(ts__default, twoslash.defaultCompilerOptions, resolvedVueOptions, (id) => id);
      return languageCore.createLanguage(
        [vueLanguagePlugin],
        new languageCore.FileMap(ts__default.sys.useCaseSensitiveFileNames),
        () => {
        }
      );
    }
  }
  function twoslasher(code, extension, options = {}) {
    if (extension !== "vue")
      return twoslasherBase(code, extension, options);
    const vueCompilerOptions = {
      ...createOptions.vueCompilerOptions,
      ...options.vueCompilerOptions
    };
    const compilerOptions = {
      ...twoslash.defaultCompilerOptions,
      ...options.compilerOptions
    };
    const handbookOptions = {
      ...twoslash.defaultHandbookOptions,
      noErrorsCutted: true,
      ...options.handbookOptions
    };
    const sourceMeta = {
      removals: [],
      positionCompletions: [],
      positionQueries: [],
      positionHighlights: [],
      flagNotations: []
    };
    const {
      customTags = createOptions.customTags || []
    } = options;
    const pc = twoslashProtocol.createPositionConverter(code);
    twoslash.findQueryMarkers(code, sourceMeta, pc);
    const flagNotations = twoslash.findFlagNotations(code, customTags, tsOptionDeclarations);
    for (const flag of flagNotations) {
      switch (flag.type) {
        case "unknown":
          continue;
        case "compilerOptions":
          compilerOptions[flag.name] = flag.value;
          break;
        case "handbookOptions":
          handbookOptions[flag.name] = flag.value;
          break;
      }
      sourceMeta.removals.push([flag.start, flag.end]);
    }
    let strippedCode = code;
    for (const [start, end] of sourceMeta.removals) {
      strippedCode = strippedCode.slice(0, start) + strippedCode.slice(start, end).replace(/\S/g, " ") + strippedCode.slice(end);
    }
    const lang = getVueLanguage(compilerOptions, vueCompilerOptions);
    const sourceScript = lang.scripts.set("index.vue", ts__default.ScriptSnapshot.fromString(strippedCode));
    const fileCompiled = get(sourceScript.generated.embeddedCodes.values(), 2);
    const compiled = fileCompiled.snapshot.getText(0, fileCompiled.snapshot.getLength());
    const map = languageCore.defaultMapperFactory(fileCompiled.mappings);
    function getLastGeneratedOffset(pos) {
      const offsets = [...map.toGeneratedLocation(pos)];
      if (!offsets.length)
        return void 0;
      return offsets[offsets.length - 1]?.[0];
    }
    const result = twoslasherBase(compiled, "tsx", {
      ...options,
      compilerOptions: {
        jsx: 1,
        jsxImportSource: "vue",
        noImplicitAny: false,
        ...compilerOptions
      },
      handbookOptions: {
        ...handbookOptions,
        keepNotations: true
      },
      shouldGetHoverInfo(id) {
        return !id.startsWith("__VLS");
      },
      positionCompletions: sourceMeta.positionCompletions.map((p) => getLastGeneratedOffset(p)),
      positionQueries: sourceMeta.positionQueries.map((p) => get(map.toGeneratedLocation(p), 0)?.[0]).filter(isNotNull),
      positionHighlights: sourceMeta.positionHighlights.map(([start, end]) => [
        get(map.toGeneratedLocation(start), 0)?.[0],
        get(map.toGeneratedLocation(end), 0)?.[0]
      ]).filter((x) => x[0] != null && x[1] != null)
    });
    if (createOptions.debugShowGeneratedCode)
      return result;
    const mappedNodes = result.nodes.map((q) => {
      if ("text" in q && q.text === "any")
        return void 0;
      const startMap = get(map.toSourceLocation(q.start), 0);
      if (!startMap)
        return void 0;
      const start = startMap[0];
      let end = get(map.toSourceLocation(q.start + q.length), 0)?.[0];
      if (end == null && startMap[1].sourceOffsets[0] === startMap[0])
        end = startMap[1].sourceOffsets[1];
      if (end == null || start < 0 || end < 0 || start > end)
        return void 0;
      return Object.assign(q, {
        ...q,
        target: code.slice(start, end),
        start: startMap[0],
        length: end - start
      });
    }).filter(isNotNull);
    const mappedRemovals = [
      ...sourceMeta.removals,
      ...result.meta.removals.map((r) => {
        const start = get(map.toSourceLocation(r[0]), 0)?.[0] ?? code.match(/(?<=<script[\s\S]*>\s)/)?.index;
        const end = get(map.toSourceLocation(r[1]), 0)?.[0];
        if (start == null || end == null || start < 0 || end < 0 || start >= end)
          return void 0;
        return [start, end];
      }).filter(isNotNull)
    ];
    if (!options.handbookOptions?.keepNotations) {
      const removed = twoslashProtocol.removeCodeRanges(code, mappedRemovals, mappedNodes);
      result.code = removed.code;
      result.meta.removals = removed.removals;
      result.nodes = twoslashProtocol.resolveNodePositions(removed.nodes, result.code);
    } else {
      result.meta.removals = mappedRemovals;
    }
    result.nodes = result.nodes.filter((n, idx) => {
      const next = result.nodes[idx + 1];
      if (!next)
        return true;
      if (next.type === n.type && next.start === n.start)
        return false;
      return true;
    });
    result.meta.extension = "vue";
    return result;
  }
  twoslasher.getCacheMap = twoslasherBase.getCacheMap;
  return twoslasher;
}
const createTwoslasherVue = createTwoslasher;
function isNotNull(x) {
  return x != null;
}
function get(iterator, index) {
  for (const item of iterator) {
    if (index-- === 0)
      return item;
  }
  return void 0;
}

exports.createTwoslasher = createTwoslasher;
exports.createTwoslasherVue = createTwoslasherVue;
