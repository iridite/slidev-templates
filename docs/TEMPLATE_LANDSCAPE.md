# Slidev Template Landscape

This document records the initial public-repository survey used to shape the registry. It is not a popularity ranking. The purpose is to identify distinct reusable workflows, understand licensing constraints, and avoid turning the catalog into a list of near-identical themes.

## Selection dimensions

Candidates are assessed on five dimensions:

1. **Reusable workflow** — useful as a starting point beyond one talk.
2. **Distinct value** — a recognizable audience, information architecture, or authoring workflow.
3. **Reproducibility** — a documented way to clone, scaffold, build, or export.
4. **Provenance** — a public source and clear license.
5. **Maintenance fit** — realistic to index or verify without taking ownership away from upstream authors.

Stars and forks are useful adoption signals, but they are not acceptance criteria by themselves.

## Representative findings

### LittleSound/talks-template

A mature multi-talk workspace with GitHub Template and `degit` onboarding. It demonstrates strong demand for managing many Slidev talks in one repository rather than treating every deck as an isolated project.

Decision: **external registry entry**. Its AGPL-3.0 license is clear, but copying it into this MIT repository would create avoidable reciprocal-licensing and maintenance complexity. The registry links to the canonical project instead.

### Miragon/slidev-deck-template

A polished corporate presentation system with a scaffolder, reusable archetypes, validation tooling, and AI-authoring guidance. Its strongest contribution is not merely visual styling, but an opinionated end-to-end authoring workflow.

Decision: **external registry entry and design reference**. The upstream project remains the right place for its brand-specific implementation. This repository does not copy Miragon branding or assets.

### 3mdeb/slidev-template

A production-oriented workflow with smoke tests, visual regression, rendering, and PDF generation. It is especially useful as evidence that presentation templates can be tested as software rather than distributed only as screenshots.

Decision: **external registry entry**. Its Apache-2.0 license is clear and the canonical repository already contains the verification infrastructure.

### Espressif/slidev-esp-template

A branded technical-presentation starter with components, addons, examples, and deployment configuration. It represents organizational reuse and a practical developer-conference workflow.

Decision: **external registry entry**. Brand identity and upstream ownership make indexing preferable to vendoring.

### kaakaa/slidev-resources-template

A repository-level workflow for managing multiple Slidev resources and producing GitHub Release PDFs and GitHub Pages deployments.

Decision: **external registry entry**. It fills the multi-resource automation category without requiring this project to duplicate its release machinery.

### godkun/ppt-template

A compact, visually polished Slidev starter with a low-friction pnpm setup and a strong emphasis on immediate visual output.

Decision: **external registry entry and workflow reference**. The registry records the canonical project; repository-hosted templates use independent implementations rather than copying its presentation content.

### luckenco/slidev-academic-GitHub

A permissively licensed academic Slidev starting point. It highlighted an underrepresented need for research talks with citations, methods, results, and publication-oriented typography.

Decision: **design research reference** for the repository-hosted `paper-lab` template. `paper-lab` is an original clean-room implementation; no upstream code, institutional branding, or assets are copied.

## Gaps identified

The public ecosystem has many developer and organization-specific starters, but discovery is fragmented and template metadata is inconsistent. Several useful presentation jobs remain difficult to compare across repositories:

- academic and research communication;
- terminal-first incident or systems narratives;
- editorial and product-storytelling decks;
- compatibility, licensing, and health signals across independent projects.

The first additional hosted templates intentionally target the first three gaps:

- `paper-lab` — research and evidence communication;
- `terminal-ink` — code, incidents, and systems walkthroughs;
- `editorial-grid` — product narratives and visually paced storytelling.

These templates are small original implementations. They demonstrate the registry's hosted-template contract without absorbing the governance or branding of external projects.

## Ongoing survey policy

Future candidates should normally enter through the Template Submission issue form or a focused registry pull request. Maintainers may also discover candidates publicly, but inclusion requires source verification and a clear license.

The survey should remain reproducible: record why an entry is useful, why it is hosted or external, and what uncertainty remains. Do not infer permission to redistribute from repository visibility alone.