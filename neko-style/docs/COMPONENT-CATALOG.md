# Component Catalog — AI Discovery Guide

This document helps AI assistants quickly find the right component for any presentation need.

## How to Use This Document

1. **Top-down**: Start with "What do I need to show?" → find component in routing table
2. **Bottom-up**: Know the component name → jump to its reference section for props and usage

---

## Component Routing Table

| I need to show... | Recommended Component | Complexity | Category |
|---|---|---|---|
| Step-by-step process (with arrows) | `StackedFlowPipeline` (variant="pipeline") | Moderate | Data Display |
| Process stages (equal columns) | `StackedFlowPipeline` (variant="stacked") | Moderate | Data Display |
| Linear flow with detail cards | `ProcessFlowGrid` | Simple | Data Display |
| Spectrum / progression / journey | `RouteProgressionLane` | Moderate | Progression |
| Categorized icon/tech stack list | `CategoryIconList` | Simple | Data Display |
| Horizontal icon+label tags/badges | `IconLabelWrap` | Simple | Data Display |
| Feature comparison grid | `FeatureIconGrid` | Simple | Data Display |
| Pattern/concept card grid | `PatternCardGrid` | Simple | Data Display |
| Hub-spoke architecture diagram | `FlowDiagram` | Complex | Architecture |
| Data flow / pipeline funnel | `EventPipeline` | Complex | Architecture |
| Tool loop / orbital model | `TerminalOrbitDemo` | Complex | Architecture |
| System layers (decision/execution) | `LayeredArchView` | Moderate | Architecture |
| Problem vs Solution (side-by-side) | `ProblemSolutionSplit` | Simple | Narrative |
| Reasons + Lessons (classified) | `ReasonLessonGrid` | Simple | Narrative |
| Key takeaway / insight callout | `LearningCallout` | Simple | Narrative |
| Highlight bar / bottom insight | `InsightCalloutBar` | Simple | Narrative |
| Dramatic question reveal | `SpotlightQuestion` | Simple | Narrative |
| Large centered statement/quote | `CenteredStatement` | Simple | Narrative |
| Left-border accent evaluation list | `AccentBorderList` | Simple | Narrative |
| Agenda / table of contents | `AgendaGrid` | Simple | Layout |
| Statistics / metrics display row | `StatsRow` | Simple | Data Display |
| Learning path / step progress | `LearningPathSteps` | Simple | Data Display |
| Code + explanation side-by-side | `CodeExplainSplit` | Simple | Layout |
| Banner image + facts sidebar | `BannerSplitLayout` | Simple | Layout |
| Full-screen video with overlay | `FadeVideoSlide` | Simple | Media |
| Video with floating overlays | `FeatureOverlayVideo` | Moderate | Media |
| Previous talks / session gallery | `SessionHoverGallery` | Moderate | Media |
| Speaker introduction | `SpeakerLineupIntro` | Simple | Speaker |
| Speaker with ecosystem logos | `SpeakerEcosystemIntro` | Simple | Speaker |
| Character/persona reveal | `FullBleedCharacterReveal` | Moderate | Speaker |
| Capabilities / feature row | `CapabilityRevealRow` | Simple | Data Display |
| Checklist with glass morphism | `GlassChecklist` | Simple | Data Display |
| Three challenges / columns | `LifecycleChallengesThreeCol` | Simple | Data Display |
| Artifact + floating callouts | `ArtifactExplainBoard` | Moderate | Data Display |
| Gallery with motion principles | `MotionPrinciplesGallery` | Moderate | Data Display |
| Thank you / closing split | `ThankYouSplitPanel` | Simple | Closing |
| Contact QR codes | `ContactQrTriplet` | Simple | Closing |
| Recruiting / job roles | `RecruitingRoleList` | Simple | Closing |
| Custom SVG icon (not in iconify) | `IconMask` | Simple | Utility |
| Glassmorphism card wrapper | `LiquidGlass` (advanced) | Complex | Advanced |
| Terminal recording playback | `AsciinemaPlayer` (advanced) | Complex | Advanced |

---

## Component Reference (Alphabetical)

### ArtifactExplainBoard

