---
name: neko-slidev
description: Create polished Slidev presentations using the neko-style theme — animated glow backgrounds, 45+ reusable components, semantic color system. Use when building technical talks, conference decks, or product presentations with this template.
---

# neko-style Slidev Presentations

Create professional presentations with animated glow polygon backgrounds, 45+ battle-tested components, and a semantic color system. Extends the standard Slidev skill with theme-specific capabilities.

## When to Use

- Building presentations with the neko-style theme
- User mentions "glow backgrounds", "KubeCon template", or "neko-style"
- Creating slides that need rich visual components (architecture diagrams, feature grids, pipelines)

## Quick Start

```bash
# Option A: New project from starter
npx degit iridite/slidev-templates/neko-style/starter my-presentation
cd my-presentation && npm install && npm run dev

# Option B: Add to existing Slidev project (NOT published to npm)
git clone https://github.com/iridite/slidev-templates.git
npm install /path/to/slidev-templates/neko-style/theme
# Then set `theme: neko-style` in slides.md frontmatter
```

## Critical Rule

**NEVER use `<Transition>` or `<TransitionGroup>` for click animations.** They cause elements to vanish on backward navigation. Always use class-toggle + CSS transition:

```vue
<div class="transition duration-500 ease-in-out"
  :class="$clicks < 1 ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'">
  Content reveals on click 1
</div>
```

All animations: `transition duration-500 ease-in-out`. No exceptions.

## Glow Background System (Per-Slide Frontmatter)

```yaml
---
glowSeed: 42              # REQUIRED per page — different values = different backgrounds
glowPreset: blue          # Color: blue (default) | rust | cyan
theme: dark               # Theme: dark (default) | light
glow: full                # Position: full | top | bottom | left | right | center
glowOpacity: 0.4          # Intensity: 0-1 (default 0.4)
glowHue: 0                # Hue shift: 0-360
---
```

