# Slidev Template Registry

This directory defines the machine-readable catalog behind `slidev-templates`.

The project is intentionally broader than a single theme. Its goal is to become a reliable discovery and contribution layer for reusable Slidev presentation templates: a place where users can find templates, understand how to start from them, and contribute new ones through a consistent review process.

## Registry model

`templates.json` is the canonical catalog. Each entry describes:

- a stable template ID and human-readable name;
- a concise description and searchable tags;
- the maintainer or author;
- license information;
- a representative preview;
- a copy/install command;
- whether the template is hosted in this repository or maintained externally;
- its review status.

The JSON structure is documented by `schema.json` and validated in CI.

## Source types

### Hosted

A hosted template lives in this repository and is expected to provide a runnable starter. Hosted entries use:

```json
{
  "source": {
    "type": "hosted",
    "path": "template-id",
    "starterPath": "template-id/starter"
  }
}
```

### External

An external template remains in the author's repository and is indexed here for discovery. This lets the registry grow without forcing every project into one monorepo.

```json
{
  "source": {
    "type": "external",
    "repository": "https://github.com/example/slidev-template"
  }
}
```

## Status levels

- `verified`: reviewed by maintainers and its usage path has been validated.
- `community`: accepted into the catalog with adequate documentation and licensing, but not continuously tested by this repository.
- `experimental`: useful early-stage work that may change or have incomplete compatibility guarantees.

Status is not a popularity ranking. It describes the level of verification provided by this project.

## Acceptance criteria

A template is a strong fit when it is reusable beyond one specific talk and has:

1. a clear README or usage guide;
2. a reproducible way to start or copy the template;
3. at least one representative preview;
4. explicit licensing and attribution for bundled assets;
5. an identifiable maintainer or source repository;
6. enough structure that another person can reasonably use it without reconstructing the original author's environment.

We may decline abandoned, unverifiable, copied-without-permission, malicious, or extremely presentation-specific submissions. The goal is a useful catalog, not the largest possible list.

## Contributing a template

You can either open the **Template submission** issue form first or submit a focused pull request that updates `templates.json` and any required hosted files.

For hosted templates, keep the stable top-level path so users can copy a template directly with tools such as `degit`.

For external templates, do not vendor another author's repository. Add a registry entry that points to the canonical upstream source instead.

See [`CONTRIBUTING.md`](../CONTRIBUTING.md) for the full review workflow.
