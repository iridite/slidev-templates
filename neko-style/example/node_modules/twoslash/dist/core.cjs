'use strict';

const vfs = require('@typescript/vfs');
const twoslashProtocol = require('twoslash-protocol');
const fallback = require('./shared/twoslash.9a66b1ce.cjs');
const types = require('twoslash-protocol/types');

function validateCodeForErrors(relevantErrors, handbookOptions, vfsRoot) {
  const unspecifiedErrors = relevantErrors.filter((e) => e.code && !handbookOptions.errors.includes(e.code));
  const errorsFound = Array.from(new Set(unspecifiedErrors.map((e) => e.code))).join(" ");
  if (unspecifiedErrors.length) {
    const errorsToShow = new Set(relevantErrors.map((e) => e.code));
    const codeToAdd = `// @errors: ${Array.from(errorsToShow).join(" ")}`;
    const missing = handbookOptions.errors.length ? `
The existing annotation specified ${handbookOptions.errors.join(" ")}` : `
Expected: ${codeToAdd}`;
    const filesToErrors = {};
    const noFiles = [];
    unspecifiedErrors.forEach((d) => {
      const fileRef = d.filename?.replace(vfsRoot, "");
      if (!fileRef) {
        noFiles.push(d);
      } else {
        const existing = filesToErrors[fileRef];
        if (existing)
          existing.push(d);
        else
          filesToErrors[fileRef] = [d];
      }
    });
    const showDiagnostics = (title, diags) => {
      return `${title}
  ${diags.map((e) => `[${e.code}] ${e.start} - ${e.text}`).join("\n  ")}`;
    };
    const innerDiags = [];
    if (noFiles.length)
      innerDiags.push(showDiagnostics("Ambient Errors", noFiles));
    Object.keys(filesToErrors).forEach((filepath) => {
      innerDiags.push(showDiagnostics(filepath, filesToErrors[filepath]));
    });
    const allMessages = innerDiags.join("\n\n");
    const newErr = new fallback.TwoslashError(
      `Errors were thrown in the sample, but not included in an error tag`,
      `These errors were not marked as being expected: ${errorsFound}. ${missing}`,
      `Compiler Errors:

${allMessages}`
    );
    throw newErr;
  }
}

