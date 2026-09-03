import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const check = process.argv.includes('--check')
const output = check ? resolve(root, '.tmp/gallery-check') : resolve(root, 'dist/site')

const registry = JSON.parse(await readFile(resolve(root, 'registry/templates.json'), 'utf8'))
const galleryFiles = ['index.html', 'styles.css', 'app.js']

await rm(output, { recursive: true, force: true })

async function copy(source, destination) {
  await mkdir(dirname(destination), { recursive: true })
  await copyFile(source, destination)
}

for (const file of galleryFiles)
  await copy(resolve(root, 'gallery', file), resolve(output, 'gallery', file))

const builtRegistry = structuredClone(registry)

for (const entry of builtRegistry.templates) {
  if (entry.preview.type !== 'local') continue

  const source = resolve(root, entry.preview.value)
  const extension = extname(entry.preview.value) || extname(basename(entry.preview.value))
  const destinationPath = `previews/${entry.id}${extension}`
  await copy(source, resolve(output, 'gallery', destinationPath))
  entry.preview.type = 'url'
  entry.preview.value = `./${destinationPath}`
}

await mkdir(resolve(output, 'gallery'), { recursive: true })
await writeFile(
  resolve(output, 'gallery', 'templates.json'),
  `${JSON.stringify(builtRegistry, null, 2)}\n`,
)

const built = JSON.parse(await readFile(resolve(output, 'gallery', 'templates.json'), 'utf8'))
if (built.templates.length !== registry.templates.length)
  throw new Error('Gallery registry entry count changed during the build.')

if (check) {
  await rm(resolve(root, '.tmp'), { recursive: true, force: true })
  console.log(`Gallery build check passed (${built.templates.length} entries).`)
} else {
  console.log(`Built static gallery at dist/site/gallery (${built.templates.length} entries).`)
}
