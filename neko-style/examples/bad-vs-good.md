# Bad vs Good — Common AI Generation Mistakes

This document shows what AI assistants do WRONG and how to fix it.

---

## Mistake 1: Bullet-heavy markdown (no components)

### ❌ BAD

```md
---
glowSeed: 100
---

# Our Features

- Fast processing
- Secure by default
- Easy to deploy
- Great documentation
- Active community
- 24/7 support
```

### ✅ GOOD

```md
---
glowSeed: 100
clicks: 3
---

# Our Features

<FeatureIconGrid :columns="3" :items="[
  { icon: 'i-carbon:lightning', title: 'Fast', description: 'Sub-ms latency', tone: 'amber' },
  { icon: 'i-carbon:security', title: 'Secure', description: 'Zero-trust by default', tone: 'teal' },
  { icon: 'i-carbon:rocket', title: 'Easy Deploy', description: 'One-click setup', tone: 'violet' },
]" />
```

**Why**: Components provide visual structure, progressive disclosure, and consistent styling. Bullets are text walls.

---

## Mistake 2: Bright light-mode cards on dark background

### ❌ BAD

```html
<div class="bg-sky-50 border border-sky-200 rounded-lg p-4">
  <h3 class="text-slate-700 font-bold">Feature</h3>
  <p class="text-slate-600">Description text here</p>
</div>
```

### ✅ GOOD

```html
<div border="2 solid sky-800" bg="sky-800/20" rounded-lg overflow-hidden>
  <div bg="sky-800/40" px-4 py-2 font-bold>Feature</div>
  <div px-4 py-3>Description text here</div>
</div>
```

**Why**: The theme is dark-mode. Light backgrounds (`bg-*-50`, `bg-slate-100`) create bright rectangles that clash with the glow. Use `*-800/20` transparent dark tones.

---

## Mistake 3: Free-form HTML divs instead of layouts

### ❌ BAD

```md
---
glowSeed: 200
---

# Comparison

<div class="grid grid-cols-2 gap-4">
  <div>
    <h3>Before</h3>
    <ul>
      <li>Slow</li>
      <li>Unreliable</li>
    </ul>
  </div>
  <div>
    <h3>After</h3>
    <ul>
      <li>Fast</li>
      <li>Reliable</li>
    </ul>
  </div>
</div>
```

### ✅ GOOD

```md
---
layout: compare
glowSeed: 200
---

::left-title::
Before

::left::
<AccentBorderList :items="[
  { title: 'Slow', description: '2 hour deploys', tone: 'red' },
  { title: 'Unreliable', description: '3 incidents/week', tone: 'red' },
]" />

::right-title::
After

::right::
<AccentBorderList :items="[
  { title: 'Fast', description: '3 minute deploys', tone: 'green' },
  { title: 'Reliable', description: '99.99% uptime', tone: 'green' },
]" />
```

**Why**: The `compare` layout provides consistent column structure. Components provide semantic colors and progressive reveal.

---

## Mistake 4: No animations (static walls of content)

### ❌ BAD

```md
---
glowSeed: 300
---

# Architecture

All three layers visible immediately — overwhelming for the audience.

<LayeredArchView :layers="[...]" />
```

### ✅ GOOD

```md
---
glowSeed: 300
clicks: 3
---

# Architecture

Each layer appears on click — guides attention.

<LayeredArchView :layers="[
  { icon: 'i-carbon:terminal', title: 'Execution', tone: 'teal' },
  { icon: 'i-carbon:decision-tree', title: 'Decision', tone: 'sky' },
  { icon: 'i-carbon:cognitive', title: 'Planning', tone: 'violet' },
]" />
```

**Why**: Components have built-in `$clicks`-based progressive disclosure. Set `clicks:` in frontmatter to match the component's required count, and items reveal one by one.

---

## Mistake 5: Too much content per slide

### ❌ BAD

```md
# Everything About Our Platform

We built a revolutionary platform that handles authentication,
authorization, data storage, caching, message queuing, real-time
notifications, analytics, monitoring, logging, and deployment.

Here's how each feature works:
- Auth: JWT tokens with refresh...
- Storage: PostgreSQL with read replicas...
- Cache: Redis cluster with sentinel...
[continues for 20 more bullets]
```

### ✅ GOOD

Split into multiple slides, each with ONE idea:

```md
---
layout: statement
glowSeed: 300
---

::kicker::
Platform Overview

# One platform, six capabilities

::subtitle::
Each designed to scale independently
```

Then follow with a `FeatureIconGrid` slide showing the 6 capabilities.

**Why**: One idea per slide. Max 3 bullets. If you need more, use another slide.

---

## Quick Rules

1. **Never plain bullet lists** → Use a component
2. **Never `bg-*-50`** → Use `*-800/20` dark tones
3. **Never free-form `<div>` grids** → Use a layout or component
4. **Never show everything at once** → Set `clicks:` for progressive reveal
5. **Never >3 bullets per slide** → Split into multiple slides
6. **Never skip `glowSeed`** → Every page needs a unique seed
