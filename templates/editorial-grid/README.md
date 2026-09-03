# Editorial Grid

Editorial Grid is a bold, print-inspired Slidev starter for product stories, strategic proposals, launches, design reviews, and other presentations that need deliberate visual pacing.

It is not a theme package. It is a complete starting structure that combines narrative order, page composition, typography, and representative content patterns.

## Best for

- product and company narratives;
- launches and strategic proposals;
- portfolio and design presentations;
- brand-neutral editorial storytelling;
- talks that alternate between statements, evidence, and visual rhythm.

## Quick start

```bash
npx degit iridite/slidev-templates/templates/editorial-grid editorial-talk
cd editorial-talk/starter
npm install
npm run dev
```

## Included patterns

- a high-impact editorial cover;
- a three-part narrative manifesto;
- asymmetric context/evidence composition;
- a metric spread;
- a quotation or customer-voice page;
- a clear decision and closing call to action.

The implementation uses system fonts and CSS only, so it has no external font or image dependency. Add your own licensed assets deliberately rather than inheriting opaque stock imagery.

## Commands

```bash
npm run dev
npm run build
npm run export
```

## Authoring guidance

Use the grid to create hierarchy, not decoration. Each page should have one dominant reading path. Large type is reserved for the claim; small type carries context, source, or navigation.

Edit the CSS variables at the bottom of `slides.md` to change paper, ink, signal color, and supporting tones.

## Provenance

Editorial Grid is an original implementation based on general editorial and Swiss-grid principles. It does not copy an upstream Slidev project, commercial template, font, image, or brand system. See [ATTRIBUTION.md](./ATTRIBUTION.md).

## License

MIT. See [LICENSE](./LICENSE).
