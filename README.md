# Slidev Templates

[![CI](https://github.com/iridite/slidev-templates/actions/workflows/ci.yml/badge.svg)](https://github.com/iridite/slidev-templates/actions/workflows/ci.yml)
[![Registry Health](https://github.com/iridite/slidev-templates/actions/workflows/registry-health.yml/badge.svg)](https://github.com/iridite/slidev-templates/actions/workflows/registry-health.yml)
[![License: MIT](https://img.shields.io/badge/repository-MIT-171713.svg)](./LICENSE)
[![Registry](https://img.shields.io/badge/catalog-machine--readable-3155d8.svg)](./registry/templates.json)

**A curated, machine-readable registry and hosted collection of reusable [Slidev](https://sli.dev) presentation templates.**

The project makes high-quality Slidev starting points easier to **discover, compare, reuse, verify, and contribute**. It is not a repository for one theme and it is not an unreviewed link list.

A template here means a complete presentation workflow: it can include a starter deck, narrative structure, layouts, components, configuration, examples, documentation, and build/export/deployment practices. A theme may be part of a template, but visual theming alone is not the collection boundary.

[中文说明](./README.zh-CN.md) · [Registry JSON](./registry/templates.json) · [Template contract](./docs/TEMPLATE_CONTRACT.md) · [Submit a template](https://github.com/iridite/slidev-templates/issues/new?template=template_submission.yml) · [Governance](./GOVERNANCE.md)

## What is available now?

The initial catalog contains **four repository-hosted templates** and **seven independently governed external projects**. Hosted templates are continuously checked here; external entries remain owned and maintained by their canonical upstream repositories.

### Repository-hosted collection

| Template | Designed for | Preview | Start |
| --- | --- | --- | --- |
| [Neko Style](./neko-style/) | Technical talks, developer presentations, AI/ML, conferences | [Preview](./assets/neko-style-preview.png) | `npx degit iridite/slidev-templates/neko-style my-presentation` |
| [Paper Lab](./templates/paper-lab/) | Research questions, methods, evidence, results, limitations | [Preview](./templates/paper-lab/preview.svg) | `npx degit iridite/slidev-templates/templates/paper-lab paper-lab-talk` |
| [Terminal Ink](./templates/terminal-ink/) | Incident reviews, systems walkthroughs, code and operations | [Preview](./templates/terminal-ink/preview.svg) | `npx degit iridite/slidev-templates/templates/terminal-ink terminal-talk` |
| [Editorial Grid](./templates/editorial-grid/) | Product narratives, strategy, launches, editorial storytelling | [Preview](./templates/editorial-grid/preview.svg) | `npx degit iridite/slidev-templates/templates/editorial-grid editorial-talk` |

<table>
  <tr>
    <td width="33%"><img src="./templates/paper-lab/preview.svg" alt="Paper Lab preview" /></td>
    <td width="33%"><img src="./templates/terminal-ink/preview.svg" alt="Terminal Ink preview" /></td>
    <td width="33%"><img src="./templates/editorial-grid/preview.svg" alt="Editorial Grid preview" /></td>
  </tr>
</table>

Each new hosted template includes a machine-readable manifest, runnable starter, representative preview, README, license, and provenance record. `neko-style/` predates the current directory contract and remains at its historical path for compatibility.

### Curated external projects

The registry also indexes distinct upstream workflows including multi-talk workspaces, corporate systems, deployment-ready starters, and visual-regression-oriented presentation infrastructure.

External authors retain ownership, licensing, release processes, and governance. This repository stores discovery metadata and health signals; it does not present their work as repository-owned code.

Browse every entry in [`registry/templates.json`](./registry/templates.json), through the local gallery, or with the CLI.

## Browse and search

### Local gallery

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm run gallery:serve
```

Open `http://127.0.0.1:4173/gallery/`. The gallery reads the canonical registry directly and supports text, category, source, and verification-status filtering.

### Registry CLI

```bash
npm run templates -- list
npm run templates -- search academic
npm run templates -- info terminal-ink
npm run templates -- scaffold editorial-grid ./my-talk
```

The CLI returns the canonical command for external projects and can directly scaffold repository-hosted starters.

Machine consumers can read:

- [`registry/templates.json`](./registry/templates.json) — canonical catalog;
- [`registry/schema.json`](./registry/schema.json) — registry schema;
- [`registry/hosted-template.schema.json`](./registry/hosted-template.schema.json) — hosted manifest contract.

## Why a registry instead of another theme gallery?

Slidev already has a theme ecosystem. The remaining discovery problem is broader: users often need a complete starting workflow and have to inspect many unrelated repositories to answer basic questions.

This registry makes those questions explicit:

- What job is the template designed for?
- Is it a starter, workspace, workflow, or larger presentation system?
- Is it hosted here or governed upstream?
- What is the shortest reproducible starting command?
- What license and provenance apply?
- What has actually been verified?
- Is the canonical source and preview still reachable?

The structured format can be consumed by galleries, CLIs, AI agents, documentation sites, and future Slidev tooling without scraping README files.

## Hosted and external models

**Hosted templates** live in this repository. New hosted entries follow [`docs/TEMPLATE_CONTRACT.md`](./docs/TEMPLATE_CONTRACT.md), carry explicit provenance, and pass repository tests and builds.

**External templates** stay in their canonical repositories. They can be indexed without vendoring code, absorbing upstream governance, or silently changing licensing obligations.

Verification status has a narrow meaning:

- **Verified** — the primary documented path has been exercised; hosted entries are continuously checked here.
- **Community** — reviewed for discoverability, documentation, source, and licensing, while runtime verification remains upstream.
- **Experimental** — useful early-stage work with weaker compatibility guarantees.

Status measures review depth, not popularity or endorsement.

## Quality and maintenance

Every pull request runs independent checks for:

1. registry integrity, hosted-template contract, gallery consumption, CLI search/scaffolding, and repository regressions;
2. clean builds of every manifest-based hosted starter;
3. Neko Style build and PDF export verification.

A separate Registry Health workflow checks canonical external sources and preview links on catalog changes and on a schedule.

AI or coding agents may assist with discovery, reproduction, metadata extraction, tests, issue triage, and focused reviews, but humans retain final decisions over curation, licensing, security, provenance, merges, and releases. See [`docs/AI_ASSISTED_MAINTENANCE.md`](./docs/AI_ASSISTED_MAINTENANCE.md).

## Submit a template

Use the [Template submission form](https://github.com/iridite/slidev-templates/issues/new?template=template_submission.yml) and provide:

- the canonical source and maintainer;
- a representative preview or live demo;
- a reproducible start path;
- license and attribution information;
- the audience, use case, and distinctive value;
- whether hosted or external inclusion is preferred.

The collection is curated for usefulness and maintainability rather than raw entry count. Public visibility alone is not permission to copy a project.

## Development

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm ci
npm test
npm run build:hosted
npm run build:neko
```

For changes affecting Neko Style rendering or export:

```bash
npm run export:neko
```

For a new hosted template, follow the structure and review checklist in [`docs/TEMPLATE_CONTRACT.md`](./docs/TEMPLATE_CONTRACT.md).

## Repository structure

```text
slidev-templates/
├── registry/
│   ├── templates.json
│   ├── schema.json
│   └── hosted-template.schema.json
├── templates/
│   ├── paper-lab/
│   ├── terminal-ink/
│   └── editorial-grid/
├── neko-style/                  # historical hosted reference template
├── gallery/                     # registry-powered browser UI
├── scripts/                     # CLI, health, catalog, and build automation
├── tests/                       # registry + template contract + regressions
├── docs/
├── CONTRIBUTING.md
├── GOVERNANCE.md
├── SECURITY.md
└── CHANGELOG.md
```

## Project direction

The next stage is distribution and adoption rather than indiscriminate collection: improve compatibility signals, publish the gallery, make the registry easier for downstream tools to consume, accept high-quality community submissions, and establish feedback loops with upstream authors.

The project landscape and current hosting decisions are documented in [`docs/TEMPLATE_LANDSCAPE.md`](./docs/TEMPLATE_LANDSCAPE.md).

## License

Repository-maintained code and documentation are available under the [MIT License](./LICENSE), unless a nested file states otherwise. External registry entries retain their own upstream licenses. No external entry is relicensed by being indexed here.
