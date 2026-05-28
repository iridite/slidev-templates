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

- Group cards on first paint use `TransitionGroup appear` with a shared base delay plus short stagger.
- Step-by-step narration uses `v-click` / `v-after` instead of ad-hoc timing chains.
- If custom content uses raw `$clicks` conditions, also declare click steps via `v-click` / `v-after` or slide `clicks:` frontmatter.

This prevents "last item disappears on leave" and avoids one card lagging far behind the rest.

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

Install optional dependencies as needed:

```bash
# Terminal recordings
npm install @nolebase/ui-asciinema asciinema-player

# 3D scenes
npm install @tresjs/core @tresjs/cientos three

# Motion animations
npm install @vueuse/motion
```

## Documentation

See the [theme documentation](../theme/README.md) for more details.