**Color presets**:
- `blue` — Technical talks, product launches (#18549a → #12238b)
- `rust` — Rust topics, innovation themes (#ed5132 → #ed4832)
- `cyan` — AI/ML topics, academic presentations (#32aeed → #32e5ed)

## Component Routing Table

| I need to show... | Use this component | Clicks needed |
|---|---|---|
| Feature grid (icon+title+desc cards) | `FeatureIconGrid` | items.length |
| Categorized icon/tech stack list | `CategoryIconList` | categories.length |
| Horizontal icon+label tags | `IconLabelWrap` | items.length |
| Problem vs Solution split | `ProblemSolutionSplit` | 2 |
| Left-border accent items (criteria) | `AccentBorderList` | items.length |
| Key insight / takeaway callout | `LearningCallout` | 0 |
| Large centered statement | `CenteredStatement` | 1 |
| Stats/metrics row | `StatsRow` | stats.length |
| Agenda / table of contents | `AgendaGrid` | sections.length |
| Learning path / steps with lists | `LearningPathSteps` | steps.length |
| Step-by-step pipeline (arrows) | `StackedFlowPipeline` | nodes.length*2-1 |
| Progression / roadmap lane | `RouteProgressionLane` | steps.length*2-1 |
| System layers (architecture tiers) | `LayeredArchView` | layers.length |
| Hub-spoke architecture diagram | `FlowDiagram` | max(click values) |
| Data flow / funnel pipeline | `EventPipeline` | max(click values) |
| Terminal + orbital tool loop | `TerminalOrbitDemo` | max(click values) |
| Full-screen video + overlay | `FadeVideoSlide` | 0 |
| Banner image + facts sidebar | `BannerSplitLayout` | facts.length+1 |
| Code + explanation split | `CodeExplainSplit` | 1 |
| Reasons + Lessons (classified) | `ReasonLessonGrid` | reasons+lessons |

## Page Templates (Copy-Paste Ready)

### Cover Page

```md
---
layout: cover
glowSeed: 100
glowPreset: blue
transition: fade-out
---

# Presentation Title

Subtitle or tagline here

<div absolute bottom-10 left-10 text-sm opacity-60>
  Speaker Name — Event Name — 2025
</div>
```

### Problem vs Solution

```md
---
glowSeed: 200
clicks: 6
---

# Why We Built This

<ProblemSolutionSplit
  :problems="[
    { icon: 'i-carbon:warning-alt', text: 'Manual deployment takes 2 hours' },
    { icon: 'i-carbon:warning-alt', text: 'No rollback capability' },
    { icon: 'i-carbon:warning-alt', text: 'Configuration drift across environments' },
  ]"
  :solutions="[
    { icon: 'i-carbon:checkmark', text: 'One-click deploy in 3 minutes' },
    { icon: 'i-carbon:checkmark', text: 'Instant rollback to any version' },
    { icon: 'i-carbon:checkmark', text: 'GitOps ensures consistency' },
  ]"
/>
```

### Feature Showcase

```md
---
glowSeed: 250
clicks: 4
---

# Key Features

<FeatureIconGrid :columns="4" :items="[
  { icon: 'i-carbon:lightning', title: 'Fast', description: 'Sub-ms latency', tone: 'amber' },
  { icon: 'i-carbon:security', title: 'Secure', description: 'Zero-trust', tone: 'teal' },
  { icon: 'i-carbon:scale', title: 'Scalable', description: '10M+ requests', tone: 'violet' },
  { icon: 'i-carbon:code', title: 'Dev-Friendly', description: '12 SDKs', tone: 'cyan' },
]" />
```

### Tech Stack / Categorized List

```md
---
glowSeed: 300
clicks: 2
---

# Technology Stack

<CategoryIconList :categories="[
  { title: 'Frontend', items: [
    { icon: 'i-logos:vue', label: 'Vue 3' },
    { icon: 'i-logos:typescript-icon', label: 'TypeScript' },
    { icon: 'i-logos:unocss', label: 'UnoCSS' },
  ]},
  { title: 'Backend', icon: 'i-carbon:server-proxy', items: [
    { icon: 'i-logos:go', label: 'Go' },
    { icon: 'i-logos:postgresql', label: 'PostgreSQL' },
    { icon: 'i-logos:redis', label: 'Redis' },
  ]},
]" />
```

## Semantic Color System

| Color | Meaning | Use for |
|-------|---------|---------|
| `red-800` | Problems, warnings | Challenges, pain points, what's broken |
| `green-800` | Solutions, success | Fixes, improvements, what works |
| `blue-800` | Information, neutral | Technical details, explanations |
| `purple-800` | Advanced, special | Advanced features, unique capabilities |
| `yellow-800` | Performance, speed | Metrics, benchmarks, optimizations |

Apply via card borders/backgrounds: `border="2 solid red-800" bg="red-800/20"`

## Common Icons (`@iconify-json/carbon`)

| Use | Icon class |
|-----|-----------|
| Warning/Problem | `i-carbon:warning-alt` |
| Success/Done | `i-carbon:checkmark` |
| Error/Close | `i-carbon:close` |
| Info | `i-carbon:information` |
| Performance | `i-carbon:lightning` |
| Time | `i-carbon:time` |
| Code | `i-carbon:code` |
| Security | `i-carbon:security` |
| Rocket/Launch | `i-carbon:rocket` |
| Data | `i-carbon:data-volume` |

Brand icons available via `@iconify-json/logos`: `i-logos:kubernetes`, `i-logos:docker-icon`, `i-logos:python`, etc.

## Debugging: Glow Not Showing

Check in order:
1. Is `theme: neko-style` set in first slide frontmatter?
2. Is there global CSS overriding background? Run: `rg "\.slidev-layout|background:\s*black" .`
3. Does the current slide have `background:` set? (overrides glow — expected)
4. Does the current slide have `glow: false`? (disables glow — expected)
5. Is the frontmatter YAML valid? (check `---` delimiters and indentation)

## Deep Dive (Read Only When Needed)

| Need | Read this file |
|------|---------------|
| Full props for a specific component | `neko-style/docs/COMPONENT-CATALOG.md` |
| Complete page composition recipes | `neko-style/docs/PAGE-PATTERNS.md` |
| All 45+ components documented | `neko-style/theme/README.md` |
| AI workflow guide (Chinese) | `neko-style/docs/FOR-AI-ASSISTANTS.md` |
| Design language philosophy | `neko-style/docs/design-language-airi-2025-10.md` |
