# Page Patterns — Composition Recipes

Each recipe shows how to combine components into a complete slide. Copy the code block, modify the content, and you have a production-ready page.

---

## Pattern: "Roadmap" Page

Shows a progression from left to right — ideal for product roadmaps, evolution paths, or spectrums.

```md
---
glowSeed: 200
glow: center
clicks: 9
---

# Product Roadmap

<RouteProgressionLane
  :steps="[
    { icon: 'i-carbon:explore', title: 'Discovery', subtitle: 'Q1 2025', tone: 'teal' },
    { icon: 'i-carbon:code', title: 'Development', subtitle: 'Q2 2025', tone: 'sky' },
    { icon: 'i-carbon:rocket', title: 'Beta Launch', subtitle: 'Q3 2025', tone: 'violet' },
    { icon: 'i-carbon:earth', title: 'GA Release', subtitle: 'Q4 2025', tone: 'cyan' },
    { icon: 'i-carbon:growth', title: 'Scale', subtitle: '2026', tone: 'orange' },
  ]"
/>
```

**Clicks required**: `steps.length * 2 - 1` (cards + connectors alternate)

---

## Pattern: "Feature Showcase" Page

Grid of features with icons — the bread-and-butter of technical talks.

```md
---
glowSeed: 150
clicks: 6
---

# Key Features

<FeatureIconGrid
  :columns="3"
  :items="[
    { icon: 'i-carbon:lightning', title: 'Blazing Fast', description: 'Sub-millisecond response times', tone: 'amber' },
    { icon: 'i-carbon:security', title: 'Secure by Default', description: 'Zero-trust architecture', tone: 'teal' },
    { icon: 'i-carbon:scale', title: 'Auto-Scaling', description: 'Handles 10M+ requests', tone: 'violet' },
    { icon: 'i-carbon:api', title: 'API-First', description: 'OpenAPI 3.1 compliant', tone: 'sky' },
    { icon: 'i-carbon:cloud', title: 'Multi-Cloud', description: 'AWS, GCP, Azure ready', tone: 'cyan' },
    { icon: 'i-carbon:code', title: 'Developer-Friendly', description: 'SDKs for 12 languages', tone: 'emerald' },
  ]"
/>
```

**Clicks required**: `items.length`

---

## Pattern: "Architecture Deep-Dive" Page

Hub-spoke diagram showing how components connect.

```md
---
layout: page-wide
glowSeed: 300
clicks: 5
---

# System Architecture

<FlowDiagram
  height="400px"
  :nodes="[
    { id: 'gateway', click: 1, x: 350, y: 160, width: 200, height: 90, title: 'API Gateway', subtitle: 'Authentication & routing', icon: 'i-carbon:api', className: 'tone-sky' },
    { id: 'auth', click: 2, x: 50, y: 60, width: 180, height: 70, title: 'Auth Service', subtitle: 'JWT validation', icon: 'i-carbon:locked', className: 'tone-violet' },
    { id: 'users', click: 3, x: 50, y: 260, width: 180, height: 70, title: 'User Service', subtitle: 'CRUD operations', icon: 'i-carbon:user', className: 'tone-teal' },
    { id: 'db', click: 4, x: 650, y: 60, width: 180, height: 70, title: 'PostgreSQL', subtitle: 'Primary store', icon: 'i-carbon:data-base', className: 'tone-cyan' },
    { id: 'cache', click: 5, x: 650, y: 260, width: 180, height: 70, title: 'Redis', subtitle: 'Cache layer', icon: 'i-carbon:flash', className: 'tone-amber' },
  ]"
  :edges="[
    { id: 'e1', from: 'auth', to: 'gateway', click: 2, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.3 } },
    { id: 'e2', from: 'users', to: 'gateway', click: 3, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.7 } },
    { id: 'e3', from: 'gateway', to: 'db', click: 4, fromAnchor: { x: 1, y: 0.3 }, toAnchor: { x: 0, y: 0.5 } },
    { id: 'e4', from: 'gateway', to: 'cache', click: 5, fromAnchor: { x: 1, y: 0.7 }, toAnchor: { x: 0, y: 0.5 } },
  ]"
/>
```

**Clicks required**: max of all node/edge click values

---

## Pattern: "Problem Analysis" Page

Classified problems with insights — great for post-mortems or design rationale.

```md
---
glowSeed: 250
clicks: 4
---

# Why We Chose This Architecture

<ReasonLessonGrid
  :reasons="[
    { icon: 'i-carbon:warning', title: 'Monolith Scaling', body: 'Single deployment blocked independent team velocity', tone: 'violet', tags: ['scaling', 'dx'] },
    { icon: 'i-carbon:time', title: 'Deploy Coupling', body: 'One broken test blocked all 12 services from shipping', tone: 'blue' },
  ]"
  :lessons="[
    { icon: 'i-carbon:checkmark', title: 'Service Boundaries', description: 'Align services with team ownership domains', tone: 'teal' },
    { icon: 'i-carbon:flow', title: 'Async Events', description: 'Decouple via event bus at natural boundaries', tone: 'sky' },
  ]"
/>
```

