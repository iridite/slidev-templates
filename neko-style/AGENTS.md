# AGENTS.md — Rules for AI-Generated neko-style Presentations

This file constrains AI assistants (Codex, Claude, ChatGPT, Gemini) when generating Slidev presentations with the neko-style theme.

## Mandatory Rules

1. **Use layouts and components — never plain markdown bullets.** Every slide must use a `layout:` OR a theme component. If you find yourself writing `- bullet` lists, stop and find the right component.

2. **Select from `snippets/` first.** Before writing any slide, check if `snippets/` has a template for that page type. Copy the snippet, fill the placeholders.

3. **Maximum 3 bullet points per slide.** If you need more, split into multiple slides. Prefer visual components over text lists.

4. **Do not invent visual systems.** Use the existing semantic color system (red=problems, green=solutions, blue=info, purple=advanced, yellow=performance). Do not create new color meanings.

5. **Do not write raw HTML** unless no layout or component can express the idea. Check the Component Routing Table in `SKILL.md` before resorting to divs.

6. **Each slide gets a unique `glowSeed`.** Increment by 50 (100, 150, 200, 250...) for visual variety.

7. **Pick ONE `glowPreset` for the entire deck.** Do not switch presets between slides.

8. **No `<Transition>` or `<TransitionGroup>`.** Use class-toggle + CSS transition: `:class="$clicks < N ? 'opacity-0' : 'opacity-100'"` with `transition duration-500 ease-in-out`.

9. **No light-mode colors on dark background.** Never use `bg-*-50`, `bg-slate-100`, `border-*-200`, `text-slate-600`. Use `*-800/20` transparent dark tones instead.

10. **Set `clicks:` in frontmatter** when using components with progressive reveal. Match the component's required click count.

## Workflow

```
1. Read SKILL.md → understand available layouts & components
2. Plan slide structure → choose layout/component for each page
3. Copy from snippets/ → fill in content placeholders
4. Set frontmatter → unique glowSeed, correct clicks count
5. Self-check → verify no forbidden patterns
```

## Available Layouts

| Layout | Purpose | Named Slots |
|--------|---------|-------------|
| `cover` | Title slide | default |
| `section` | Section divider | default (optional extra content) |
| `statement` | Centered impactful claim | `kicker`, default (title), `subtitle` |
| `compare` | Side-by-side comparison | `left-title`, `left`, `right-title`, `right` |
| `cards` | Grid of cards | `title`, default (card content) |
| `timeline` | Horizontal progression | `title`, default (component) |
| `page` | Standard content | default |
| `page-wide` | Full-bleed content | default |
| `center` | Centered content | default |
| `intro` | Speaker intro | default |
| `end` | Closing slide | default |

## Self-Check Before Delivering

- [ ] Every slide uses a layout or component (no plain markdown pages)
- [ ] No `bg-*-50` / `bg-slate-100` / `border-*-200` classes
- [ ] No `text-slate-600` / `text-gray-700` (invisible on dark)
- [ ] No bullet lists with more than 3 items
- [ ] Each page has unique `glowSeed`
- [ ] `clicks:` matches component requirements
- [ ] No `<Transition>` or `<TransitionGroup>`

## Reference Files

| Need | Read |
|------|------|
| Component selection | `SKILL.md` → Component Routing Table |
| Full component props | `docs/COMPONENT-CATALOG.md` |
| Complete page recipes | `docs/PAGE-PATTERNS.md` |
| Per-page snippets | `snippets/*.md` |
| Golden example | `examples/golden-tech-talk.md` |
| What NOT to do | `examples/bad-vs-good.md` |
