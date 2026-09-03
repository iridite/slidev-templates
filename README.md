# Slidev Templates

[![CI](https://github.com/iridite/slidev-templates/actions/workflows/ci.yml/badge.svg)](https://github.com/iridite/slidev-templates/actions/workflows/ci.yml)
[![Registry Health](https://github.com/iridite/slidev-templates/actions/workflows/registry-health.yml/badge.svg)](https://github.com/iridite/slidev-templates/actions/workflows/registry-health.yml)
[![Stars](https://img.shields.io/github/stars/iridite/slidev-templates?style=flat&label=stars)](https://github.com/iridite/slidev-templates/stargazers)
[![Forks](https://img.shields.io/github/forks/iridite/slidev-templates?style=flat&label=forks)](https://github.com/iridite/slidev-templates/forks)
[![License: MIT](https://img.shields.io/badge/repository-MIT-171713.svg)](./LICENSE)
[![Registry v2](https://img.shields.io/badge/registry-v2-3155d8.svg)](./registry/templates.json)

**A curated, machine-readable registry and repository-hosted collection of reusable [Slidev](https://sli.dev) presentation templates.**

The project makes high-quality Slidev starting points easier to **discover, compare, reuse, verify, and contribute**. It is not a repository for one theme and it is not an unreviewed link list.

A template here means a complete presentation workflow: a starter deck, narrative structure, layouts or components, configuration, documentation, preview, and a reproducible build or delivery path. A theme may be part of a template, but visual theming alone is not the collection boundary.

[中文说明](./README.zh-CN.md) · [Registry JSON](./registry/templates.json) · [Gallery](./gallery/README.md) · [Template contract](./docs/TEMPLATE_CONTRACT.md) · [Submit a template](https://github.com/iridite/slidev-templates/issues/new?template=template_submission.yml) · [Governance](./GOVERNANCE.md) · [Impact evidence](./docs/IMPACT.md) · [Third-party notices](./THIRD_PARTY_NOTICES.md)

<!-- registry-stats:start -->
**12 curated workflows · 4 repository-hosted starters · 8 upstream-governed listings · 4 verified entries**
<!-- registry-stats:end -->

## Why this exists

Useful Slidev starters are scattered across personal, academic, and organizational repositories. Their scope, licenses, start commands, maintenance status, and verification depth are difficult to compare. Slidev already has a strong theme ecosystem; this project addresses the broader **template-level discovery and maintenance gap**.

The repository already has real community maintenance signals. External contributors have reported and fixed standalone-install behavior in [PR #6](https://github.com/iridite/slidev-templates/pull/6), and specification issues have been triaged through [Issue #7](https://github.com/iridite/slidev-templates/issues/7). Those interactions are now backed by structured submissions, regression tests, clean builds, provenance rules, and scheduled health checks.

## Repository-hosted collection

Four starters are maintained in this repository. The three contract-based starters below are original clean-room implementations and are directly extractable as self-contained projects.

<table>
  <tr>
    <td width="33%"><a href="./templates/paper-lab/"><img src="./templates/paper-lab/preview.svg" alt="Paper Lab preview" /></a></td>
    <td width="33%"><a href="./templates/terminal-ink/"><img src="./templates/terminal-ink/preview.svg" alt="Terminal Ink preview" /></a></td>
    <td width="33%"><a href="./templates/editorial-grid/"><img src="./templates/editorial-grid/preview.svg" alt="Editorial Grid preview" /></a></td>
  </tr>
  <tr>
    <td><b>Paper Lab</b><br/>Research questions, methods, results, uncertainty, and limitations.</td>
    <td><b>Terminal Ink</b><br/>Incidents, logs, systems, corrective actions, and operational decisions.</td>
    <td><b>Editorial Grid</b><br/>Product narratives, strategy, launches, and evidence-led storytelling.</td>
  </tr>
</table>

[Neko Style](./neko-style/) remains the larger historical reference implementation with a reusable theme, component library, starter, documentation, build verification, and PDF export.

## Full catalog

The following table is generated from [`registry/templates.json`](./registry/templates.json). CI fails when either language README drifts from the canonical registry.

<!-- registry-catalog:start -->
| Template | Status | Source | Focus | Verification | Start |
| --- | --- | --- | --- | --- | --- |
| [Neko Style](./neko-style/) | ✅ Verified | Hosted | `developer`, `technical`, `conference` | build and export | <code>npx degit iridite/slidev-templates/neko-style my-presentation</code> |
| [Paper Lab](./templates/paper-lab/) | ✅ Verified | Hosted | `academic`, `research`, `data-storytelling` | clean install build | <code>npx degit iridite/slidev-templates/templates/paper-lab/starter paper-lab-talk</code> |
| [Terminal Ink](./templates/terminal-ink/) | ✅ Verified | Hosted | `developer`, `systems`, `incident-review` | clean install build | <code>npx degit iridite/slidev-templates/templates/terminal-ink/starter terminal-talk</code> |
| [Editorial Grid](./templates/editorial-grid/) | ✅ Verified | Hosted | `product`, `strategy`, `storytelling` | clean install build | <code>npx degit iridite/slidev-templates/templates/editorial-grid/starter editorial-talk</code> |
| [LittleSound Talks Template](https://github.com/LittleSound/talks-template) | 🟦 Community | External | `developer`, `multi-talk`, `workspace` | metadata health | <code>npx degit LittleSound/talks-template my-talks</code> |
| [Espressif Slidev Template](https://github.com/espressif/slidev-esp-template) | 🟦 Community | External | `corporate`, `developer`, `technical` | metadata health | <code>npx degit espressif/slidev-esp-template my-presentation</code> |
| [Miragon Slidev Deck Template](https://github.com/Miragon/slidev-deck-template) | 🟦 Community | External | `corporate`, `automation`, `design-system` | metadata health | <code>npm create @miragon/slidev-deck@latest my-talk</code> |
| [Presentations Template](https://github.com/askpt/presentations.template) | 🟦 Community | External | `developer`, `deployment`, `multi-theme` | metadata health | <code>npx degit askpt/presentations.template my-presentation</code> |
| [3mdeb Slidev Template](https://github.com/3mdeb/slidev-template) | 🟦 Community | External | `technical`, `testing`, `automation` | metadata health | <code>git submodule add https://github.com/3mdeb/slidev-template.git slidev-template</code> |
| [Slidev Resources Template](https://github.com/kaakaa/slidev-resources-template) | 🟦 Community | External | `multi-talk`, `automation`, `publishing` | metadata health | <code>gh repo create my-slides --template kaakaa/slidev-resources-template --public</code> |
| [Godkun PPT Template](https://github.com/godkun/ppt-template) | 🟦 Community | External | `developer`, `visual`, `fast-start` | metadata health | <code>git clone https://github.com/godkun/ppt-template.git</code> |
| [NJU Academic Slidev Template](https://github.com/sylearn/nju-slidev-template) | 🧪 Experimental | External | `academic`, `research`, `chinese` | metadata health | <code>npx degit sylearn/nju-slidev-template academic-talk</code> |
<!-- registry-catalog:end -->

External entries stay under their upstream owners, licenses, release processes, and governance. The registry records discovery and health evidence; it does not relicense or present external code as repository-owned work.

## Browse, search, and scaffold

Run the browser gallery locally:

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm run gallery:serve
```

Open `http://127.0.0.1:4173/gallery/`. The gallery supports text, category, source, status, and verification discovery, exposes license evidence, and copies the canonical start command. A deployable static artifact can be built with `npm run gallery:build`; publication is an explicit maintainer action through the included Pages workflow.

Use the zero-dependency registry CLI:

```bash
npm run templates -- list
npm run templates -- search academic
npm run templates -- info terminal-ink
npm run templates -- scaffold editorial-grid ./my-talk
```

The CLI returns canonical commands for external projects and scaffolds repository-hosted starters with their README, license, and attribution record intact.

## Machine-readable contract

Downstream tools, sites, and AI agents can consume:

- [`registry/templates.json`](./registry/templates.json) — versioned canonical catalog;
- [`registry/schema.json`](./registry/schema.json) — exact registry JSON Schema;
- [`registry/hosted-template.schema.json`](./registry/hosted-template.schema.json) — hosted manifest contract;
- [`registry/FIELDS.md`](./registry/FIELDS.md) — field semantics and evolution rules.

Registry v2 records template kind, categories, source ownership, canonical license evidence, preview, start command, provenance, compatibility where tested, verification level, checks, workflow, and review date.

## Verification and health model

Every pull request runs independent checks for:

1. registry/schema agreement, license evidence, manifests, CLI behavior, generated catalogs, gallery builds, and regressions;
2. clean installation and Slidev build of every manifest-based hosted starter;
3. Neko Style build and PDF export.

A separate scheduled workflow checks external canonical repositories, preview URLs, and license URLs. Missing or disabled sources fail the check; stale or archived projects raise explicit review warnings rather than being silently presented as healthy.

Status has a narrow meaning:

- **Verified** — the documented primary path has been exercised, and hosted entries are continuously checked here;
- **Community** — source, preview, license, and discovery metadata are monitored while runtime verification remains upstream;
- **Experimental** — useful or unusual work with weaker compatibility or branding guarantees.

Status measures evidence depth, not popularity or endorsement.

## Curation, provenance, and human review

Hosted and external inclusion are deliberately separated:

- repository-owned originals can be hosted and continuously built;
- permissively licensed adaptations require explicit provenance and preserved notices;
- reciprocal, branded, or independently governed projects remain external by default;
- public visibility without a license is not permission to copy.

The public survey and inclusion decisions are documented in [`docs/TEMPLATE_LANDSCAPE.md`](./docs/TEMPLATE_LANDSCAPE.md). The reusable-template standard is in [`docs/TEMPLATE_CONTRACT.md`](./docs/TEMPLATE_CONTRACT.md).

Automation and coding agents may assist with discovery, metadata extraction, clean-environment reproduction, tests, issue triage, review preparation, catalog generation, and stale-link detection. Humans retain final decisions over curation, licensing, trademark and provenance judgments, security, merges, removals, and releases. See [`docs/AI_ASSISTED_MAINTENANCE.md`](./docs/AI_ASSISTED_MAINTENANCE.md).

## Contributing

Use the [Template submission form](https://github.com/iridite/slidev-templates/issues/new?template=template_submission.yml) with:

- the canonical source and maintainer;
- a representative preview or live demo;
- a reproducible start path;
- SPDX license and direct license evidence;
- provenance and third-party asset information;
- the audience, presentation job, and distinctive value;
- verification commands and environment.

The collection optimizes for usefulness, distinctiveness, and maintainability rather than raw entry count.

## Development

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm ci
npm run registry:catalog:check
npm run gallery:check
npm test
npm run build:hosted
npm run build:neko
```

For Neko Style rendering or export changes:

```bash
npm run export:neko
```

## Repository structure

```text
slidev-templates/
├── registry/                    # versioned catalog, schemas, field contract
├── templates/
│   ├── paper-lab/               # self-contained academic starter
│   ├── terminal-ink/            # self-contained systems starter
│   └── editorial-grid/          # self-contained editorial starter
├── neko-style/                  # historical hosted presentation system
├── gallery/                     # registry-powered discovery UI
├── scripts/                     # CLI, catalog, gallery, build, health automation
├── tests/                       # schema, provenance, CLI, gallery, template regressions
├── docs/                        # contract, landscape, maintenance policy
├── CONTRIBUTING.md
├── GOVERNANCE.md
├── ROADMAP.md
├── SECURITY.md
└── CHANGELOG.md
```

## Project direction

The next stage is adoption rather than indiscriminate collection: publish the gallery, improve compatibility probes and health snapshots, accept high-quality author submissions, make the versioned registry easier for downstream tools to consume, and establish feedback loops with indexed upstream maintainers.

See [`ROADMAP.md`](./ROADMAP.md).

## License

Repository-maintained code and documentation are available under the [MIT License](./LICENSE), unless a nested file states otherwise. External registry entries retain their upstream licenses. Inclusion in the registry never relicenses an external project.
