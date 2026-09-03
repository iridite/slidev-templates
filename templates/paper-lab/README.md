# Paper Lab

**Evidence before ornament.**

A calm, publication-inspired Slidev starter for framing research questions, methods, evidence, results, uncertainty, limitations, and bounded decisions.

This is a complete Slidev starter rather than a standalone theme package. It combines a narrative structure, representative slide patterns, typography, CSS tokens, and build/export commands.

## Quick start

```bash
npx degit iridite/slidev-templates/templates/paper-lab/starter paper-lab-talk
cd paper-lab-talk
npm install
npm run dev
```

The extracted directory is self-contained: `package.json`, `slides.md`, README, MIT license, attribution record, and `.gitignore` all travel with the starter.

## Best for

- research questions, hypotheses, and pre-registered decision thresholds;
- methods, cohorts, assumptions, and study-design explanations;
- results that pair estimates with uncertainty and denominators;
- limitations, external-validity boundaries, and bounded recommendations;

## Included patterns

- publication-style cover and research-question framing;
- four-stage method pipeline;
- headline result metrics with uncertainty;
- evidence table separating confidence from decision relevance;
- limitations and a bounded decision close;

## Commands

```bash
npm run dev
npm run build
npm run export
```

The starter tracks the current official Slidev application baseline used by this repository: Node.js 20.12 or newer, `@slidev/cli` 52.19.x, the default theme package, and Vue 3.5.

## Customization

Edit the CSS variables at the bottom of `slides.md` to change paper, ink, accent, rules, and typography. Keep the evidence hierarchy restrained: one claim, the denominator, the interval, and the decision consequence.

## Provenance

Public academic presentation repositories were reviewed to identify recurring needs, including `luckenco/slidev-academic-GitHub` and `sylearn/nju-slidev-template`. The implementation, content, CSS, and preview in this directory are original and unbranded.

See [`ATTRIBUTION.md`](./ATTRIBUTION.md) and the machine-readable [`template.json`](./template.json).

## Verification

Every pull request clean-installs and builds this starter in GitHub Actions. Registry schema, manifest, preview, license, CLI scaffolding, and generated gallery/catalog integration are tested separately.

## License

MIT. See [`LICENSE`](./LICENSE).
