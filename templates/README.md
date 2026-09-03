# Repository-hosted templates

This directory contains templates whose starter implementations are maintained and continuously checked by `slidev-templates`.

| Template | Primary job | Visual language | Start |
| --- | --- | --- | --- |
| [Paper Lab](./paper-lab/) | Research and evidence communication | Publication-inspired, light, serif | `npx degit iridite/slidev-templates/templates/paper-lab paper-lab-talk` |
| [Terminal Ink](./terminal-ink/) | Incidents, systems, code, and operations | Dark terminal, signal-driven | `npx degit iridite/slidev-templates/templates/terminal-ink terminal-talk` |
| [Editorial Grid](./editorial-grid/) | Product, strategy, launches, and portfolios | Bold editorial grid | `npx degit iridite/slidev-templates/templates/editorial-grid editorial-talk` |

Neko Style is also repository-hosted, but remains at [`../neko-style/`](../neko-style/) because it predates the current directory contract and existing users depend on that path.

Every new entry here must include:

- `template.json` conforming to [`../registry/hosted-template.schema.json`](../registry/hosted-template.schema.json);
- a runnable `starter/`;
- README and representative preview;
- explicit license and provenance;
- a matching entry in the canonical Registry;
- successful repository tests and clean build verification.

See [`../docs/TEMPLATE_CONTRACT.md`](../docs/TEMPLATE_CONTRACT.md) and [`../CONTRIBUTING.md`](../CONTRIBUTING.md) for the complete policy.
