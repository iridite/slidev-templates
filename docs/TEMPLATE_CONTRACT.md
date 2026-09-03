# Reusable Template Contract

This document defines what `slidev-templates` treats as a reusable presentation template. The contract keeps the registry useful to people, automation, and downstream tools instead of becoming an unstructured list of finished decks.

## Template, theme, and deck

A **theme** primarily controls visual appearance. A **deck** is the content of one presentation. A **template** is a reusable starting workflow that another person can adopt without private assets or undocumented context.

A template may include a theme, but it can also include:

- a representative starter deck and narrative structure;
- layouts and reusable Vue components;
- project configuration and dependency choices;
- build, export, testing, or deployment workflows;
- documentation, previews, license evidence, and attribution;
- an opinionated information architecture for a recurring presentation job.

The registry complements Slidev's theme ecosystem by indexing complete starting workflows.

## Hosted directory contract

New repository-hosted templates live under `templates/<template-id>/`:

```text
templates/<template-id>/
├── template.json
├── README.md
├── LICENSE
├── ATTRIBUTION.md
├── preview.svg
└── starter/
    ├── package.json
    ├── slides.md
    ├── README.md
    ├── LICENSE
    ├── ATTRIBUTION.md
    └── .gitignore
```

The repeated license and attribution inside `starter/` are intentional: extracting only that directory must still produce a legally and operationally self-contained project.

`neko-style/` predates this contract and remains at its historical path for compatibility.

## Required qualities

A hosted template must be:

1. **Reusable** — useful beyond one event, customer, institution, or private organization.
2. **Reproducible** — a new user can extract, install, start, and build it from documented commands.
3. **Self-contained** — no private files, untracked remote assets, or parent-directory license assumptions.
4. **Inspectable** — representative content and preview make its information architecture visible.
5. **Licensed** — repository code and bundled assets have direct, reviewable license evidence.
6. **Provenanced** — original, inspired, and adapted work are distinguished honestly.
7. **Distinct** — it covers a different audience, presentation job, workflow, or visual language.
8. **Maintainable** — dependencies and structure are small enough for clean CI verification.

The current contract-based starters use the official Slidev 52.19.x application baseline and Node.js 20.12 or newer. Compatibility is changed only after clean-build evidence.

## External entries

External templates remain in their canonical repositories. The registry records discovery metadata and does not imply ownership, endorsement, or transfer of governance.

External entries need:

- a public canonical source;
- direct license evidence;
- usable documentation;
- a representative preview or live demo;
- a reproducible starting path;
- an identifiable maintainer;
- enough reusable structure to qualify as a template rather than one finished talk.

Reciprocal, branded, or independently governed projects may be indexed while remaining external.

## Provenance rules

Hosted provenance types are:

- `original` — designed and implemented in this repository;
- `inspired` — original implementation informed by named public references;
- `adapted` — contains material adapted from a licensed upstream and preserves required notices.

A permissive license does not remove attribution, trademark, font, image, or other asset-specific obligations. A template must not be described as original when it contains adapted source material.

External entries use `external` provenance and stay under upstream ownership.

## Verification rules

- `build-and-export` proves a build and PDF export path.
- `clean-install-build` proves a clean dependency installation and Slidev build.
- `metadata-health` proves source, preview, and license-link reachability only.

Verification must record the checks, responsible workflow, and review date. The registry must not infer runtime compatibility for an external project from repository visibility or metadata alone.

## Review checklist

Maintainers review:

- extraction and setup path;
- representative content and workflow distinctiveness;
- license evidence and provenance;
- accessibility and legibility;
- dependency and maintenance burden;
- local and remote asset ownership;
- overlap with existing entries;
- whether hosted or external inclusion is safer;
- whether status and verification claims match actual evidence.

Automation may prepare evidence. The final licensing, curation, security, and merge decision is human-owned.
