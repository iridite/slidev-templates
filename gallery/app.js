const state = {
  templates: [],
  search: '',
  source: '',
  status: '',
  category: '',
}

const elements = {
  search: document.querySelector('#search'),
  source: document.querySelector('#source-filter'),
  status: document.querySelector('#status-filter'),
  category: document.querySelector('#category-filter'),
  clear: document.querySelector('#clear-filters'),
  count: document.querySelector('#result-count'),
  grid: document.querySelector('#template-grid'),
  template: document.querySelector('#template-card'),
}

const repoBase = 'https://github.com/iridite/slidev-templates'

function isImagePreview(entry) {
  const value = entry.preview?.value || ''
  return entry.preview?.type === 'local' || /\.(?:png|jpe?g|gif|webp|svg)(?:\?.*)?$/i.test(value)
}

function previewUrl(entry) {
  if (entry.preview.type === 'local') return `../${entry.preview.value}`
  return entry.preview.value
}

function sourceUrl(entry) {
  if (entry.source.type === 'external') return entry.source.repository
  return `${repoBase}/tree/main/${entry.source.path}`
}

function matches(entry) {
  const terms = state.search.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const haystack = [
    entry.id,
    entry.name,
    entry.description,
    entry.kind,
    entry.license,
    ...entry.categories,
    ...entry.tags,
  ].join(' ').toLowerCase()

  return terms.every((term) => haystack.includes(term))
    && (!state.source || entry.source.type === state.source)
    && (!state.status || entry.status === state.status)
    && (!state.category || entry.categories.includes(state.category))
}

function badge(text, className = '') {
  const node = document.createElement('span')
  node.className = `badge ${className}`.trim()
  node.textContent = text
  return node
}

function chip(text) {
  const node = document.createElement('span')
  node.textContent = text
  return node
}

function createCard(entry) {
  const fragment = elements.template.content.cloneNode(true)
  const card = fragment.querySelector('.card')
  const image = fragment.querySelector('.preview')
  const fallback = fragment.querySelector('.preview-fallback')
  const badges = fragment.querySelector('.badges')

  if (isImagePreview(entry)) {
    image.src = previewUrl(entry)
    image.alt = `${entry.name} preview`
    fallback.hidden = true
    image.addEventListener('error', () => {
      image.hidden = true
      fallback.hidden = false
    }, { once: true })
  } else {
    image.hidden = true
    fallback.hidden = false
  }

  badges.append(
    badge(entry.status, entry.status),
    badge(entry.source.type, entry.source.type),
  )

  fragment.querySelector('.kind').textContent = entry.kind.replaceAll('-', ' ')
  fragment.querySelector('h2').textContent = entry.name
  fragment.querySelector('.license').textContent = entry.license
  fragment.querySelector('.description').textContent = entry.description

  const categories = fragment.querySelector('.categories')
  entry.categories.forEach((value) => categories.append(chip(value)))

  const tags = fragment.querySelector('.tags')
  entry.tags.slice(0, 5).forEach((value) => tags.append(chip(value)))

  const code = fragment.querySelector('code')
  code.textContent = entry.usage.command
  code.title = entry.usage.command

  const copy = fragment.querySelector('.copy')
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(entry.usage.command)
      copy.textContent = 'Copied'
      setTimeout(() => { copy.textContent = 'Copy' }, 1400)
    } catch {
      copy.textContent = 'Select command'
      const range = document.createRange()
      range.selectNodeContents(code)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
    }
  })

  const source = fragment.querySelector('.primary-link')
  source.href = sourceUrl(entry)

  const preview = fragment.querySelector('.preview-link')
  preview.href = previewUrl(entry)

  card.dataset.id = entry.id
  return fragment
}

function render() {
  const filtered = state.templates.filter(matches)
  elements.grid.replaceChildren()

  if (!filtered.length) {
    const empty = document.createElement('div')
    empty.className = 'empty'
    empty.innerHTML = '<strong>No templates match these filters.</strong><br/>Try a broader category or clear the search.'
    elements.grid.append(empty)
  } else {
    filtered.forEach((entry) => elements.grid.append(createCard(entry)))
  }

  const hosted = filtered.filter((entry) => entry.source.type === 'hosted').length
  const external = filtered.length - hosted
  elements.count.textContent = `${filtered.length} template${filtered.length === 1 ? '' : 's'} · ${hosted} hosted · ${external} external`
}

function bindFilters() {
  elements.search.addEventListener('input', (event) => {
    state.search = event.target.value
    render()
  })
  elements.source.addEventListener('change', (event) => {
    state.source = event.target.value
    render()
  })
  elements.status.addEventListener('change', (event) => {
    state.status = event.target.value
    render()
  })
  elements.category.addEventListener('change', (event) => {
    state.category = event.target.value
    render()
  })
  elements.clear.addEventListener('click', () => {
    state.search = ''
    state.source = ''
    state.status = ''
    state.category = ''
    elements.search.value = ''
    elements.source.value = ''
    elements.status.value = ''
    elements.category.value = ''
    render()
  })
}

async function load() {
  try {
    const response = await fetch('../registry/templates.json', { cache: 'no-store' })
    if (!response.ok) throw new Error(`Registry request failed with ${response.status}`)
    const registry = await response.json()
    state.templates = registry.templates

    const categories = [...new Set(state.templates.flatMap((entry) => entry.categories))].sort()
    categories.forEach((value) => {
      const option = document.createElement('option')
      option.value = value
      option.textContent = value
      elements.category.append(option)
    })

    bindFilters()
    render()
  } catch (error) {
    elements.count.textContent = 'Registry unavailable'
    elements.grid.innerHTML = `<div class="empty"><strong>Could not load the registry.</strong><br/>${error.message}<br/><br/>Serve the repository root over HTTP instead of opening this file directly.</div>`
  }
}

load()
