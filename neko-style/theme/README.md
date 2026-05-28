# slidev-theme-neko-style

A modern Slidev theme featuring animated glow polygon backgrounds, a semantic color system, and 45+ presentation components for professional tech talks.

## Features

- Animated glow polygon backgrounds with stable randomization (via `seedrandom`)
- 3 color presets: **blue**, **rust**, **cyan** — switchable per-slide
- 9 layout variants including section dividers, full-bleed pages, and TOC
- 45+ reusable Vue components (narrative, data display, architecture diagrams, speaker intros, closings)
- UnoCSS-powered with attributify mode, Carbon and Logos icon sets
- Dark/light theme support
- Optional advanced features: terminal recordings, 3D graphics, motion animations

## Installation

> `slidev-theme-neko-style` is currently **not published to npm registry**.

### Option A: Use the Starter Template (recommended)

```bash
npx degit iridite/slidev-templates/neko-style/starter my-presentation
cd my-presentation
npm install
npm run dev
```

### Option B: Install from local path (existing projects)

```bash
git clone https://github.com/iridite/slidev-templates.git
npm install /absolute/path/to/slidev-templates/neko-style/theme
```

Or in `package.json`:

```json
{
  "dependencies": {
    "slidev-theme-neko-style": "file:/path/to/slidev-templates/neko-style/theme"
  }
}
```

Then reference in `slides.md`:

```yaml
---
theme: neko-style
---
```

### Troubleshooting Installation

| Symptom | Fix |
|---------|-----|
| `Cannot find module 'slidev-theme-neko-style'` | Run `npm install`; verify path points to `.../neko-style/theme` |
| Theme not applied (default styles) | Use `theme: neko-style` (not `slidev-theme-neko-style`) |
| Path breaks on different machines | Update the `file:` path and re-run `npm install` |

---

## Quick Start

Minimal slide with glow background:

```yaml
---
theme: neko-style
glowSeed: 42
glowPreset: blue
---

# Hello World
```

Each slide should have a unique `glowSeed` value for visual variety.

---

## Layouts

### cover

Title/opening slide.

```yaml
---
layout: cover
logoSrc: /logo.png
poweredBySrc: /powered-by.png
---
```

| Prop | Type | Description |
|------|------|-------------|
| `background` | `string?` | Background image/color/gradient |
| `logoSrc` | `string?` | Logo image (top-left) |
| `poweredBySrc` | `string?` | "Powered by" image (bottom-right) |

### intro

Free-form introduction page with centered slot content.

```yaml
---
layout: intro
---
```

### section

Section divider with number, title, and subtitle.

```yaml
---
layout: section
sectionNumber: 1
sectionTitle: Introduction
sectionSubtitle: Getting started
accentColor: '#60cd6a'
---
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sectionNumber` | `number` | `0` | Section number |
| `sectionTitle` | `string` | `''` | Section heading |
| `sectionSubtitle` | `string` | `''` | Subtitle text |
| `accentColor` | `string` | `'#60cd6a'` | Accent color for the number |

### contents-toc

Animated table of contents.

```yaml
---
layout: contents-toc
sections:
  - Introduction
  - Core Concepts
  - Conclusion
accentColor: '#60cd6a'
clicks: 1
---
```

### page

Standard content page with built-in safe-area padding (`.neko-safe-area`).

```yaml
---
layout: page
glowSeed: 120
---
```

### page-wide

Full-bleed page for videos, large diagrams, or screenshots.

```yaml
---
layout: page-wide
---
```

### end

Closing slide. Displays "Thanks" by default; customize with slide body content.

```yaml
---
layout: end
---
```

### center / default

Centered content and Slidev's default layout, respectively.

---

## Components

### Narrative Components

#### SpotlightQuestion

Large-text question that scales down on click to reveal answer content.

