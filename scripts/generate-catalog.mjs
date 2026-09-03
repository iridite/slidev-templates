import { readFile, writeFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const registry = JSON.parse(await readFile(new URL('registry/templates.json', root), 'utf8'))

const targets = [
  {
    path: 'README.md',
    statsStart: '<!-- registry-stats:start -->',
    statsEnd: '<!-- registry-stats:end -->',
    catalogStart: '<!-- registry-catalog:start -->',
    catalogEnd: '<!-- registry-catalog:end -->',
    status: { verified: '✅ Verified', community: '🟦 Community', experimental: '🧪 Experimental' },
    source: { hosted: 'Hosted', external: 'External' },
    headers: ['Template', 'Status', 'Source', 'Focus', 'Verification', 'Start'],
    stats: ({ total, hosted, external, verified }) =>
      `**${total} curated workflows · ${hosted} repository-hosted starters · ${external} upstream-governed listings · ${verified} verified entries**`,
  },
  {
    path: 'README.zh-CN.md',
    statsStart: '<!-- registry-stats-zh:start -->',
    statsEnd: '<!-- registry-stats-zh:end -->',
    catalogStart: '<!-- registry-catalog-zh:start -->',
    catalogEnd: '<!-- registry-catalog-zh:end -->',
    status: { verified: '✅ 已验证', community: '🟦 社区收录', experimental: '🧪 实验性' },
    source: { hosted: '本仓库托管', external: '外部上游' },
    headers: ['模板', '状态', '来源', '定位', '验证', '快速开始'],
    stats: ({ total, hosted, external, verified }) =>
      `**${total} 个经过筛选的工作流 · ${hosted} 个仓库托管模板 · ${external} 个上游治理条目 · ${verified} 个已验证条目**`,
  },
]

const escapeCell = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ')
const code = (value) => `<code>${escapeCell(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')}</code>`

function replaceBlock(content, start, end, generated, path) {
  const startIndex = content.indexOf(start)
  const endIndex = content.indexOf(end)

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex)
    throw new Error(`${path} must contain ${start} and ${end}`)

  return `${content.slice(0, startIndex)}${generated}${content.slice(endIndex + end.length)}`
}

function tableFor(target) {
  const rows = registry.templates.map((entry) => {
    const href = entry.source.type === 'hosted'
      ? `./${entry.source.path}/`
      : entry.source.repository
    const focus = entry.categories.map((value) => `\`${value}\``).join(', ')
    const level = entry.verification.level.replaceAll('-', ' ')

    return `| [${escapeCell(entry.name)}](${href}) | ${target.status[entry.status]} | ${target.source[entry.source.type]} | ${focus} | ${escapeCell(level)} | ${code(entry.usage.command)} |`
  })

  return [
    target.catalogStart,
    `| ${target.headers.join(' | ')} |`,
    `| ${target.headers.map(() => '---').join(' | ')} |`,
    ...rows,
    target.catalogEnd,
  ].join('\n')
}

const counts = {
  total: registry.templates.length,
  hosted: registry.templates.filter((entry) => entry.source.type === 'hosted').length,
  external: registry.templates.filter((entry) => entry.source.type === 'external').length,
  verified: registry.templates.filter((entry) => entry.status === 'verified').length,
}

let changed = false

for (const target of targets) {
  const url = new URL(target.path, root)
  const original = await readFile(url, 'utf8')
  const statsBlock = [target.statsStart, target.stats(counts), target.statsEnd].join('\n')
  const catalogBlock = tableFor(target)

  let next = replaceBlock(original, target.statsStart, target.statsEnd, statsBlock, target.path)
  next = replaceBlock(next, target.catalogStart, target.catalogEnd, catalogBlock, target.path)

  if (next !== original) {
    changed = true
    if (!process.argv.includes('--check'))
      await writeFile(url, next)
  }
}

if (process.argv.includes('--check')) {
  if (changed) {
    console.error('Generated README registry sections are out of date. Run: npm run registry:catalog')
    process.exit(1)
  }
  console.log(`Generated registry sections are current (${counts.total} entries).`)
} else {
  console.log(`Updated generated registry sections (${counts.total} entries).`)
}
