---
layout: cover
glowSeed: 100
glowPreset: blue
transition: fade-out
---

# Building a Scalable Event Pipeline

## From monolith to real-time streaming in 6 months

---
layout: section
glowSeed: 120
sectionNumber: 1
sectionTitle: "The Problem"
sectionSubtitle: "Why our monolith couldn't keep up"
---

---
glowSeed: 150
clicks: 6
---

# Legacy Architecture Pain Points

<ProblemSolutionSplit
  :problems="[
    { icon: 'i-carbon:warning-alt', text: 'Single database bottleneck at 10K events/sec' },
    { icon: 'i-carbon:warning-alt', text: 'Deploy coupling — one failure blocks all teams' },
    { icon: 'i-carbon:warning-alt', text: '45-minute cold start after incidents' },
  ]"
  :solutions="[
    { icon: 'i-carbon:checkmark', text: 'Distributed event store handles 500K events/sec' },
    { icon: 'i-carbon:checkmark', text: 'Independent service deploys with circuit breakers' },
    { icon: 'i-carbon:checkmark', text: 'Sub-second recovery with event replay' },
  ]"
/>

---
layout: statement
glowSeed: 180
glow: center
---

::kicker::
Core Insight

# Events are facts, not requests

::subtitle::
Once you stop treating messages as commands and start treating them as immutable facts, everything changes.

---
layout: section
glowSeed: 200
sectionNumber: 2
sectionTitle: "Architecture"
sectionSubtitle: "How we designed the new system"
---

---
layout: page-wide
glowSeed: 250
clicks: 5
---

# System Architecture

<FlowDiagram
  height="380px"
  :nodes="[
    { id: 'gateway', click: 1, x: 50, y: 150, width: 160, height: 80, title: 'API Gateway', subtitle: 'Auth & routing', icon: 'i-carbon:api', className: 'tone-sky' },
    { id: 'broker', click: 2, x: 320, y: 150, width: 180, height: 80, title: 'Event Broker', subtitle: 'Kafka cluster', icon: 'i-carbon:data-volume', className: 'tone-violet' },
    { id: 'processor', click: 3, x: 600, y: 60, width: 180, height: 70, title: 'Stream Processor', subtitle: 'Flink jobs', icon: 'i-carbon:flow', className: 'tone-teal' },
    { id: 'store', click: 4, x: 600, y: 240, width: 180, height: 70, title: 'Event Store', subtitle: 'ClickHouse', icon: 'i-carbon:data-base', className: 'tone-cyan' },
    { id: 'api', click: 5, x: 880, y: 150, width: 160, height: 80, title: 'Query API', subtitle: 'GraphQL', icon: 'i-carbon:terminal', className: 'tone-amber' },
  ]"
  :edges="[
    { id: 'e1', from: 'gateway', to: 'broker', click: 2, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.5 } },
    { id: 'e2', from: 'broker', to: 'processor', click: 3, fromAnchor: { x: 1, y: 0.3 }, toAnchor: { x: 0, y: 0.5 } },
    { id: 'e3', from: 'broker', to: 'store', click: 4, fromAnchor: { x: 1, y: 0.7 }, toAnchor: { x: 0, y: 0.5 } },
    { id: 'e4', from: 'processor', to: 'api', click: 5, fromAnchor: { x: 1, y: 0.5 }, toAnchor: { x: 0, y: 0.3 } },
  ]"
/>

---
glowSeed: 300
clicks: 2
---

# Technology Choices

<CategoryIconList :categories="[
  { title: 'Streaming', items: [
    { icon: 'i-logos:kafka-icon', label: 'Apache Kafka' },
    { icon: 'i-logos:apache-flink', label: 'Apache Flink' },
    { icon: 'i-simple-icons:clickhouse', label: 'ClickHouse', iconColor: '#ffcc00' },
  ]},
  { title: 'Infrastructure', icon: 'i-carbon:cloud', items: [
    { icon: 'i-logos:kubernetes', label: 'Kubernetes' },
    { icon: 'i-logos:docker-icon', label: 'Docker' },
    { icon: 'i-logos:terraform-icon', label: 'Terraform' },
  ]},
]" />

---
layout: section
glowSeed: 320
sectionNumber: 3
sectionTitle: "Results"
sectionSubtitle: "What we achieved"
---

---
glowSeed: 350
clicks: 4
---

# Performance Improvements

<FeatureIconGrid :columns="4" :items="[
  { icon: 'i-carbon:lightning', title: '50×', description: 'Throughput increase', tone: 'amber' },
  { icon: 'i-carbon:time', title: '<1s', description: 'Recovery time', tone: 'teal' },
  { icon: 'i-carbon:scale', title: '99.99%', description: 'Uptime SLA', tone: 'violet' },
  { icon: 'i-carbon:money', title: '40%', description: 'Cost reduction', tone: 'cyan' },
]" />

---
glowSeed: 400
glow: center
clicks: 7
---

# Migration Roadmap

<RouteProgressionLane :steps="[
  { icon: 'i-carbon:explore', title: 'Discovery', subtitle: 'Q1', tone: 'teal' },
  { icon: 'i-carbon:code', title: 'Build', subtitle: 'Q2', tone: 'sky' },
  { icon: 'i-carbon:rocket', title: 'Migrate', subtitle: 'Q3', tone: 'violet' },
  { icon: 'i-carbon:earth', title: 'Scale', subtitle: 'Q4', tone: 'cyan' },
]" />

---
layout: end
glowSeed: 450
glow: center
---

# Thank You

Questions? Find me at @speaker on Twitter
