# Slidev Template Registry

This directory defines the machine-readable catalog behind `slidev-templates`.

The project is broader than a theme gallery. It is a discovery and maintenance layer for reusable Slidev presentation workflows: a place where users can compare purpose, ownership, license evidence, start commands, provenance, and verification depth.

## Canonical files

- [`templates.json`](./templates.json) — versioned catalog;
- [`schema.json`](./schema.json) — exact JSON Schema for the catalog;
- [`hosted-template.schema.json`](./hosted-template.schema.json) — manifest contract for repository-hosted starters;
- [`FIELDS.md`](./FIELDS.md) — semantic field reference.

The English and Chinese README catalogs, browser gallery, CLI, tests, and health workflow all consume this data.

## Source models

### Hosted

A hosted template is maintained in this repository and has a reproducible starter path.

```json
{
  "source": {
    "type": "hosted",
    "path": "templates/example",
    "starterPath": "templates/example/starter",
    "manifest": "templates/example/template.json"
  }
}
```

New hosted starters must be self-contained when extracted: package metadata, slides, README, license, attribution, and ignore rules travel together.

### External

An external template remains in its canonical upstream repository.

```json
{
  "source": {
    "type": "external",
    "repository": "https://github.com/example/slidev-template"
  }
}
```

External inclusion is an index relationship. It does not copy code, change the upstream license, absorb governance, or imply endorsement.

## Status and verification

Status and verification level are related but distinct:

- `verified` — the primary documented path has been exercised;
- `community` — reviewed and monitored for discoverability, source, preview, and license evidence;
- `experimental` — useful or distinctive, but compatibility or branding guarantees are weaker.

Verification levels record the evidence:

- `build-and-export` — build plus PDF export;
- `clean-install-build` — dependency installation and Slidev build in a clean CI environment;
- `metadata-health` — canonical source, preview, and license URL health.

Every verification object records its checks, workflow path, and review date.

## Acceptance criteria

A strong entry is reusable beyond one talk and has:

1. a clear audience or recurring presentation job;
2. a canonical source and identifiable maintainer;
3. a reproducible start or copy workflow;
4. representative preview evidence;
5. direct license evidence and explicit provenance;
6. meaningful distinction from existing entries;
7. a verification level that does not overstate what this registry tested.

Popularity is useful adoption evidence, but not a substitute for the contract.

## Curation boundary

Use hosted inclusion for repository-owned work or deliberate, legally reviewed adaptations that this project will maintain.

Use external inclusion when the project already has its own maintainer, release process, reciprocal license, organization-specific branding, or substantial independent infrastructure.

Do not vendor a public repository merely because it is technically downloadable. Public visibility is not permission to redistribute.

## Maintenance

`npm test` checks registry/schema agreement, local artifacts, manifests, provenance, license evidence, generated catalogs, gallery consumption, and CLI behavior.

`npm run registry:health` checks external repositories, previews, and license URLs. Missing or disabled sources fail; stale and archived sources raise review warnings.

See [`../docs/TEMPLATE_CONTRACT.md`](../docs/TEMPLATE_CONTRACT.md), [`../CONTRIBUTING.md`](../CONTRIBUTING.md), and [`../GOVERNANCE.md`](../GOVERNANCE.md).