```vue
<SpotlightQuestion question="How much time do developers spend coding?">
  <v-clicks>
    <div text-5xl font-semibold>Less than 30%</div>
  </v-clicks>
</SpotlightQuestion>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `question` | `string` | *(required)* | The spotlight question |
| `compact` | `boolean` | `false` | Smaller text variant |

#### ProblemSolutionSplit

Red/green two-column comparison card.

```vue
<ProblemSolutionSplit
  problemTitle="Traditional Workflow"
  solutionTitle="Better Approach"
  :problem-items="[
    { text: 'Manual setup' },
    { text: 'Context lost' },
  ]"
  :solution-items="[
    { text: 'Instant environments' },
    { text: 'Persistent context' },
  ]"
/>
```

| Prop | Type | Default |
|------|------|---------|
| `problemTitle` | `string` | `'传统方案的问题'` |
| `solutionTitle` | `string` | `'改进方案'` |
| `problemItems` | `{ text: string }[]` | `[]` |
| `solutionItems` | `{ text: string }[]` | `[]` |

Also supports slot-based usage with `#problem` and `#solution` templates.

#### InsightCalloutBar

Bottom-of-slide conclusion/insight banner.

```vue
<InsightCalloutBar tone="yellow" icon="i-carbon:idea">
  The bottleneck isn't skill — it's friction.
</InsightCalloutBar>
```

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `icon` | `string` | `'i-carbon:idea'` | Any icon class |
| `tone` | `string` | `'yellow'` | `blue`, `yellow`, `green`, `red` |

#### WorksOnMyMachineHero

Classic "error screen" opening page. No props — use as-is.

```vue
<WorksOnMyMachineHero />
```

#### SplitBrandIntro

Left/right split opening with slot-based content.

```vue
<SplitBrandIntro>
  <template #left>
    <div i-carbon:presentation-file text-5xl text-blue-300 />
    <span font-semibold>Structure First</span>
  </template>
  <template #right>
    <div i-carbon:color-palette text-5xl text-cyan-300 />
    <span font-semibold>Visual Identity</span>
  </template>
</SplitBrandIntro>
```

### Data Display Components

#### ProcessFlowGrid

Step-by-step process/flow grid with icons.

```vue
<ProcessFlowGrid :columns="3" :items="[
  { icon: 'i-carbon:cloud-upload', eyebrow: 'Step 1', title: 'Upload', description: 'Push your config.' },
  { icon: 'i-carbon:data-connected', eyebrow: 'Step 2', title: 'Connect', description: 'Link services.' },
  { icon: 'i-carbon:checkmark', eyebrow: 'Step 3', title: 'Done', description: 'Ready to go.' },
]" />
```

| Prop | Type | Default |
|------|------|---------|
| `items` | `ProcessFlowItem[]` | `[]` |
| `columns` | `2 \| 3 \| 4` | `3` |

`ProcessFlowItem`: `{ title, description?, detail?, icon?, eyebrow?, stepLabel? }`

#### PatternCardGrid

Glass-morphism card grid for patterns/features.

```vue
<PatternCardGrid :columns="2" :items="[
  { eyebrow: 'Speed', title: 'Fast Startup', description: 'Sub-second spin-up.' },
  { eyebrow: 'Safety', title: 'Auto Rollback', description: 'Every action reversible.' },
]" />
```

| Prop | Type | Default |
|------|------|---------|
| `items` | `{ title, description, eyebrow? }[]` | `[]` |
| `columns` | `2 \| 3` | `2` |

#### LifecycleChallengesThreeCol

Three-column challenge cards. Accepts items via props or uses built-in defaults.

```vue
<LifecycleChallengesThreeCol :items="[
  { iconClass: 'i-carbon:time text-amber-300', title: 'Setup Cost', description: 'Hours of configuration.' },
  { iconClass: 'i-carbon:shuffle text-blue-300', title: 'Context Loss', description: 'Rebuilding mental models.' },
  { iconClass: 'i-carbon:repeat text-pink-300', title: 'Repetition', description: 'Same patterns everywhere.' },
]" />
```

#### CapabilityRevealRow

Progressive capability matrix with `v-clicks` column reveal.

```vue
<CapabilityRevealRow />
```

#### GlassChecklist

