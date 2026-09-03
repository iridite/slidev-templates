import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(resolve(root, path), 'utf8')
const json = (path) => JSON.parse(read(path))
const registry = json('registry/templates.json')
const schema = json('registry/schema.json')

const isHttpUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

test('registry version, schema, ids, and scale agree', () => {
  assert.equal(registry.version, 2)
  assert.equal(schema.properties.version.const, registry.version)
  assert.ok(Array.isArray(registry.templates))
  assert.ok(registry.templates.length >= 12, 'registry should represent a substantive initial ecosystem')

  const ids = registry.templates.map((entry) => entry.id)
  assert.equal(new Set(ids).size, ids.length, 'template ids must be unique')
  ids.forEach((id) => assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/))

  const hosted = registry.templates.filter((entry) => entry.source.type === 'hosted')
  const external = registry.templates.filter((entry) => entry.source.type === 'external')
  assert.ok(hosted.length >= 4, 'hosted collection must not collapse back to one template')
  assert.ok(external.length >= 8, 'registry should cover independently governed upstream projects')
})

test('schema required fields and allowed keys match every registry entry', () => {
  const definition = schema.$defs.template
  const required = new Set(definition.required)
  const allowed = new Set(Object.keys(definition.properties))

  for (const entry of registry.templates) {
    for (const key of required)
      assert.ok(key in entry, `${entry.id}: missing schema-required field ${key}`)

    for (const key of Object.keys(entry))
      assert.ok(allowed.has(key), `${entry.id}: field ${key} is absent from registry/schema.json`)

    assert.ok(entry.description.length >= 60, `${entry.id}: description is too short`)
    assert.ok(Array.isArray(entry.categories) && entry.categories.length >= 2)
    assert.equal(new Set(entry.categories).size, entry.categories.length)
    assert.ok(Array.isArray(entry.tags) && entry.tags.length >= 3)
    assert.equal(new Set(entry.tags).size, entry.tags.length)
    assert.ok(['starter', 'workspace', 'workflow', 'presentation-system'].includes(entry.kind))
    assert.ok(['verified', 'community', 'experimental'].includes(entry.status))
    assert.equal(typeof entry.featured, 'boolean')

    assert.ok(entry.license.trim())
    assert.ok(entry.licenseUrl.trim())
    assert.ok(['original', 'inspired', 'adapted', 'external'].includes(entry.provenance.type))
    assert.ok(entry.provenance.notes.length >= 40)

    assert.ok(['build-and-export', 'clean-install-build', 'metadata-health'].includes(entry.verification.level))
    assert.ok(Array.isArray(entry.verification.checks) && entry.verification.checks.length >= 1)
    assert.ok(existsSync(resolve(root, entry.verification.workflow)), `${entry.id}: workflow path is missing`)
    assert.match(entry.verification.checkedAt, /^\d{4}-\d{2}-\d{2}$/)
    assert.ok(!Number.isNaN(Date.parse(entry.verification.checkedAt)), `${entry.id}: invalid verification date`)
  }
})

test('hosted entries resolve to runnable, licensed repository paths', () => {
  for (const entry of registry.templates.filter((item) => item.source.type === 'hosted')) {
    assert.ok(existsSync(resolve(root, entry.source.path)), `${entry.id}: hosted path is missing`)
    assert.ok(existsSync(resolve(root, entry.source.starterPath, 'package.json')), `${entry.id}: package.json is missing`)
    assert.ok(existsSync(resolve(root, entry.source.starterPath, 'slides.md')), `${entry.id}: slides.md is missing`)
    assert.ok(existsSync(resolve(root, entry.source.path, 'README.md')), `${entry.id}: README.md is missing`)
    assert.ok(existsSync(resolve(root, entry.licenseUrl)), `${entry.id}: license evidence is missing`)
    assert.equal(entry.preview.type, 'local')
    assert.ok(existsSync(resolve(root, entry.preview.value)), `${entry.id}: local preview is missing`)
    assert.ok(entry.compatibility?.node)
    assert.ok(entry.compatibility?.slidev)
    assert.notEqual(entry.verification.level, 'metadata-health')
  }
})

test('external entries retain canonical ownership and citable licenses', () => {
  for (const entry of registry.templates.filter((item) => item.source.type === 'external')) {
    assert.match(entry.source.repository, /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/)
    assert.equal(entry.provenance.type, 'external')
    assert.ok(!entry.source.path)
    assert.ok(isHttpUrl(entry.licenseUrl), `${entry.id}: external licenseUrl must be absolute`)
    assert.equal(entry.verification.level, 'metadata-health')
    assert.ok(entry.verification.checks.includes('canonical-source'))
    assert.ok(entry.verification.checks.includes('license-link'))
  }
})
