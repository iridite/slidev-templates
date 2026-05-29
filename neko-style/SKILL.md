---
name: neko-slidev
description: Create polished Slidev presentations using the neko-style theme — animated glow backgrounds, 45+ reusable components, semantic color system. Use when building technical talks, conference decks, or product presentations with this template.
---

# neko-style Slidev Presentations

Create professional presentations with animated glow polygon backgrounds, 45+ battle-tested components, and a semantic color system.

## When to Use

- Building presentations with the neko-style theme
- User mentions "glow backgrounds", "KubeCon template", or "neko-style"
- Creating slides that need rich visual components (architecture diagrams, feature grids, pipelines)

## Quick Start

```bash
# Option A: New project from starter
npx degit iridite/slidev-templates/neko-style my-presentation
cd my-presentation/starter && npm install && npm run dev

# Option B: Add to existing Slidev project (NOT published to npm)
git clone https://github.com/iridite/slidev-templates.git
# If using bun: install theme's own node_modules first (bun uses per-file symlinks;
# Vite follows them to the real path and needs deps installed there)
cd slidev-templates/neko-style/theme && npm install && cd -
npm install /path/to/slidev-templates/neko-style/theme
# Then set `theme: neko-style` in slides.md frontmatter
```

**For new projects**: include `vite.config.ts` to avoid `LiquidGlass` naming conflict warning:

```ts
export default {
  slidev: { components: { extensions: ['vue', 'md'] } },
}
```

## 🚫 Mandatory: Component-First Rule

**When the user asks for a neko-style presentation, you MUST use built-in components — not plain divs.**