Displays a central artifact (image, diagram, code) with floating explanation callouts that appear on clicks.

```yaml
Props:
  title: string              # Optional heading
  subtitle: string           # Optional subheading
  items: ArtifactExplainItem[]  # Callout cards
  mode: 'overlay' | 'sidebar'  # Layout mode
  artifactClass: string      # Height/sizing class for artifact area
  panelClass: string         # Grid class for sidebar mode

ArtifactExplainItem:
  title: string
  description: string
  detail: string             # Optional extra detail below divider
  icon: string               # Iconify class
  eyebrow: string            # Small uppercase label
  tone: 'blue'|'green'|'purple'|'amber'|'red'|'cyan'
  positionClass: string      # Absolute position (overlay mode)
  widthClass: string         # Width override
  inactiveAfterStep: number  # Dim after this click step
```

**Usage:**
```md
<ArtifactExplainBoard
  mode="sidebar"
  :items="[
    { title: 'Step 1', description: 'First thing', icon: 'i-carbon:play', tone: 'cyan' },
    { title: 'Step 2', description: 'Second thing', icon: 'i-carbon:code', tone: 'green' },
  ]"
>
  <img src="/diagram.png" class="w-full rounded-xl" />
</ArtifactExplainBoard>
```

---

### AccentBorderList

Vertical list of items with colored left-border accent and semi-transparent background. Ideal for evaluation criteria, decision factors, or pros/cons lists.

```yaml
Props:
  items: AccentItem[]

AccentItem:
  title: string
  description: string             # Optional secondary text
  icon: string                    # Optional icon before title
  tone: 'green'|'blue'|'purple'|'red'|'amber'|'cyan'|'violet'|'indigo'  # Default: 'blue'
```

**Usage:**
```md
<AccentBorderList :items="[
  { title: 'Business Value', description: 'How much practical benefit does this bring?', icon: 'i-carbon:growth', tone: 'green' },
  { title: 'Technical Readiness', description: 'Does your team have the skills to maintain this?', icon: 'i-carbon:code', tone: 'blue' },
  { title: 'Risk Assessment', description: 'What are the potential failure modes?', icon: 'i-carbon:warning', tone: 'red' },
]" />
```

**Clicks required**: `items.length`

---

### AgendaGrid

Multi-column grid with section headers and arrow-icon bullet lists. Perfect for table of contents, agendas, or categorized item lists.

```yaml
Props:
  sections: AgendaSection[]
  columns: 2 | 3 | 4              # Default: 2

AgendaSection:
  title: string
  icon: string                     # Bullet icon (default: 'i-carbon:arrow-right')
  tone: 'violet'|'blue'|'purple'|'green'|'cyan'|'amber'|'indigo'|'rose'  # Default: 'violet'
  items: string[]                  # List of text items
```

**Usage:**
```md
<AgendaGrid :columns="2" :sections="[
  { title: 'Part 1: Basics', tone: 'violet', items: ['What is MCP?', 'Why do we need it?', 'Core concepts'] },
  { title: 'Part 2: Advanced', tone: 'blue', items: ['Custom servers', 'Security model', 'Production deployment'] },
]" />
```

**Clicks required**: `sections.length`

---

### BannerSplitLayout

Asymmetric split with title + fact list on one side, media slot on the other.

```yaml
Props:
  title: string
  subtitle: string
  mediaSide: 'left' | 'right'   # Default: 'right'
  facts: { icon: string, text: string }[]

Slots:
  #media    — image/video content
  #content  — overrides facts section
```

**Usage:**
```md
<BannerSplitLayout
  title="Product Overview"
  :facts="[
    { icon: 'i-carbon:rocket', text: '10x faster deployment' },
    { icon: 'i-carbon:security', text: 'Enterprise-grade security' },
  ]"
>
  <template #media>
    <img src="/product-screenshot.png" class="rounded-xl" />
  </template>
</BannerSplitLayout>
```

---

### CategoryIconList

Grouped columns of icon + label pairs with category headers. Perfect for tech stack listings, tool comparisons, or any categorized enumeration.

