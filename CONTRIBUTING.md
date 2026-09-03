# Contributing to slidev-templates

Thanks for helping build a useful Slidev template discovery ecosystem. Contributions are welcome in three forms: **registry submissions**, **hosted templates**, and **maintenance improvements**.

The project optimizes for reusable, discoverable, well-documented templates rather than raw entry count.

## Before opening a change

- Search existing registry entries, issues, and pull requests first.
- Keep changes focused. Avoid unrelated formatting or refactors in the same PR.
- New templates must be reusable beyond one specific presentation.
- Do not vendor or redistribute somebody else's project without permission; prefer an external registry entry pointing to the canonical source.
- Make licensing and attribution explicit for code, fonts, images, and bundled assets.

## Local setup

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm ci
npm test
```

`npm test` validates the machine-readable registry and hosted-template regression tests.

For changes to the current Neko Style reference template, also run:

```bash
npm run build:neko
npm run export:neko
```

## Adding an external template to the registry

External listings are the default when a template already has its own canonical repository.

1. Use the **Template submission** issue form if you want maintainer feedback before writing a PR.
2. Add one entry to [`registry/templates.json`](./registry/templates.json) using `source.type = "external"`.
3. Point `source.repository` to the canonical upstream repository.
4. Include a representative preview, license, tags, author, and a reproducible usage command.
5. Run `npm test`.

External projects retain their own license and governance. Inclusion here is an index/discovery relationship, not a transfer of ownership.

## Adding a hosted template

A hosted template is appropriate when the contribution is intended to be maintained as part of this repository.

It should normally include:

- a stable top-level directory;
- a `README.md` explaining purpose and usage;
- a runnable starter or equivalent reproducible entry point;
- representative preview assets;
- explicit licensing and attribution;
- tests or verification appropriate to its complexity;
- a corresponding entry in `registry/templates.json` using `source.type = "hosted"`.

A reusable theme package is welcome when the template needs one, but **a theme is not required**. The registry unit is the reusable presentation template/workflow.

## Registry review criteria

Maintainers consider:

- reuse value beyond one deck;
- clarity of setup and documentation;
- licensing and provenance;
- quality of preview material;
- whether the canonical source is still maintainable;
- uniqueness relative to existing entries;
- user value versus ongoing maintenance cost.

Registry status is assigned as described in [`registry/README.md`](./registry/README.md): `verified`, `community`, or `experimental`.

## Pull request checklist

Before submitting a PR, please confirm that:

- `npm test` passes;
- registry metadata is complete and uses stable URLs/paths;
- documentation is updated when user-facing behavior changes;
- hosted-template changes include suitable verification;
- new dependencies are necessary and declared in the correct workspace package;
- the PR explains what was tested and why the change benefits template users or contributors.

## Reporting bugs

Use the bug report issue form and include the smallest reproducible example you can provide. Installation bugs should include runtime/tool versions, the installation method, and relevant error output.

## Maintainer workflow

Issues are triaged based on reproducibility, user impact, ecosystem usefulness, and maintenance cost. Template submissions are reviewed for reuse value, source legitimacy, licensing, and discoverability. Pull requests are reviewed for correctness, compatibility, scope, and verification.

Small, well-scoped contributions with clear evidence are the easiest to review and merge.

By contributing code or documentation directly to this repository, you agree that those contributions are licensed under the repository's MIT License unless a subdirectory explicitly states otherwise. External registry entries retain their upstream licenses.
