import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

test('theme contains the remaining extracted utility assets', () => {
  assert.ok(existsSync(new URL('../neko-style/theme/components/PatternCardGrid.vue', import.meta.url)))
  assert.ok(existsSync(new URL('../neko-style/theme/components/MotionPrinciplesGallery.vue', import.meta.url)))
  assert.ok(existsSync(new URL('../neko-style/theme/components/GlassChecklist.vue', import.meta.url)))

  const styles = read('neko-style/theme/styles/index.css')
  assert.match(styles, /\.neko-glass-checklist\b/)
})

test('starter adopts extracted utility components', () => {
  const slides = read('neko-style/starter/slides.md')

  assert.match(slides, /<PatternCardGrid/)
  assert.match(slides, /<MotionPrinciplesGallery/)
  assert.match(slides, /<GlassChecklist/)

  assert.doesNotMatch(slides, /<div class="grid grid-cols-2 gap-5 mt-6 text-sm">/)
  assert.doesNotMatch(slides, /<div class="grid grid-cols-3 gap-8 mt-8">/)
  assert.doesNotMatch(slides, /<div class="space-y-3 mt-6 text-sm leading-relaxed">/)
})

test('docs mention the extracted utility components', () => {
  const guide = read('neko-style/docs/components-guide.md')
  const themeReadme = read('neko-style/theme/README.md')

  for (const doc of [guide, themeReadme]) {
    assert.match(doc, /PatternCardGrid/)
    assert.match(doc, /MotionPrinciplesGallery/)
    assert.match(doc, /GlassChecklist/)
  }
})
