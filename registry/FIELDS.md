# Registry field reference

[`registry/templates.json`](./templates.json) is the canonical, versioned catalog. Registry v2 makes ownership, license evidence, compatibility claims, and verification evidence explicit enough for humans and downstream tools to inspect.

## Identity and discovery

- `id` — stable lowercase identifier. Renaming it is a breaking change.
- `name` — display name.
- `description` — substantive explanation of the reusable workflow.
- `kind` — `starter`, `workspace`, `workflow`, or `presentation-system`.
- `categories` — high-level audiences and presentation jobs used for filtering.
- `tags` — lower-level visual, workflow, and implementation facets.

## Source and ownership

`source.type` is:

- `hosted` — implementation is maintained in this repository;
- `external` — implementation stays in its canonical upstream repository.

Hosted entries declare `path` and `starterPath`; new contract-based entries also declare `manifest`. External entries declare `repository` and must not claim a local path.

`author` identifies the repository author or upstream organization. Indexing does not transfer ownership or governance.

## License and provenance

- `license` — SPDX-style identifier when available.
- `licenseUrl` — direct evidence: a repository-relative license file for hosted work or an absolute canonical license URL for external work.
- `provenance.type` — `original`, `inspired`, `adapted`, or `external`.
- `provenance.notes` — human-readable ownership, adaptation, branding, and redistribution boundary.
- `provenance.upstream` — optional canonical upstream for materially inspired or adapted hosted work.

A health check verifies every `licenseUrl`. External entries retain upstream licenses. Hosted adaptations must preserve notices and asset-specific obligations.

## Preview and use

- `preview.type` — `local` or `url`.
- `preview.value` — repository-relative asset or absolute preview URL.
- `usage.type` — `degit`, `clone`, or `external`.
- `usage.command` — shortest documented reproducible starting command.

Hosted commands should produce a self-contained project, including README, license, and attribution evidence.

## Verification

- `status` — `verified`, `community`, or `experimental`.
- `verification.level` — `build-and-export`, `clean-install-build`, or `metadata-health`.
- `verification.checks` — explicit evidence supporting that level.
- `verification.workflow` — repository workflow that produces or refreshes the evidence.
- `verification.checkedAt` — last maintainer review date for the recorded claim.

`featured` controls editorial prominence only. It is not an endorsement, compatibility guarantee, or popularity ranking.

## Compatibility

Hosted entries declare tested `compatibility.node` and `compatibility.slidev` ranges. These are evidence-backed support claims, not automatically inferred latest versions.

External compatibility is omitted unless the registry has actually tested it. Runtime claims remain with upstream projects.

## Versioning

Registry v2 adds required curation and evidence fields. Consumers should:

- check `version` before assuming a schema;
- ignore additive unknown fields within a supported major version;
- treat identifier removal, required-field removal, or meaning changes as breaking;
- use `registry/schema.json` rather than reverse-engineering README tables.

Human-facing README sections and the deployable gallery are generated from the canonical registry and checked in CI.
