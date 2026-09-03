# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added

- Three distinct repository-hosted starter templates:
  - **Paper Lab** for research questions, methods, evidence, results, and limitations.
  - **Terminal Ink** for incident reviews, code explanations, system walkthroughs, and operational decisions.
  - **Editorial Grid** for product narratives, strategy, launches, and editorial storytelling.
- Machine-readable `template.json` manifests for new hosted templates.
- `registry/hosted-template.schema.json` and a documented reusable-template contract.
- Representative SVG previews, per-template licenses, and explicit provenance records.
- A searchable registry-powered browser gallery under `gallery/`.
- A zero-dependency registry CLI with list, search, info, and hosted-template scaffold commands.
- Automated clean builds for every manifest-based hosted template.
- Registry/CLI/gallery/hosted-template contract tests.
- Documented AI-assisted maintenance policy with human-only licensing, curation, security, and merge decisions.
- Template landscape research, governance links, and an adoption-focused roadmap.

### Changed

- Reframed the repository from a single-theme-oriented collection into a hosted and external Slidev template ecosystem.
- Expanded registry metadata with template kind, categories, provenance, compatibility, and verification evidence.
- Expanded the curated catalog while retaining canonical upstream ownership for external projects.
- Split CI into registry validation, hosted-template builds, and Neko Style build/PDF export jobs.
- Updated English and Chinese project documentation and contribution paths around the template contract.

### Fixed

- Replaced an unreliable external preview endpoint with a repository-owned source URL.
- Added CI concurrency so superseded branch runs are cancelled.
- Added root-level regression tests to the default CI path.

## [1.0.0] - 2026-05-28

### Added

- **neko-style** theme and starter, extracted from neko-talks / KubeCon HK 2025 presentations.
- 43 reusable Vue components covering narrative, data display, architecture diagrams, speaker introductions, and closing slides.
- Nine layout variants: `cover`, `intro`, `section`, `contents-toc`, `page`, `page-wide`, `center`, `default`, and `end`.
- Seed-based dynamic glow background system with three color presets: `blue`, `rust`, and `cyan`.
- Unified 500ms animation system with `v-click` progressive disclosure.
- Semantic color system for problems, solutions, information, advanced topics, and performance.
- Ready-to-use example deck demonstrating core features.
- Theme documentation, AI-assistant guide, component catalog, and page recipes.
- Build validation and PDF export through GitHub Actions.
- Optional advanced components for terminal replay, motion, liquid-glass effects, and TresJS/Three.js integration.