function createTwoslasher(createOptions = {}) {
  const ts = createOptions.tsModule;
  const tsOptionDeclarations = ts.optionDeclarations;
  const useFS = !!createOptions.fsMap;
  const _root = createOptions.vfsRoot.replace(/\\/g, "/");
  const vfs$1 = createOptions.fsMap || /* @__PURE__ */ new Map();
  const system = useFS ? vfs.createSystem(vfs$1) : createCacheableFSBackedSystem(vfs$1, _root, ts, createOptions.tsLibDirectory, createOptions.fsCache);
  const fsRoot = useFS ? "/" : `${_root}/`;
  const cache = createOptions.cache === false ? void 0 : createOptions.cache instanceof Map ? createOptions.cache : /* @__PURE__ */ new Map();
  function getEnv(compilerOptions) {
    if (!cache)
      return vfs.createVirtualTypeScriptEnvironment(system, [], ts, compilerOptions, createOptions.customTransformers);
    const key = fallback.getObjectHash(compilerOptions);
    if (!cache?.has(key)) {
      const env = vfs.createVirtualTypeScriptEnvironment(system, [], ts, compilerOptions, createOptions.customTransformers);
      cache?.set(key, env);
      return env;
    }
    return cache.get(key);
  }
  function twoslasher2(code, extension = "ts", options = {}) {
    const meta = {
      extension: fallback.typesToExtension(extension),
      compilerOptions: {
        ...fallback.defaultCompilerOptions,
        baseUrl: fsRoot,
        ...createOptions.compilerOptions,
        ...options.compilerOptions
      },
      handbookOptions: {
        ...fallback.defaultHandbookOptions,
        ...createOptions.handbookOptions,
        ...options.handbookOptions
      },
      removals: [],
      flagNotations: [],
      virtualFiles: [],
      positionQueries: options.positionQueries || [],
      positionCompletions: options.positionCompletions || [],
      positionHighlights: options.positionHighlights || []
    };
    const {
      customTags = createOptions.customTags || [],
      shouldGetHoverInfo = createOptions.shouldGetHoverInfo || (() => true),
      filterNode = createOptions.filterNode,
      extraFiles = createOptions.extraFiles || {}
    } = options;
    const defaultFilename = `index.${meta.extension}`;
    let nodes = [];
    const isInRemoval = (index) => index >= code.length || index < 0 || twoslashProtocol.isInRanges(index, meta.removals, false);
    meta.flagNotations = fallback.findFlagNotations(code, customTags, tsOptionDeclarations);
    for (const flag of meta.flagNotations) {
      switch (flag.type) {
        case "unknown":
          continue;
        case "compilerOptions":
          meta.compilerOptions[flag.name] = flag.value;
          break;
        case "handbookOptions":
          meta.handbookOptions[flag.name] = flag.value;
          break;
        case "tag":
          nodes.push({
            type: "tag",
            name: flag.name,
            start: flag.end,
            length: 0,
            text: flag.value
          });
          break;
      }
      meta.removals.push([flag.start, flag.end]);
    }
    if (!meta.handbookOptions.noErrorValidation) {
      const unknownFlags = meta.flagNotations.filter((i) => i.type === "unknown");
      if (unknownFlags.length) {
        throw new fallback.TwoslashError(
          `Unknown inline compiler flags`,
          `The following flags are either valid TSConfig nor handbook options:
${unknownFlags.map((i) => `@${i.name}`).join(", ")}`,
          `This is likely a typo, you can check all the compiler flags in the TSConfig reference, or check the additional Twoslash flags in the npm page for @typescript/twoslash.`
        );
      }
    }
    const env = getEnv(meta.compilerOptions);
    const ls = env.languageService;
    const pc = twoslashProtocol.createPositionConverter(code);
    fallback.findCutNotations(code, meta);
    fallback.findQueryMarkers(code, meta, pc);
    const supportedFileTyes = ["js", "jsx", "ts", "tsx"];
    meta.virtualFiles = fallback.splitFiles(code, defaultFilename, fsRoot);
    const identifiersMap = /* @__PURE__ */ new Map();
    function getIdentifiersOfFile(file) {
      if (!identifiersMap.has(file.filename)) {
        const source = env.getSourceFile(file.filepath);
        identifiersMap.set(file.filename, fallback.getIdentifierTextSpans(ts, source, file.offset - (file.prepend?.length || 0)));
      }
      return identifiersMap.get(file.filename);
    }
    function getFileAtPosition(pos) {
      return meta.virtualFiles.find((i) => twoslashProtocol.isInRange(pos, [i.offset, i.offset + i.content.length]));
    }
    function getQuickInfo(file, start, target) {
      const quickInfo = ls.getQuickInfoAtPosition(file.filepath, getOffsetInFile(start, file));
      if (quickInfo && quickInfo.displayParts) {
        const text = quickInfo.displayParts.map((dp) => dp.text).join("");
        const docs = quickInfo.documentation?.map((d) => d.text).join("\n") || void 0;
        const tags = quickInfo.tags?.map((t) => [t.name, t.text?.map((i) => i.text).join("")]);
        return {
          type: "hover",
          text,
          docs,
          tags,
          start,
          length: target.length,
          target
        };
      }
    }
    Object.entries(extraFiles).forEach(([filename, content]) => {
      if (!meta.virtualFiles.find((i) => i.filename === filename)) {
        env.createFile(
          fsRoot + filename,
          typeof content === "string" ? content : (content.prepend || "") + (content.append || "")
        );
      }
    });
    for (const file of meta.virtualFiles) {
      if (supportedFileTyes.includes(file.extension) || file.extension === "json" && meta.compilerOptions.resolveJsonModule) {
        file.supportLsp = true;
        const extra = extraFiles[file.filename];
        if (extra && typeof extra !== "string") {
          file.append = extra.append;
          file.prepend = extra.prepend;
        }
        env.createFile(file.filepath, getFileContent(file));
        getIdentifiersOfFile(file);
      }
    }
    function getOffsetInFile(offset, file) {
      return offset - file.offset + (file.prepend?.length || 0);
    }
    function getFileContent(file) {
      return (file.prepend || "") + file.content + (file.append || "");
    }
    if (!meta.handbookOptions.showEmit) {
      for (const file of meta.virtualFiles) {
        if (!file.supportLsp)
          continue;
        if (!meta.handbookOptions.noStaticSemanticInfo) {
          const identifiers = getIdentifiersOfFile(file);
          for (const [start, _end, target] of identifiers) {
            if (isInRemoval(start))
              continue;
            if (!shouldGetHoverInfo(target, start, file.filename))
              continue;
            const node = getQuickInfo(file, start, target);
            if (node)
              nodes.push(node);
          }
        }
      }
      for (const query of meta.positionQueries) {
        if (isInRemoval(query)) {
          throw new fallback.TwoslashError(
            `Invalid quick info query`,
            `The request on line ${pc.indexToPos(query).line + 2} for quickinfo via ^? is in a removal range.`,
            `This is likely that the positioning is off.`
          );
        }
        const file = getFileAtPosition(query);
        const identifiers = getIdentifiersOfFile(file);
        const id = identifiers.find((i) => twoslashProtocol.isInRange(query, i));
        let node;
        if (id)
          node = getQuickInfo(file, id[0], id[2]);
        if (node) {
          node.type = "query";
          nodes.push(node);
        } else {
          const pos = pc.indexToPos(query);
          throw new fallback.TwoslashError(
            `Invalid quick info query`,
            `The request on line ${pos.line + 2} in ${file.filename} for quickinfo via ^? returned nothing from the compiler.`,
            `This is likely that the positioning is off.`
          );
        }
      }
      for (const highlight of meta.positionHighlights) {
        nodes.push({
          type: "highlight",
          start: highlight[0],
          length: highlight[1] - highlight[0],
          text: highlight[2]
        });
      }
      for (const target of meta.positionCompletions) {
        const file = getFileAtPosition(target);
        if (isInRemoval(target) || !file) {
          throw new fallback.TwoslashError(
            `Invalid completion query`,
            `The request on line ${pc.indexToPos(target).line + 2} for completions via ^| is in a removal range.`,
            `This is likely that the positioning is off.`
          );
        }
        let prefix = code.slice(0, target).match(/[$\w]+$/)?.[0] || "";
        prefix = prefix.split(".").pop();
        let completions = [];
        if (prefix) {
          const result = ls.getCompletionsAtPosition(file.filepath, getOffsetInFile(target, file) - 1, {
            triggerKind: 1,
            includeCompletionsForModuleExports: false
          });
          completions = result?.entries ?? [];
          prefix = completions[0]?.replacementSpan && code.slice(
            completions[0].replacementSpan.start,
            target
          ) || prefix;
          completions = completions.filter((i) => i.name.startsWith(prefix));
        } else {
          prefix = code[target - 1];
          if (prefix) {
            const result = ls.getCompletionsAtPosition(file.filepath, getOffsetInFile(target, file), {
              triggerKind: 2,
              triggerCharacter: prefix,
              includeCompletionsForModuleExports: false
            });
            completions = result?.entries ?? [];
            if (completions[0]?.replacementSpan?.length) {
              prefix = code.slice(
                completions[0].replacementSpan.start,
                target
              ) || prefix;
              const newCompletions = completions.filter((i) => i.name.startsWith(prefix));
              if (newCompletions.length)
                completions = newCompletions;
            }
          }
        }
        if (!completions?.length && !meta.handbookOptions.noErrorValidation) {
          const pos = pc.indexToPos(target);
          throw new fallback.TwoslashError(
            `Invalid completion query`,
            `The request on line ${pos.line} in ${file.filename} for completions via ^| returned no completions from the compiler. (prefix: ${prefix})`,
            `This is likely that the positioning is off.`
          );
        }
        nodes.push({
          type: "completion",
          start: target,
          length: 0,
          completions,
          completionsPrefix: prefix
        });
      }
    }
    let errorNodes = [];
    for (const file of meta.virtualFiles) {
      if (!file.supportLsp)
        continue;
      if (meta.handbookOptions.noErrors !== true) {
        env.updateFile(file.filepath, getFileContent(file));
        const diagnostics = [
          ...ls.getSemanticDiagnostics(file.filepath),
          ...ls.getSyntacticDiagnostics(file.filepath)
        ];
        const ignores = Array.isArray(meta.handbookOptions.noErrors) ? meta.handbookOptions.noErrors : [];
        for (const diagnostic of diagnostics) {
          if (diagnostic.file?.fileName !== file.filepath)
            continue;
          if (ignores.includes(diagnostic.code))
            continue;
          const start = diagnostic.start + file.offset - (file.prepend?.length || 0);
          if (meta.handbookOptions.noErrorsCutted && isInRemoval(start))
            continue;
          errorNodes.push({
            type: "error",
            start,
            length: diagnostic.length,
            code: diagnostic.code,
            filename: file.filename,
            id: `err-${diagnostic.code}-${start}-${diagnostic.length}`,
            text: ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
            level: diagnosticCategoryToErrorLevel(diagnostic.category)
          });
        }
      }
    }
    if (filterNode) {
      nodes = nodes.filter(filterNode);
      errorNodes = errorNodes.filter(filterNode);
    }
    nodes.push(...errorNodes);
    if (!meta.handbookOptions.noErrorValidation && errorNodes.length)
      validateCodeForErrors(errorNodes, meta.handbookOptions, fsRoot);
    let outputCode = code;
    if (meta.handbookOptions.showEmit) {
      if (meta.handbookOptions.keepNotations) {
        throw new fallback.TwoslashError(
          `Option 'showEmit' cannot be used with 'keepNotations'`,
          "With `showEmit` enabled, the output will always be the emitted code",
          "Remove either option to continue"
        );
      }
      if (!meta.handbookOptions.keepNotations) {
        const { code: removedCode } = twoslashProtocol.removeCodeRanges(outputCode, meta.removals);
        const files = fallback.splitFiles(removedCode, defaultFilename, fsRoot);
        for (const file of files)
          env.updateFile(file.filepath, getFileContent(file));
      }
      const emitFilename = meta.handbookOptions.showEmittedFile ? meta.handbookOptions.showEmittedFile : meta.compilerOptions.jsx === 1 ? "index.jsx" : "index.js";
      let emitSource = meta.virtualFiles.find((i) => fallback.removeTsExtension(i.filename) === fallback.removeTsExtension(emitFilename))?.filename;
      if (!emitSource && !meta.compilerOptions.outFile) {
        const allFiles = meta.virtualFiles.map((i) => i.filename).join(", ");
        throw new fallback.TwoslashError(
          `Could not find source file to show the emit for`,
          `Cannot find the corresponding **source** file: '${emitFilename}'`,
          `Looked for: ${emitSource} in the vfs - which contains: ${allFiles}`
        );
      }
      if (meta.compilerOptions.outFile)
        emitSource = meta.virtualFiles[0].filename;
      const output = ls.getEmitOutput(fsRoot + emitSource);
      const outfile = output.outputFiles.find((o) => o.name === fsRoot + emitFilename || o.name === emitFilename);
      if (!outfile) {
        const allFiles = output.outputFiles.map((o) => o.name).join(", ");
        throw new fallback.TwoslashError(
          `Cannot find the output file in the Twoslash VFS`,
          `Looking for ${emitFilename} in the Twoslash vfs after compiling`,
          `Looked for" ${fsRoot + emitFilename} in the vfs - which contains ${allFiles}.`
        );
      }
      outputCode = outfile.text;
      meta.extension = fallback.typesToExtension(fallback.getExtension(outfile.name));
      meta.removals.length = 0;
      nodes.length = 0;
    }
    if (!meta.handbookOptions.keepNotations) {
      const removed = twoslashProtocol.removeCodeRanges(outputCode, meta.removals, nodes);
      outputCode = removed.code;
      nodes = removed.nodes;
      meta.removals = removed.removals;
    }
    const indexToPos = outputCode === code ? pc.indexToPos : twoslashProtocol.createPositionConverter(outputCode).indexToPos;
    const resolvedNodes = twoslashProtocol.resolveNodePositions(nodes, indexToPos);
    for (const file of meta.virtualFiles)
      env.createFile(file.filepath, "");
    for (const file of Object.keys(extraFiles))
      env.createFile(fsRoot + file, "");
    return {
      code: outputCode,
      nodes: resolvedNodes,
      meta,
      get queries() {
        return this.nodes.filter((i) => i.type === "query");
      },
      get completions() {
        return this.nodes.filter((i) => i.type === "completion");
      },
      get errors() {
        return this.nodes.filter((i) => i.type === "error");
      },
      get highlights() {
        return this.nodes.filter((i) => i.type === "highlight");
      },
      get hovers() {
        return this.nodes.filter((i) => i.type === "hover");
      },
      get tags() {
        return this.nodes.filter((i) => i.type === "tag");
      }
    };
  }
  twoslasher2.getCacheMap = () => {
    return cache;
  };
  return twoslasher2;
}
function createCacheableFSBackedSystem(vfs$1, root, ts, tsLibDirectory, enableFsCache = true) {
  function withCache(fn) {
    const cache = /* @__PURE__ */ new Map();
    return (key) => {
      const cached = cache.get(key);
      if (cached !== void 0)
        return cached;
      const result = fn(key);
      cache.set(key, result);
      return result;
    };
  }
  const cachedReadFile = withCache(ts.sys.readFile);
  const cachedTs = enableFsCache ? {
    ...ts,
    sys: {
      ...ts.sys,
      directoryExists: withCache(ts.sys.directoryExists),
      fileExists: withCache(ts.sys.fileExists),
      ...ts.sys.realpath ? { realpath: withCache(ts.sys.realpath) } : {},
      readFile(path, encoding) {
        if (encoding === void 0)
          return cachedReadFile(path);
        return ts.sys.readFile(path, encoding);
      }
    }
  } : ts;
  return {
    ...vfs.createFSBackedSystem(vfs$1, root, cachedTs, tsLibDirectory),
    // To work with non-hoisted packages structure
    realpath(path) {
      if (vfs$1.has(path))
        return path;
      return cachedTs.sys.realpath?.(path) || path;
    }
  };
}
function twoslasher(code, lang, opts) {
  return createTwoslasher({
    ...opts,
    cache: false
  })(code, lang);
}
function diagnosticCategoryToErrorLevel(e) {
  switch (e) {
    case 0:
      return "warning";
    case 1:
      return "error";
    case 2:
      return "suggestion";
    case 3:
      return "message";
    default:
      return void 0;
  }
}

exports.TwoslashError = fallback.TwoslashError;
exports.defaultCompilerOptions = fallback.defaultCompilerOptions;
exports.defaultHandbookOptions = fallback.defaultHandbookOptions;
exports.findCutNotations = fallback.findCutNotations;
exports.findFlagNotations = fallback.findFlagNotations;
exports.findQueryMarkers = fallback.findQueryMarkers;
exports.getObjectHash = fallback.getObjectHash;
exports.removeTwoslashNotations = fallback.removeTwoslashNotations;
exports.createTwoslasher = createTwoslasher;
exports.twoslasher = twoslasher;
exports.validateCodeForErrors = validateCodeForErrors;
Object.keys(types).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = types[k];
});
