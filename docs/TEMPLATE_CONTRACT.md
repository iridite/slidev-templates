# Reusable Template Contract

This document defines what `slidev-templates` treats as a reusable presentation template. The contract exists so that the registry remains useful to people, automation, and downstream tools rather than becoming an unstructured list of slide decks.

## Template, theme, and deck

A **theme** primarily controls visual appearance. A **deck** is the content of one presentation. A **template** is a reusable starting workflow that another person can adopt without private assets or undocumented context.

A template may include a theme, but it can also include:

- a starter deck with representative page patterns;
- layouts and reusable Vue components;
- project configuration and dependency choices;
- build, export, or deployment workflows;
- documentation, previews, and attribution;
- an opinionated information architecture for a recurring presentation type.

The registry therefore complements Slidev's theme ecosystem. It indexes complete starting workflows, including templates that use existing themes or no custom theme at all.

## Hosted template structure

New repository-hosted templates live under `templates/<template-id>/` and should contain:

```text
templates/<template-id>/
├── template.json       # machine-readable template metadata
├── README.md           # purpose, use cases, and quick start
├── LICENSE             # license for the hosted implementation
├── ATTRIBUTION.md      # provenance and third-party acknowledgements
└── starter/
    ├── package.json
    └── slides.md       # runnable, representative starter deck
```

Additional components, layouts, public assets, setup files, tests, or workflows are welcome when they materially improve the reusable starting point.

`neko-style/` predates this directory contract and remains at its historical path for compatibility. It is still represented through the same registry metadata and verification model.

## Required qualities

A hosted template must be:

1. **Reusable** — useful beyond one named event, customer, or private organization.
2. **Reproducible** — a new user can install and start it from documented commands.
3. **Inspectable** — the repository contains a representative starter and preview.
4. **Licensed** — code, documentation, fonts, images, and other bundled assets have clear terms.
5. **Distinct** — it provides a meaningfully different presentation workflow, visual language, or audience from existing entries.
6. **Maintainable** — dependencies and structure are small enough for maintainers to verify over time.

## External entries

External templates remain in their canonical upstream repositories. The registry records discovery metadata and does not imply ownership, endorsement, or transfer of governance.

External entries must have:

- a public canonical source;
- a clear license;
- usable documentation;
- a representative preview or live demo;
- a reproducible starting path;
- enough reusable structure to qualify as a template rather than one finished talk.

External projects with restrictive, reciprocal, or brand-specific licensing may still be indexed when their terms are clear, but they are not copied into this repository.

## Verification levels

- **Verified** — repository maintainers have exercised the documented primary start path. Hosted entries also pass repository CI.
- **Community** — reviewed for discoverability, documentation, and licensing, while runtime verification remains with the upstream project.
- **Experimental** — promising or unusual work with weaker compatibility guarantees.

Status measures verification, not popularity.

## Provenance rules

Every hosted template declares one of these provenance types:

- `original`: designed and implemented in this repository;
- `inspired`: original implementation informed by named public references;
- `adapted`: contains material adapted from a permissively licensed upstream project and preserves the required notices.

A template must not be described as original when it contains adapted code or assets. A permissive upstream license does not remove attribution, trademark, or asset-specific obligations.

## Review checklist

Maintainers review submissions for:

- reproducible setup and build;
- licensing and provenance;
- visual and workflow distinctiveness;
- accessibility and legibility;
- dependency and maintenance burden;
- representative examples rather than placeholder-only slides;
- overlap with existing templates;
- whether hosted or external inclusion is the safer long-term model.

The final curation decision remains human-owned even when automation or AI assists with discovery, metadata extraction, reproduction, or review.