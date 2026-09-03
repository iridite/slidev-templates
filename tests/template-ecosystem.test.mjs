import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const root = resolve(new URL('..', import.meta.url).pathname)
const read = (path) => readFileSync(resolve(root, path), 'utf8')
const json = (path) => JSON.parse(read(path))
const registry = json('registry/templates.json')

const requiredRegistryKeys = [
  'id',
  'name',
  'description',
  'kind',
  'categories',
  'source',
  'author',
  'tags',
  'license',
  'preview',
  'usage',
  'status',
  'featured',
  'provenance',
  'verification',
]

test('registry represents a real hosted and external ecosystem', () => {
  assert.equal(registry.version, 1)
  assert.ok(Array.isArray(registry.templates))
  assert.ok(registry.templates.length >= 10, 'registry should contain a meaningful initial catalog')

  const ids = registry.templates.map((entry) => entry.id)
  assert.equal(new Set(ids).size, ids.length, 'template ids must be unique')

  const hosted = registry.templates.filter((entry) => entry.source.type === 'hosted')
  const external = registry.templates.filter((entry) => entry.source.type === 'external')

  assert.ok(hosted.length >= 4, 'registry should not present a one-template hosted collection')
  assert.ok(external.length >= 5, 'registry should include independently governed upstream projects')
  assert.ok(new Set(hosted.flatMap((entry) => entry.categories)).size >= 8, 'hosted templates should cover distinct use cases')
})

test('every registry entry has useful discovery and provenance metadata', () => {
  for (const entry of registry.templates) {
    for (const key of requiredRegistryKeys) assert.ok(key in entry, `${entry.id} is missing ${key}`)

    assert.match(entry.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    assert.ok(entry.description.length >= 60, `${entry.id} needs a substantive description`)
    assert.ok(Array.isArray(entry.categories) && entry.categories.length >= 2)
    assert.equal(new Set(entry.categories).size, entry.categories.length)
    assert.ok(Array.isArray(entry.tags) && entry.tags.length >= 3)
    assert.equal(new Set(entry.tags).size, entry.tags.length)
    assert.ok(['verified', 'community', 'experimental'].includes(entry.status))
    assert.ok(['hosted', 'external'].includes(entry.source.type))
    assert.ok(['original', 'inspired', 'adapted', 'external'].includes(entry.provenance.type))
    assert.ok(entry.provenance.notes.length >= 20)
    assert.ok(Array.isArray(entry.verification.checks) && entry.verification.checks.length >= 1)
    assert.ok(entry.usage.command.length >= 8)
  }
})

test('hosted entries satisfy the repository template contract', () => {
  const hosted = registry.templates.filter((entry) => entry.source.type === 'hosted')

  for (const entry of hosted) {
    assert.ok(entry.source.path)
    assert.ok(entry.source.starterPath)
    assert.ok(existsSync(resolve(root, entry.source.path)), `${entry.id} source path is missing`)
    assert.ok(existsSync(resolve(root, entry.source.starterPath, 'package.json')), `${entry.id} starter package is missing`)
    assert.ok(existsSync(resolve(root, entry.source.starterPath, 'slides.md')), `${entry.id} slides are missing`)

    if (entry.preview.type === 'local') {
      assert.ok(existsSync(resolve(root, entry.preview.value)), `${entry.id} preview is missing`)
    }

    const starterPackage = json(join(entry.source.starterPath, 'package.json'))
    assert.ok(starterPackage.scripts?.dev, `${entry.id} must provide npm run dev`)
    assert.ok(starterPackage.scripts?.build, `${entry.id} must provide npm run build`)
    assert.ok(starterPackage.scripts?.export, `${entry.id} must provide npm run export`)

    const slides = read(join(entry.source.starterPath, 'slides.md'))
    assert.ok((slides.match(/^---$/gm) || []).length >= 6, `${entry.id} should demonstrate multiple reusable slide patterns`)

    if (entry.source.manifest) {
      assert.ok(existsSync(resolve(root, entry.source.manifest)), `${entry.id} manifest is missing`)
      const manifest = json(entry.source.manifest)
      assert.equal(manifest.id, entry.id)
      assert.equal(manifest.name, entry.name)
      assert.equal(manifest.license, entry.license)
      assert.equal(manifest.provenance.type, entry.provenance.type)

      const templateRoot = entry.source.path
      for (const file of ['README.md', 'LICENSE', 'ATTRIBUTION.md']) {
        assert.ok(existsSync(resolve(root, templateRoot, file)), `${entry.id} is missing ${file}`)
      }
    }
  }
})

test('external entries retain canonical ownership and are not vendored', () => {
  const external = registry.templates.filter((entry) => entry.source.type === 'external')

  for (const entry of external) {
    assert.match(entry.source.repository, /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/)
    assert.equal(entry.provenance.type, 'external')
    assert.ok(!entry.source.path)
    assert.ok(entry.provenance.notes.toLowerCase().includes('upstream') || entry.provenance.notes.toLowerCase().includes('indexed'))
  }
})

test('gallery is a direct consumer of the canonical registry', () => {
  const html = read('gallery/index.html')
  const app = read('gallery/app.js')
  const css = read('gallery/styles.css')

  assert.match(html, /Slidev Template Registry/)
  assert.match(html, /id="template-grid"/)
  assert.match(app, /registry\/templates\.json/)
  assert.match(app, /navigator\.clipboard/)
  assert.match(css, /\.template-grid/)
})

test('registry CLI can search and scaffold a hosted template', () => {
  const search = spawnSync(process.execPath, ['scripts/registry-cli.mjs', 'search', 'academic', '--json'], {
    cwd: root,
    encoding: 'utf8',
  })
  assert.equal(search.status, 0, search.stderr)
  assert.ok(JSON.parse(search.stdout).some((entry) => entry.id === 'paper-lab'))

  const temp = mkdtempSync(join(tmpdir(), 'slidev-template-'))
  const destination = join(temp, 'paper-talk')

  try {
    const scaffold = spawnSync(process.execPath, ['scripts/registry-cli.mjs', 'scaffold', 'paper-lab', destination], {
      cwd: root,
      encoding: 'utf8',
    })
    assert.equal(scaffold.status, 0, scaffold.stderr)
    assert.ok(existsSync(join(destination, 'package.json')))
    assert.ok(existsSync(join(destination, 'slides.md')))
  } finally {
    rmSync(temp, { recursive: true, force: true })
  }
})
