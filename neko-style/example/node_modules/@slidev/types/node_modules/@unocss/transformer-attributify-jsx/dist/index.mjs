import { toArray } from '@unocss/core';

function createFilter(include, exclude) {
  const includePattern = toArray(include || []);
  const excludePattern = toArray(exclude || []);
  return (id) => {
    if (excludePattern.some((p) => id.match(p)))
      return false;
    return includePattern.some((p) => id.match(p));
  };
}
const elementRE = /<([^/?<>0-9$_!][^\s>]*)\s+((?:"[^"]*"|'[^"]*'|(\{[^}]*\})|[^{>])+)>/g;
const attributeRE = /(?<![~`!$%^&*()_+\-=[{;':"|,.<>/?])([a-z()#][[?\w\-:()#%\]]*)(?:\s*=\s*('[^']*'|"[^"]*"|\S+))?|\{[^}]*\}/gi;
const valuedAttributeRE = /((?!\d|-{2}|-\d)[\w\u00A0-\uFFFF:!%.~<-]+)=(?:"[^"]*"|'[^']*'|(\{)((?:[`(][^`)]*[`)]|[^}])+)(\}))/g;
function transformerAttributifyJsx(options = {}) {
  const {
    blocklist = []
  } = options;
  const isBlocked = (matchedRule) => {
    for (const blockedRule of blocklist) {
      if (blockedRule instanceof RegExp) {
        if (blockedRule.test(matchedRule))
          return true;
      } else if (matchedRule === blockedRule) {
        return true;
      }
    }
    return false;
  };
  const idFilter = createFilter(
    options.include || [/\.[jt]sx$/, /\.mdx$/],
    options.exclude || []
  );
  return {
    name: "@unocss/transformer-attributify-jsx",
    enforce: "pre",
    idFilter,
    async transform(code, _, { uno }) {
      const tasks = [];
      const attributify = uno.config.presets.find((i) => i.name === "@unocss/preset-attributify");
      const attributifyPrefix = attributify?.options?.prefix ?? "un-";
      for (const item of Array.from(code.original.matchAll(elementRE))) {
        let attributifyPart = item[2];
        if (valuedAttributeRE.test(attributifyPart)) {
          attributifyPart = attributifyPart.replace(valuedAttributeRE, (match, _2, dynamicFlagStart) => {
            if (!dynamicFlagStart)
              return " ".repeat(match.length);
            let preLastModifierIndex = 0;
            let temp = match;
            for (const _item of match.matchAll(elementRE)) {
              const attrAttributePart = _item[2];
              if (valuedAttributeRE.test(attrAttributePart))
                attrAttributePart.replace(valuedAttributeRE, (m) => " ".repeat(m.length));
              const pre = temp.slice(0, preLastModifierIndex) + " ".repeat(_item.index + _item[0].indexOf(_item[2]) - preLastModifierIndex) + attrAttributePart;
              temp = pre + " ".repeat(_item.input.length - pre.length);
              preLastModifierIndex = pre.length;
            }
            if (preLastModifierIndex !== 0)
              return temp;
            return " ".repeat(match.length);
          });
        }
        for (const attr of attributifyPart.matchAll(attributeRE)) {
          const matchedRule = attr[0].replace(/:/, "-");
          if (matchedRule.includes("=") || isBlocked(matchedRule))
            continue;
          const updatedMatchedRule = matchedRule.startsWith(attributifyPrefix) ? matchedRule.slice(attributifyPrefix.length) : matchedRule;
          tasks.push(uno.parseToken(updatedMatchedRule).then((matched) => {
            if (matched) {
              const startIdx = (item.index || 0) + (attr.index || 0) + item[0].indexOf(item[2]);
              const endIdx = startIdx + matchedRule.length;
              code.overwrite(startIdx, endIdx, `${matchedRule}=""`);
            }
          }));
        }
      }
      await Promise.all(tasks);
    }
  };
}

export { transformerAttributifyJsx as default };
