# Contributing to slidev-templates

Thank you for helping build a useful Slidev template discovery and maintenance ecosystem. Contributions that make templates easier to discover, evaluate, reuse, verify, or maintain are especially welcome.

This repository accepts two ownership models:

- **Hosted templates** are maintained and continuously checked here.
- **External entries** stay in their canonical upstream repository and are indexed without vendoring their implementation.

Read [`docs/TEMPLATE_CONTRACT.md`](./docs/TEMPLATE_CONTRACT.md), [`GOVERNANCE.md`](./GOVERNANCE.md), and [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md) before proposing a template.

## Before opening a change

- Search existing issues, registry entries, and pull requests.
- Keep scope focused and explain the user problem.
- Separate observed upstream facts from inference or recommendation.
- Never copy public code or assets without permission; public visibility is not a license.
- Do not claim runtime, license, adoption, or compatibility evidence that was not checked.
- New templates must be reusable beyond one presentation, customer, event, or private organization.

## Local verification

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm ci
npm run registry:catalog:check
npm run gallery:check
npm test
npm run build:hosted
```

For Neko Style changes, also run:

```bash
npm run build:neko
npm run export:neko
```

Browse and query the registry:

```bash
npm run gallery:serve
npm run templates -- list
npm run templates -- search research
npm run templates -- scaffold paper-lab ./my-talk
```

## Submit an external template

Use the [Template submission form](https://github.com/iridite/slidev-templates/issues/new?template=template_submission.yml) or a focused registry PR. Provide the canonical repository/maintainer, distinctive purpose, representative preview, reproducible start command, direct license URL, and any branding or asset caveats.

An entry should normally remain external when it has active upstream governance, organization branding, a reciprocal license, its own package/release ecosystem, or substantial independent automation that would create duplicated maintenance.

## Add a hosted template

New hosted templates use this shape:

```text
templates/<template-id>/
├── template.json
├── README.md
├── LICENSE
├── ATTRIBUTION.md
├── preview.svg | preview.png | preview.webp
└── starter/
    ├── .gitignore
    ├── README.md
    ├── LICENSE
    ├── ATTRIBUTION.md
    ├── package.json
    ├── slides.md
    └── styles/ | components/ | public/  # as needed
```

The `starter/` directory is the direct extraction boundary. A user who copies only that directory must retain usage guidance, legal evidence, attribution, and every local file required to run the deck.

The manifest must conform to [`registry/hosted-template.schema.json`](./registry/hosted-template.schema.json). The registry entry and manifest must agree on identity, description, categories, tags, license, provenance, compatibility, verification, and starter paths.

A hosted template must add meaningful diversity. A new palette over the same slide structure is insufficient. Strong distinctions include audience, presentation job, information architecture, interaction model, component system, or delivery workflow.

### Provenance

Declare exactly what happened:

- `original` — designed and implemented here;
- `inspired` — an original implementation informed by named references;
- `adapted` — contains material from a permissively licensed upstream project.

Adapted work must preserve the upstream license and notices and identify copied/adapted material precisely. Do not use “inspired by” to conceal implementation reuse.

### Hosted-template acceptance checklist

- [ ] Direct `degit` extraction produces a self-contained starter.
- [ ] `npm install` and `npm run build` succeed in a clean environment.
- [ ] The preview represents the real starter.
- [ ] Root and starter README/license/attribution files are present.
- [ ] Manifest, registry metadata, package metadata, and documentation agree.
- [ ] No private, confidential, deceptive, or unlicensed sample material is included.
- [ ] Remote fonts/assets are removed or have explicit redistribution evidence.
- [ ] The template adds a clearly different recurring presentation job.

## Modify the registry or catalog

`registry/templates.json` is canonical. After editing it, run:

```bash
npm run registry:catalog
npm run registry:catalog:check
npm test
npm run gallery:check
```

Do not hand-edit text between the generated catalog markers in `README.md` or `README.zh-CN.md`.

## Pull-request checklist

- [ ] Motivation and scope are clear.
- [ ] Relevant tests/builds were run and listed.
- [ ] Generated catalogs are synchronized.
- [ ] Licensing, attribution, source ownership, and provenance are inspectable.
- [ ] Verification level matches the checks actually performed.
- [ ] Dependencies are necessary and declared in the correct package.
- [ ] User-facing commands and extraction paths were exercised.
- [ ] Compatibility or migration consequences are documented.

## Maintainer and automation workflow

Issues are triaged using reproducibility, user impact, ecosystem usefulness, licensing, verification depth, and maintenance cost. Automation may assist with discovery, metadata extraction, setup reproduction, tests, and review summaries. Final decisions on inclusion, licensing, provenance, security, public claims, merges, and releases remain human-owned under [`docs/AI_ASSISTED_MAINTENANCE.md`](./docs/AI_ASSISTED_MAINTENANCE.md).

By contributing repository-maintained code or documentation, you agree that it is licensed under the repository MIT License unless a nested license states otherwise. External registry entries retain their upstream licenses.