Glass-effect checklist with staggered appear animation.

```vue
<GlassChecklist :items="[
  'First item (supports <code>HTML</code>)',
  'Second item',
  'Third item',
]" />
```

| Prop | Type | Default |
|------|------|---------|
| `items` | `string[]` | `[]` |

#### ArtifactExplainBoard

Annotation overlay or sidebar explanation board for code/architecture/diagrams.

**Overlay mode** (default):

```vue
<ArtifactExplainBoard
  title="Directory Structure"
  :items="[
    { icon: 'i-carbon:document', tone: 'blue', title: 'config.json', description: 'Model config', positionClass: 'top-4 left-28', widthClass: 'w-[18rem]' },
  ]"
>
  <div class="h-full rounded-xl border border-white/8 bg-neutral-900/70 p-6 font-mono text-sm">
    <div>models/</div>
    <div class="pl-6">config.json</div>
  </div>
</ArtifactExplainBoard>
```

**Sidebar mode**:

```vue
<ArtifactExplainBoard
  mode="sidebar"
  subtitle="Step-by-step explanation"
  :items="[
    { icon: 'i-carbon:user-avatar', tone: 'cyan', title: 'Input', description: 'User request arrives.' },
    { icon: 'i-carbon:tool-box', tone: 'green', title: 'Process', description: 'Tools are invoked.' },
    { icon: 'i-carbon:result', tone: 'purple', title: 'Output', description: 'Result returned.' },
  ]"
>
  <img src="/diagram.png" class="h-full w-full rounded-xl object-cover" />
</ArtifactExplainBoard>
```

#### MotionPrinciplesGallery

Animation showcase gallery with live CSS animations.

```vue
<MotionPrinciplesGallery :items="[
  { icon: '🎯', title: 'balance-shake', caption: 'Emphasis', animationClass: 'animate-balance-shake' },
]" />
```

### Speaker / Intro Components

#### SpeakerLineupIntro

Multi-speaker introduction panel.

```vue
<SpeakerLineupIntro
  title="Joint Talk"
  subtitle="Our engineering team"
  :speakers="[
    { name: 'Alice', role: 'Lead Engineer', handle: 'alice-gh', handleIcon: 'i-carbon:logo-github' },
    { name: 'Bob', role: 'Platform Engineer', handle: 'bob-gh', handleIcon: 'i-carbon:logo-github' },
  ]"
/>
```

`SpeakerLineupItem`: `{ name, role?, avatar?, affiliation?, affiliationIcon?, handle?, handleIcon?, note? }`

#### SpeakerEcosystemIntro

Single speaker with community/project ecosystem display.

```vue
<SpeakerEcosystemIntro
  avatar="/avatar.jpg"
  name="Your Name"
  role="Software Engineer"
  handle="github-handle"
  :community="[
    { icon: 'i-logos:vue', label: 'Vue' },
    { icon: 'i-logos:typescript-icon', label: 'TypeScript' },
  ]"
  :other-projects="[
    { icon: 'i-carbon:carbon', label: 'Project X' },
  ]"
  qr="/qr-code.png"
/>
```

#### FullBleedCharacterReveal

Full-screen image reveal with stats overlay.

```vue
<FullBleedCharacterReveal
  image="/character.webp"
  title="Character Name"
  :stats="[
    { icon: 'i-logos:youtube-icon', text: '636K subscribers' },
  ]"
/>
```

### Media Components

#### FeatureOverlayVideo

Video with feature annotation overlays.

```vue
<FeatureOverlayVideo src="/demo.mp4" title="Feature Demo" />
```

#### SessionHoverGallery

Screenshot gallery with QR codes on hover.

```vue
<SessionHoverGallery :items="[
  { image: '/session-1.png', qr: '/session-1-qr.png' },
  { image: '/session-2.png', qr: '/session-2-qr.png' },
]" />
```

### Closing Components

#### ThankYouSplitPanel

Two-column closing page with art and QR.

