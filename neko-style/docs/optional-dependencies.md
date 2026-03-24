# Optional Dependencies

The neko-style template includes optional dependencies for advanced features. These are marked as `optionalDependencies` in `package.json` and will not cause installation failures if they cannot be installed.

## Available Advanced Features

### 1. @vueuse/motion - Advanced Animations

Provides declarative animations with Vue directives.

**Installation:**
```bash
npm install @vueuse/motion
```

**Usage:**
See `components/advanced/VMotionExample.vue` for examples.

### 2. Asciinema Player - Terminal Recordings

Display terminal recordings in your presentations.

**Installation:**
```bash
npm install @nolebase/ui-asciinema asciinema-player
```

**Usage:**
See `components/advanced/AsciinemaExample.vue` for examples.

### 3. TresJS + Three.js - 3D Visualizations

Create interactive 3D graphics and visualizations.

**Installation:**
```bash
npm install @tresjs/core @tresjs/cientos three
```

**Usage:**
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

## Installing All Optional Dependencies

To install all optional dependencies at once:

```bash
cd neko-style/starter
npm install
```

The optional dependencies will be installed automatically if possible. If any fail, the installation will continue without them.

## Installing Specific Features

To install only specific features you need:

```bash
# For animations only
npm install @vueuse/motion

# For terminal recordings only
npm install @nolebase/ui-asciinema asciinema-player

# For 3D visualizations only
npm install @tresjs/core @tresjs/cientos three
```
