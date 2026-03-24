<script setup lang="ts">
/**
 * Enhanced glow effect system with theme and color preset support
 *
 * Credits to @pi0 @Atinux
 *
 * Frontmatter Properties:
 * - glow: Distribution pattern for polygons
 * - glowOpacity: Opacity of the polygons (default: 0.4)
 * - glowHue: Hue shift for the polygons (default: 0)
 * - glowSeed: Seed for stable random distribution (default: 'default')
 * - theme: 'light' | 'dark' - Theme mode (default: 'dark')
 * - glowPreset: 'blue' | 'rust' | 'cyan' - Color preset (default: 'blue')
 */

import { useNav } from '@slidev/client'
import seedrandom from 'seedrandom'
import { computed, ref, watch } from 'vue'

const { currentSlideRoute } = useNav()

export type Range = [number, number]

export type Distribution =
  | 'full'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center'
  | 'topmost'

export type ColorPreset = 'blue' | 'rust' | 'cyan'

const formatter = computed(() => (currentSlideRoute.value.meta?.slide as any)?.frontmatter || {})
const distribution = computed(() => (formatter.value.glow || 'full') as Distribution)
const opacity = computed<number>(() => +(formatter.value.glowOpacity ?? 0.4))
const hue = computed<number>(() => +(formatter.value.glowHue || 0))
const seed = computed<string>(() => (formatter.value.glowSeed === 'false' || formatter.value.glowSeed === false)
  ? Date.now().toString()
  : formatter.value.glowSeed || 'default',
)
const theme = computed<'light' | 'dark'>(() => {
  const frontmatterTheme = formatter.value.theme
  const frontmatterSchema = formatter.value.colorSchema

  if (frontmatterTheme === 'light' || frontmatterTheme === 'dark')
    return frontmatterTheme

  if (frontmatterSchema === 'light' || frontmatterSchema === 'dark')
    return frontmatterSchema

  return 'dark'
})
const preset = computed(() => (formatter.value.glowPreset || 'blue') as ColorPreset)
const overflow = 0.3
const disturb = 0.3
const disturbChance = 0.3

// Color presets from neko-talks
const colorPresets: Record<ColorPreset, { from: string; to: string; accent: string }> = {
  blue: {
    from: '#18549a',
    to: '#12238b',
    accent: '#01b6d1',
  },
  rust: {
    from: '#ed5132',
    to: '#ed4832',
    accent: '#ed5132',
  },
  cyan: {
    from: '#32aeed',
    to: '#32e5ed',
    accent: '#32aeed',
  },
}

const colors = computed(() => colorPresets[preset.value])

function distributionToLimits(distribution: Distribution) {
  const min = -0.2
  const max = 1.2
  let x: Range = [min, max]
  let y: Range = [min, max]

  function intersection(a: Range, b: Range): Range {
    return [Math.max(a[0], b[0]), Math.min(a[1], b[1])]
  }

  const limits = distribution.split('-')

  for (const limit of limits) {
    switch (limit) {
      case 'topmost':
        y = intersection(y, [-0.5, 0])
        break
      case 'top':
        y = intersection(y, [min, 0.6])
        break
      case 'bottom':
        y = intersection(y, [0.4, max])
        break
      case 'left':
        x = intersection(x, [min, 0.6])
        break
      case 'right':
        x = intersection(x, [0.4, max])
        break
      case 'xcenter':
        x = intersection(x, [0.25, 0.75])
        break
      case 'ycenter':
        y = intersection(y, [0.25, 0.75])
        break
      case 'center':
        x = intersection(x, [0.25, 0.75])
        y = intersection(y, [0.25, 0.75])
        break
      case 'full':
        x = intersection(x, [0, 1])
        y = intersection(y, [0, 1])
        break
      default:
        break
    }
  }

  return { x, y }
}

function distance2([x1, y1]: Range, [x2, y2]: Range) {
  return (x2 - x1) ** 2 + (y2 - y1) ** 2
}

function usePoly(number = 16) {
  function getPoints(): Range[] {
    const limits = distributionToLimits(distribution.value)
    const rng = seedrandom(`${seed.value}-${currentSlideRoute.value.no}`)
    function randomBetween([a, b]: Range) {
      return rng() * (b - a) + a
    }
    function applyOverflow(random: number, overflow: number) {
      random = random * (1 + overflow * 2) - overflow
      return rng() < disturbChance ? random + (rng() - 0.5) * disturb : random
    }
    return Array.from({ length: number })
      .fill(0)
      .map(() => [
        applyOverflow(randomBetween(limits.x), overflow),
        applyOverflow(randomBetween(limits.y), overflow),
      ])
  }

  const points = ref(getPoints())
  const poly = computed(() => points.value.map(([x, y]) => `${x * 100}% ${y * 100}%`).join(', '))

  function jumpPoints() {
    const newPoints = new Set(getPoints())
    points.value = points.value.map((o) => {
      let minDistance = Number.POSITIVE_INFINITY
      let closest: Range | undefined
      for (const n of newPoints) {
        const d = distance2(o, n)
        if (d < minDistance) {
          minDistance = d
          closest = n
        }
      }
      newPoints.delete(closest)
      return closest
    })
  }

  watch(currentSlideRoute, () => {
    jumpPoints()
  })

  return poly
}

const poly1 = usePoly(10)
const poly2 = usePoly(6)
const poly3 = usePoly(3)

function clipStyle(poly: string, alpha: number, from: string, to: string, direction: 'to right' | 'to left' | 'to top') {
  return {
    'clip-path': `polygon(${poly})`,
    opacity: alpha,
    'background-image': `linear-gradient(${direction}, ${from}, ${to})`,
  }
}
</script>

<template>
  <div>
    <div
      class="bg transform-gpu overflow-hidden pointer-events-none"
      :style="{ filter: `blur(70px) hue-rotate(${hue}deg)` }"
      :class="[
        theme === 'light' ? 'bg-white scale-150' : 'bg-black',
      ]"
      aria-hidden="true"
    >
      <div
        class="clip"
        :style="clipStyle(poly1, opacity, colors.from, colors.to, 'to right')"
      />
      <div
        class="clip"
        :style="clipStyle(poly2, opacity, colors.from, colors.to, 'to left')"
      />
      <div
        class="clip"
        :style="clipStyle(poly3, 0.2, colors.accent, colors.to, 'to top')"
      />
    </div>
  </div>
</template>

<style scoped>
.bg,
.clip {
  transition: all 2.5s ease;
}

.bg {
  position: absolute;
  inset: 0;
  z-index: -10;
}

.clip {
  clip-path: circle(75%);
  aspect-ratio: 16 / 9;
  position: absolute;
  inset: 0;
}

.light .clip {
  opacity: 1 !important;
}
</style>
