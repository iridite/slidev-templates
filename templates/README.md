# Repository-hosted templates

This directory contains the contract-based hosted collection. Each template is a complete, directly extractable Slidev starter rather than a color-only theme variation.

| Template | Presentation job | Distinctive structure | Direct extraction |
| --- | --- | --- | --- |
| [Paper Lab](./paper-lab/) | Research and evidence communication | question → method → evidence → uncertainty → limitations | `npx degit iridite/slidev-templates/templates/paper-lab/starter paper-lab-talk` |
| [Terminal Ink](./terminal-ink/) | Incidents, systems, and engineering decisions | symptom → trace → architecture → intervention → follow-up | `npx degit iridite/slidev-templates/templates/terminal-ink/starter terminal-talk` |
| [Editorial Grid](./editorial-grid/) | Product, strategy, and launch narratives | thesis → context → contrast → proof → decision | `npx degit iridite/slidev-templates/templates/editorial-grid/starter editorial-talk` |

Neko Style predates the hosted-template contract and remains under [`../neko-style`](../neko-style/) as the larger historical reference implementation.

## Self-contained starter rule

The `starter/` directory is the extraction boundary. It must carry everything a user needs to understand and legally reuse the starter:

- `package.json` and `slides.md`;
- `README.md`;
- `LICENSE`;
- `ATTRIBUTION.md`;
- `.gitignore`;
- local styles, components, and assets used by the deck.

A hosted template must build from a clean dependency installation and must not depend on untracked remote raster assets. See [`../docs/TEMPLATE_CONTRACT.md`](../docs/TEMPLATE_CONTRACT.md) and [`../registry/hosted-template.schema.json`](../registry/hosted-template.schema.json).

## Provenance

The three starters in this directory are original clean-room implementations. Public GitHub projects were surveyed to understand recurring presentation jobs and ecosystem gaps; no third-party deck code, branding, screenshots, or content was copied into these starters. The research record and exclusions are documented in [`../docs/TEMPLATE_LANDSCAPE.md`](../docs/TEMPLATE_LANDSCAPE.md).