```vue
<ThankYouSplitPanel title="谢谢" subtitle="Thank you" art="/art.gif" qr="/qr.png">
  <div>Custom right-side content (slot)</div>
</ThankYouSplitPanel>
```

#### ContactQrTriplet

Three QR codes for contact info.

```vue
<ContactQrTriplet :items="[
  { label: 'GitHub', src: '/github_qr.png' },
  { label: 'Discord', src: '/discord_qr.png' },
  { label: 'Telegram', src: '/telegram_qr.png' },
]" />
```

#### RecruitingRoleList

Recruiting/role showcase page.

```vue
<RecruitingRoleList
  title="We're Hiring"
  subtitle="Join our team"
  :roles="[
    { icon: 'i-carbon:code', label: 'Backend Engineer' },
    { icon: 'i-carbon:paint-brush', label: 'Designer' },
  ]"
/>
```

### Simple Content Components

#### IconLabelWrap

Horizontal flex-wrap flow of icon+label pairs. For technology tags, skill lists, or badge displays.

```vue
<IconLabelWrap :items="[
  { icon: 'i-devicon:kubernetes', label: 'Kubernetes' },
  { icon: 'i-devicon:go', label: 'Golang' },
  { icon: 'i-logos:vue', label: 'Vue' },
  { icon: 'i-logos:typescript-icon', label: 'TypeScript' },
]" size="md" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `IconLabelItem[]` | `[]` | Items with icon, label, iconColor |
| `size` | `'sm'\|'md'\|'lg'` | `'md'` | Text size (lg/2xl/3xl) |
| `gap` | `string` | `'4'` | Gap between items (1rem) |

#### AccentBorderList

Vertical list with colored left-border accent. For evaluation criteria, decision factors, or highlighted lists.

```vue
<AccentBorderList :items="[
  { title: 'Business Value', description: 'How much benefit?', icon: 'i-carbon:growth', tone: 'green' },
  { title: 'Technical Risk', description: 'What could go wrong?', icon: 'i-carbon:warning', tone: 'red' },
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccentItem[]` | `[]` | Items with title, description, icon, tone |

#### AgendaGrid

Multi-column agenda/TOC with section headers and arrow-bullet lists.

```vue
<AgendaGrid :columns="2" :sections="[
  { title: 'Part 1: Basics', tone: 'violet', items: ['What is it?', 'Why use it?'] },
  { title: 'Part 2: Advanced', tone: 'blue', items: ['Custom setup', 'Production'] },
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `AgendaSection[]` | `[]` | Sections with title, icon, tone, items |
| `columns` | `2\|3\|4` | `2` | Grid columns |

#### CenteredStatement

Large centered text with dramatic reveal. For keynote moments or section transitions.

```vue
<CenteredStatement text="Simplicity Always Wins" subtitle="The best code is no code" icon="i-carbon:idea" revealStyle="scale" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | required | Main statement |
| `subtitle` | `string` | — | Secondary text |
| `icon` | `string` | — | Icon above text |
| `revealStyle` | `'scale'\|'fade'\|'slide'` | `'fade'` | Animation style |

#### StatsRow

Horizontal row of icon + value + label metrics.

```vue
<StatsRow variant="pill" :stats="[
  { icon: 'i-logos:youtube-icon', value: '636K', label: 'subscribers' },
  { icon: 'i-logos:twitch', value: '789K', label: 'followers' },
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `stats` | `StatItem[]` | `[]` | Stats with icon, value, label, iconColor |
| `variant` | `'pill'\|'bare'` | `'bare'` | Whether to add background |

#### LearningPathSteps

Vertical progressive steps with nested ordered lists. For learning paths or onboarding.

```vue
<LearningPathSteps :steps="[
  { icon: 'i-carbon:user-avatar', title: 'Beginner', tone: 'blue', items: ['Read docs', 'Try examples'] },
  { icon: 'i-carbon:code', title: 'Intermediate', tone: 'purple', items: ['Build server', 'Add tools'] },
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `PathStep[]` | `[]` | Steps with icon, title, tone, items |
| `ordered` | `boolean` | `true` | Numbered (ol) vs bullet (ul) lists |

#### CodeExplainSplit

Side-by-side code block and explanation.

```vue
<CodeExplainSplit code="npm install\nnpm run dev" lang="bash">
  <template #explanation>
    <div>Step 1: Install deps. Step 2: Start server.</div>
  </template>
