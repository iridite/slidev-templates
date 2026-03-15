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
