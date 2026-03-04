'use strict';

function isInRange(index, range, inclusive = true) {
  if (inclusive)
    return range[0] <= index && index <= range[1];
  else
    return range[0] < index && index < range[1];
}
function isInRanges(index, ranges, inclusive = true) {
  return ranges.find((range) => isInRange(index, range, inclusive));
}
function mergeRanges(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const range of ranges) {
    const last = merged[merged.length - 1];
    if (last && last[1] >= range[0])
      last[1] = Math.max(last[1], range[1]);
    else
      merged.push(range);
  }
  return merged;
}
function splitLines(code, preserveEnding = false) {
  const parts = code.split(/(\r?\n)/g);
  let index = 0;
  const lines = [];
  for (let i = 0; i < parts.length; i += 2) {
    const line = preserveEnding ? parts[i] + (parts[i + 1] || "") : parts[i];
    lines.push([line, index]);
    index += parts[i].length;
    index += parts[i + 1]?.length || 0;
  }
  return lines;
}
function createPositionConverter(code) {
  const lines = splitLines(code, true).map(([line]) => line);
  function indexToPos(index) {
    let character = index;
    let line = 0;
    for (const lineText of lines) {
      if (character < lineText.length)
        break;
      character -= lineText.length;
      line++;
    }
    return { line, character };
  }
  function posToIndex(line, character) {
    let index = 0;
    for (let i = 0; i < line; i++)
      index += lines[i].length;
    index += character;
    return index;
  }
  return {
    lines,
    indexToPos,
    posToIndex
  };
}
function removeCodeRanges(code, removals, nodes) {
  const ranges = mergeRanges(removals).sort((a, b) => b[0] - a[0]);
  let outputCode = code;
  for (const remove of ranges) {
    const removalLength = remove[1] - remove[0];
    outputCode = outputCode.slice(0, remove[0]) + outputCode.slice(remove[1]);
    nodes?.forEach((node) => {
      if (node.start + node.length <= remove[0])
        return void 0;
      else if (node.start < remove[1])
        node.start = -1;
      else
        node.start -= removalLength;
    });
  }
  return {
    code: outputCode,
    removals: ranges,
    nodes
  };
}
function resolveNodePositions(nodes, options) {
  const indexToPos = typeof options === "string" ? createPositionConverter(options).indexToPos : options;
  const resolved = nodes.filter((node) => node.start >= 0).sort((a, b) => a.start - b.start || a.type.localeCompare(b.type));
  resolved.forEach((node) => Object.assign(node, indexToPos(node.start)));
  return resolved;
}

exports.createPositionConverter = createPositionConverter;
exports.isInRange = isInRange;
exports.isInRanges = isInRanges;
exports.mergeRanges = mergeRanges;
exports.removeCodeRanges = removeCodeRanges;
exports.resolveNodePositions = resolveNodePositions;
exports.splitLines = splitLines;
