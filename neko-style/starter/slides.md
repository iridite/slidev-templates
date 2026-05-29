---
theme: neko-style
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'Project Aurora: Rethinking Developer Workflows' # TODO: replace with your presentation title
lineNumbers: false
drawings:
  persist: false
mdc: true
glowSeed: 42
glowPreset: blue
clicks: 2
---

<div px-14>

<!-- TODO: replace title, subtitle, speaker name, and year below -->
<h1
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'"
  text-5xl font-bold transition duration-1200 ease-in-out
>Project Aurora</h1>

<p
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'"
  text-xl opacity-85 transition duration-800 ease-in-out delay-200
>Rethinking Developer Workflows for the AI Era</p>

<div
  v-click="2"
  :class="$clicks < 2 ? 'opacity-0 translate-y-3' : 'opacity-80 translate-y-0'"
  mt-8 flex items-center gap-4 text-lg transition duration-500 ease-in-out
>
  <div i-carbon:user-avatar></div>
  <span>Your Name / Your Team</span>
  <span opacity-50>·</span>
  <span>2026</span>
</div>

</div>

<!--
Welcome everyone! Today I'll introduce Project Aurora — our approach to rethinking how developer workflows can evolve alongside AI tooling.

Feel free to replace all content in this starter with your own presentation material.
-->

---
layout: intro
class: px-35
glowSeed: 128
---

<div flex items-center gap-3>
  <div
    v-click="1"
    :class="$clicks < 1 ? 'translate-x--5 opacity-0 blur-sm scale-95' : 'translate-x-0 opacity-100 blur-0 scale-100'"
    flex flex-col items-start transition duration-500 ease-in-out min-w-60
  >
    <div w-40 h-40 rounded-full class="bg-gradient-to-br from-blue-500/40 to-cyan-500/30" flex items-center justify-center mb-5>
      <div i-carbon:user-avatar text-5xl opacity-70></div>
    </div>
    <!-- TODO: replace name, role, and GitHub handle -->
    <span font-semibold text-3xl>Your Name</span>
    <div>
      <div><span class="opacity-70">Senior Software Engineer</span></div>
      <div text-sm flex items-center gap-2 mt-4>
        <div i-carbon:logo-github></div><span underline decoration-dashed font-mono decoration-zinc-300>your-github-handle</span>
      </div>
    </div>
  </div>
  <div flex-1></div>
  <div flex flex-col gap-8>
    <!-- TODO: replace communities and projects with your own -->
    <div mb-4 v-click="2">
      <div mb-4 text-zinc-400><span>Communities</span></div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 2 ? 'translate-y-5 opacity-0 blur-sm' : 'translate-y-0 opacity-100 blur-0'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-logos:vue inline-block></div> Vue
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-logos:typescript-icon inline-block></div> TypeScript
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-carbon:kubernetes inline-block></div> Kubernetes
        </div>
      </div>
    </div>
    <div v-click="3">
      <div mb-4 text-zinc-400><span>Projects</span></div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 3 ? 'translate-y-5 opacity-0 blur-sm' : 'translate-y-0 opacity-100 blur-0'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-carbon:carbon inline-block></div> Project Aurora
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-carbon:book inline-block></div> Open Docs
        </div>
      </div>
    </div>
  </div>
</div>

<!--
[click] Hi, I'm Your Name, a software engineer working on developer tooling.

[click] I'm active in the Vue, TypeScript, and Kubernetes communities.

[click] And I'm one of the maintainers of Project Aurora and Open Docs.
-->

---
layout: section
glowSeed: 200
sectionNumber: 1
sectionTitle: The Problem
sectionSubtitle: Why current workflows fall short
---

<!--
Let's start by understanding the problem space — why do we even need to rethink developer workflows?
-->

---
layout: page
glowSeed: 72
clicks: 1
---

<div class="h-full flex items-center justify-center">
  <SpotlightQuestion question="How much time do developers actually spend coding?">
    <div
      v-click="1"
      :class="$clicks < 1 ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'"
      mt-4 transition duration-800 ease-in-out
    >
      <div text="5xl!" font-semibold text-center>
        Less than 30% of their workday.
      </div>
      <div text-center mt-4 opacity-70>
        The rest goes to context-switching, configuration, and waiting.
      </div>
    </div>
  </SpotlightQuestion>
