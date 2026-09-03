# Registry-powered gallery

The gallery is a static, zero-framework consumer of `registry/templates.json`. It demonstrates that the catalog is usable by downstream interfaces rather than being README-only metadata.

## Local source mode

```bash
npm run gallery:serve
```

Open `http://127.0.0.1:4173/gallery/`. In source mode, the app falls back to `../registry/templates.json`.

## Standalone static artifact

```bash
npm run gallery:build
```

The build writes `dist/site/gallery/`, copies local preview assets, transforms their paths for static hosting, and emits `gallery/templates.json`. `npm run gallery:check` performs the same build in a temporary directory and validates entry-count integrity.

The included **Publish Gallery** workflow is manual by design. It can deploy the generated `dist/site` artifact through GitHub Pages after a maintainer enables Pages with GitHub Actions as the source. Publication remains an explicit human release decision.

## Discovery fields

The interface supports text, category, source, status, and verification filtering. Each card exposes:

- canonical source;
- direct license evidence;
- verification level and review date;
- categories and tags;
- canonical start command;
- preview link.

External entries remain governed by their upstream projects. Gallery status indicates evidence depth, not endorsement or popularity.