</CodeExplainSplit>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | `''` | Code content |
| `lang` | `string` | `'typescript'` | Language hint |
| `explanationSide` | `'left'\|'right'` | `'right'` | Which side for explanation |

### Progression & Architecture Components

#### CategoryIconList

Grouped columns of icon + label pairs with category headers. Perfect for tech stack listings, tool comparisons, or categorized enumerations.

```vue
<CategoryIconList :categories="[
  { title: 'Frameworks', items: [
    { icon: 'i-logos:pytorch-icon', label: 'PyTorch' },
    { icon: 'i-logos:hugging-face-icon', label: 'transformers' },
  ]},
  { title: 'Runtimes', icon: 'i-carbon:chip', items: [
    { icon: 'i-simple-icons:onnx', label: 'ONNX Runtime', iconColor: '#60a5fa' },
  ]},
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `categories` | `Category[]` | `[]` | Array of category groups |
| `columns` | `2\|3\|4` | `2` | Grid column count |
| `iconSize` | `string` | `'32px'` | Icon font size |
| `gap` | `string` | `'12'` | Gap between columns (3rem) |

Each `Category`: `{ title, icon?, items: { icon, label, iconColor? }[] }`

#### FeatureIconGrid

Grid of icon + title + description cards. The most versatile component for feature showcases.

```vue
<FeatureIconGrid :columns="3" :items="[
  { icon: 'i-carbon:lightning', title: 'Fast', description: 'Sub-ms response', tone: 'amber' },
  { icon: 'i-carbon:security', title: 'Secure', description: 'Zero-trust', tone: 'teal' },
  { icon: 'i-carbon:scale', title: 'Scalable', description: 'Auto-scaling', tone: 'violet' },
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `FeatureItem[]` | `[]` | Items with icon, title, description, tone |
| `columns` | `2\|3\|4\|5` | `3` | Grid column count |

#### RouteProgressionLane

Horizontal stepped progression with animated connectors.

```vue
<RouteProgressionLane :steps="[
  { icon: 'i-carbon:explore', title: 'Research', subtitle: 'Q1', tone: 'teal' },
  { icon: 'i-carbon:code', title: 'Build', subtitle: 'Q2', tone: 'sky' },
  { icon: 'i-carbon:rocket', title: 'Launch', subtitle: 'Q3', tone: 'violet' },
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `RouteStep[]` | `[]` | Steps with icon, title, subtitle, tone |
| `connectorVariant` | `'arrow'\|'hard'` | `'arrow'` | Connector style |

#### LayeredArchView

Vertical stack of hierarchical layers (agent architecture, platform tiers).

```vue
<LayeredArchView :columns="4" :layers="[
  { icon: 'i-carbon:cognitive', title: 'Planning', description: 'Goal decomposition', tone: 'violet' },
  { icon: 'i-carbon:view', title: 'Perception', description: 'State observation', tone: 'sky' },
  { icon: 'i-carbon:terminal', title: 'Execution', description: 'Tool invocation', tone: 'teal' },
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layers` | `ArchLayer[]` | `[]` | Layers with icon, title, description, tone |
| `columns` | `3\|4\|5` | `4` | Grid column count |

#### StackedFlowPipeline

Process pipeline with nodes and directional arrows (or equal columns without arrows).

```vue
<StackedFlowPipeline variant="pipeline" :nodes="[
  { icon: 'i-carbon:document', title: 'Input', tone: 'sky' },
  { icon: 'i-carbon:model-alt', title: 'Process', tone: 'violet' },
  { icon: 'i-carbon:chart-line', title: 'Output', tone: 'teal' },
]" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `nodes` | `PipelineNode[]` | `[]` | Nodes with icon, title, subtitle, tone |
| `variant` | `'pipeline'\|'stacked'` | `'pipeline'` | Pipeline (with arrows) or stacked (columns only) |
| `tall` | `boolean` | `false` | Taller cards (pipeline variant) |