**Clicks required**: `reasons.length + lessons.length`

---

## Pattern: "System Layers" Page

Hierarchical architecture layers — ideal for agent architecture or platform tiers.

```md
---
glowSeed: 280
clicks: 4
---

# Agent Architecture

<LayeredArchView
  :columns="4"
  :layers="[
    { icon: 'i-carbon:cognitive', title: 'Goal Planning', description: 'Decomposes high-level objectives into subtasks', tone: 'violet' },
    { icon: 'i-carbon:view', title: 'Perception', description: 'Observes environment state and events', tone: 'sky' },
    { icon: 'i-carbon:decision-tree', title: 'Decision Engine', description: 'Selects optimal action from policy', tone: 'rose' },
    { icon: 'i-carbon:terminal', title: 'Execution', description: 'Invokes tools and APIs', tone: 'teal' },
  ]"
/>
```

**Clicks required**: `layers.length`

---

## Pattern: "Pipeline Process" Page

Linear process with nodes connected by animated arrows.

```md
---
glowSeed: 180
clicks: 5
---

# Data Processing Pipeline

<StackedFlowPipeline
  variant="pipeline"
  :nodes="[
    { icon: 'i-carbon:document', title: 'Ingest', subtitle: 'Raw data input', tone: 'sky' },
    { icon: 'i-carbon:clean', title: 'Transform', subtitle: 'Normalize & validate', tone: 'violet' },
    { icon: 'i-carbon:model-alt', title: 'Enrich', subtitle: 'ML inference', tone: 'teal' },
  ]"
/>
```

**Clicks required**: `nodes.length * 2 - 1` (pipeline variant)

---

## Pattern: "Tech Demo" Page

Terminal output + orbital visualization of tool interactions.

```md
---
layout: page-wide
glowSeed: 320
clicks: 4
---

# How the Agent Works

<TerminalOrbitDemo
  :terminalLines="[
    { title: '> plan(goal)', body: 'Decomposing: deploy service to staging', tone: 'violet', click: 1 },
    { title: '> tool.call(kubectl)', body: 'Applied: deployment/api-v2 (3 replicas)', tone: 'cyan', click: 2 },
    { title: '> verify(health)', body: '✓ All pods healthy, latency p99 < 50ms', tone: 'teal', click: 3 },
    { title: '> complete()', body: 'Goal achieved. Deployment successful.', tone: 'amber', click: 4 },
  ]"
  :orbitSteps="[
    { icon: 'i-carbon:cognitive', label: 'Planner', tone: 'violet', angle: 0, click: 1 },
    { icon: 'i-carbon:terminal', label: 'Tools', tone: 'cyan', angle: 90, click: 2 },
    { icon: 'i-carbon:checkmark', label: 'Verify', tone: 'teal', angle: 180, click: 3 },
    { icon: 'i-carbon:task-complete', label: 'Done', tone: 'amber', angle: 270, click: 4 },
  ]"
/>
```

**Clicks required**: max of all `click` values

---

## Pattern: "Video Keynote Intro" Page

Full-screen video with overlaid heading — great for openers or demo introductions.

```md
---
layout: page-wide
glowSeed: 100
---

<FadeVideoSlide src="/hero-demo.mp4" poster="/hero-poster.jpg">
  <template #overlay>
    <h1 class="text-4xl font-bold">Welcome to the Future</h1>
    <p class="text-lg opacity-70 mt-3">A live demonstration of what's possible</p>
  </template>
</FadeVideoSlide>
```

**Clicks required**: 0 (static page)

---

## Pattern: "Banner + Facts" Page

Product or game showcase with image + key facts sidebar.

```md
---
glowSeed: 260
clicks: 4
---

# Kubernetes Platform

<BannerSplitLayout
  title="Enterprise Platform"
  subtitle="Production-ready infrastructure"
  :facts="[
    { icon: 'i-carbon:cube', text: '500+ clusters managed' },
    { icon: 'i-carbon:time', text: '99.99% uptime SLA' },
    { icon: 'i-carbon:group', text: 'Used by 200+ teams' },
  ]"
>
  <template #media>
    <img src="/platform-dashboard.png" class="rounded-xl shadow-2xl" />
  </template>
</BannerSplitLayout>
```

**Clicks required**: `facts.length + 1`

---

## Pattern: "Key Insight" Page

Simple page highlighting one critical learning with a prominent callout.

```md
---
glowSeed: 170
---

# What We Learned

<LearningCallout icon="i-carbon:idea" tone="teal">
  <strong class="text-lg">Simplicity Always Wins</strong>
  <p class="mt-2 text-sm opacity-70 leading-relaxed">
    After 6 months of optimizing the complex path, we discovered that
    removing 3 layers of abstraction gave us better performance than
    all our optimization work combined.
  </p>
</LearningCallout>
```

