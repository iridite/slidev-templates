import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(resolve(root, path), 'utf8')
const json = (path) => JSON.parse(read(path))
const registry = json('registry/templates.json')
const manifestSchema = json('registry/hosted-template.schema.json')

test('manifest-based hosted templates satisfy the current runtime contract', () => {
  const hosted = registry.templates.filter((entry) => entry.source.type === 'hosted' && entry.source.manifest)
  assert.equal(hosted.length, 3, 'three new contract-based starters should complement Neko Style')

  const packageNames = new Set()

  for (const entry of hosted) {
    assert.ok(existsSync(resolve(root, entry.source.manifest)), `${entry.id}: manifest is missing`)
    const manifest = json(entry.source.manifest)
    const templateRoot = entry.source.path

    for (const key of manifestSchema.required)
      assert.ok(key in manifest, `${entry.id}: manifest is missing ${key}`)

    assert.equal(manifest.id, entry.id)
    assert.equal(manifest.name, entry.name)
    assert.equal(manifest.description, entry.description)
    assert.deepEqual(manifest.categories, entry.categories)
    assert.deepEqual(manifest.tags, entry.tags)
    assert.equal(manifest.license, entry.license)
    assert.equal(manifest.licenseUrl, 'LICENSE')
    assert.equal(manifest.provenance.type, entry.provenance.type)
    assert.equal(manifest.compatibility.node, '>=20.12.0')
    assert.equal(manifest.compatibility.slidev, '^52.19.1')
    assert.equal(manifest.verification.level, 'clean-install-build')

    for (const file of ['README.md', 'LICENSE', 'ATTRIBUTION.md', 'preview.svg'])
      assert.ok(existsSync(resolve(root, templateRoot, file)), `${entry.id}: missing ${file}`)

    const starterPackage = json(join(entry.source.starterPath, 'package.json'))
    assert.ok(starterPackage.scripts?.dev)
    assert.ok(starterPackage.scripts?.build)
    assert.ok(starterPackage.scripts?.export)
    assert.equal(starterPackage.engines?.node, '>=20.12.0')
    assert.equal(starterPackage.dependencies?.['@slidev/cli'], '^52.19.1')
    assert.equal(starterPackage.dependencies?.['@slidev/theme-default'], '0.25.0')
    assert.equal(starterPackage.dependencies?.vue, '^3.5.33')
    assert.ok(starterPackage.devDependencies?.['playwright-chromium'])

    assert.ok(!packageNames.has(starterPackage.name), `${entry.id}: duplicate package name`)
    packageNames.add(starterPackage.name)

    const slides = read(join(entry.source.starterPath, 'slides.md'))
    assert.ok((slides.match(/^---$/gm) || []).length >= 6, `${entry.id}: starter should demonstrate multiple slide patterns`)
    assert.doesNotMatch(slides, /https?:\/\/[^\s)"']+\.(?:png|jpe?g|gif|webp)/i, `${entry.id}: hosted starter must not depend on untracked remote raster assets`)
  }
})

test('gallery and generated catalogs consume the canonical registry', () => {
  const html = read('gallery/index.html')
  const app = read('gallery/app.js')
  const css = read('gallery/styles.css')

  assert.match(html, /Slidev Template Registry/)
  assert.match(html, /class="license"/)
  assert.match(app, /registry\/templates\.json/)
  assert.match(app, /licenseUrl/)
  assert.match(app, /navigator\.clipboard/)
  assert.match(css, /\.template-grid/)
  assert.match(css, /\.badge\.verification/)

  const catalog = spawnSync(process.execPath, ['scripts/generate-catalog.mjs', '--check'], {
    cwd: root,
    encoding: 'utf8',
  })
  assert.equal(catalog.status, 0, catalog.stderr)

  const gallery = spawnSync(process.execPath, ['scripts/build-gallery.mjs', '--check'], {
    cwd: root,
    encoding: 'utf8',
  })
  assert.equal(gallery.status, 0, gallery.stderr)
})

test('registry CLI can search and scaffold a hosted template safely', () => {
  const search = spawnSync(process.execPath, ['scripts/registry-cli.mjs', 'search', 'academic', '--json'], {
    cwd: root,
    encoding: 'utf8',
  })
  assert.equal(search.status, 0, search.stderr)
  assert.ok(JSON.parse(search.stdout).some((entry) => entry.id === 'paper-lab'))

  const info = spawnSync(process.execPath, ['scripts/registry-cli.mjs', 'info', 'nju-academic', '--json'], {
    cwd: root,
    encoding: 'utf8',
  })
  assert.equal(info.status, 0, info.stderr)
  assert.equal(JSON.parse(info.stdout).source.type, 'external')

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
    assert.ok(existsSync(join(destination, 'README.md')))
    assert.ok(existsSync(join(destination, 'LICENSE')))
    assert.ok(existsSync(join(destination, 'ATTRIBUTION.md')))
  } finally {
    rmSync(temp, { recursive: true, force: true })
  }
})