#### FlowDiagram

Free-form node-edge diagram with SVG cubic bezier paths. Requires explicit positioning.

```vue
<FlowDiagram
  :nodes="[
    { id: 'a', click: 1, x: 50, y: 170, width: 200, height: 80, title: 'Service A', icon: 'i-carbon:api' },
    { id: 'b', click: 2, x: 400, y: 170, width: 200, height: 80, title: 'Service B', icon: 'i-carbon:application' },
  ]"
  :edges="[
    { id: 'e1', from: 'a', to: 'b', click: 2, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.5 } },
  ]"
/>
```

Uses `utils/flowGeometry.ts` for path computation. See `docs/COMPONENT-CATALOG.md` for full FlowNode/FlowEdge interfaces.

#### EventPipeline

Multi-stage data flow funnel with converging token streams.

```vue
<EventPipeline
  :tokens="[{ label: 'HTTP', x: 100, y: 80 }, { label: 'gRPC', x: 80, y: 200 }]"
  :stages="[{ id: 's1', title: 'Parser', tone: 'cyan', icon: 'i-carbon:code', x: 550, y: 100 }]"
/>
```

#### TerminalOrbitDemo

Split-pane: terminal output on left, orbital/circular diagram on right.

```vue
<TerminalOrbitDemo
  :terminalLines="[{ title: '$ deploy', body: 'Success', tone: 'cyan', click: 1 }]"
  :orbitSteps="[{ icon: 'i-carbon:kubernetes', label: 'K8s', tone: 'sky', angle: 0, click: 1 }]"
/>
```

### Layout & Content Components

#### LearningCallout

Compact callout card for key takeaways.

```vue
<LearningCallout icon="i-carbon:idea" tone="teal">
  <strong>Key Insight</strong>
  <p class="mt-1 text-sm opacity-70">The critical learning...</p>
</LearningCallout>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | `'i-carbon:idea'` | Icon class |
| `tone` | `string` | `'sky'` | Color tone |
| `variant` | `'default'\|'compact'\|'note'` | `'default'` | Card style variant |

#### ReasonLessonGrid

Two-column classified content — reasons/problems + lessons/insights.

```vue
<ReasonLessonGrid
  :reasons="[{ icon: 'i-carbon:warning', title: 'Issue', body: 'Description...', tone: 'violet' }]"
  :lessons="[{ icon: 'i-carbon:checkmark', title: 'Fix', description: 'Solution...', tone: 'teal' }]"
/>
```

#### BannerSplitLayout

Asymmetric split: title + facts on one side, media slot on the other.

```vue
<BannerSplitLayout
  title="Product"
  :facts="[{ icon: 'i-carbon:rocket', text: '10x faster' }]"
>
  <template #media><img src="/screenshot.png" /></template>
</BannerSplitLayout>
```

#### FadeVideoSlide

Full-bleed video background with glassmorphic overlay.

```vue
<FadeVideoSlide src="/demo.mp4">
  <template #overlay>
    <h2 class="text-3xl font-bold">Live Demo</h2>
  </template>
</FadeVideoSlide>
```

#### IconMask

CSS mask-based icon for custom SVGs not in iconify.

```vue
<IconMask src="/icons/custom.svg" size="48px" label="Custom Icon" />
```

---

## Glow Background System

The signature feature of this theme — animated polygon backgrounds generated from a seed value.

### Per-Slide Configuration

```yaml
---
glowSeed: 42           # Seed for stable random polygons (required for variety)
glowPreset: blue       # Color preset: blue | rust | cyan
glow: full             # Distribution: full | top | bottom | left | right | center | top-left | top-right | bottom-left | bottom-right | topmost
glowOpacity: 0.4       # Background opacity (0-1, default: 0.4)
glowHue: 0             # Hue shift (0-360, default: 0)
---
```

### Color Presets

| Preset | From | To | Use Case |
|--------|------|----|----------|
| `blue` | `#18549a` | `#12238b` | Technical talks, product launches (default) |
| `rust` | `#ed5132` | `#ed4832` | Rust topics, innovation, energy |
| `cyan` | `#32aeed` | `#32e5ed` | AI/ML, academic, futuristic |

