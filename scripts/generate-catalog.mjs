import { readFile, writeFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const registryUrl = new URL('registry/templates.json', root)
const readmeUrl = new URL('README.md', root)

const START = '<!-- registry-catalog:start -->'
const END = '<!-- registry-catalog:end -->'

const registry = JSON.parse(await readFile(registryUrl, 'utf8'))
const readme = await readFile(readmeUrl, 'utf8')

const statusLabel = {
  verified: '✅ Verified',
  community: '🟦 Community',
  experimental: '🧪 Experimental',
}

const escapeCell = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ')
const code = (value) => `<code>${escapeCell(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</code>`

const rows = registry.templates.map((entry) => {
  const href = entry.source.type === 'hosted'
    ? `./${entry.source.path}/`
    : entry.source.repository
  const source = entry.source.type === 'hosted' ? 'Hosted' : 'External'
  const tags = entry.tags.map((tag) => `\`${tag}\``).join(', ')

  return `| [${escapeCell(entry.name)}](${href}) | ${statusLabel[entry.status]} | ${source} | ${tags} | ${code(entry.usage.command)} |`
})

const generated = [
  START,
  '| Template | Status | Source | Highlights | Start |',
  '| --- | --- | --- | --- | --- |',
  ...rows,
  END,
].join('\n')

const startIndex = readme.indexOf(START)
const endIndex = readme.indexOf(END)

if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
  console.error(`README.md must contain ${START} and ${END}`)
  process.exit(1)
}

const endOffset = endIndex + END.length
const current = readme.slice(startIndex, endOffset)

if (process.argv.includes('--check')) {
  if (current !== generated) {
    console.error('README template catalog is out of date. Run: npm run registry:catalog')
    process.exit(1)
  }
  console.log(`README template catalog is up to date (${registry.templates.length} entries).`)
} else {
  const next = `${readme.slice(0, startIndex)}${generated}${readme.slice(endOffset)}`
  await writeFile(readmeUrl, next)
  console.log(`Updated README template catalog (${registry.templates.length} entries).`)
}
