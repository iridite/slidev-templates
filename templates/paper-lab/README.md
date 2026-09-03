# Paper Lab

Paper Lab is a light, publication-inspired Slidev starter for research talks, technical reports, experiment reviews, and evidence-heavy proposals.

It is a **template**, not a standalone theme package. The starter combines an information structure, typography, reusable slide patterns, and a representative deck that can be copied and edited directly.

## Best for

- research questions and hypotheses;
- methods and study-design explanations;
- results with restrained data emphasis;
- literature, evidence, and limitation slides;
- internal experiment reviews and conference talks.

## Quick start

```bash
npx degit iridite/slidev-templates/templates/paper-lab paper-lab-talk
cd paper-lab-talk/starter
npm install
npm run dev
```

Or copy `starter/` into an existing repository.

## Included patterns

The example deck demonstrates:

- a publication-style title page;
- research-question framing;
- a method pipeline;
- headline results and uncertainty;
- an evidence table;
- limitations and next-step framing.

The CSS is intentionally kept inside `slides.md`, so the starter remains easy to inspect and copy. Split it into a dedicated stylesheet when the presentation grows.

## Commands

```bash
npm run dev
npm run build
npm run export
```

## Customization

The starter uses system-safe serif, sans-serif, and monospace fallbacks. Change the CSS variables at the bottom of `slides.md` to adjust paper color, ink, accent, and typography without rewriting individual slides.

Keep the visual hierarchy restrained: one primary claim per slide, generous margins, short evidence labels, and explicit limitations.

## Provenance

This is an original clean-room implementation. Public academic Slidev projects, including `luckenco/slidev-academic-GitHub`, were reviewed to understand common needs, but no upstream code, branding, or assets were copied. See [ATTRIBUTION.md](./ATTRIBUTION.md).

## License

MIT. See [LICENSE](./LICENSE).