</div>

<!--
Here's a question for everyone in the audience.

[click] Studies consistently show developers spend less than a third of their time writing code. The rest is consumed by context-switching, environment setup, and waiting on pipelines.
-->

---
layout: page
glowSeed: 118
glow: top
clicks: 2
---

<div text-3xl font-semibold mb-5>The Current State</div>

<div
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 translate-y-5 scale-95' : 'opacity-100 translate-y-0 scale-100'"
  transition duration-500 ease-in-out
>
  <ProblemSolutionSplit
    problemTitle="Traditional Workflow"
    solutionTitle="What We Actually Need"
    :problem-items="[
      { text: 'Manual environment setup per project' },
      { text: 'Context lost between task switches' },
      { text: 'Repetitive boilerplate for each feature' },
    ]"
    :solution-items="[
      { text: 'Instant reproducible environments' },
      { text: 'Persistent context across sessions' },
      { text: 'Intelligent scaffolding from intent' },
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

<!--
[click] On the left, what most teams still deal with. On the right, what the workflow should look like.

[click] The key insight: developers aren't slow — the tooling creates unnecessary friction.
-->

---
layout: page
glowSeed: 170
---

<div text-3xl font-semibold mb-5>Three Core Challenges</div>

<div class="mt-4 h-[66%] flex items-center">
  <LifecycleChallengesThreeCol :items="[
    { iconClass: 'i-carbon:time text-amber-300', title: 'Setup Cost', description: 'Every new project demands hours of configuration before any real work begins.' },
    { iconClass: 'i-carbon:shuffle text-blue-300', title: 'Context Loss', description: 'Switching between tasks means rebuilding mental models from scratch.' },
    { iconClass: 'i-carbon:repeat text-pink-300', title: 'Repetition', description: 'The same patterns re-implemented slightly differently across every service.' },
  ]" />
</div>

<!--
We've identified three categories of friction that compound on each other: setup cost, context loss, and repetition.
-->

---
layout: section
glowSeed: 250
glowPreset: cyan
sectionNumber: 2
sectionTitle: The Solution
sectionSubtitle: How Aurora addresses this
---

<!--
Now that we've framed the problem — let's look at what Aurora does differently.
-->

---
layout: page
glowSeed: 86
glowPreset: cyan
glow: left
clicks: 3
---

<div text-3xl font-semibold mb-5>Architecture Overview</div>

<ProcessFlowGrid :columns="3" :items="[
  { icon: 'i-carbon:cloud-upload', eyebrow: 'Layer 1', title: 'Environment Engine', description: 'Declarative environment specs — spun up in seconds, not hours.' },
  { icon: 'i-carbon:data-connected', eyebrow: 'Layer 2', title: 'Context Graph', description: 'Persistent knowledge graph connecting code, tasks, and decisions.' },
  { icon: 'i-carbon:machine-learning-model', eyebrow: 'Layer 3', title: 'Intent Resolver', description: 'Translates high-level intent into concrete implementation steps.' },
]" />

<!--
Aurora is built in three layers.

[click] First, the Environment Engine — think instant, reproducible dev containers from a single config file.

[click] Second, the Context Graph — it remembers what you were working on, why, and what decisions were made.

[click] Third, the Intent Resolver — describe what you want to build, and it generates the scaffolding.
-->

---
layout: page
glowSeed: 64
glowPreset: cyan
---

<div text-3xl font-semibold mb-5>Key Features</div>

<div class="mt-4">
  <PatternCardGrid :columns="2" :items="[
    { eyebrow: 'Speed', title: 'Sub-second Environment Spin-up', description: 'Pre-built layer caching means your environment is ready before you finish typing.' },
    { eyebrow: 'Memory', title: 'Cross-session Context', description: 'Pick up exactly where you left off — even weeks later, even on a different machine.' },
    { eyebrow: 'Safety', title: 'Automatic Rollback', description: 'Every action is reversible. Experiment freely without fear of breaking state.' },
    { eyebrow: 'Integration', title: 'Works With Your Stack', description: 'Plugs into existing CI/CD, editors, and cloud providers. No lock-in.' },
  ]" />
