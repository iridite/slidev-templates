# Governance

`slidev-templates` is a curated discovery registry and repository-hosted collection for reusable Slidev presentation workflows. Governance is intentionally lightweight, but decisions must remain inspectable because the registry makes claims about ownership, licensing, usability, and verification.

## Scope

The primary unit is a reusable presentation starting workflow. It may include a starter deck, theme, components, layouts, narrative structure, configuration, examples, documentation, export/deployment automation, or agent instructions. A standalone theme can be useful, but theme publication alone is not the registry’s collection boundary.

## Current maintainer

The current primary maintainer is [`@iridite`](https://github.com/iridite).

The primary maintainer is responsible for registry schema compatibility, submission and correction triage, hosted starter quality, verification claims, contribution/security policy, and final curation decisions. Additional maintainers may be added after sustained contribution volume creates a real shared-ownership need.

## Decision principles

Registry decisions prioritize:

1. **Reusability** — useful beyond one presentation, customer, event, or private organization.
2. **Distinct value** — a different audience, presentation job, information architecture, workflow, or delivery model.
3. **Canonical ownership** — the source and maintainer are identifiable.
4. **License evidence** — the recorded license links to an inspectable canonical source.
5. **Usability** — another user has a reproducible starting path.
6. **Discoverability** — metadata and previews help users make a decision.
7. **Verification honesty** — status never implies a test that was not performed.
8. **Maintenance cost** — inclusion should not create disproportionate duplicated support.

Popularity is useful adoption evidence, but it is not a hard inclusion requirement and is never borrowed from an indexed project.

## Hosted and external boundaries

Hosted templates are maintained here, carry local license and attribution evidence, and receive repository CI verification. Original work is preferred when a missing presentation job can be filled without importing another project’s implementation.

External entries remain under upstream governance and licensing. Listing is metadata and linking, not vendoring, relicensing, endorsement, trademark permission, or a transfer of user/support obligations.

## Verification and status changes

`verified`, `community`, and `experimental` describe evidence depth, not quality ranking or popularity. Maintainers may correct, downgrade, archive, or remove an entry when its source disappears, its license becomes unclear, branding risk changes, its primary path breaks, malicious behavior is discovered, or the project no longer fits scope.

Every verification record identifies the checks, workflow, and review date. Automated checks can establish reachability and builds; they cannot make final legal, security, provenance, or curation judgments.

## Decision process

Routine metadata corrections and clearly qualifying submissions use normal pull-request review. Ambiguous decisions should leave the reasoning in the issue or PR. Material licensing, authorship, trademark, or security uncertainty blocks hosted inclusion and may block listing until resolved.

Rights holders and upstream maintainers can use the Registry correction issue form. Where practical, maintainers prefer correction and upstream coordination over silent removal.

## Automation boundary

Agents may discover candidates, extract metadata, reproduce setup, propose tests, and summarize changes. Human review remains mandatory for inclusion, licensing, provenance, security-sensitive changes, merges, releases, and public claims. See [`docs/AI_ASSISTED_MAINTENANCE.md`](./docs/AI_ASSISTED_MAINTENANCE.md).