```yaml
Props:
  categories: Category[]
  columns: 2 | 3 | 4            # Default: 2
  iconSize: string               # Default: '32px'
  gap: string                    # Default: '12' (3rem)

Category:
  title: string                  # Bold category heading
  icon: string                   # Optional icon before title
  items: { icon: string, label: string, iconColor?: string }[]
```

**Usage:**
```md
<CategoryIconList
  :categories="[
    { title: 'Inference Frameworks', items: [
      { icon: 'i-logos:pytorch-icon', label: 'PyTorch' },
      { icon: 'i-logos:hugging-face-icon', label: 'transformers' },
      { icon: 'i-simple-icons:nvidia', label: 'vLLM', iconColor: '#fbbf24' },
    ]},
    { title: 'Runtimes', icon: 'i-carbon:chip', items: [
      { icon: 'i-simple-icons:onnx', label: 'ONNX Runtime', iconColor: '#60a5fa' },
      { icon: 'i-simple-icons:nvidia', label: 'TensorRT', iconColor: '#86efac' },
    ]},
  ]"
/>
```

**Clicks required**: `categories.length` (one per column reveal)

---

### CenteredStatement

Large centered text with dramatic reveal animation. For keynote moments, section transitions, or impactful quotes.

```yaml
Props:
  text: string                    # Main statement text
  subtitle: string                # Optional secondary text
  icon: string                    # Optional icon above text
  revealStyle: 'scale'|'fade'|'slide'  # Default: 'fade'
```

**Usage:**
```md
<CenteredStatement
  text="Simplicity Always Wins"
  subtitle="After 6 months of optimization, removing 3 layers gave us better results"
  icon="i-carbon:idea"
  revealStyle="scale"
/>
```

**Clicks required**: 1

---

### CodeExplainSplit

Side-by-side code block and explanation content. For walkthroughs, tutorials, or annotated code examples.

```yaml
Props:
  code: string                    # Code content
  lang: string                    # Language for styling (default: 'typescript')
  explanationSide: 'left'|'right' # Which side the explanation goes (default: 'right')

Slots:
  #explanation  — rich content explaining the code
```

**Usage:**
```md
<CodeExplainSplit code="const server = new MCPServer()\nserver.addTool('search', handler)\nserver.start()" lang="typescript">
  <template #explanation>
    <div space-y-3>
      <div><strong>Line 1:</strong> Initialize the MCP server</div>
      <div><strong>Line 2:</strong> Register a search tool</div>
      <div><strong>Line 3:</strong> Start listening for connections</div>
    </div>
  </template>
</CodeExplainSplit>
```

**Clicks required**: 1 (explanation reveals on click)

---

### EventPipeline

Multi-stage data flow visualization with token streams converging into a processing funnel.

```yaml
Props:
  stages: { id, title, subtitle?, tone, icon?, x, y }[]
  tokens: { label, x, y, delay? }[]
  height: string               # Default: '420px'
  funnelCenter: { x, y }      # Default: { x: 450, y: 210 }
```

**Usage:**
```md
<EventPipeline
  :tokens="[
    { label: 'HTTP Request', x: 100, y: 80 },
    { label: 'WebSocket', x: 120, y: 160 },
    { label: 'gRPC Call', x: 80, y: 280 },
  ]"
  :stages="[
    { id: 'parse', title: 'Parser', tone: 'cyan', icon: 'i-carbon:code', x: 550, y: 80 },
    { id: 'route', title: 'Router', tone: 'violet', icon: 'i-carbon:flow', x: 550, y: 200 },
    { id: 'exec', title: 'Executor', tone: 'teal', icon: 'i-carbon:lightning', x: 550, y: 320 },
  ]"
/>
```

---

### FadeVideoSlide

Full-bleed video background with glassmorphic blur overlay for headings.

```yaml
Props:
  src: string     # Video URL (required)
  poster: string  # Poster image URL

Slots:
  #overlay — heading content positioned top-left with blur backdrop
```

**Usage:**
```md
<FadeVideoSlide src="/demo.mp4">
  <template #overlay>
    <h2 class="text-3xl font-bold">Live Demo</h2>
    <p class="text-sm opacity-70 mt-2">Real-time processing</p>
  </template>
</FadeVideoSlide>
```

---

### FeatureIconGrid