Decision flow for every slide:
1. What content type is this page? → Check routing table below
2. Matching component found → use it (edit props, don't reimplement)
3. No component match → use `.neko-glass-card` glass card pattern
4. Run the self-check before delivering

**Forbidden patterns** (produce bright cards that clash with the dark theme):

```html
<!-- ❌ NEVER in dark mode (default) -->
<div class="bg-sky-50 border border-sky-200">
<div class="bg-emerald-50 text-slate-600">
<div class="bg-slate-100 border border-gray-200">
```

```html
<!-- ✅ Use instead -->
<FeatureIconGrid :columns="3" :items="..." />              <!-- component -->
<div class="neko-glass-card p-5">...</div>                 <!-- glass card -->
<div border="2 solid green-800" bg="green-800/20" rounded-lg overflow-hidden>  <!-- semantic card -->
```

**Self-check before delivering:**
- [ ] Are there plain div cards with no built-in component used?
- [ ] Any `bg-*-50` / `bg-slate-100` / `border-*-200` classes?
- [ ] Any `text-slate-600` / `text-gray-700` (near-invisible on dark bg)?
- [ ] Every page maps to a layout or component pattern?

## Critical Rule: No `<Transition>` for Click Animations

**NEVER use `<Transition>` or `<TransitionGroup>`.** They cause elements to vanish on backward navigation. Always use class-toggle + CSS:

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

**Pick ONE preset for the entire presentation.** Decide in the first slide's frontmatter and use it on every slide — switching presets mid-deck creates visual noise. The `glowSeed` already provides per-page variety; the preset is the deck's identity.

## Component Routing Table

| I need to show... | Use this component | Clicks |
|---|---|---|
| **— Data Display —** | | |
| Feature grid (icon+title+desc cards) | `FeatureIconGrid` | items.length |
| Pattern / concept card grid | `PatternCardGrid` | items.length |
| Linear process (card+icon+desc) | `ProcessFlowGrid` | items.length |
| Three challenges / column cards | `LifecycleChallengesThreeCol` | items.length |
| Capability reveal row | `CapabilityRevealRow` | items.length |
| Stats / metrics row | `StatsRow` | stats.length |
| Learning path / step progress | `LearningPathSteps` | steps.length |
| Checklist (glass morphism) | `GlassChecklist` | items.length |
| Code + explanation split | `CodeExplainSplit` | 1 |
| Artifact + floating callouts | `ArtifactExplainBoard` | items.length |
| Motion animation gallery | `MotionPrinciplesGallery` | animations.length |
| **— Layout —** | | |
| Agenda / table of contents | `AgendaGrid` | sections.length |
| Banner image + facts sidebar | `BannerSplitLayout` | facts.length+1 |
| Categorized icon / tech stack list | `CategoryIconList` | categories.length |
| Horizontal icon+label tags | `IconLabelWrap` | items.length |
| Left-border accent items (criteria) | `AccentBorderList` | items.length |
| **— Progression & Architecture —** | | |
| Step-by-step pipeline (arrows) | `StackedFlowPipeline` | nodes×2−1 |
| Spectrum / progression / roadmap | `RouteProgressionLane` | steps×2−1 |
| System layers (architecture tiers) | `LayeredArchView` | layers.length |
| Hub-spoke architecture diagram | `FlowDiagram` | max(click values) |
| Data flow / funnel pipeline | `EventPipeline` | max(click values) |
| Terminal + orbital tool loop | `TerminalOrbitDemo` | max(click values) |
| **— Narrative —** | | |
| Problem vs Solution split | `ProblemSolutionSplit` | 2 |
| Reasons + Lessons (classified) | `ReasonLessonGrid` | reasons+lessons |
| Key insight / takeaway callout | `LearningCallout` | 0 |
| Bottom conclusion bar | `InsightCalloutBar` | 0 |
| Dramatic question reveal | `SpotlightQuestion` | 1 |
| Large centered statement / quote | `CenteredStatement` | 1 |
| **— Speaker —** | | |
| Multi-speaker panel | `SpeakerLineupIntro` | speakers.length |
| Speaker + community ecosystem | `SpeakerEcosystemIntro` | 2 |
| Character / persona full-screen | `FullBleedCharacterReveal` | 1 |
| Left/right split brand intro | `SplitBrandIntro` | 2 |
| Error screen / surprise opener | `WorksOnMyMachineHero` | 0 |
| **— Media —** | | |
| Full-screen video + overlay | `FadeVideoSlide` | 0 |
| Video with floating annotations | `FeatureOverlayVideo` | items.length |
| Screenshot gallery + QR hover | `SessionHoverGallery` | 0 |
| **— Closing —** | | |
| Thank you / closing split panel | `ThankYouSplitPanel` | 0 |
| Contact QR codes (×3) | `ContactQrTriplet` | 0 |
| Recruiting / job roles | `RecruitingRoleList` | roles.length |
| **— Advanced —** | | |
| Refractive glassmorphism card | `LiquidGlass` | 0 |
| Terminal recording playback | `AsciinemaPlayer` | 0 |

## Page Templates (Copy-Paste Ready)

### Cover Page

Two styles — choose one:

```md
---
layout: cover
glowSeed: 100
glowPreset: blue
transition: fade-out
---

# Presentation Title

## Subtitle or tagline
```

> `# Title` and `## Subtitle` now render with hero typography (3.5rem/bold and 1.5rem/normal) automatically in the cover layout.

Or with custom entrance animation and speaker line:

```md
---
layout: cover
glowSeed: 100
glowPreset: blue
transition: fade-out
clicks: 2
---

<div px-14>
<h1
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'"
  text-5xl font-bold transition duration-1200 ease-in-out
>Presentation Title</h1>

<p
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'"
  text-xl opacity-85 transition duration-800 ease-in-out delay-200
>Subtitle or tagline</p>

<div
  v-click="2"
  :class="$clicks < 2 ? 'opacity-0 translate-y-3' : 'opacity-80 translate-y-0'"
  mt-8 flex items-center gap-4 text-lg transition duration-500 ease-in-out
>
  <div i-carbon:user-avatar></div>
  <span>Speaker Name / Team</span>
  <span opacity-50>·</span>
  <span>2026</span>
</div>
</div>
```

### Section Divider

```md
---
layout: section
glowSeed: 200
glowPreset: blue
sectionNumber: 1
sectionTitle: The Problem
sectionSubtitle: Why current workflows fall short
---
```

### Problem vs Solution

```md
---
layout: page
glowSeed: 200
clicks: 3
---

# Why We Built This

<div
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 translate-y-5 scale-95' : 'opacity-100 translate-y-0 scale-100'"
  transition duration-500 ease-in-out
>
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
</div>

<div
  v-click="2"
  :class="$clicks < 2 ? 'opacity-0 translate-y-3 blur-sm' : 'opacity-100 translate-y-0 blur-0'"
  transition duration-500 ease-in-out
>
  <InsightCalloutBar tone="yellow">
    The bottleneck isn't skill — it's friction.
  </InsightCalloutBar>
</div>
```

### Feature Showcase

```md
---
layout: page
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
layout: page
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
  { title: 'Backend', items: [
    { icon: 'i-logos:go', label: 'Go' },
    { icon: 'i-logos:postgresql', label: 'PostgreSQL' },
    { icon: 'i-logos:redis', label: 'Redis' },
  ]},
]" />
```

### Takeaways / Checklist

```md
---
layout: page
glowSeed: 420
clicks: 1
---

# Takeaways

<div
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 translate-y-4 scale-98' : 'opacity-100 translate-y-0 scale-100'"
  class="mt-4 transition duration-600 ease-in-out"
>
  <GlassChecklist :items="[
    'Key point 1 — one sentence.',
    'Key point 2 — one sentence.',
    'Key point 3 — one sentence.',
  ]" />
</div>
```

### Contents / TOC

```md
---
layout: contents-toc
glowSeed: 50
accent: cyan
---

- Introduction
- Problem Space
- Our Approach
- Results
- Next Steps
```

### Closing Slide

```md
---
layout: end
glowSeed: 700
---
```

Or with a richer split-panel closing:

```md
---
layout: page-wide
glowSeed: 700
---

<ThankYouSplitPanel
  title="Thank You"
  subtitle="Questions welcome"
  :links="[
    { label: 'GitHub', url: 'github.com/your-repo', qrSrc: '/qr-github.png' },
    { label: 'Docs', url: 'your-docs.dev', qrSrc: '/qr-docs.png' },
  ]"
/>
```

## Semantic Color System

| Color | Meaning | Use for |
|-------|---------|---------|
| `red-800` | Problems, warnings | Challenges, pain points, what's broken |
| `green-800` | Solutions, success | Fixes, improvements, what works |
| `blue-800` | Information, neutral | Technical details, explanations |
| `purple-800` | Advanced, special | Advanced features, unique capabilities |
| `yellow-800` | Performance, speed | Metrics, benchmarks, optimizations |
| `cyan-800` | AI/ML, academic | Data, intelligence, research topics |
| `amber-800` | Caution, time | Deadlines, costs, tradeoffs |

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
| Architecture | `i-carbon:network-3` |
| User/Person | `i-carbon:user-avatar` |
| GitHub | `i-carbon:logo-github` |

Brand icons (`@iconify-json/logos`): `i-logos:kubernetes`, `i-logos:docker-icon`, `i-logos:python`, `i-logos:vue`, `i-logos:typescript-icon`, `i-logos:go`, etc.

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
| AI workflow guide + anti-patterns | `neko-style/docs/FOR-AI-ASSISTANTS.md` |
| Design language philosophy | `neko-style/docs/design-language-airi-2025-10.md` |
