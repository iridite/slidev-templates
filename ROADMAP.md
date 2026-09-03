# Roadmap

The roadmap prioritizes durable adoption and ecosystem usefulness over raw catalog size.

## Current foundation

As of 2026-09-03, the repository provides:

- registry v2 with 12 curated workflows: 4 hosted and 8 externally governed;
- three directly extractable, self-contained, clean-room hosted starters plus Neko Style;
- an exact registry schema and hosted-template manifest contract;
- canonical license evidence and explicit provenance for every entry;
- a searchable static gallery and zero-dependency registry CLI;
- generated English and Chinese catalogs with drift checks;
- clean installation/build checks for contract-based hosted starters;
- Neko Style build and PDF export verification;
- scheduled checks for external source, preview, and license availability;
- transparent governance, correction, security, and AI-assisted maintenance boundaries.

## Near term: make discovery genuinely useful

- publish the registry-powered gallery at a stable public URL;
- ask indexed upstream maintainers to verify or correct their metadata;
- add better preview coverage without copying assets into this repository without permission;
- publish a versioned raw-registry endpoint and examples for downstream consumers;
- add compatibility probes that record observed results separately from curated metadata;
- document schema deprecation and migration rules before the first breaking change;
- collect independently confirmed scaffold/build reports.

Success is measured by external use of the catalog, upstream-author participation, downstream consumers, submissions, corrections, and successful reuse—not only stars.

## Next: create downstream value

- package the registry CLI for straightforward installation;
- generate a public health snapshot from scheduled checks;
- support richer audience, workflow, delivery, and accessibility facets;
- automate preview generation for hosted templates from verified builds;
- expose stable machine-readable search and filtering examples;
- explore a lightweight integration proposal with the wider Slidev ecosystem after the data contract and usage evidence mature.

## Later: community stewardship

- invite additional maintainers when sustained contribution volume justifies shared ownership;
- establish a lightweight proposal process for schema-breaking changes;
- add reviewers with academic, developer, product, and organizational presentation expertise;
- coordinate corrections and compatibility work with upstream authors instead of duplicating support channels;
- document archival and removal procedures for abandoned, unsafe, malicious, or legally unclear entries.

## Non-goals

- collecting every public slide deck;
- treating a different color palette as a new template ecosystem contribution;
- competing with Slidev’s theme registry by duplicating theme-only metadata;
- claiming ownership, users, or popularity belonging to external projects;
- vendoring branded, reciprocal-licensed, or unlicensed projects merely to increase the hosted count;
- using generated commits, fake issues, artificial releases, or aggregated upstream stars as adoption evidence.
