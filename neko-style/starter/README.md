# Neko Style Starter

A ready-to-use Slidev presentation template with the Neko Style theme.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Export to PDF
npm run export
```

## Customization

### Animation Contract

Starter pages follow one consistent reveal contract:

- Progressive disclosure uses `v-click` / `v-after` directives, never ad-hoc timing chains.
- Animated visibility uses the class-toggle pattern: `:class="$clicks < N ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'"` with `transition duration-500 ease-in-out`.
- If custom content uses raw `$clicks` conditions, also declare click steps via `v-click` / `v-after` or slide `clicks:` frontmatter.

> **Never use `<Transition>` or `<TransitionGroup>` for click-driven animations** — they cause elements to disappear without animation on backward navigation. Always use the class-toggle pattern above.

### Change Theme Colors

Edit the frontmatter in `slides.md`:

```yaml
---
glowPreset: blue  # Options: blue, rust, cyan
glowSeed: 42      # Any number for different particle patterns
---
```

### Use Different Layouts

Available layouts:
- `cover` - Title slide
- `section` - Section divider
- `contents-toc` - Table of contents
- `end` - Closing slide

Example:

```markdown
---
layout: cover
---

# Your Title
```

### Add Advanced Features

The theme includes optional components that require extra dependencies. Install only what you need:

```bash
# Terminal recordings → enables <AsciinemaPlayer> component
npm install @nolebase/ui-asciinema asciinema-player

# 3D scenes → enables TresJS/Three.js integration
npm install @tresjs/core @tresjs/cientos three

# Declarative motion → enables <VMotionExample> and v-motion directive
npm install @vueuse/motion
```

These won't break your build if missing — components gracefully degrade.

## Documentation

See the [theme documentation](../theme/README.md) for more details.