Grid of icon + title + description cards. The most versatile component for showcasing features, capabilities, or concepts.

```yaml
Props:
  items: { icon, title, description?, tone? }[]
  columns: 2 | 3 | 4 | 5    # Default: 3

Tones: sky, teal, violet, cyan, rose, amber, lime, emerald
```

**Usage:**
```md
<FeatureIconGrid
  :columns="3"
  :items="[
    { icon: 'i-carbon:lightning', title: 'Fast', description: '10x speed improvement', tone: 'amber' },
    { icon: 'i-carbon:security', title: 'Secure', description: 'Enterprise-grade', tone: 'teal' },
    { icon: 'i-carbon:scale', title: 'Scalable', description: 'Auto-scaling built in', tone: 'violet' },
  ]"
/>
```

---

### FlowDiagram

Free-form node-edge diagram with SVG cubic bezier paths. Users provide explicit positions.

```yaml
Props:
  nodes: FlowNode[]    # Positioned cards
  edges: FlowEdge[]    # Bezier connections
  height: string       # Default: '420px'
  viewBox: string      # Default: '0 0 900 420'

FlowNode: { id, click, x, y, width, height, title, subtitle?, icon, iconClass?, tag?, className? }
FlowEdge: { id, from, to, click, bend?, lift?, fromAnchor?, toAnchor? }
```

**Usage:**
```md
<FlowDiagram
  :nodes="[
    { id: 'api', click: 1, x: 50, y: 170, width: 200, height: 80, title: 'API Gateway', subtitle: 'Routes requests', icon: 'i-carbon:api' },
    { id: 'svc', click: 2, x: 350, y: 170, width: 200, height: 80, title: 'Service', subtitle: 'Business logic', icon: 'i-carbon:application' },
    { id: 'db', click: 3, x: 650, y: 170, width: 200, height: 80, title: 'Database', subtitle: 'Persistence', icon: 'i-carbon:data-base' },
  ]"
  :edges="[
    { id: 'e1', from: 'api', to: 'svc', click: 2, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.5 } },
    { id: 'e2', from: 'svc', to: 'db', click: 3, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.5 } },
  ]"
/>
```

---

### IconMask

CSS mask-based icon for custom SVG files not available in iconify collections.

```yaml
Props:
  src: string           # SVG/image URL (required)
  size: string|number   # Default: '1em'
  label: string         # Accessibility label
```

**Usage:**
```md
<IconMask src="/icons/custom-logo.svg" size="48px" label="Company Logo" />
```

---

### IconLabelWrap

Horizontal flex-wrap flow of icon+label pairs. For technology tags, skill badges, or any enumeration that should wrap naturally across the available width.

```yaml
Props:
  items: { icon: string, label: string, iconColor?: string }[]
  size: 'sm'|'md'|'lg'           # Default: 'md' (sm=text-lg, md=text-2xl, lg=text-3xl)
  gap: string                     # Default: '4' (1rem)
```

**Usage:**
```md
<IconLabelWrap :items="[
  { icon: 'i-devicon:kubernetes', label: 'Kubernetes' },
  { icon: 'i-devicon:go', label: 'Golang' },
  { icon: 'i-logos:vue', label: 'Vue' },
  { icon: 'i-logos:typescript-icon', label: 'TypeScript' },
  { icon: 'i-logos:docker-icon', label: 'Docker' },
]" />
```

**Clicks required**: `items.length` (each item appears sequentially)

---

### LayeredArchView

Vertical stack showing hierarchical system layers (e.g., agent architecture tiers).

```yaml
Props:
  layers: { icon, iconClass?, title, description?, tone? }[]
  columns: 3 | 4 | 5    # Default: 4

Tones: violet, sky, rose, teal, amber, cyan
```

**Usage:**
```md
<LayeredArchView
  :columns="4"
  :layers="[
    { icon: 'i-carbon:cognitive', title: 'Planning', description: 'Goal decomposition', tone: 'violet' },
    { icon: 'i-carbon:view', title: 'Perception', description: 'Environment sensing', tone: 'sky' },
    { icon: 'i-carbon:decision-tree', title: 'Decision', description: 'Action selection', tone: 'rose' },
    { icon: 'i-carbon:play', title: 'Execution', description: 'Tool invocation', tone: 'teal' },
  ]"
/>
```

