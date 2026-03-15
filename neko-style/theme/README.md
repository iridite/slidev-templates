# Neko Style - Slidev Theme

A modern, animated Slidev theme with glow effects and advanced components.

## Installation

```bash
npm install slidev-theme-neko-style
```

## Usage

Add the theme to your `slides.md` frontmatter:

```yaml
---
theme: neko-style
---
```

## Available Layouts

- `cover` - Title slide with glow background
- `section` - Section divider with centered content
- `contents-toc` - Table of contents with automatic slide links
- `end` - Closing slide

## Components

### Core Components

- `GlowBackground` - Animated particle background with glow effects
- `Background` - Simple background wrapper

### Advanced Components (Optional Dependencies)

- `AsciinemaPlayer` - Terminal recording playback (requires `@nolebase/ui-asciinema`, `asciinema-player`)
- `ThreeScene` - 3D scene rendering (requires `@tresjs/core`, `@tresjs/cientos`, `three`)
- Motion animations (requires `@vueuse/motion`)

## Configuration

The theme uses UnoCSS for styling. Add this to your `uno.config.ts`:

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-[#0a0a0a]',
  },
})
```

## Optional Dependencies

Install only what you need:

```bash
# For terminal recordings
npm install @nolebase/ui-asciinema asciinema-player

# For 3D scenes
npm install @tresjs/core @tresjs/cientos three

# For motion animations
npm install @vueuse/motion
```
