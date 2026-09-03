# Third-party notices and external registry entries

This repository contains two different kinds of material. Keeping that boundary explicit is part of the project’s curation and licensing model.

## Repository-maintained material

Unless a nested notice says otherwise, code and documentation maintained in this repository are licensed under the root [MIT License](./LICENSE).

The hosted starters `paper-lab`, `terminal-ink`, and `editorial-grid` are original clean-room implementations. They do not vendor code, logos, screenshots, fonts, or presentation content from the public projects reviewed in [`docs/TEMPLATE_LANDSCAPE.md`](./docs/TEMPLATE_LANDSCAPE.md). Their local `ATTRIBUTION.md` files record the design and provenance boundary.

`neko-style` is the historical hosted reference implementation. Its origin and design lineage are described in its own documentation and changelog. A nested copy of the repository MIT license is provided at [`neko-style/LICENSE`](./neko-style/LICENSE) so extracted copies retain license evidence.

## External registry entries

Entries with `source.type: external` in [`registry/templates.json`](./registry/templates.json) are links and metadata only. Their code and assets are not redistributed in this repository, and their upstream licenses are not replaced by the repository MIT license.

| Entry | Canonical project | Recorded license | Hosting decision |
| --- | --- | --- | --- |
| LittleSound Talks Template | `LittleSound/talks-template` | AGPL-3.0 | External to preserve reciprocal-license and upstream governance boundaries. |
| Espressif Slidev Template | `espressif/slidev-esp-template` | MIT | External because it includes organization-specific branding and assets. |
| Miragon Slidev Deck Template | `Miragon/slidev-deck-template` | MIT | External because it is an independently released branded system and package ecosystem. |
| Presentations Template | `askpt/presentations.template` | MIT | External because it has its own deployment workflow and governance. |
| 3mdeb Slidev Template | `3mdeb/slidev-template` | Apache-2.0 | External to preserve upstream notices, testing infrastructure, and governance. |
| Slidev Resources Template | `kaakaa/slidev-resources-template` | MIT | External because its release and Pages automation remain upstream-owned. |
| Godkun PPT Template | `godkun/ppt-template` | MIT | External because its source and visual assets remain canonical upstream. |
| NJU Academic Slidev Template | `sylearn/nju-slidev-template` | MIT | Experimental external entry because institutional identity and brand-policy considerations remain upstream. |

The canonical license URL for every entry is stored in the registry and checked by the Registry Health workflow. A registry listing is not legal advice, endorsement, trademark permission, or a representation that every bundled upstream asset shares the repository-level license. Users must review the canonical project before reuse.

## Corrections

A maintainer or rights holder may report incorrect authorship, licensing, branding, source, or preview metadata through the Registry correction issue form. Materially uncertain entries should be corrected, downgraded, or removed rather than left with overstated verification.