### Glow Troubleshooting

If you see a black background without glow:

1. Confirm `theme: neko-style` is in top-level frontmatter
2. Check no global CSS overrides `.slidev-layout` background
3. Confirm slide doesn't set `glow: false`
4. Verify frontmatter YAML is valid

Smoke test:
```yaml
---
theme: neko-style
glowSeed: 101
glowPreset: blue
glow: full
glowOpacity: 0.4
---

# Glow Test
```

---

## Color System

Semantic colors for consistent visual communication:

| Color | Semantic | Border | Background | Icon | Text |
|-------|----------|--------|------------|------|------|
| Red | Problems/Warnings | `red-800` | `red-800/20` | `text-red-300` | `text-red-400` |
| Green | Solutions/Success | `green-800` | `green-800/20` | `text-green-300` | `text-green-400` |
| Blue | Neutral info | `blue-800` | `blue-800/20` | `text-blue-300` | `text-blue-400` |
| Purple | Advanced features | `purple-800` | `purple-800/20` | `text-purple-300` | `text-purple-400` |
| Yellow | Performance/Speed | `yellow-800` | `yellow-800/20` | `text-yellow-300` | `text-yellow-400` |
| Cyan | Cloud/Containers | `cyan-800` | `cyan-800/20` | `text-cyan-300` | `text-cyan-400` |
| Lime | Growth/Metrics | `lime-800` | `lime-800/20` | `text-lime-300` | `text-lime-400` |

### Card Pattern

```vue
<div border="2 solid [color]-800" bg="[color]-800/20" rounded-lg overflow-hidden>
  <div bg="[color]-800/40" px-4 py-2>Header</div>
  <div px-4 py-3>Content</div>
</div>
```

### Opacity Levels

- `/20` — card background
- `/30` — inner regions
- `/40` — header bar
- `/50` — emphasis areas

---

## Animation Patterns

All animations use `transition duration-500 ease-in-out` for consistency.

### Basic Reveal (slide up)

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  Content
</div>
```

### Direction Variants

- From top: `translate-y--20` → `translate-y-0`
- From left: `translate-x--20` → `translate-x-0`
- From right: `translate-x-20` → `translate-x-0`
- Scale in: `scale-90` → `scale-100`

### Sequenced Animations

```vue
<div v-click="1" transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'">
  First
</div>
<div v-click="2" transition duration-500 ease-in-out
  :class="$clicks < 2 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'">
  Second
</div>
```

### Staggered Group Animation (components with multiple items)

When building components that reveal items one-by-one via clicks:

```vue
<script setup>
const props = defineProps<{ items: Array<{ title: string }> }>()
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <ClickStepRegister :count="props.items.length" />
    <div
      v-for="(item, idx) in props.items"
      :key="item.title"
      class="neko-glass-card p-4 transition duration-500 ease-in-out"
      :class="$clicks < idx + 1
        ? 'translate-y-6 opacity-0 pointer-events-none'
        : 'translate-y-0 opacity-100'"
      :style="{ transitionDelay: `${idx * 50}ms` }"
    >
      {{ item.title }}
    </div>
  </div>
</template>
```

Key points:
- `ClickStepRegister` registers N click steps without adding DOM elements
- Class toggle drives both forward (appear) and backward (disappear) animation
- `pointer-events-none` prevents interaction with hidden items
- `transitionDelay` creates a stagger effect

### Critical: Never Use `<Transition>` or `<TransitionGroup>` for Click Animations

Vue's `<Transition>` and `<TransitionGroup>` **must not** be used for click-gated (`$clicks`) or `v-click` animations. These components manage DOM insertion/removal, which causes:

1. **No reverse animation** — without `leave-*` classes, elements disappear instantly when clicking backward
2. **Page transition conflicts** — elements removed from DOM before the page's fade-out completes, causing visual "pop"

**Always use the class-toggle pattern instead:**

```vue
<!-- ❌ WRONG — breaks on backward navigation -->
<Transition enter-active-class="..." enter-from-class="...">
  <div v-if="$clicks >= 1">Content</div>
