# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added

- Three original, self-contained repository-hosted starters:
  - **Paper Lab** for research questions, methods, evidence, uncertainty, and limitations.
  - **Terminal Ink** for incident reviews, system walkthroughs, logs, interventions, and follow-up decisions.
  - **Editorial Grid** for product, strategy, launch, and evidence-led editorial narratives.
- Direct `degit` extraction paths whose starter directories retain README, license, attribution, ignore rules, package metadata, styles, and slides.
- Registry v2 with 12 curated workflows: 4 hosted and 8 upstream-governed external entries.
- Exact registry and hosted-manifest schemas for kind, categories, ownership, license evidence, provenance, compatibility, verification checks, workflow, and review date.
- Canonical `licenseUrl` evidence for every hosted and external registry entry.
- A searchable registry-powered browser gallery with source, category, status, verification, license, and command discovery.
- A zero-dependency CLI with list, search, info, and safe hosted-template scaffold commands.
- Automated clean installation/build verification for every contract-based hosted starter.
- Scheduled external source, preview, and license health checks.
- Static gallery build and explicit GitHub Pages publication workflow.
- Landscape/curation audit, reusable-template contract, third-party notices, adoption evidence policy, governance, and AI-assisted maintenance boundaries.
- Template submission and registry correction issue forms.

### Changed

- Reframed the repository from a single-theme-oriented collection into a curated Slidev template discovery and maintenance ecosystem.
- Aligned new hosted starters with the official Slidev 52.19.1 / Vue 3.5 baseline while leaving Neko Style on its separately tested historical compatibility line.
- Made the machine-readable registry canonical for English and Chinese generated catalogs.
- Required direct license evidence and explicit hosted/external ownership boundaries.
- Expanded CI into registry/catalog/gallery checks, clean hosted-template builds, and Neko Style build/PDF export verification.
- Strengthened contribution and PR review requirements for provenance, legal files, clean extraction, and verification honesty.

### Fixed

- Brought `registry/schema.json` into agreement with the richer fields already consumed by the catalog, gallery, CLI, and tests.
- Removed obsolete Slidev 0.49 dependencies from the three new hosted starters.
- Replaced an unreliable external preview endpoint with a repository-owned source URL.
- Ensured scaffolded hosted starters retain license and attribution evidence.
- Made external license links part of scheduled registry health checks.
- Added CI concurrency so superseded branch runs are cancelled.

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
