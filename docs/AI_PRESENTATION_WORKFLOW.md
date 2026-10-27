# AI-Assisted Slidev Presentation Workflow

This document establishes the end-to-end design and generation workflow for creating conference-grade technical presentations using AI coding agents (Claude Code, Cursor, OMP, ChatGPT) with the `neko-style` Slidev ecosystem.

---

## 1. The Core Philosophy: Contract-First Slide Generation

Traditional AI slide generators produce unstructured, generic bullet-point lists wrapped in raw HTML `<div>` tags. In the `neko-style` ecosystem, presentations are treated as **declarative software**:
- Every slide maps to an exact architectural job (Hook, Tension, Mechanism, Paradigm Shift, Empirical Proof).
- Every component is battle-tested for 16:9 high-DPI projection and hardware-accelerated transitions.
- Raw HTML container styles (`bg-white`, `border-gray-200`) are strictly forbidden; components handle glassmorphism, semantic accents, and click-step sequencing automatically.

---

## 2. Standard 7-Phase Narrative Arc

For a 10–15 slide technical conference or design review talk, follow this structured narrative arc:

```text
[1. The Hook]        cover / SpotlightQuestion / WorksOnMyMachineHero
       │
       ▼
[2. The Tension]     ProblemSolutionSplit / LifecycleChallengesThreeCol
       │
       ▼
[3. The Pivot]       headline / CenteredStatement (The Core Claim)
       │
       ▼
[4. The Mechanism]   split / StackedFlowPipeline / FlowDiagram / ArtifactExplainBoard
       │
       ▼
[5. Paradigm Shift]  ComparisonMatrix (Traditional vs Modern / AI-Native)
       │
       ▼
[6. Empirical Proof] metrics / MetricsGrid (Latency, Throughput, Benchmarks)
       │
       ▼
[7. The Horizon]     timeline / RouteProgressionLane / ThankYouSplitPanel
```

---

## 3. Ready-to-Use Agent System Prompt

When prompting an LLM or subagent to draft an entire deck, provide the following prompt context:

```markdown
You are a principal engineer and conference presentation designer. You design technical slide decks using Slidev with the `neko-style` theme.

### Inviolable Rules:
1. THEME IDENTITY: The first slide frontmatter MUST declare `theme: neko-style`. Pick ONE `glowPreset` (`blue` | `rust` | `cyan`) for the entire deck. Every slide MUST have a unique `glowSeed: <integer>`.
2. ZERO PLAIN DIVS: Never generate plain card containers with raw CSS like `bg-white` or `bg-slate-100`. Always choose matching components from the component catalog (`MetricsGrid`, `ComparisonMatrix`, `ProblemSolutionSplit`, `StackedFlowPipeline`, `PatternCardGrid`).
3. HARDWARE COMPOSITING: Never use Vue `<Transition>` tags for slide clicks. Use `$clicks`-based class-toggles with `transition duration-500 ease-in-out`.
4. DUAL-LANGUAGE TYPOGRAPHY: For tech talks, combine crisp English technical terminology with concise, legible explanation subtext.
```

---

## 4. Key Component Recipes

### 4.1 Executive Benchmarks (`MetricsGrid`)
```markdown
---
layout: metrics
glowSeed: 500
clicks: 3
---

::title::
# Measured Production Impact

::lead::
Measured across 4,000 automated pipeline runs comparing baseline vs agentic execution.

<MetricsGrid
  :columns="3"
  :items="[
    { value: '10x', label: 'Concurrent Capacity', trend: '+900%', trendTone: 'up', tone: 'sky', subtext: 'Deterministic isolated worker pools' },
    { value: '45ms', label: 'Tool Dispatch', trend: '-65%', trendTone: 'up', tone: 'emerald', subtext: 'Direct memory-mapped IPC' },
    { value: '99.9%', label: 'Delivery Integrity', trend: 'Audit Green', trendTone: 'neutral', tone: 'teal', subtext: 'Evidence-backed automated gate' },
  ]"
/>
```

### 4.2 Architectural Paradigm Shift (`ComparisonMatrix`)
```markdown
---
layout: page
glowSeed: 550
clicks: 3
---

# Paradigm Comparison

<div class="mt-5">
  <ComparisonMatrix
    traditional-title="Manual / Fragile Scripts"
    modern-title="Contract-Driven Orchestration"
    :rows="[
      { dimension: 'State Management', traditional: 'Scattered shell variables & dotfiles', modern: 'Declarative git repository index', tag: 'Deterministic' },
      { dimension: 'Graphics Compositing', traditional: 'Software blur rasterization (black screens on 4K)', modern: 'GPU-accelerated singleton compositor', tag: 'Zero-Flicker' },
      { dimension: 'Authoring Velocity', traditional: 'Handcrafting divs & ad-hoc CSS', modern: 'SKILL-guided AI automated synthesis', tag: 'AI-Native' },
    ]"
  />
</div>
```

### 4.3 Narrative + Architecture Split (`split` layout)
```markdown
---
layout: split
ratio: '4:6'
glowSeed: 600
---

::left::
# The Architecture

Decoupled control plane from execution plane. The agent operates as a verified state machine with strict loop limits.

<InsightCalloutBar tone="teal" class="mt-4">
  Continuous verification replaces retrospective debugging.
</InsightCalloutBar>

::right::
```ts
import { StateMachine } from '@cpmk/runtime'

const runner = new StateMachine({
  checkpoint: 'durable',
  concurrency: 4,
})
await runner.execute()
```
```

---

## 5. Pre-Presentation Verification Checklist

Before taking the presentation to a live stage or projector:
1. **Full-Screen Scale Test**: Press `F` to enter full-screen mode on an external display (1080p/4K). Verify no black frames occur during slide transitions.
2. **Click Budget Audit**: Verify each slide's declared `clicks: <N>` matches the highest `$clicks < N` condition inside the slide.
3. **Dark Background Legibility**: Verify all text classes use `text-white`, `text-white/80`, or high-contrast accent tones; ensure no low-contrast dark gray text exists.
4. **Offline Resilience**: Verify all icons use installed packages (`@iconify-json/carbon`, `@iconify-json/logos`) and all images are local assets inside `/public`.
