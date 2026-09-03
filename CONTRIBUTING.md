# Contributing to slidev-templates

Thank you for helping build a useful Slidev template discovery and maintenance ecosystem. Contributions that make templates easier to discover, evaluate, reuse, verify, or maintain are especially welcome.

This repository accepts two different contribution models:

- **Hosted templates** are maintained and continuously checked in this repository.
- **External entries** stay in their canonical upstream repository and are indexed here without vendoring their code.

Read [`docs/TEMPLATE_CONTRACT.md`](./docs/TEMPLATE_CONTRACT.md) before proposing a new template.

## Before opening a change

- Search existing issues, registry entries, and pull requests first.
- Keep changes focused; avoid unrelated formatting or refactors.
- Explain the user problem and how the change was verified.
- Distinguish observed upstream facts from assumptions or recommendations.
- Do not copy public code or assets unless redistribution is permitted and required notices are preserved.
- New templates must be reusable beyond one presentation, customer, event, or private organization.

## Local setup

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm ci
npm test
```

Build every manifest-based hosted template:

```bash
npm run build:hosted
```

For Neko Style changes:

```bash
npm run build:neko
npm run export:neko
```

Browse the registry locally:

```bash
npm run gallery:serve
```

Use the registry CLI:

```bash
npm run templates -- list
npm run templates -- search research
npm run templates -- scaffold paper-lab ./my-talk
```

## Submit an external template

The lowest-friction path is the [Template submission form](https://github.com/iridite/slidev-templates/issues/new?template=template_submission.yml).

Provide:

- canonical repository and maintainer;
- purpose, audience, and distinctive value;
- representative preview or live demo;
- shortest reproducible start command;
- license and relevant asset attribution;
- preferred inclusion model.

An external entry should normally remain external when it is actively governed upstream, includes organization-specific branding, has a reciprocal license, or would create substantial duplicated maintenance.

A focused registry PR may update `registry/templates.json` directly. Run `npm test` before submitting it.

## Add a hosted template

New hosted templates belong under:

```text
templates/<template-id>/
├── template.json
├── README.md
├── LICENSE
├── ATTRIBUTION.md
├── preview.svg | preview.png | preview.webp
└── starter/
    ├── package.json
    └── slides.md
```

The manifest must conform to [`registry/hosted-template.schema.json`](./registry/hosted-template.schema.json). The registry entry must point to the template root, starter path, manifest, and preview.

A hosted template should add meaningful diversity. A new color palette applied to the same structure is not enough. Strong distinctions include audience, presentation job, information architecture, interaction model, component system, or delivery workflow.

### Provenance

Declare one of:

- `original` — designed and implemented in this repository;
- `inspired` — original implementation informed by named references;
- `adapted` — contains material from a permissively licensed upstream project.

Adapted work must preserve the upstream license and required notices. Add an accurate `ATTRIBUTION.md`; do not use vague language such as “inspired by” to hide copied implementation.

### Hosted-template checklist

Before opening a PR, confirm that:

- `npm test` passes;
- `npm run build:hosted` passes;
- the starter runs with the documented command;
- the preview represents the actual template;
- README, manifest, registry metadata, license, and attribution agree;
- sample content contains no private, confidential, or misleading real-world data;
- external fonts and assets are either removed or explicitly licensed;
- the template adds a clearly different use case or workflow.

## Modify an existing hosted template

For user-facing changes, explain:

- what workflow or rendering problem is being fixed;
- which slides or components are affected;
- how compatibility was tested;
- whether the preview, documentation, manifest version, or registry description should change.

Avoid breaking a documented scaffold path without a compatibility note or migration plan.

## Pull request checklist

Every PR should make it easy to review:

- [ ] Scope is focused and the motivation is clear.
- [ ] `npm test` passes.
- [ ] Relevant hosted templates build.
- [ ] Neko Style builds/exports when affected.
- [ ] Documentation and generated/catalog-facing data are synchronized.
- [ ] Dependencies are necessary and declared in the correct package.
- [ ] Licensing, attribution, and provenance have been checked.
- [ ] The PR states exactly how the change was verified.

## Maintainer workflow

Issues are triaged using reproducibility, user impact, ecosystem usefulness, licensing, and maintenance cost. Registry additions are curated rather than automatically accepted.

Automation and coding agents may assist with candidate discovery, metadata extraction, installation reproduction, tests, and review summaries. Final decisions on inclusion, provenance, licensing, security, merges, and releases remain human-owned under [`docs/AI_ASSISTED_MAINTENANCE.md`](./docs/AI_ASSISTED_MAINTENANCE.md).

Small, well-scoped changes with explicit evidence are the easiest to review and merge.

By contributing repository-maintained code or documentation, you agree that your contribution is licensed under the repository's MIT License unless a nested license states otherwise. External registry entries retain their upstream licenses.
