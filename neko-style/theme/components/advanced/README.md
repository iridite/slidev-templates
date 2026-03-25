# Advanced Components

This directory contains advanced components that require additional dependencies.

## VMotionExample.vue

Demonstrates `@vueuse/motion` for advanced animations.

**Installation:**
```bash
npm install @vueuse/motion
```

**Usage:**
```vue
<VMotionExample>
  <h1>Animated Content</h1>
</VMotionExample>
```

**Customization:**
Modify the `:initial` and `:enter` props to create different animation effects.

## AsciinemaPlayer.vue

Terminal recording player using Asciinema.

**Installation:**
```bash
npm install @nolebase/ui-asciinema asciinema-player
```

**Usage:**
```vue
<AsciinemaPlayer
  src="/asciinema/demo.cast"
  :controls="'auto'"
  :rows="18"
  :speed="3"
/>
```

**Props:**
- `src` (required): Path to .cast file
- `controls`: Control visibility ('auto', 'always', 'never')
- `rows`: Terminal rows
- `speed`: Playback speed multiplier

## Three.js / TresJS

For 3D visualizations, install TresJS:

```bash
npm install @tresjs/core @tresjs/cientos three
```

Example usage in slides.md:
```vue
<TresCanvas>
  <TresPerspectiveCamera :position="[0, 2, 5]" />
  <TresAmbientLight :intensity="0.5" />
  <TresMesh>
    <TresBoxGeometry :args="[1, 1, 1]" />
    <TresMeshStandardMaterial color="hotpink" />
  </TresMesh>
</TresCanvas>
```

Refer to [TresJS documentation](https://tresjs.org/) for more details.
