# Terminal Ink

**Show the failure mechanism, not only the outage.**

A terminal-first Slidev starter for incident reviews, systems walkthroughs, code explanations, operational evidence, corrective actions, and runbook decisions.

This is a complete Slidev starter rather than a standalone theme package. It combines a narrative structure, representative slide patterns, typography, CSS tokens, and build/export commands.

## Quick start

```bash
npx degit iridite/slidev-templates/templates/terminal-ink/starter terminal-talk
cd terminal-talk
npm install
npm run dev
```

The extracted directory is self-contained: `package.json`, `slides.md`, README, MIT license, attribution record, and `.gitignore` all travel with the starter.

## Best for

- incident reviews and postmortems;
- systems walkthroughs and architecture decisions;
- code, logs, diffs, traces, and operational evidence;
- corrective actions, verification, and runbook ownership;

## Included patterns

- terminal-window cover and decision close;
- time-ordered incident timeline;
- log evidence with observed-versus-unproven separation;
- before-and-after configuration diff;
- failure-mechanism pipeline and verification grid;

## Commands

```bash
npm run dev
npm run build
npm run export
```

The starter tracks the current official Slidev application baseline used by this repository: Node.js 20.12 or newer, `@slidev/cli` 52.19.x, the default theme package, and Vue 3.5.

## Customization

Change the terminal tokens at the bottom of `slides.md` to tune background, panel, line, text, success, warning, and failure colors. Preserve the narrative order: state, evidence, mechanism, correction, verification, next owner.

## Provenance

Developer-oriented Slidev starters and operational presentation workflows were surveyed, including multi-talk and tested-template projects. No upstream source code, logos, screenshots, or slide content are included.

See [`ATTRIBUTION.md`](./ATTRIBUTION.md) and the machine-readable [`template.json`](./template.json).

## Verification

Every pull request clean-installs and builds this starter in GitHub Actions. Registry schema, manifest, preview, license, CLI scaffolding, and generated gallery/catalog integration are tested separately.

## License

MIT. See [`LICENSE`](./LICENSE).
