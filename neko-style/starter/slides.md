---
theme: neko-style
layout: center
class: px-14 py-10
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'neko-style Componentized Starter'
lineNumbers: false
drawings:
  persist: false
mdc: true
glowSeed: 42
glowPreset: blue
---

# neko-style Componentized Starter

这版 starter 重点：把 raw-template 里高价值页面语法，沉淀成 theme 级组件。

<div class="pt-8 text-sm opacity-80">
  你可以直接复制页面结构，不用再手搓大段样式。
</div>

---
layout: intro
glowSeed: 205
class: px-20
---

<SplitBrandIntro>
  <template #left>
    <div i-carbon:presentation-file text-5xl text-blue-300 />
    <span font-semibold>Story Structure</span>
  </template>
  <template #right>
    <div i-carbon:color-palette text-5xl text-cyan-300 />
    <span font-semibold>Visual Language</span>
  </template>
</SplitBrandIntro>

<div mt-10 text-center opacity-75>
  先讲结构，再讲样式，这是最稳的演讲路径。
</div>

---
layout: page
glowSeed: 56
glow: top
glowPreset: blue
---

# 目录（可复用结构）

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">
  <div class="neko-glass-card p-4">
    <div class="font-bold mb-2">01 Question Spotlight</div>
    <div class="opacity-75">用问题驱动叙事，而不是堆事实。</div>
  </div>
  <div class="neko-glass-card p-4">
    <div class="font-bold mb-2">02 Compare & Resolve</div>
    <div class="opacity-75">问题/方案并排，观众最容易理解。</div>
  </div>
  <div class="neko-glass-card p-4">
    <div class="font-bold mb-2">03 Progressive Reveal</div>
    <div class="opacity-75">`v-clicks` 逐步展开复杂系统。</div>
  </div>
  <div class="neko-glass-card p-4">
    <div class="font-bold mb-2">04 Closure & CTA</div>
    <div class="opacity-75">结尾给下一步动作，不只说 Thanks。</div>
  </div>
</div>

---
layout: page
glowSeed: 72
---

<SpotlightQuestion question="AI 主播到底是什么？" />

---
layout: page
glowSeed: 75
clicks: 1
---

<SpotlightQuestion question="就是直播带货数字人吗？" compact>
  <v-clicks>
    <div mt-4>
      <h1 flex items-center text="5xl!">
        <span>不完全是，它更像“可持续交互的 AI 角色系统”。</span>
      </h1>
    </div>
  </v-clicks>
</SpotlightQuestion>

---
layout: page
glowSeed: 120
class: text-center
---

<WorksOnMyMachineHero />

<div class="mt-4 text-sm opacity-70">
  这是 raw-template 里极高复用率的“痛点开场”模式。
</div>

---
layout: page
glowSeed: 175
---

# 问题 vs 方案

<div mt-6>
  <ProblemSolutionSplit>
    <template #problem>
      <div flex items-center gap-2 mb-2><div i-carbon:close text-red-400 />依赖版本漂移（CUDA / Python / 包管理器）</div>
      <div flex items-center gap-2><div i-carbon:close text-red-400 />环境不可复现，迁移成本高</div>
    </template>
    <template #solution>
      <div flex items-center gap-2 mb-2><div i-carbon:checkmark-outline text-green-400 />统一环境定义，减少环境分叉</div>
      <div flex items-center gap-2><div i-carbon:checkmark-outline text-green-400 />锁文件可追踪，支持回滚与审计</div>
    </template>
  </ProblemSolutionSplit>
</div>

<InsightCalloutBar tone="yellow">
  先稳定“环境一致性”，再追求“模型效果上限”。
</InsightCalloutBar>

---
layout: page
glowSeed: 188
---

# 生命周期挑战（三栏）

<div mt-6>
  <LifecycleChallengesThreeCol />
</div>

---
layout: page
glowSeed: 220
clicks: 5
---

# 能力矩阵（渐进揭示）

<div mt-8>
  <CapabilityRevealRow />
</div>

---
layout: page
glowSeed: 88
glow: left
---

# 动画防遮挡规范

