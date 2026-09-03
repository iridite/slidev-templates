# Terminal Ink

Terminal Ink is a dark, terminal-first Slidev starter for incident reviews, engineering deep dives, command-line demonstrations, and system architecture walkthroughs.

It is designed around a narrative that technical audiences already understand: establish system state, reveal the failure or constraint, inspect evidence, explain the change, and close with the operational decision.

## Best for

- incident and postmortem presentations;
- infrastructure and platform walkthroughs;
- code reviews and migration explanations;
- reliability, performance, and security briefings;
- live-command or log-oriented talks.

## Quick start

```bash
npx degit iridite/slidev-templates/templates/terminal-ink terminal-talk
cd terminal-talk/starter
npm install
npm run dev
```

## Included patterns

- boot/status cover;
- incident timeline;
- evidence and log excerpts;
- before/after code or configuration comparison;
- architecture pipeline;
- decision and follow-up checklist.

The starter avoids external image and font dependencies, which makes it suitable for offline presentations and reproducible CI builds.

## Commands

```bash
npm run dev
npm run build
npm run export
```

## Authoring guidance

Use terminal styling to improve comprehension, not to turn every sentence into fake command output. Reserve monospace blocks for observable evidence, commands, identifiers, and state transitions. Put the actual decision in plain language.

The CSS variables at the bottom of `slides.md` control background, panel, text, green, amber, and red signal colors.

## Provenance

Terminal Ink is an original implementation. Public Slidev developer workflows were surveyed for common needs, but no code, slide content, or assets were copied. See [ATTRIBUTION.md](./ATTRIBUTION.md).

## License

MIT. See [LICENSE](./LICENSE).
