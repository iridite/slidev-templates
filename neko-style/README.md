# neko-style Slidev Template

A professional presentation template extracted from neko-talks / KubeCon HK 2025, featuring animated glow backgrounds, 43+ reusable components, and a semantic color system.

## Quick Start

```bash
npx degit iridite/slidev-templates/neko-style my-presentation
cd my-presentation/starter
npm install
npm run dev
```

For existing Slidev projects, see [theme/README.md — Installation](./theme/README.md#installation).

## Project Structure

```
neko-style/
├── theme/                 # NPM theme package (slidev-theme-neko-style)
│   ├── components/        #   43 Vue components (incl. advanced)
│   ├── layouts/           #   9 layout variants
│   ├── styles/            #   Base CSS + animations
│   ├── setup/             #   Slidev setup hooks
│   ├── utils/             #   Theme utilities
│   ├── global-bottom.vue  #   Glow background entry
│   ├── package.json       #   Package metadata
│   └── README.md          #   Comprehensive documentation ⭐
├── starter/               # Ready-to-use demo project
│   ├── slides.md          #   "Project Aurora" example deck
│   ├── uno.config.ts      #   UnoCSS config
│   └── package.json       #   Dev dependencies
├── docs/                  # Reference documentation
│   ├── COMPONENT-CATALOG.md   # Full props reference (lookup)
│   ├── PAGE-PATTERNS.md       # Slide composition recipes
│   └── design-language-airi-2025-10.md  # Design language
├── snippets/              # Fillable page templates for AI
├── examples/              # Golden example + bad-vs-good
└── ref/talks/             # Git submodule (nekomeowww/talks)
```

## Documentation

| Document | Description |
|----------|-------------|
| [theme/README.md](./theme/README.md) | **Complete reference** — installation, layouts, components, glow system, colors, animations |
| [SKILL.md](./SKILL.md) | **Single AI reference** — rules, routing table, templates, snippets |
| [docs/design-language-airi-2025-10.md](./docs/design-language-airi-2025-10.md) | AIRI design language principles |

## Highlights

- **Glow Backgrounds** — Seed-based stable random polygon gradients, 3 presets (`blue` / `rust` / `cyan`)
- **45+ Components** — Narrative, data display, architecture diagrams, speaker intros, closing slides
- **13 Layouts** — cover, intro, section, statement, compare, cards, timeline, contents-toc, page, page-wide, center, default, end
- **Semantic Colors** — Red=problems, Green=solutions, Blue=info, Purple=advanced, Yellow=performance
- **Unified Animations** — 500ms transitions with `v-click` progressive disclosure

## AI-Assisted Creation

```bash
# Copy skill to your project
cp neko-style/SKILL.md .claude/skills/neko-slidev.md
# Then use /neko-slidev in Claude Code
```

See [SKILL.md](./SKILL.md) for the complete AI reference.

## Credits

Original design by [nekomeowww](https://github.com/nekomeowww) from the neko-talks presentation series.

## License

MIT
