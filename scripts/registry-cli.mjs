#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const registry = JSON.parse(readFileSync(resolve(root, 'registry/templates.json'), 'utf8'))
const templates = registry.templates

const [, , command = 'help', ...args] = process.argv
const hasFlag = (flag) => args.includes(flag)
const values = args.filter((arg) => !arg.startsWith('--'))

const compact = (entry) => ({
  id: entry.id,
  name: entry.name,
  kind: entry.kind,
  source: entry.source.type,
  status: entry.status,
  categories: entry.categories,
  tags: entry.tags,
  command: entry.usage.command,
})

function printTable(entries) {
  const rows = entries.map((entry) => ({
    ID: entry.id,
    Name: entry.name,
    Kind: entry.kind,
    Source: entry.source.type,
    Status: entry.status,
    Categories: entry.categories.join(', '),
  }))
  console.table(rows)
}

function printHelp() {
  console.log(`slidev-templates registry CLI

Usage:
  node scripts/registry-cli.mjs list [--json]
  node scripts/registry-cli.mjs search <query> [--json]
  node scripts/registry-cli.mjs info <template-id> [--json]
  node scripts/registry-cli.mjs scaffold <template-id> <destination> [--force]

Examples:
  npm run templates -- list
  npm run templates -- search academic
  npm run templates -- info paper-lab
  npm run templates -- scaffold paper-lab ./my-research-talk
`)
}

function findById(id) {
  const entry = templates.find((template) => template.id === id)
  if (!entry) {
    const suggestions = templates
      .filter((template) => `${template.id} ${template.name}`.toLowerCase().includes((id || '').toLowerCase()))
      .map((template) => template.id)
    const hint = suggestions.length ? ` Did you mean: ${suggestions.join(', ')}?` : ''
    throw new Error(`Unknown template: ${id || '(missing)'}.${hint}`)
  }
  return entry
}

try {
  if (command === 'help' || command === '--help' || command === '-h') {
    printHelp()
  } else if (command === 'list') {
    if (hasFlag('--json')) console.log(JSON.stringify(templates.map(compact), null, 2))
    else printTable(templates)
  } else if (command === 'search') {
    const query = values.join(' ').trim().toLowerCase()
    if (!query) throw new Error('Search requires a query.')

    const matches = templates.filter((entry) => {
      const haystack = [
        entry.id,
        entry.name,
        entry.description,
        entry.kind,
        ...entry.categories,
        ...entry.tags,
      ].join(' ').toLowerCase()
      return query.split(/\s+/).every((term) => haystack.includes(term))
    })

    if (hasFlag('--json')) console.log(JSON.stringify(matches.map(compact), null, 2))
    else if (matches.length) printTable(matches)
    else console.log(`No templates matched “${query}”.`)
  } else if (command === 'info') {
    const entry = findById(values[0])
    if (hasFlag('--json')) {
      console.log(JSON.stringify(entry, null, 2))
    } else {
      console.log(`${entry.name} (${entry.id})`)
      console.log(entry.description)
      console.log(`\nSource: ${entry.source.type}`)
      console.log(`Status: ${entry.status}`)
      console.log(`Kind: ${entry.kind}`)
      console.log(`Categories: ${entry.categories.join(', ')}`)
      console.log(`Tags: ${entry.tags.join(', ')}`)
      console.log(`License: ${entry.license}`)
      console.log(`Start: ${entry.usage.command}`)
      console.log(`Preview: ${entry.preview.value}`)
    }
  } else if (command === 'scaffold') {
    const [id, destinationArg] = values
    const entry = findById(id)

    if (entry.source.type !== 'hosted') {
      console.log(`${entry.name} is maintained externally.`)
      console.log(`Use its canonical start path instead:\n${entry.usage.command}`)
      process.exit(0)
    }

    if (!entry.source.starterPath) {
      throw new Error(`${entry.id} does not declare source.starterPath.`)
    }

    const source = resolve(root, entry.source.starterPath)
    const destination = resolve(process.cwd(), destinationArg || basename(entry.id))

    if (!existsSync(source)) throw new Error(`Hosted starter is missing: ${entry.source.starterPath}`)
    if (existsSync(destination) && !hasFlag('--force')) {
      throw new Error(`Destination already exists: ${destination}. Pass --force to overwrite files.`)
    }

    mkdirSync(destination, { recursive: true })
    cpSync(source, destination, { recursive: true, force: hasFlag('--force') })

    console.log(`Created ${entry.name} at ${destination}`)
    console.log('Next steps:')
    console.log(`  cd ${destinationArg || basename(entry.id)}`)
    console.log('  npm install')
    console.log('  npm run dev')
  } else {
    throw new Error(`Unknown command: ${command}`)
  }
} catch (error) {
  console.error(`Error: ${error.message}`)
  process.exitCode = 1
}