---

### LearningCallout

Compact callout card for key takeaways or insight moments.

```yaml
Props:
  icon: string            # Default: 'i-carbon:idea'
  tone: string            # Default: 'sky'
  variant: 'default' | 'compact' | 'note'

Slot: default — card content
```

**Usage:**
```md
<LearningCallout icon="i-carbon:lightbulb" tone="teal">
  <strong>Key Insight</strong>
  <p class="mt-1 text-sm opacity-70">The critical learning from this approach...</p>
</LearningCallout>
```

---

### LearningPathSteps

Vertical progressive steps with nested ordered/unordered lists inside. For learning paths, onboarding guides, or multi-stage roadmaps.

```yaml
Props:
  steps: PathStep[]
  ordered: boolean                # Default: true (numbered lists)

PathStep:
  icon: string
  title: string
  tone: 'blue'|'purple'|'green'|'amber'|'cyan'|'violet'|'rose'|'indigo'  # Default: 'blue'
  items: string[]                 # List items inside the step
```

**Usage:**
```md
<LearningPathSteps :steps="[
  { icon: 'i-carbon:user-avatar', title: 'Getting Started', tone: 'blue', items: ['Read official docs', 'Try existing examples', 'Set up dev environment'] },
  { icon: 'i-carbon:code', title: 'Intermediate', tone: 'purple', items: ['Build your first server', 'Add custom tools', 'Write integration tests'] },
  { icon: 'i-carbon:rocket', title: 'Production', tone: 'green', items: ['Deploy to cloud', 'Monitor and observe', 'Scale horizontally'] },
]" />
```

**Clicks required**: `steps.length`

---

### ReasonLessonGrid

Two-column layout with classified content: reasons/problems on one side, lessons/insights on the other.

```yaml
Props:
  reasons: { icon?, title, body, tags?[], tone? }[]
  lessons: { icon?, title, description, tone? }[]
  columns: 1 | 2    # Default: 2

Reason tones: violet, blue, cyan
Lesson tones: teal, sky, amber, rose
```

**Usage:**
```md
<ReasonLessonGrid
  :reasons="[
    { icon: 'i-carbon:warning', title: 'Complexity', body: 'System grew beyond team capacity', tone: 'violet' },
    { icon: 'i-carbon:time', title: 'Latency', body: 'Cross-service calls added 200ms', tone: 'blue' },
  ]"
  :lessons="[
    { icon: 'i-carbon:checkmark', title: 'Simplify First', description: 'Reduce before optimizing', tone: 'teal' },
    { icon: 'i-carbon:flow', title: 'Async Boundaries', description: 'Decouple at natural seams', tone: 'sky' },
  ]"
/>
```

---

### RouteProgressionLane

Horizontal stepped progression with animated connectors. Ideal for journeys, spectrums, or evolution paths.

```yaml
Props:
  steps: { icon, iconClass?, title, subtitle?, tone? }[]
  connectorVariant: 'arrow' | 'hard'    # Default: 'arrow'

Tones: teal, sky, violet, cyan, orange
```

**Usage:**
```md
<RouteProgressionLane
  :steps="[
    { icon: 'i-carbon:document', title: 'Research', subtitle: 'Explore options', tone: 'teal' },
    { icon: 'i-carbon:code', title: 'Prototype', subtitle: 'Build MVP', tone: 'sky' },
    { icon: 'i-carbon:rocket', title: 'Launch', subtitle: 'Ship to users', tone: 'violet' },
  ]"
/>
```

---

### StackedFlowPipeline

Step-by-step process visualization. Two variants: "pipeline" (nodes + arrows) or "stacked" (equal columns).

```yaml
Props:
  nodes: { icon, iconClass?, title, subtitle?, tone? }[]
  tall: boolean           # Taller cards (pipeline variant)
  variant: 'pipeline' | 'stacked'    # Default: 'pipeline'

Tones: sky, teal, violet, cyan, rose, amber
```

