# Governance

`slidev-templates` is a curated discovery registry for reusable Slidev presentation templates. The project is intentionally lightweight: governance exists to keep the catalog useful, trustworthy, and maintainable without creating unnecessary process.

## Scope

The registry covers reusable presentation starters and workflows built around Slidev. A listed template may include themes, components, layouts, configuration, examples, documentation, deployment/export automation, or agent instructions.

A standalone theme can be useful, but theme publication itself is not the registry's primary unit. The question is whether a new user can start a reusable presentation workflow from the project.

## Current maintainer

The current primary maintainer is [`@iridite`](https://github.com/iridite).

The primary maintainer is responsible for:

- registry schema and compatibility;
- issue and template-submission triage;
- reviewing additions, removals, and metadata changes;
- keeping hosted reference templates testable;
- maintaining contribution and security policy;
- resolving ambiguous curation decisions.

Additional maintainers can be added when sustained contribution volume makes shared ownership useful.

## Curation principles

Registry decisions prioritize:

1. **Reusability** — useful beyond one specific presentation.
2. **Provenance** — canonical source and authorship are clear.
3. **Licensing** — code/assets have sufficient licensing information for the way they are indexed or hosted.
4. **Usability** — another user has a reproducible starting path.
5. **Discoverability** — metadata, tags, descriptions, and previews help users evaluate the template.
6. **Maintainability** — inclusion should not create disproportionate long-term maintenance cost.

Popularity is useful evidence of adoption, but it is not a hard inclusion requirement. A specialized template can be valuable even with a small audience.

## Hosted vs external projects

Hosted templates are maintained in this repository and can receive continuous CI verification.

External entries remain governed by their upstream maintainers. Listing an external project does not imply ownership, endorsement, or transfer of license. The registry records enough metadata to help users discover the canonical source.

## Status changes

Maintainers may move an entry between `verified`, `community`, and `experimental` when evidence changes.

A listing may be corrected, downgraded, or removed when the canonical source disappears, licensing becomes unclear, the documented usage path becomes materially broken, malicious behavior is discovered, or the entry no longer fits the project scope.

Where practical, maintainers should prefer correction or upstream coordination over removal.

## Decision process

Routine metadata fixes and clearly qualifying submissions can be handled through normal pull-request review.

For ambiguous or potentially contentious decisions, maintainers should leave the reasoning in the relevant issue or pull request so the curation policy remains inspectable.

The registry is not intended to rank authors or declare a single "best" template. Its purpose is to make useful projects easier to find and compare.
