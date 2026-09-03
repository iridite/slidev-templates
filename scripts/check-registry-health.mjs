import { access, readFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const registry = JSON.parse(await readFile(new URL('registry/templates.json', root), 'utf8'))

const timeoutMs = 15_000
const staleAfterDays = 730
const token = process.env.GITHUB_TOKEN
const failures = []
const warnings = []

async function request(url, options = {}) {
  let lastError

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), timeoutMs)

    try {
      const response = await fetch(url, {
        redirect: 'follow',
        ...options,
        signal: controller.signal,
        headers: {
          'user-agent': 'slidev-templates-registry-health',
          ...options.headers,
        },
      })
      clearTimeout(timeout)
      return response
    } catch (error) {
      clearTimeout(timeout)
      lastError = error
      if (attempt === 1)
        await new Promise((resolve) => setTimeout(resolve, 1_000))
    }
  }

  throw lastError
}

function isHttpUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function githubRepoFromUrl(value) {
  try {
    const url = new URL(value)
    if (url.hostname !== 'github.com') return null
    const [owner, repo] = url.pathname.split('/').filter(Boolean)
    if (!owner || !repo) return null
    return { owner, repo: repo.replace(/\.git$/, '') }
  } catch {
    return null
  }
}

async function checkExternalRepository(entry) {
  const source = entry.source.repository
  const github = githubRepoFromUrl(source)

  if (!github) {
    const response = await request(source)
    if (!response.ok)
      failures.push(`${entry.id}: canonical source returned HTTP ${response.status}`)
    else
      console.log(`✓ ${entry.id}: canonical source is reachable`)
    return
  }

  const headers = {
    accept: 'application/vnd.github+json',
    'x-github-api-version': '2022-11-28',
  }
  if (token) headers.authorization = `Bearer ${token}`

  const response = await request(
    `https://api.github.com/repos/${github.owner}/${github.repo}`,
    { headers },
  )

  if (!response.ok) {
    failures.push(`${entry.id}: canonical GitHub repository returned HTTP ${response.status}`)
    return
  }

  const metadata = await response.json()
  if (metadata.archived)
    warnings.push(`${entry.id}: upstream repository is archived`)
  if (metadata.disabled)
    failures.push(`${entry.id}: upstream repository is disabled`)

  if (metadata.pushed_at) {
    const ageDays = Math.floor((Date.now() - Date.parse(metadata.pushed_at)) / 86_400_000)
    if (ageDays > staleAfterDays)
      warnings.push(`${entry.id}: upstream has no push activity for ${ageDays} days; review status and usage path`)
  }

  console.log(`✓ ${entry.id}: upstream ${metadata.full_name} is reachable${metadata.archived ? ' (archived)' : ''}`)
}

async function checkRemote(label, value) {
  const response = await request(value, { headers: { range: 'bytes=0-0' } })
  if (!response.ok)
    failures.push(`${label} returned HTTP ${response.status}`)
  else
    console.log(`✓ ${label} is reachable`)
}

async function checkLicense(entry) {
  if (!entry.licenseUrl) {
    failures.push(`${entry.id}: licenseUrl is missing`)
    return
  }

  if (isHttpUrl(entry.licenseUrl)) {
    await checkRemote(`${entry.id}: license evidence`, entry.licenseUrl)
    return
  }

  try {
    await access(new URL(entry.licenseUrl, root))
    console.log(`✓ ${entry.id}: local license evidence exists`)
  } catch {
    failures.push(`${entry.id}: local license evidence is missing (${entry.licenseUrl})`)
  }
}

async function checkPreview(entry) {
  if (entry.preview.type !== 'url') return
  await checkRemote(`${entry.id}: preview`, entry.preview.value)
}

for (const entry of registry.templates) {
  if (entry.source.type === 'external') {
    try {
      await checkExternalRepository(entry)
    } catch (error) {
      failures.push(`${entry.id}: upstream check failed: ${error.message}`)
    }
  }

  try {
    await checkPreview(entry)
  } catch (error) {
    failures.push(`${entry.id}: preview check failed: ${error.message}`)
  }

  try {
    await checkLicense(entry)
  } catch (error) {
    failures.push(`${entry.id}: license check failed: ${error.message}`)
  }
}

for (const warning of warnings)
  console.warn(`warning: ${warning}`)

const hosted = registry.templates.filter((entry) => entry.source.type === 'hosted').length
const external = registry.templates.length - hosted

if (failures.length) {
  console.error('\nRegistry health check failed:')
  for (const failure of failures)
    console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`\nRegistry health check passed for ${registry.templates.length} entries (${hosted} hosted, ${external} external).`)
}
