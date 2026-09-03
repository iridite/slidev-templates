# Contributing to slidev-templates

Thanks for helping improve this repository. Contributions that make templates easier to install, reuse, maintain, or understand are especially welcome.

## Before opening a change

- Search existing issues and pull requests first.
- Keep changes focused. Avoid unrelated formatting or refactors in the same PR.
- For user-facing behavior changes, describe the problem and how you verified the fix.
- New templates should be reusable rather than tied to a single presentation.

## Local setup

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm ci
npm test
npm run build:neko
```

For changes that affect rendering or export, also run:

```bash
npm run export:neko
```

## Pull request checklist

Before submitting a PR, please confirm that:

- `npm test` passes.
- `npm run build:neko` passes.
- Documentation is updated when installation, components, layouts, or configuration change.
- New dependencies are necessary and declared in the correct workspace package.
- The PR explains how the change was tested.

## Adding a template

A new template should normally include:

- a `README.md` with purpose and usage;
- a runnable `starter/` example;
- a reusable `theme/` package when appropriate;
- representative examples or preview assets;
- clear licensing for any third-party assets.

## Reporting bugs

Please use the bug report issue template and include the smallest reproducible example you can provide. Installation bugs should include Node.js/npm versions, the installation method, and the relevant error output.

## Maintainer workflow

Issues are triaged based on reproducibility, user impact, and maintenance cost. Pull requests are reviewed for correctness, compatibility, scope, and test coverage. Small, well-scoped fixes with clear verification are the easiest to review and merge.

By contributing, you agree that your contributions will be licensed under the repository's MIT License.