</Transition>

<!-- ✅ CORRECT — smooth in both directions -->
<div
  class="transition duration-500 ease-in-out"
  :class="$clicks < 1 ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'"
>
  Content
</div>
```

This pattern is used by all built-in theme components (`ProcessFlowGrid`, `ArtifactExplainBoard`, etc.) and guarantees smooth bidirectional transitions.

### Guidelines

- Keep 500ms duration across all transitions
- Problems animate from left, solutions from right
- New content enters from bottom, titles from top
- Built-in components self-register click steps; only declare `clicks:` in frontmatter when writing raw `$clicks` conditions
- First-screen card groups use short stagger delay to avoid the last item appearing too late

---

## Advanced Components (Optional Dependencies)

These components require additional packages that won't break installation if missing.

### AsciinemaPlayer — Terminal Recordings

```bash
npm install @nolebase/ui-asciinema asciinema-player
```

```vue
<AsciinemaPlayer
  src="/asciinema/demo.cast"
  :controls="'auto'"
  :rows="18"
  :speed="3"
/>
```

| Prop | Type | Default |
|------|------|---------|
| `src` | `string` | *(required)* |
| `controls` | `'auto' \| 'always' \| 'never'` | `'auto'` |
| `rows` | `number` | `18` |
| `speed` | `number` | `1` |

### VMotionExample — Declarative Animations

```bash
npm install @vueuse/motion
```

```vue
<VMotionExample>
  <h1>This content fades in from below</h1>
</VMotionExample>
```

Or use the directive directly:

```vue
<div
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
>
  Animated content
</div>
```

### Three.js / TresJS — 3D Visualizations

```bash
npm install @tresjs/core @tresjs/cientos three
```

```vue
<TresCanvas>
  <TresPerspectiveCamera :position="[0, 2, 5]" />
  <TresAmbientLight :intensity="0.5" />
  <TresMesh>
    <TresBoxGeometry :args="[1, 1, 1]" />
    <TresMeshStandardMaterial color="#60cd6a" />
  </TresMesh>
</TresCanvas>
```

---

## Configuration

### UnoCSS Setup (starter projects)

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-[#0a0a0a]',
  },
})
```

### Icon Collections

The theme uses these icon sets:
- `@iconify-json/carbon` — Primary icons ([browse](https://icon-sets.iconify.design/carbon/))
- `@iconify-json/logos` — Brand/tech logos ([browse](https://icon-sets.iconify.design/logos/))

### Frontmatter Reference

Full per-slide options:

```yaml
---
layout: page              # Layout variant
glowSeed: 100            # Glow seed (unique per slide)
glowPreset: blue         # blue | rust | cyan
glow: full               # Distribution pattern
glowOpacity: 0.4         # 0-1
glowHue: 0               # Hue shift 0-360
theme: dark              # dark | light
transition: fade-out     # Slidev transition
clicks: 3                # Declare total click steps
---
```

---

## Known Issues

### Firefox: page transition flicker on last-rendered element

When using the `fade-out` page transition, Firefox may cause the last element rendered on the page (typically the final card in a group) to disappear abruptly during the transition instead of fading out smoothly with the rest of the page. This is a Firefox compositor issue related to how it handles `filter: blur()` transitions on pages containing `backdrop-filter` elements.

**Workaround**: Use Chrome or Chromium-based browsers for presentations. The issue does not affect the deployed/exported static build when viewed in Firefox — it only manifests during live Slidev dev-server navigation.

**Status**: Upstream browser behavior. The same transition CSS works correctly in Chrome, Edge, and Safari.

---

## License

MIT
