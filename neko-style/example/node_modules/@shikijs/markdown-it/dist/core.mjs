function setupMarkdownIt(markdownit, highlighter, options) {
  const {
    parseMetaString,
    trimEndingNewline = true,
    defaultLanguage = "text",
    fallbackLanguage
  } = options;
  const langs = highlighter.getLoadedLanguages();
  markdownit.options.highlight = (code, lang = "text", attrs) => {
    if (lang === "") {
      lang = defaultLanguage;
    }
    if (fallbackLanguage && !langs.includes(lang)) {
      lang = fallbackLanguage;
    }
    const meta = parseMetaString?.(attrs, code, lang) || {};
    const codeOptions = {
      ...options,
      lang,
      meta: {
        ...options.meta,
        ...meta,
        __raw: attrs
      }
    };
    const builtInTransformer = [];
    builtInTransformer.push({
      name: "@shikijs/markdown-it:block-class",
      code(node) {
        node.properties.class = `language-${lang}`;
      }
    });
    if (trimEndingNewline) {
      if (code.endsWith("\n"))
        code = code.slice(0, -1);
    }
    return highlighter.codeToHtml(
      code,
      {
        ...codeOptions,
        transformers: [
          ...builtInTransformer,
          ...codeOptions.transformers || []
        ]
      }
    );
  };
}
function fromHighlighter(highlighter, options) {
  return function(markdownit) {
    setupMarkdownIt(markdownit, highlighter, options);
  };
}

export { fromHighlighter, setupMarkdownIt };