**Usage (pipeline):**
```md
<StackedFlowPipeline
  variant="pipeline"
  :nodes="[
    { icon: 'i-carbon:document', title: 'Input', tone: 'sky' },
    { icon: 'i-carbon:model-alt', title: 'Process', tone: 'violet' },
    { icon: 'i-carbon:chart-line', title: 'Output', tone: 'teal' },
  ]"
/>
```

**Usage (stacked):**
```md
<StackedFlowPipeline
  variant="stacked"
  :nodes="[
    { icon: 'i-carbon:api', title: 'API Layer', subtitle: 'HTTP/gRPC endpoints', tone: 'sky' },
    { icon: 'i-carbon:application', title: 'Service', subtitle: 'Business logic', tone: 'violet' },
    { icon: 'i-carbon:data-base', title: 'Storage', subtitle: 'PostgreSQL + Redis', tone: 'teal' },
    { icon: 'i-carbon:cloud', title: 'Infra', subtitle: 'Kubernetes cluster', tone: 'cyan' },
  ]"
/>
```

---

### StatsRow

Horizontal row of icon + value + label metrics. For subscriber counts, performance numbers, or any compact statistics display.

```yaml
Props:
  stats: StatItem[]
  variant: 'pill'|'bare'          # Default: 'bare' ('pill' adds background)

StatItem:
  icon: string
  value: string                   # The metric number/text
  label: string                   # Optional small label below value
  iconColor: string               # Optional color override
```

**Usage:**
```md
<StatsRow variant="pill" :stats="[
  { icon: 'i-logos:youtube-icon', value: '636K', label: 'subscribers' },
  { icon: 'i-logos:twitch', value: '789K', label: 'followers' },
  { icon: 'i-simple-icons:bilibili', value: '758K', label: 'fans', iconColor: '#00a1d6' },
]" />
```

**Clicks required**: `stats.length`

---

### TerminalOrbitDemo

Split-pane: terminal output on left, orbital/circular diagram on right. Great for tool demonstrations.

```yaml
Props:
  terminalLines: { title, body, tone?, click }[]
  orbitSteps: { icon, label, subtitle?, tone, angle, click }[]
  orbitRadius: { x, y }     # Default: { x: 160, y: 80 }
  orbitCenter: { x, y }     # Default: { x: 200, y: 140 }
  height: string            # Default: '380px'
```

**Usage:**
```md
<TerminalOrbitDemo
  :terminalLines="[
    { title: '$ kubectl apply', body: 'deployment.apps/api created', tone: 'cyan', click: 1 },
    { title: '$ curl /health', body: '200 OK {\"status\":\"healthy\"}', tone: 'teal', click: 2 },
  ]"
  :orbitSteps="[
    { icon: 'i-carbon:kubernetes', label: 'K8s', tone: 'sky', angle: 0, click: 1 },
    { icon: 'i-carbon:api', label: 'API', tone: 'teal', angle: 120, click: 2 },
    { icon: 'i-carbon:data-base', label: 'DB', tone: 'violet', angle: 240, click: 3 },
  ]"
/>
```

---

## Complexity Guide

**Simple** (drop-in, no SVG, immediate use):
- FeatureIconGrid, LearningCallout, PatternCardGrid, GlassChecklist, InsightCalloutBar, FadeVideoSlide, IconMask

**Moderate** (CSS animation, class-toggle, some configuration):
- RouteProgressionLane, StackedFlowPipeline, LayeredArchView, ReasonLessonGrid, BannerSplitLayout, ArtifactExplainBoard

**Complex** (SVG geometry, computed paths, more setup):
- FlowDiagram, EventPipeline, TerminalOrbitDemo, LiquidGlass (advanced)

---

## Tone Color Reference

| Tone | Hex | Use for |
|------|-----|---------|
| sky | #7dd3fc | Information, APIs, neutral tech |
| teal | #5eead4 | Success, tools, utilities |
| violet | #c4b5fd | Advanced concepts, AI/ML |
| cyan | #67e8f9 | Specialized tech, networks |
| rose | #fda4af | Problems, warnings |
| amber | #fcd34d | Performance, speed |
| lime | #bef264 | Growth, solutions |
| emerald | #6ee7b7 | Success, completion |