</div>

<!--
These are the four differentiators that matter most to teams evaluating Aurora.
-->

---
layout: page-wide
glowSeed: 98
glowPreset: cyan
clicks: 3
class: px-8 py-6
---

<div class="h-full flex flex-col justify-center gap-4">
  <div text-2xl font-semibold>How the Context Graph Works</div>

  <ArtifactExplainBoard
    mode="sidebar"
    artifactClass="min-h-[16rem]"
    panelClass="grid-cols-[minmax(0,1.2fr)_minmax(14rem,0.9fr)]"
    subtitle="Left: your project's knowledge structure. Right: each layer explained step by step."
    :items="[
      { icon: 'i-carbon:document', tone: 'cyan', title: 'Capture', description: 'Every file edit, terminal command, and decision is logged as a node.' },
      { icon: 'i-carbon:connect', tone: 'green', title: 'Link', description: 'Nodes are connected by causal relationships — why led to what.' },
      { icon: 'i-carbon:search', tone: 'purple', title: 'Retrieve', description: 'Query past context naturally: why did we choose Redis here?' },
    ]"
  >
    <div class="flex h-full items-center justify-center rounded-2xl border border-white/8 bg-neutral-950/70 p-6">
      <div class="grid w-full gap-3 grid-cols-3">
        <div class="neko-glass-card p-4 text-center">
          <div class="mb-2 text-cyan-300 text-2xl" i-carbon:document></div>
          <div class="text-sm font-semibold">Events</div>
        </div>
        <div class="neko-glass-card p-4 text-center">
          <div class="mb-2 text-green-300 text-2xl" i-carbon:connect></div>
          <div class="text-sm font-semibold">Relations</div>
        </div>
        <div class="neko-glass-card p-4 text-center">
          <div class="mb-2 text-purple-300 text-2xl" i-carbon:search></div>
          <div class="text-sm font-semibold">Queries</div>
        </div>
      </div>
    </div>
  </ArtifactExplainBoard>
</div>

<!--
Let me walk you through the Context Graph in detail.

[click] First, capture — every meaningful action becomes a node in the graph.

[click] Then linking — we establish causal chains so you can trace decisions.

[click] Finally retrieval — ask questions in natural language, get precise answers with source.
-->

---
layout: page
glowSeed: 330
glowPreset: rust
glow: center
clicks: 1
---

<div text-3xl font-semibold mb-5>Live Demo</div>

<div
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 scale-92 blur-sm' : 'opacity-100 scale-100 blur-0'"
  class="mt-4 rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm transition duration-800 ease-in-out"
>
  <div class="flex items-center gap-3 mb-4">
    <div class="h-3 w-3 rounded-full bg-red-500"></div>
    <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
    <div class="h-3 w-3 rounded-full bg-green-500"></div>
    <span class="ml-2 text-sm opacity-50 font-mono">terminal</span>
  </div>
  <div class="font-mono text-sm leading-relaxed">
    <div><span text-green-400>$</span> aurora init --from intent "REST API with auth and rate limiting"</div>
    <div mt-2 opacity-80>✓ Detected stack: Node.js + TypeScript + Express</div>
    <div opacity-80>✓ Generated: 12 files, 3 middleware, JWT auth scaffold</div>
    <div opacity-80>✓ Environment ready in 0.8s</div>
    <div mt-3><span text-green-400>$</span> aurora context "why did we pick JWT over sessions?"</div>
    <div mt-1 opacity-80>→ Decision from 2026-03-14: "stateless scaling requirement from arch review"</div>
  </div>
</div>

<div mt-4 text-center text-sm opacity-60>
  Replace this with your own terminal recording or live demo.
</div>

<!--
Here's what it looks like in practice. One command, and you go from intent to a running project.

The context query shows how past decisions are instantly retrievable.
-->

---
layout: section
glowSeed: 380
sectionNumber: 3
sectionTitle: What's Next
sectionSubtitle: Roadmap and getting involved
---

