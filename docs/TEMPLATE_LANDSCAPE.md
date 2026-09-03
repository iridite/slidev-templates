# Slidev Template Landscape and Curation Audit

This document records the public GitHub survey used to shape the initial registry and hosted collection. It is a dated curation record, not a popularity ranking or a claim of ownership.

Review date: **2026-09-03**

## Selection dimensions

Candidates are assessed on:

1. reusable value beyond one deck;
2. distinctive audience, information architecture, or workflow;
3. reproducible setup, build, export, or deployment path;
4. canonical source and direct license evidence;
5. representative preview quality;
6. current maintenance fit;
7. whether hosting or external indexing is the legally and operationally safer model.

Stars and forks are useful adoption signals, but they do not replace license, provenance, or reproducibility evidence.

## Included external workflows

### LittleSound/talks-template

A mature multi-talk workspace with GitHub Template and `degit` onboarding. It demonstrates demand for managing many talks in one repository.

Decision: **external**. Its AGPL-3.0 license is clear, but vendoring would create reciprocal-license and duplicate-governance complexity.

### Miragon/slidev-deck-template

A polished corporate presentation system with a scaffolder, presentation archetypes, validation, reusable packages, and AI-authoring guidance.

Decision: **external**. The project's brand-specific implementation and package ecosystem belong under upstream governance.

### 3mdeb/slidev-template

A production-oriented workflow with smoke tests, visual regression, rendering, and PDF generation.

Decision: **external**. It demonstrates that presentation templates can be tested as software, while the Apache-2.0 implementation and test suite remain canonical upstream.

### Espressif/slidev-esp-template

A branded technical starter with components, addons, examples, and deployment configuration.

Decision: **external**. Organization branding and upstream ownership make indexing preferable to copying.

### kaakaa/slidev-resources-template

A multi-resource workflow that produces GitHub Release PDFs and GitHub Pages deployments.

Decision: **external**. It fills a workflow category without duplicating its release machinery.

### godkun/ppt-template

A compact, visually distinctive Slidev starter with a low-friction pnpm workflow.

Decision: **external**. The project remains canonical upstream; its repository-owned preview is monitored by the registry.

### sylearn/nju-slidev-template

A current Chinese academic starter with research layouts, mathematical typesetting, reusable components, and institution-specific identity.

Decision: **experimental external entry**. The MIT source license is clear, but institutional branding and assets must remain upstream and may require separate brand-policy review by users.

### askpt/presentations.template

A modern TypeScript/Vue starter with multiple themes, deployment configuration, and PDF/PPTX workflows.

Decision: **external**. It broadens the deployment-ready category while retaining independent governance.

## Hosted gap-filling work

The survey showed recurring gaps that were not well served by a neutral, directly extractable, repository-owned starter:

- evidence-first academic communication;
- terminal-first incidents and systems narratives;
- editorial product and strategy storytelling.

The project therefore created three clean-room starters:

- `paper-lab`;
- `terminal-ink`;
- `editorial-grid`.

Their code, content, CSS, and previews are original. Public repositories were used to identify user jobs, not as source material to copy.

## Additional reviewed references

### minagishl/slidev-cobalt-template and slidev-theme-cobalt

Both repositories have clear MIT licensing and demonstrate a contemporary developer-oriented visual system.

Decision: **research reference, not vendored**. The hosted collection already covers terminal and systems storytelling, so copying or adapting another nearby implementation would add overlap and maintenance cost without a distinct user job.

### luckenco/slidev-academic-GitHub

A permissively licensed academic Slidev starting point.

Decision: **research reference**. It helped confirm demand for publication-oriented structure; `paper-lab` remains an unbranded clean-room implementation.

### julian-schn/academic-project-template

A useful academic project workflow, but the presentation subproject is based on Marp rather than Slidev.

Decision: **outside current registry scope**.

### bsalad/cool-slidev-template and nimashoghi/slidev-presentation-template

Visually or structurally interesting public repositories were found, but no repository license was detected during review.

Decision: **not hosted or indexed at this time**. Public visibility alone is not sufficient license evidence.

### gabriel-del/slidev

A multi-presentation repository with useful historical structure, but no repository license was detected during review.

Decision: **not hosted or indexed at this time**.

## Runtime baseline

The current official Slidev create-app template uses `@slidev/cli` 52.19.1 and Vue 3.5. The three new hosted starters follow that baseline and are clean-installed and built in CI. Neko Style remains on its historical compatibility line until a separate migration is tested.

## Ongoing policy

Future candidates should normally enter through the Template Submission form or a focused registry pull request. Maintainers may discover candidates publicly, but inclusion requires inspectable evidence.

Each decision should record:

- why the workflow is useful and distinct;
- canonical ownership;
- license evidence;
- whether code or assets are copied;
- the verification actually performed;
- unresolved compatibility, branding, or maintenance uncertainty.

The registry should grow through useful coverage and upstream relationships, not artificial activity or indiscriminate link accumulation.
