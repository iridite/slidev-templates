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

<PatternCardGrid :items="[
  { title: '01 Question Spotlight', description: '用问题驱动叙事，而不是堆事实。' },
  { title: '02 Compare & Resolve', description: '问题/方案并排，观众最容易理解。' },
  { title: '03 Progressive Reveal', description: '`v-clicks` 逐步展开复杂系统。' },
  { title: '04 Closure & CTA', description: '结尾给下一步动作，不只说 Thanks。' },
]" />

---
layout: page
glowSeed: 64
clicks: 4
---

# 协议 / 工作流类页面

<ProcessFlowGrid :columns="2" :items="[
  { icon: 'i-carbon:settings-adjust', title: '读取配置', description: '客户端启动后先读取本地配置。' },
  { icon: 'i-carbon:plug', title: '连接服务', description: '与服务端或协议端点建立连接。' },
  { icon: 'i-carbon:tool-box', title: '拉取能力', description: '获取工具列表、能力描述或元数据。' },
  { icon: 'i-carbon:result', title: '组织结果', description: '调用完成后回传结果，再生成最终输出。' },
]" />

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

<MotionPrinciplesGallery />

---
layout: page-wide
glowSeed: 94
clicks: 3
---

<ArtifactExplainBoard
  title="讲解一个复杂对象，不用再手搓浮层"
  subtitle="拿来讲配置文件、架构图、目录树、产品截图都顺手。"
  :items="[
    {
      icon: 'i-carbon:document-unknown',
      tone: 'blue',
      title: 'config.json - 模型架构配置',
      description: '先解释模型类型、hidden size、head dim 这类骨架字段。',
      positionClass: 'top-4 left-28',
      widthClass: 'w-[18rem]',
      inactiveAfterStep: 3,
    },
    {
      icon: 'i-carbon:string-text',
      tone: 'green',
      title: 'tokenizer_config.json - 分词器配置',
      description: '第二层再讲输入输出边界、特殊 token 和 tokenizer 约束。',
      positionClass: 'top-24 left-[24rem]',
      widthClass: 'w-[19rem]',
      inactiveAfterStep: 3,
    },
    {
      icon: 'i-carbon:generate',
      tone: 'purple',
      title: 'generation_config.json - 生成参数',
      description: '最后把采样策略、EOS 和推理默认行为单独拎出来。',
      positionClass: 'top-14 right-4',
      widthClass: 'w-[18rem]',
    },
  ]"
>
  <div class="h-full rounded-2xl border border-white/8 bg-neutral-950/70 p-8 font-mono text-sm leading-7 text-zinc-200">
    <div>models/</div>
    <div class="pl-6">gpt-oss/</div>
    <div class="pl-12">config.json</div>
    <div class="pl-12">tokenizer_config.json</div>
    <div class="pl-12">generation_config.json</div>
    <div class="pl-12">model.safetensors</div>
    <div class="pl-6 mt-4">snapshots/</div>
    <div class="pl-12">main/ -&gt; blobs</div>
  </div>
</ArtifactExplainBoard>

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

<PatternCardGrid :items="[
  { title: 'SpotlightQuestion', description: '大字问题聚焦页' },
  { title: 'SessionHoverGallery', description: '截图 + 二维码悬停墙' },
  { title: 'FeatureOverlayVideo', description: '视频叠层讲解页' },
  { title: 'FullBleedCharacterReveal', description: '全屏角色揭示页' },
  { title: 'SpeakerEcosystemIntro', description: '讲者 + 社区关系页' },
  { title: 'SpeakerLineupIntro', description: '多讲者 / 联合分享开场' },
  { title: 'ThankYouSplitPanel', description: '双栏结束页' },
]" />

---
layout: page
glowSeed: 346
clicks: 3
---

<SpeakerLineupIntro
  title="多人联合开场，也能组件化"
  subtitle="适合联合分享、panel、roundtable、黑客松 demo day"
  :speakers="[
    { name: 'Neko', role: 'AI Engineer', handle: 'nekomeowww', handleIcon: 'i-ri:github-fill', note: '负责 Agent / 产品整合' },
    { name: 'Makito', role: 'Platform Engineer', affiliation: 'Kong', affiliationIcon: 'i-simple-icons:kong', handle: 'sumimakito', handleIcon: 'i-ri:github-fill', note: '负责平台能力与基础设施' },
    { name: 'Liet', role: 'Robotics Builder', handle: 'lietblue', handleIcon: 'i-ri:github-fill', note: '负责具身智能与设备侧实现' },
  ]"
/>

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

<GlassChecklist :items="[
  '先 smoke test：只放 <code>theme + glowSeed</code> 验证背景。',
  '检查全局 CSS 是否覆盖 <code>.slidev-layout</code>。',
  '若页面设置 <code>background:</code> 会覆盖 glow（预期）。',
  '主题未发布 npm registry，已有项目请用本地路径安装。',
]" />

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
