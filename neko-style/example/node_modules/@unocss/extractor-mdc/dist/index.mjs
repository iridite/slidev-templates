function extractorMdc() {
  return {
    name: "@unocss/extractor-mdc",
    async extract(ctx) {
      if (!/\.(?:md|mdc|markdown)$/i.test(ctx.id ?? ""))
        return;
      ctx.code.match(/\.[\w:/\-]+/g)?.forEach((c) => {
        ctx.extracted.add(c.slice(1));
      });
    }
  };
}

export { extractorMdc as default };
