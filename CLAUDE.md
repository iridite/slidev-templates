# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo containing high-quality Slidev presentation templates. The primary template is **neko-style**, extracted from neko-talks and KubeCon HK 2025 presentations.

## Development Commands

### Running the Example
```bash
# From repository root
npm install
npm run dev:neko      # Start neko-style example at http://localhost:3030
npm run build:neko    # Build for production
npm run export:neko   # Export to PDF/images
```

### Working with Individual Templates
```bash
# Navigate to template example
cd neko-style/starter

# Development
npm run dev           # Start dev server with hot reload
npm run build         # Build static site
npm run export        # Export presentation
```

## Architecture

### Monorepo Structure
- **Root `package.json`**: Defines workspaces and top-level scripts
- **`neko-style/theme/`**: NPM theme package with components, layouts, and styles
- **`neko-style/starter/`**: Starter template that uses the theme
- **`neko-style/docs/`**: Shared documentation
- **`neko-style/examples/`**: Real-world presentation examples

### neko-style Template Architecture

The template is organized as a **hybrid system** supporting two usage modes:

1. **Theme Package** (`theme/`): Installable via npm, provides components and layouts
2. **Starter Template** (`starter/`): Ready-to-use project template that references the theme

### neko-style Theme Architecture

**Core Component**: `components/GlowBackground.vue`
- Implements dynamic polygon-based gradient backgrounds
- Uses `seedrandom` for stable, reproducible random distributions
- Supports 3 color presets: `blue` (default), `rust`, `cyan`
- Reads frontmatter properties from each slide for per-page configuration

**Frontmatter Configuration System**:
Each slide in `slides.md` can configure its appearance via frontmatter:
```yaml
---
glowSeed: 42              # Seed for stable random background (required for variety)
glowPreset: blue          # Color preset: blue | rust | cyan
theme: dark               # Theme: dark | light
glow: center              # Distribution: full | top | bottom | left | right | center
glowOpacity: 0.4          # Background opacity (0-1)
glowHue: 0                # Hue shift (0-360)
---
```

**Component System**:
The template uses semantic, card-based components built with UnoCSS utility classes:
- **Color semantics**: red-800 (problems), green-800 (solutions), blue-800 (info), purple-800 (advanced), yellow-800 (performance)
- **Card structure pattern**: Border + background with header and content sections
- **Animation system**: Unified 500ms transitions with `v-click` for progressive disclosure

**Styling Architecture**:
- `theme/styles/index.css`: Base styles and transition conventions
- `starter/uno.config.ts`: UnoCSS configuration used by the starter template
- Uses UnoCSS with presets: Uno, Attributify, Icons, WebFonts
- Icon collections: `@iconify-json/carbon`, `@iconify-json/logos`

## Key Files and Their Purposes

- **`neko-style/docs/FOR-AI-ASSISTANTS.md`**: Comprehensive guide for AI assistants creating presentations with this template
- **`neko-style/docs/components-guide.md`**: Complete component library with copy-paste code examples
- **`neko-style/docs/QUICK-START.md`**: 5-minute quick start guide
- **`neko-style/theme/components/GlowBackground.vue`**: Core glow background implementation
- **`neko-style/theme/global-bottom.vue`**: Theme-level global background entry for Slidev
- **`neko-style/theme/styles/index.css`**: Theme base styles
- **`neko-style/starter/uno.config.ts`**: Starter-side UnoCSS configuration

## Creating New Presentations

When helping users create presentations with neko-style:

1. **Read the AI guide first**: Always reference `neko-style/docs/FOR-AI-ASSISTANTS.md` for detailed instructions
2. **Copy components from guide**: Use `neko-style/docs/components-guide.md` as the source of truth for component code
3. **Follow semantic colors**: Red for problems, green for solutions, blue for information
4. **Vary glowSeed per page**: Use different seed values (100, 150, 200, etc.) for visual variety
5. **Use v-click for animations**: Wrap content in `<v-click>` for progressive disclosure

## Template Setup for New Projects

### Option 1: Use Starter Template (Recommended for new users)

```bash
npx degit user/repo/neko-style/starter my-presentation
cd my-presentation
npm install
npm run dev
```

### Option 2: Install Theme Package (Recommended for existing projects)

```bash
npm install slidev-theme-neko-style
```

Then add to `slides.md`:
```yaml
---
theme: neko-style
---
```

## Theme Development

When modifying the theme itself:

- **Theme source**: All components, layouts, and styles are in `neko-style/theme/`
- **Test with starter**: Use `neko-style/starter/` to test theme changes
- **Single source of truth**: Never duplicate components between theme and starter

## Color Preset System

Three presets inspired by neko-talks presentations:

- **blue** (default): #18549a → #12238b - Technical talks, product launches
- **rust**: #ed5132 → #ed4832 - Rust topics, innovation themes
- **cyan**: #32aeed → #32e5ed - AI/ML topics, academic presentations

Presets are defined in `GlowBackground.vue` and can be extended by modifying the `colorPresets` object.

## Documentation Priority

When users need help, guide them to documentation in this order:

1. `neko-style/docs/components-guide.md` - Most important, contains all component code
2. `neko-style/docs/FOR-AI-ASSISTANTS.md` - Comprehensive AI assistant guide
3. `neko-style/starter/slides.md` - Working starter with all core features
4. `neko-style/docs/QUICK-START.md` - Quick start guide
5. `neko-style/docs/color-system.md` - Color system details
6. `neko-style/docs/animation-patterns.md` - Animation patterns

## Important Conventions

- **Never modify core component structure**: Keep the card pattern (border + background + header + content) intact
- **Maintain animation consistency**: All animations use `transition duration-500 ease-in-out`
- **Use semantic colors consistently**: Don't mix color meanings (e.g., don't use red for solutions)
- **Each page needs unique glowSeed**: Different seeds create visual variety across slides
- **Component file naming**: `GlowBackground.vue` must be named `global-bottom.vue` in Slidev projects (this is a Slidev convention for global components)

## Dependencies

Core dependencies for neko-style:
- `@slidev/cli`: Slidev framework
- `seedrandom`: Stable random number generation for backgrounds
- `unocss`: Utility-first CSS framework
- Icon collections: `@iconify-json/carbon`, `@iconify-json/logos`

## Git Workflow

This repository follows standard git practices:
- Main branch: `main`
- Recent commits show documentation reorganization and monorepo structure improvements
- Clean working directory (no uncommitted changes)
ges)
