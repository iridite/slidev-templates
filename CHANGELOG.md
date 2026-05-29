# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-05-28

### Added

- **neko-style** theme — extracted from neko-talks / KubeCon HK 2025 presentations
- 43 reusable Vue components covering narrative, data display, architecture diagrams, speaker intros, and closing slides
- 9 layout variants: `cover`, `intro`, `section`, `contents-toc`, `page`, `page-wide`, `center`, `default`, `end`
- Seed-based dynamic glow background system with 3 color presets (`blue`, `rust`, `cyan`)
- Unified 500ms animation system with `v-click` progressive disclosure
- Semantic color system: red (problems), green (solutions), blue (info), purple (advanced), yellow (performance)
- `starter/` — ready-to-use "Project Aurora" example deck with all core features demonstrated
- Comprehensive theme documentation (1100+ lines covering layouts, components, glow system, color system, animations)
- AI assistant guide (`FOR-AI-ASSISTANTS.md`) and component routing table (`COMPONENT-CATALOG.md`)
- Copy-paste page recipes (`PAGE-PATTERNS.md`)
- CI pipeline: build validation + PDF export via Playwright
- Optional advanced components: `AsciinemaPlayer`, `VMotionExample`, `LiquidGlass`, TresJS/Three.js integration
