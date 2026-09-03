# AI-Assisted Maintenance Policy

`slidev-templates` uses automation and may use coding agents to reduce repetitive maintainer work. Automation is an assistant to curation, not an authority over licensing, security, inclusion, or merges.

## Appropriate uses

AI-assisted maintenance may help with:

- discovering candidate repositories from public sources;
- extracting draft metadata for maintainer review;
- checking whether a candidate appears to be a reusable template rather than one finished deck;
- reproducing documented setup paths in clean environments;
- identifying broken links, stale previews, missing licenses, and dependency drift;
- drafting issue triage summaries and focused pull-request reviews;
- maintaining registry schemas, validation tests, generated catalogs, and gallery data;
- proposing compatibility fixes and documentation updates;
- preparing release-readiness and regression checklists.

## Human-only decisions

A human maintainer makes the final decision on:

- whether a project belongs in the curated registry;
- whether code or assets may be redistributed;
- provenance, licensing, trademark, and attribution judgments;
- security-sensitive changes;
- conflict resolution with upstream authors;
- acceptance, rejection, and verification status;
- merges, releases, and governance changes.

AI output is treated as untrusted review material until it is checked against source repositories, licenses, tests, and the actual diff.

## Evidence requirements

A proposed registry entry should link to the evidence behind its claims. At minimum, reviewers should be able to inspect the canonical repository, license, documentation, preview, and start path.

An assisted review should distinguish:

- observed facts from the upstream repository;
- automated test results;
- maintainer inference;
- unresolved uncertainty.

Claims such as popularity, compatibility, active maintenance, or successful installation must not be invented or silently inferred from incomplete data.

## Merge discipline

Coding agents may prepare branches and pull requests, but changes should remain small enough to review. Generated catalog files must be reproducible from the canonical registry. Hosted-template changes must pass tests and the relevant build/export checks.

The project does not merge a change merely because an agent produced it or a single automated reviewer approved it. The maintainer remains accountable for scope, correctness, provenance, and long-term maintenance cost.

## Transparency

Materially adapted templates include `ATTRIBUTION.md` and preserve upstream notices. Registry entries identify whether a hosted implementation is original, inspired, or adapted. External projects retain their own governance and are never presented as repository-owned work.

This policy is intended to make AI useful for sustainable open-source maintenance while keeping the decisions that affect contributors and upstream authors explicit, reviewable, and human-owned.