<!--
We've covered the problem and the solution. Let's wrap up with what's coming next and how to get involved.
-->

---
layout: page
glowSeed: 420
glow: right
clicks: 1
---

<div text-3xl font-semibold mb-5>Takeaways</div>

<div
  v-click="1"
  :class="$clicks < 1 ? 'opacity-0 translate-y-4 scale-98' : 'opacity-100 translate-y-0 scale-100'"
  class="mt-4 transition duration-600 ease-in-out"
>
  <GlassChecklist :items="[
    'Developer friction is the real bottleneck — not skill or tooling quantity.',
    'Environment setup should be instant and declarative.',
    'Context persistence eliminates costly mental model rebuilds.',
    'Intent-driven scaffolding removes repetitive boilerplate.',
    'Aurora is open-source — contributions welcome.',
  ]" />
</div>

<!--
Five things I want you to remember from this talk.
-->

---
layout: page
glowSeed: 450
clicks: 3
---

<div text-3xl font-semibold mb-5>Team & Contributors</div>

<!-- TODO: replace speaker names, roles, and handles; remove extra speakers or add more as needed -->
<SpeakerLineupIntro
  title=""
  subtitle="The people building Aurora"
  :speakers="[
    { name: 'Your Name', role: 'Lead · Architecture', handle: 'your-handle', handleIcon: 'i-carbon:logo-github' },
    { name: 'Teammate A', role: 'Runtime · Performance', handle: 'teammate-a', handleIcon: 'i-carbon:logo-github' },
    { name: 'Teammate B', role: 'AI · Context Engine', handle: 'teammate-b', handleIcon: 'i-carbon:logo-github' },
  ]"
/>

<!--
[click] I lead the architecture.

[click] Teammate A handles the runtime and performance layer.

[click] And Teammate B owns the AI and context engine.

We're always looking for contributors — feel free to reach out to any of us.
-->

---
layout: page
glowSeed: 490
class: text-center
clicks: 2
---

<div text-3xl font-semibold mb-6>Get Started</div>

<div class="h-[55%] flex items-center justify-center">
  <!-- TODO: replace QR code placeholders with <img src="./qr-repo.png"> and <img src="./qr-docs.png"> -->
  <div class="flex gap-10 items-start">
    <div
      v-click="1"
      :class="$clicks < 1 ? 'opacity-0 translate-y-6 scale-92' : 'opacity-100 translate-y-0 scale-100'"
      class="flex flex-col items-center gap-3 transition duration-500 ease-in-out"
    >
      <div class="h-48 w-48 rounded-2xl border border-white/15 bg-black/20 p-4 flex items-center justify-center">
        <div class="text-center">
          <div i-carbon:qr-code text-5xl opacity-40></div>
          <div class="mt-2 text-xs opacity-50">Your QR Here</div>
        </div>
      </div>
      <div text-sm opacity-70>GitHub Repo</div>
    </div>
    <div
      v-click="1"
      :class="$clicks < 1 ? 'opacity-0 translate-y-6 scale-92' : 'opacity-100 translate-y-0 scale-100'"
      class="flex flex-col items-center gap-3 transition duration-500 ease-in-out delay-200"
    >
      <div class="h-48 w-48 rounded-2xl border border-white/15 bg-black/20 p-4 flex items-center justify-center">
        <div class="text-center">
          <div i-carbon:qr-code text-5xl opacity-40></div>
          <div class="mt-2 text-xs opacity-50">Your QR Here</div>
        </div>
      </div>
      <div text-sm opacity-70>Documentation</div>
    </div>
  </div>
</div>

<div
  v-click="2"
  :class="$clicks < 2 ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'"
  transition duration-500 ease-in-out
>
  <InsightCalloutBar tone="green" icon="i-carbon:star">
    Star us on GitHub — every star helps the project grow.
  </InsightCalloutBar>
</div>

<!--
Two QR codes: one for the repo, one for the docs. Replace these placeholder boxes with your actual QR images.
-->

---
layout: end
glowSeed: 700
---

<!--
Thank you all! Happy to take questions.

Replace this end slide with ThankYouSplitPanel if you'd like a more elaborate closing.
-->
