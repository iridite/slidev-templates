import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const repoUrl = (path) => new URL(`../${path}`, import.meta.url)
const registry = JSON.parse(readFileSync(repoUrl('registry/templates.json'), 'utf8'))

const isHttpUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

test('registry has a supported version and unique template ids', () => {
  assert.equal(registry.version, 1)
  assert.ok(Array.isArray(registry.templates))
  assert.ok(registry.templates.length > 0)

  const ids = registry.templates.map((entry) => entry.id)
  assert.equal(new Set(ids).size, ids.length, 'template ids must be unique')

  for (const id of ids)
    assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
})

test('registry entries expose useful discovery metadata', () => {
  for (const entry of registry.templates) {
    assert.ok(entry.name?.trim())
    assert.ok(entry.description?.trim().length >= 20)
    assert.ok(entry.author?.name?.trim())
    assert.ok(entry.license?.trim())
    assert.ok(Array.isArray(entry.tags) && entry.tags.length > 0)
    assert.equal(new Set(entry.tags).size, entry.tags.length, `${entry.id}: tags must be unique`)
    assert.ok(['verified', 'community', 'experimental'].includes(entry.status))
    assert.equal(typeof entry.featured, 'boolean')
    assert.ok(entry.usage?.command?.trim())
  }
})

test('hosted templates and local previews resolve to real repository paths', () => {
  for (const entry of registry.templates) {
    if (entry.source?.type === 'hosted') {
      assert.ok(existsSync(repoUrl(entry.source.path)), `${entry.id}: hosted path is missing`)
      assert.ok(existsSync(repoUrl(entry.source.starterPath)), `${entry.id}: starter path is missing`)
      assert.ok(existsSync(repoUrl(`${entry.source.starterPath}/package.json`)), `${entry.id}: starter package.json is missing`)
      assert.ok(existsSync(repoUrl(`${entry.source.path}/README.md`)), `${entry.id}: README.md is missing`)
    } else {
      assert.equal(entry.source?.type, 'external', `${entry.id}: unsupported source type`)
      assert.ok(isHttpUrl(entry.source.repository), `${entry.id}: external repository must be an http(s) URL`)
    }

    if (entry.preview?.type === 'local')
      assert.ok(existsSync(repoUrl(entry.preview.value)), `${entry.id}: local preview is missing`)
    else {
      assert.equal(entry.preview?.type, 'url', `${entry.id}: unsupported preview type`)
      assert.ok(isHttpUrl(entry.preview.value), `${entry.id}: preview URL must be an http(s) URL`)
    }
  }
})
