import { removeCodeRanges } from 'twoslash-protocol';

const defaultCompilerOptions = {
  strict: true,
  module: 99,
  target: 99,
  allowJs: true,
  skipDefaultLibCheck: true,
  skipLibCheck: true,
  moduleDetection: 3
};
const defaultHandbookOptions = {
  errors: [],
  noErrors: false,
  noErrorsCutted: false,
  noErrorValidation: false,
  noStaticSemanticInfo: false,
  showEmit: false,
  showEmittedFile: void 0,
  keepNotations: false
};

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class TwoslashError extends Error {
  constructor(title, description, recommendation, code) {
    let message = `
## ${title}

${description}
`;
    if (recommendation)
      message += `
${recommendation}`;
    if (code)
      message += `
${code}`;
    super(message);
    __publicField(this, "title");
    __publicField(this, "description");
    __publicField(this, "recommendation");
    __publicField(this, "code");
    this.title = title;
    this.description = description;
    this.recommendation = recommendation;
    this.code = code;
  }
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

const reConfigBoolean = /^\/\/\s?@(\w+)$/gm;
const reConfigValue = /^\/\/\s?@(\w+):\s?(.+)$/gm;
const reAnnonateMarkers = /^\s*\/\/\s*\^(\?|\||\^+)( .*)?$/gm;
const reCutBefore = /^[\t\v\f ]*\/\/\s?---cut(-before)?---\r?\n/gm;
const reCutAfter = /^[\t\v\f ]*\/\/\s?---cut-after---$/gm;
const reCutStart = /^[\t\v\f ]*\/\/\s?---cut-start---$/gm;
const reCutEnd = /^[\t\v\f ]*\/\/\s?---cut-end---\r?\n/gm;
const reFilenamesMakers = /^[\t\v\f ]*\/\/\s?@filename: (.+)$/gm;

function getObjectHash(obj) {
  return objectHash(obj);
}
function parsePrimitive(value, type) {
  if (typeof value === type)
    return value;
  switch (type) {
    case "number":
      return +value;
    case "string":
      return value;
    case "boolean":
      return value.toLowerCase() === "true" || value.length === 0;
  }
  throw new TwoslashError(
    `Unknown primitive value in compiler flag`,
    `The only recognized primitives are number, string and boolean. Got ${type} with ${value}.`,
    `This is likely a typo.`
  );
}
function typesToExtension(types) {
  const map = {
    js: "js",
    javascript: "js",
    ts: "ts",
    typescript: "ts",
    tsx: "tsx",
    jsx: "jsx",
    json: "json",
    jsn: "json",
    map: "json",
    mts: "ts",
    cts: "ts",
    mjs: "js",
    cjs: "js"
  };
  if (map[types])
    return map[types];
  throw new TwoslashError(
    `Unknown TypeScript extension given to Twoslash`,
    `Received ${types} but Twoslash only accepts: ${Object.keys(map)} `,
    ``
  );
}
function getIdentifierTextSpans(ts, sourceFile, fileOffset) {
  const textSpans = [];
  checkChildren(sourceFile);
  return textSpans;
  function checkChildren(node) {
    ts.forEachChild(node, (child) => {
      if (ts.isIdentifier(child)) {
        const text = child.getText(sourceFile);
        const start = child.getStart(sourceFile, false) + fileOffset;
        const end = start + text.length;
        textSpans.push([start, end, text]);
      }
      checkChildren(child);
    });
  }
}
function getOptionValueFromMap(name, key, optMap) {
  const result = optMap.get(key.toLowerCase());
  if (result === void 0) {
    const keys = Array.from(optMap.keys());
    throw new TwoslashError(
      `Invalid inline compiler value`,
      `Got ${key} for ${name} but it is not a supported value by the TS compiler.`,
      `Allowed values: ${keys.join(",")}`
    );
  }
  return result;
}
function splitFiles(code, defaultFileName, root) {
  const matches = Array.from(code.matchAll(reFilenamesMakers));
  const allFilenames = matches.map((match) => match[1].trimEnd());
  let currentFileName = allFilenames.includes(defaultFileName) ? "__index__.ts" : defaultFileName;
  const files = [];
  let index = 0;
  for (const match of matches) {
    const offset = match.index;
    const content = code.slice(index, offset);
    if (content) {
      files.push({
        offset: index,
        filename: currentFileName,
        filepath: root + currentFileName,
        content,
        extension: getExtension(currentFileName)
      });
    }
    currentFileName = match[1].trimEnd();
    index = offset;
  }
  if (index < code.length) {
    const content = code.slice(index);
    files.push({
      offset: index,
      filename: currentFileName,
      filepath: root + currentFileName,
      content,
      extension: getExtension(currentFileName)
    });
  }
  return files;
}
function getExtension(fileName) {
  return fileName.split(".").pop();
}
function parseFlag(name, value, start, end, customTags, tsOptionDeclarations) {
  if (customTags.includes(name)) {
    return {
      type: "tag",
      name,
      value,
      start,
      end
    };
  }
  const compilerDecl = tsOptionDeclarations.find((d) => d.name.toLocaleLowerCase() === name.toLocaleLowerCase());
  if (compilerDecl) {
    switch (compilerDecl.type) {
      case "number":
      case "string":
      case "boolean":
        return {
          type: "compilerOptions",
          name: compilerDecl.name,
          value: parsePrimitive(value, compilerDecl.type),
          start,
          end
        };
      case "list": {
        const elementType = compilerDecl.element.type;
        const strings = value.split(",");
        const resolved = typeof elementType === "string" ? strings.map((v) => parsePrimitive(v, elementType)) : strings.map((v) => getOptionValueFromMap(compilerDecl.name, v, elementType));
        return {
          type: "compilerOptions",
          name: compilerDecl.name,
          value: resolved,
          start,
          end
        };
      }
      case "object":
        return {
          type: "compilerOptions",
          name: compilerDecl.name,
          value: JSON.parse(value),
          start,
          end
        };
      default: {
        return {
          type: "compilerOptions",
          name: compilerDecl.name,
          value: getOptionValueFromMap(compilerDecl.name, value, compilerDecl.type),
          start,
          end
        };
      }
    }
  }
  if (Object.keys(defaultHandbookOptions).includes(name)) {
    if (name === "errors" && typeof value === "string")
      value = value.split(" ").map(Number);
    if (name === "noErrors" && typeof value === "string") {
      if (value === "true")
        value = true;
      else if (value === "false")
        value = false;
      else
        value = value.split(" ").map(Number);
    }
    return {
      type: "handbookOptions",
      name,
      value,
      start,
      end
    };
  }
  return {
    type: "unknown",
    name,
    value,
    start,
    end
  };
}
function findFlagNotations(code, customTags, tsOptionDeclarations) {
  const flagNotations = [];
  Array.from(code.matchAll(reConfigBoolean)).forEach((match) => {
    const index = match.index;
    const name = match[1];
    flagNotations.push(
      parseFlag(name, true, index, index + match[0].length + 1, customTags, tsOptionDeclarations)
    );
  });
  Array.from(code.matchAll(reConfigValue)).forEach((match) => {
    const name = match[1];
    if (name === "filename")
      return;
    const index = match.index;
    const value = match[2];
    flagNotations.push(
      parseFlag(name, value, index, index + match[0].length + 1, customTags, tsOptionDeclarations)
    );
  });
  return flagNotations;
}
function findCutNotations(code, meta) {
  const removals = [];
  const cutBefore = [...code.matchAll(reCutBefore)];
  const cutAfter = [...code.matchAll(reCutAfter)];
  const cutStart = [...code.matchAll(reCutStart)];
  const cutEnd = [...code.matchAll(reCutEnd)];
  if (cutBefore.length) {
    const last = cutBefore[cutBefore.length - 1];
    removals.push([0, last.index + last[0].length]);
  }
  if (cutAfter.length) {
    const first = cutAfter[0];
    removals.push([first.index, code.length]);
  }
  if (cutStart.length !== cutEnd.length) {
    throw new TwoslashError(
      `Mismatched cut markers`,
      `You have ${cutStart.length} cut-starts and ${cutEnd.length} cut-ends`,
      `Make sure you have a matching pair for each.`
    );
  }
  for (let i = 0; i < cutStart.length; i++) {
    const start = cutStart[i];
    const end = cutEnd[i];
    if (start.index > end.index) {
      throw new TwoslashError(
        `Mismatched cut markers`,
        `You have a cut-start at ${start.index} which is after the cut-end at ${end.index}`,
        `Make sure you have a matching pair for each.`
      );
    }
    removals.push([start.index, end.index + end[0].length]);
  }
  if (meta)
    meta.removals.push(...removals);
  return removals;
}
function findQueryMarkers(code, meta, pc) {
  if (code.includes("//")) {
    const linesQuery = /* @__PURE__ */ new Set();
    Array.from(code.matchAll(reAnnonateMarkers)).forEach((match) => {
      const type = match[1];
      const index = match.index;
      meta.removals.push([index, index + match[0].length + 1]);
      const markerIndex = match[0].indexOf("^");
      const pos = pc.indexToPos(index + markerIndex);
      let targetLine = pos.line - 1;
      while (linesQuery.has(targetLine) && targetLine >= 0)
        targetLine -= 1;
      const targetIndex = pc.posToIndex(targetLine, pos.character);
      if (type === "?") {
        meta.positionQueries.push(targetIndex);
      } else if (type === "|") {
        meta.positionCompletions.push(targetIndex);
      } else {
        const markerLength = match[0].lastIndexOf("^") - markerIndex + 1;
        meta.positionHighlights.push([
          targetIndex,
          targetIndex + markerLength,
          match[2]?.trim()
        ]);
      }
      linesQuery.add(pos.line);
    });
  }
  return meta;
}
function removeTsExtension(filename) {
  const sansMapOrDTS = filename.replace(/\.map$/, "").replace(/\.d\.ts$/, ".ts").replace(/\.map$/, "");
  return sansMapOrDTS.replace(/\.[^/.]+$/, "");
}

const flagKeys = [
  "all",
  "allowArbitraryExtensions",
  "allowImportingTsExtensions",
  "allowJs",
  "allowSyntheticDefaultImports",
  "allowUmdGlobalAccess",
  "allowUnreachableCode",
  "allowUnusedLabels",
  "alwaysStrict",
  "assumeChangesOnlyAffectDirectDependencies",
  "baseUrl",
  "build",
  "charset",
  "checkJs",
  "composite",
  "customConditions",
  "declaration",
  "declarationDir",
  "declarationMap",
  "diagnostics",
  "disableReferencedProjectLoad",
  "disableSizeLimit",
  "disableSolutionSearching",
  "disableSourceOfProjectReferenceRedirect",
  "downlevelIteration",
  "emitBOM",
  "emitDeclarationOnly",
  "emitDecoratorMetadata",
  "errors",
  "esModuleInterop",
  "exactOptionalPropertyTypes",
  "experimentalDecorators",
  "explainFiles",
  "extendedDiagnostics",
  "forceConsistentCasingInFileNames",
  "generateCpuProfile",
  "generateTrace",
  "help",
  "help",
  "ignoreDeprecations",
  "importHelpers",
  "importsNotUsedAsValues",
  "incremental",
  "init",
  "inlineSourceMap",
  "inlineSources",
  "isolatedModules",
  "jsx",
  "jsxFactory",
  "jsxFragmentFactory",
  "jsxImportSource",
  "keepNotations",
  "keyofStringsOnly",
  "lib",
  "listEmittedFiles",
  "listFiles",
  "listFilesOnly",
  "locale",
  "mapRoot",
  "maxNodeModuleJsDepth",
  "module",
  "moduleDetection",
  "moduleResolution",
  "moduleSuffixes",
  "newLine",
  "noEmit",
  "noEmitHelpers",
  "noEmitOnError",
  "noErrorTruncation",
  "noErrorValidation",
  "noErrors",
  "noErrorsCutted",
  "noFallthroughCasesInSwitch",
  "noImplicitAny",
  "noImplicitOverride",
  "noImplicitReturns",
  "noImplicitThis",
  "noImplicitUseStrict",
  "noLib",
  "noPropertyAccessFromIndexSignature",
  "noResolve",
  "noStaticSemanticInfo",
  "noStrictGenericChecks",
  "noUncheckedIndexedAccess",
  "noUnusedLocals",
  "noUnusedParameters",
  "out",
  "outDir",
  "outFile",
  "paths",
  "plugins",
  "preserveConstEnums",
  "preserveSymlinks",
  "preserveValueImports",
  "preserveWatchOutput",
  "pretty",
  "project",
  "reactNamespace",
  "removeComments",
  "resolveJsonModule",
  "resolvePackageJsonExports",
  "resolvePackageJsonImports",
  "rootDir",
  "rootDirs",
  "showConfig",
  "showEmit",
  "showEmittedFile",
  "skipDefaultLibCheck",
  "skipLibCheck",
  "sourceMap",
  "sourceRoot",
  "strict",
  "strictBindCallApply",
  "strictFunctionTypes",
  "strictNullChecks",
  "strictPropertyInitialization",
  "stripInternal",
  "suppressExcessPropertyErrors",
  "suppressImplicitAnyIndexErrors",
  "target",
  "traceResolution",
  "tsBuildInfoFile",
  "typeRoots",
  "types",
  "useDefineForClassFields",
  "useUnknownInCatchVariables",
  "verbatimModuleSyntax",
  "version",
  "watch"
];

function removeTwoslashNotations(code, customTags) {
  const meta = {
    removals: []
  };
  const tags = [
    ...customTags ?? [],
    ...flagKeys
  ];
  Array.from(code.matchAll(reConfigBoolean)).forEach((match) => {
    if (!tags.includes(match[1]))
      return;
    meta.removals.push([match.index, match.index + match[0].length + 1]);
  });
  Array.from(code.matchAll(reConfigValue)).forEach((match) => {
    if (!tags.includes(match[1]))
      return;
    meta.removals.push([match.index, match.index + match[0].length + 1]);
  });
  findCutNotations(code, meta);
  Array.from(code.matchAll(reAnnonateMarkers)).forEach((match) => {
    const index = match.index;
    meta.removals.push([index, index + match[0].length + 1]);
  });
  return removeCodeRanges(code, meta.removals).code;
}

export { TwoslashError as T, findFlagNotations as a, findQueryMarkers as b, defaultHandbookOptions as c, defaultCompilerOptions as d, removeTsExtension as e, findCutNotations as f, getObjectHash as g, getExtension as h, getIdentifierTextSpans as i, removeTwoslashNotations as r, splitFiles as s, typesToExtension as t };