**Clicks required**: 0 (static page)

---

## Combining Patterns

You can combine components on a single page:

```md
---
glowSeed: 400
clicks: 5
---

# Architecture Overview

<FlowDiagram ... />

<div class="mt-4">
<LearningCallout icon="i-carbon:information" tone="sky" variant="compact">
  <span class="text-sm">All services communicate via async events — no synchronous coupling.</span>
</LearningCallout>
</div>
```

---

## Pattern: "Tech Stack / Categorized List" Page

Two or more columns of icon+label items grouped by category. Ideal for ecosystem overviews, tool comparisons, or technology inventories.

```md
---
glowSeed: 350
glow: bottom
clicks: 2
---

# Python Inference Ecosystem

<span>A rich landscape of frameworks and runtimes</span>

<div mt-8 />

<CategoryIconList
  :categories="[
    { title: 'Inference Frameworks', items: [
      { icon: 'i-logos:pytorch-icon', label: 'PyTorch' },
      { icon: 'i-logos:hugging-face-icon', label: 'transformers' },
      { icon: 'i-simple-icons:nvidia', label: 'vLLM', iconColor: '#fbbf24' },
    ]},
    { title: 'Runtimes', icon: 'i-carbon:chip', items: [
      { icon: 'i-simple-icons:nvidia', label: 'Triton', iconColor: '#86efac' },
      { icon: 'i-simple-icons:onnx', label: 'ONNX Runtime', iconColor: '#60a5fa' },
      { icon: 'i-simple-icons:nvidia', label: 'TensorRT', iconColor: '#86efac' },
    ]},
  ]"
/>
```

**Clicks required**: `categories.length`

---

## Pattern: "Evaluation Criteria" Page

Left-border accent items for decision factors, pros/cons, or evaluation frameworks.

```md
---
glowSeed: 380
clicks: 4
---

# Should You Adopt This?

<div mt-6 />

<AccentBorderList :items="[
  { title: 'Business Value', description: 'How much practical benefit does this bring to your use case?', icon: 'i-carbon:growth', tone: 'green' },
  { title: 'Technical Readiness', description: 'Does your team have the skills to build and maintain this?', icon: 'i-carbon:code', tone: 'blue' },
  { title: 'Ecosystem Maturity', description: 'Are there enough community resources and documentation?', icon: 'i-carbon:community', tone: 'purple' },
  { title: 'Risk Assessment', description: 'What are the potential failure modes and mitigation strategies?', icon: 'i-carbon:warning', tone: 'red' },
]" />
```

**Clicks required**: `items.length`

---

## Pattern: "Speaker Intro / Skills" Page

Flex-wrap icon+label badges showing technologies or skills.

```md
---
glowSeed: 120
clicks: 6
---

# About Me

<div mt-8 />

<IconLabelWrap :items="[
  { icon: 'i-devicon:kubernetes', label: 'Kubernetes' },
  { icon: 'i-devicon:go', label: 'Golang' },
  { icon: 'i-logos:vue', label: 'Vue.js' },
  { icon: 'i-logos:typescript-icon', label: 'TypeScript' },
  { icon: 'i-logos:docker-icon', label: 'Docker' },
  { icon: 'i-logos:python', label: 'Python' },
]" size="lg" />
```

**Clicks required**: `items.length`

---

## Pattern: "Learning Journey" Page

Progressive steps with nested action items for onboarding or educational content.

```md
---
glowSeed: 420
clicks: 3
---

# Getting Started

<LearningPathSteps :steps="[
  { icon: 'i-carbon:user-avatar', title: 'Beginner', tone: 'blue', items: ['Read the official docs', 'Try the quickstart guide', 'Join the community Discord'] },
  { icon: 'i-carbon:code', title: 'Intermediate', tone: 'purple', items: ['Build your first plugin', 'Write integration tests', 'Contribute to open source'] },
  { icon: 'i-carbon:rocket', title: 'Production', tone: 'green', items: ['Deploy with CI/CD', 'Set up monitoring', 'Scale to multi-region'] },
]" />
```

**Clicks required**: `steps.length`

---

## Pattern: "Keynote Statement" Page

Dramatic centered reveal for impactful quotes or section transitions.

```md
---
glowSeed: 500
glow: center
clicks: 1
---

<CenteredStatement
  text="The Future is Already Here"
  subtitle="It's just not evenly distributed yet"
  icon="i-carbon:idea"
  revealStyle="scale"
/>
```

**Clicks required**: 1

---

## Frontmatter Quick Reference

Every slide should include:
```yaml
---
glowSeed: [unique number]      # Required for background variety
glow: full                     # Distribution: full|top|bottom|left|right|center
glowPreset: blue               # Color: blue|rust|cyan
glowOpacity: 0.4               # Background intensity (0-1)
clicks: [number]               # If page has progressive reveals
layout: page                   # page (padded) or page-wide (full-bleed)
transition: fade-out           # Page transition (set once in first slide)
---
```
