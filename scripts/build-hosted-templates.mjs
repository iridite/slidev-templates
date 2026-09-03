#!/usr/bin/env node

import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const registry = JSON.parse(readFileSync(resolve(root, 'registry/templates.json'), 'utf8'))
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const hosted = registry.templates.filter((entry) =>
  entry.source.type === 'hosted'
  && entry.source.manifest
  && entry.source.starterPath,
)

if (!hosted.length) {
  console.log('No manifest-based hosted templates found.')
  process.exit(0)
}

for (const entry of hosted) {
  const cwd = resolve(root, entry.source.starterPath)
  console.log(`\n=== ${entry.name} (${entry.id}) ===`)

  const install = spawnSync(npm, [
    'install',
    '--package-lock=false',
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
  ], {
    cwd,
    stdio: 'inherit',
    env: {
      ...process.env,
      PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: '1',
    },
  })

  if (install.status !== 0) {
    console.error(`Dependency installation failed for ${entry.id}.`)
    process.exit(install.status || 1)
  }

  const build = spawnSync(npm, ['run', 'build'], {
    cwd,
    stdio: 'inherit',
    env: process.env,
  })

  if (build.status !== 0) {
    console.error(`Build failed for ${entry.id}.`)
    process.exit(build.status || 1)
  }
}

console.log(`\nBuilt ${hosted.length} hosted templates successfully.`)