<div class="grid grid-cols-3 gap-8 mt-8">
  <div class="neko-glass-card p-5 text-center">
    <div class="neko-motion-stage">
      <div class="text-6xl animate-balance-shake">🎯</div>
    </div>
    <div class="font-bold mb-1">balance-shake</div>
    <div class="neko-motion-caption">强调关键点</div>
  </div>

  <div class="neko-glass-card p-5 text-center">
    <div class="neko-motion-stage">
      <div class="text-6xl animate-balance-move-left">⬆️</div>
    </div>
    <div class="font-bold mb-1">balance-move-left</div>
    <div class="neko-motion-caption">动效区和文案区隔离</div>
  </div>

  <div class="neko-glass-card p-5 text-center">
    <div class="neko-motion-stage">
      <div class="text-6xl animate-balance-move-right">⬇️</div>
    </div>
    <div class="font-bold mb-1">balance-move-right</div>
    <div class="neko-motion-caption">避免图标遮挡说明文字</div>
  </div>
</div>

---
layout: section
glowSeed: 300
sectionNumber: 1
sectionTitle: AIRI 页面语法
sectionSubtitle: 来自 2025-10 演讲的独特模式
accentColor: '#60cd6a'
---

---
layout: page
glowSeed: 330
---

# 高辨识度页面模式（已组件化）

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">
  <div class="neko-glass-card p-4"><div font-bold mb-2>SpotlightQuestion</div><div class="opacity-75">大字问题聚焦页</div></div>
  <div class="neko-glass-card p-4"><div font-bold mb-2>SessionHoverGallery</div><div class="opacity-75">截图 + 二维码悬停墙</div></div>
  <div class="neko-glass-card p-4"><div font-bold mb-2>FeatureOverlayVideo</div><div class="opacity-75">视频叠层讲解页</div></div>
  <div class="neko-glass-card p-4"><div font-bold mb-2>FullBleedCharacterReveal</div><div class="opacity-75">全屏角色揭示页</div></div>
  <div class="neko-glass-card p-4"><div font-bold mb-2>SpeakerEcosystemIntro</div><div class="opacity-75">讲者 + 社区关系页</div></div>
  <div class="neko-glass-card p-4"><div font-bold mb-2>ThankYouSplitPanel</div><div class="opacity-75">双栏结束页</div></div>
</div>

---
layout: page
glowSeed: 360
---

# 媒体型组件接入示例（复制即用）

```vue
<SessionHoverGallery :items="[
  { image: '/session-1.png', qr: '/session-1-qr.png' },
  { image: '/session-2.png', qr: '/session-2-qr.png' },
  { image: '/session-3.png', qr: '/session-3-qr.png' },
  { image: '/session-4.png', qr: '/session-4-qr.png' },
]" />

<FeatureOverlayVideo src="/Neuro-minecraft.mp4" title="这段演示里有哪些能力？" />

<ThankYouSplitPanel art="/relu-art-6.gif" qr="/slide_qr.png" />
```

<div class="mt-4 text-sm opacity-75">这些组件在 theme 中已可直接使用，按需传入素材路径即可。</div>

---
layout: page
glowSeed: 390
---

<RecruitingRoleList
  title="我们在找什么角色"
  subtitle="复杂系统需要跨职能协作"
  :roles="[
    { icon: 'i-solar:hand-stars-bold-duotone', label: '产品经理' },
    { icon: 'i-solar:pen-new-square-bold-duotone', label: '设计师' },
    { icon: 'i-solar:eye-bold-duotone', label: '机器视觉（CV）' },
    { icon: 'i-solar:running-bold-duotone', label: '强化学习（RL）' },
    { icon: 'i-solar:microphone-bold-duotone', label: '语音识别 / 语音合成' },
  ]"
  note="除了技术实现，表达、交互、运营同样关键。"
/>

---
layout: page
glowSeed: 420
---

# 迁移排障（必做）

<div class="space-y-3 mt-6 text-sm leading-relaxed">
  <div class="neko-glass-card p-3">1) 先 smoke test：只放 <code>theme + glowSeed</code> 验证背景。</div>
  <div class="neko-glass-card p-3">2) 检查全局 CSS 是否覆盖 <code>.slidev-layout</code>。</div>
  <div class="neko-glass-card p-3">3) 若页面设置 <code>background:</code> 会覆盖 glow（预期）。</div>
  <div class="neko-glass-card p-3">4) 主题未发布 npm registry，已有项目请用本地路径安装。</div>
</div>

---
layout: page
glowSeed: 450
---

# 联系方式（三联二维码组件）

<ContactQrTriplet :items="[
  { label: 'GitHub', src: '/github_qr.png' },
  { label: 'Discord', src: '/discord_qr.png' },
  { label: 'Telegram', src: '/telegram_qr.png' },
]" />

<div class="mt-4 text-sm opacity-70">如果你的 starter 没放这些素材图，会显示空图位；替换成你自己的二维码即可。</div>

---
layout: end
glowSeed: 700
---