# Advanced Components Guide

This guide covers advanced components that require additional dependencies beyond the core neko-style template.

## Overview

Advanced components enable:
- **Animations**: Smooth, declarative animations with @vueuse/motion
- **Terminal Recordings**: Asciinema player integration for demos
- **3D Graphics**: Three.js/TresJS for interactive visualizations

All advanced features use optional dependencies that won't break installation if unavailable.

## Installation

Install all advanced features:
```bash
cd neko-style/starter
npm install
```

Or install specific features:
```bash
# Animations only
npm install @vueuse/motion

# Terminal recordings only
npm install @nolebase/ui-asciinema asciinema-player

# 3D graphics only
npm install @tresjs/core @tresjs/cientos three
```

## VMotionExample.vue - Declarative Animations

Provides smooth entrance animations using @vueuse/motion.

**Basic Usage:**
```vue
<VMotionExample>
  <h1>This content fades in from below</h1>
</VMotionExample>
```

**Custom Animation:**
```vue
<div
  v-motion
  :initial="{ opacity: 0, x: -100 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
>
  <p>Slides in from the left</p>
</div>
```

**Animation Properties:**
- `opacity`: 0 (invisible) to 1 (visible)
- `x`, `y`: Position offset in pixels
- `scale`: Size multiplier
- `rotate`: Rotation in degrees
- `transition.duration`: Animation duration in milliseconds

**Real-World Example:**
```vue
<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    class="h-full w-full flex items-center justify-center"
  >
    <div
      transition="all ease-in-out" duration-1500
      :class="$slidev.nav.clicks > 0 ? 'translate-x-[-307px]' : ''"
    >
      <span>Content that animates on click</span>
    </div>
  </div>
</template>
```

## AsciinemaExample.vue - Terminal Recordings

Display terminal recordings for live demos and tutorials.

**Basic Usage:**
```vue
<AsciinemaExample
  src="/asciinema/demo.cast"
  :controls="'auto'"
  :rows="18"
  :speed="3"
/>
```

**Props:**
- `src` (required): Path to .cast recording file
- `controls`: `'auto'` | `'always'` | `'never'` (default: 'auto')
- `rows`: Terminal height in rows (default: 18)
- `speed`: Playback speed multiplier (default: 1)

**Creating Recordings:**
```bash
# Install asciinema
brew install asciinema  # macOS
apt install asciinema   # Ubuntu

# Record a session
asciinema rec demo.cast

# Place in public directory
mv demo.cast neko-style/starter/public/asciinema/
```

**In Slides:**
```markdown
---
layout: default
---

# Live Demo

<AsciinemaExample
  src="/asciinema/deployment.cast"
  :controls="'auto'"
  :rows="20"
  :speed="2"
/>
```

## Three.js / TresJS - 3D Visualizations

Create interactive 3D graphics and visualizations.

**Basic Scene:**
```vue
<TresCanvas>
  <TresPerspectiveCamera :position="[0, 2, 5]" />
  <TresAmbientLight :intensity="0.5" />
  <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />

  <TresMesh>
    <TresBoxGeometry :args="[1, 1, 1]" />
    <TresMeshStandardMaterial color="#60cd6a" />
  </TresMesh>
</TresCanvas>
```

**Animated 3D Object:**
```vue
<script setup>
import { ref } from 'vue'
import { useRenderLoop } from '@tresjs/core'

const boxRef = ref()

useRenderLoop().onLoop(({ delta }) => {
  if (boxRef.value) {
    boxRef.value.rotation.y += delta
    boxRef.value.rotation.x += delta * 0.5
  }
})
</script>

<template>
  <TresCanvas>
    <TresPerspectiveCamera :position="[0, 2, 5]" />
    <TresAmbientLight :intensity="0.5" />

    <TresMesh ref="boxRef">
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshStandardMaterial color="hotpink" />
    </TresMesh>
  </TresCanvas>
</template>
```

**Common Geometries:**
- `TresBoxGeometry` - Cube/box
- `TresSphereGeometry` - Sphere
- `TresPlaneGeometry` - Flat plane
- `TresCylinderGeometry` - Cylinder
- `TresTorusGeometry` - Donut shape

**Materials:**
- `TresMeshBasicMaterial` - No lighting
- `TresMeshStandardMaterial` - PBR material with lighting
- `TresMeshPhongMaterial` - Shiny surfaces

**Resources:**
- [TresJS Documentation](https://tresjs.org/)
- [Three.js Examples](https://threejs.org/examples/)

## Combining Advanced Features

You can combine multiple advanced features in a single slide:

```markdown
---
layout: default
glowSeed: 200
---

<div class="grid grid-cols-2 gap-8 h-full">
  <VMotionExample>
    <div class="space-y-4">
      <h2>3D Visualization</h2>
      <TresCanvas class="h-64">
        <TresPerspectiveCamera :position="[0, 2, 5]" />
        <TresAmbientLight :intensity="0.5" />
        <TresMesh>
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshStandardMaterial color="#60cd6a" />
        </TresMesh>
      </TresCanvas>
    </div>
  </VMotionExample>

  <div class="space-y-4">
    <h2>Terminal Demo</h2>
    <AsciinemaExample
      src="/asciinema/demo.cast"
      :rows="12"
      :speed="2"
    />
  </div>
</div>
```

## Performance Tips

1. **Lazy Loading**: Import heavy components only when needed
2. **Limit 3D Complexity**: Keep polygon counts reasonable for smooth performance
3. **Optimize Recordings**: Keep .cast files under 5MB for fast loading
4. **Animation Duration**: Use 500-1500ms for smooth, professional animations

## Troubleshooting

**v-motion not working:**
- Ensure `@vueuse/motion` is installed
- Check that the component is properly imported

**Asciinema player not displaying:**
- Verify .cast file path is correct
- Check that files are in the `public/` directory
- Ensure `@nolebase/ui-asciinema` and `asciinema-player` are installed

**Three.js errors:**
- Verify all three packages are installed: `@tresjs/core`, `@tresjs/cientos`, `three`
- Check browser console for WebGL support
- Ensure camera is positioned to see the objects

## Examples in Production

See `raw-template/neko-style/talks/packages/` for real-world usage in conference presentations.
