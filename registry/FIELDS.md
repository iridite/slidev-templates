# Registry field reference

`registry/templates.json` is the canonical catalog. This document explains the semantic contract of each entry independently of a specific JSON Schema implementation.

## Identity and discovery

- `id` — stable lowercase identifier; changing it is a breaking change for consumers.
- `name` — display name.
- `description` — substantive explanation of the reusable workflow.
- `kind` — `starter`, `workspace`, `workflow`, or `presentation-system`.
- `categories` — high-level user jobs and audiences used for filtering.
- `tags` — lower-level discovery facets, visual traits, and implementation signals.

## Source and ownership

`source.type` is either:

- `hosted` — implementation is maintained in this repository;
- `external` — implementation stays in its canonical upstream repository.

Hosted entries declare `path`, `starterPath`, and, for the current contract, `manifest`. External entries declare `repository` and must not claim a local hosted path.

`author` identifies the template author or upstream organization. Indexing an entry does not transfer ownership.

## License and provenance

- `license` — SPDX-style license identifier when available.
- `provenance.type` — `original`, `inspired`, `adapted`, or `external`.
- `provenance.notes` — human-readable boundary and attribution summary.

External entries retain upstream licenses. Hosted adapted work preserves the notices required by its upstream license.

## Preview and use

- `preview.type` — `local` or `url`.
- `preview.value` — repository-relative asset or absolute preview URL.
- `usage.type` — `degit`, `clone`, or `external`.
- `usage.command` — shortest documented reproducible starting command.

## Verification

- `status` — `verified`, `community`, or `experimental`.
- `verification.level` — current depth of repository verification.
- `verification.checks` — explicit checks supporting that level.

`featured` controls editorial prominence only. It is not a compatibility, quality, or popularity guarantee.

## Compatibility

Hosted entries may declare `compatibility.node` and `compatibility.slidev`. These are supported ranges, not automatically inferred latest versions. A compatibility claim should be updated only with test evidence.

## Evolution

Consumers should ignore unknown fields. Required-field removal, meaning changes, or identifier changes require registry versioning and migration notes. Additive metadata can be introduced without invalidating existing consumers.
