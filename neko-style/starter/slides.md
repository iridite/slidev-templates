---
theme: neko-style
layout: center
class: px-14 py-10
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'neko-style Starter'
lineNumbers: false
drawings:
  persist: false
mdc: true
glowSeed: 42
glowPreset: blue
---

<style>
.starter-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.starter-stack {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.starter-hero-title,
.starter-title {
  font-family: "Avenir Next", "SF Pro Display", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Segoe UI", sans-serif;
  font-weight: 650;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.97);
}

.starter-hero-title {
  font-size: 3rem;
  line-height: 1.02;
}

.starter-title {
  font-size: 2.3rem;
  line-height: 1.06;
}

.starter-title-center {
  text-align: center;
}

.starter-copy {
  max-width: 54rem;
  font-size: 1rem;
  line-height: 1.65;
  opacity: 0.8;
}

.starter-copy-center {
  margin-inline: auto;
  text-align: center;
}

.starter-panel {
  margin-top: 0.25rem;
}
</style>

<div class="starter-page">
  <div class="starter-stack">
    <div class="starter-hero-title">neko-style Starter</div>
    <div class="text-xl opacity-85">
      一份能直接改成你自己分享内容的 Slidev 起始稿。
    </div>
    <div class="text-sm opacity-70">
      目标：标题层级清楚、页面重心稳定、click 节奏自然、导出不翻车。
    </div>
  </div>
</div>

---
layout: intro
glowSeed: 120
class: px-16
---

<SplitBrandIntro>
  <template #left>
    <div i-carbon:chart-line-smooth text-5xl text-blue-300 />
    <span font-semibold>Story Structure</span>
  </template>
  <template #right>
    <div i-carbon:color-palette text-5xl text-cyan-300 />
    <span font-semibold>Visual Discipline</span>
  </template>
</SplitBrandIntro>

<div class="mt-8 max-w-3xl mx-auto text-center text-base leading-relaxed opacity-80">
  先把叙事结构跑通，再补媒体与细节。
</div>

---
layout: page
glowSeed: 56
glow: top
---

<div class="starter-title">这份 starter 现在重点示范什么</div>

<div class="mt-5">
  <PatternCardGrid :columns="2" :items="[
    { eyebrow: 'Focus', title: '问题驱动开场', description: '先给问题和判断，不先堆细节。' },
    { eyebrow: 'Flow', title: '中段逻辑拆解', description: '问题、方案、流程，三段式讲清楚。' },
    { eyebrow: 'Style', title: '标题层级明确', description: '标题像标题，正文像正文。' },
    { eyebrow: 'Delivery', title: '页面安全区稳定', description: '内容不溢出，不贴边，导出可控。' },
  ]" />
</div>

---
layout: page
glowSeed: 72
clicks: 1
---

<div class="h-full flex items-center justify-center">
  <SpotlightQuestion question="一份 starter 最关键的价值是什么？" compact>
    <v-clicks>
      <div mt-4>
        <div class="starter-title starter-title-center" text="5xl!">
          拿回去改 30 分钟，就能变成你自己的完整 deck。
        </div>
      </div>
    </v-clicks>
  </SpotlightQuestion>
</div>

---
layout: page
glowSeed: 118
class: text-center
---

<WorksOnMyMachineHero
  title="starter 的常见翻车：看起来全有，讲起来全空"
  subtitle="先修结构与版式，再谈炫技"
>
  <pre class="!m-0"><code>$ pnpm dev
cover ✅
layout ✅
标题层级混乱 ❌
部分页面顶边 / 溢出 ❌
review: “这份能直接拿去讲吗？” ❌
</code></pre>
</WorksOnMyMachineHero>

---
layout: page
glowSeed: 170
clicks: 2
---

<div class="starter-title">先把“半成品感”去掉</div>

<ProblemSolutionSplit
  v-click="1"
  class="mt-5"
  problemTitle="常见半成品状态"
  solutionTitle="可交付 starter 状态"
  :problem-items="[
    { text: '标题像正文，主次不明显' },
    { text: '模块顶边，页面重心发飘' },
    { text: 'click 顺序杂乱，讲述断裂' },
  ]"
  :solution-items="[
    { text: '每页主标题统一层级' },
    { text: '垂直重心落在页面中段' },
    { text: 'click 只服务叙事，不抢注意力' },
  ]"
/>

<InsightCalloutBar v-click="2" tone="yellow">
  先稳可读性，再加表现力。
</InsightCalloutBar>

---
layout: page
glowSeed: 188
---

<div class="starter-title">三个优先修正点</div>

<div class="mt-6 h-[66%] flex items-center">
  <LifecycleChallengesThreeCol :items="[
    { iconClass: 'i-carbon:text-font text-blue-300', title: '标题层级', description: '大标题、正文、注释必须分层，不混成一坨。' },
    { iconClass: 'i-carbon:fit-to-screen text-pink-300', title: '安全区', description: '所有组件留在可视边界内，不贴边、不截断。' },
    { iconClass: 'i-carbon:center-to-fit text-green-300', title: '重心平衡', description: '该居中就居中，避免上重下空的失衡感。' },
  ]" />
</div>

---
layout: page
glowSeed: 64
clicks: 4
---

<div class="starter-title">推荐叙事骨架（四段式）</div>

<div class="mt-5">
  <ProcessFlowGrid :columns="4" :items="[
    { icon: 'i-carbon:idea', eyebrow: 'Act I', title: 'Question', description: '先统一观众注意力。' },
    { icon: 'i-carbon:compare', eyebrow: 'Act II', title: 'Compare', description: '讲旧方案的代价。' },
    { icon: 'i-carbon:chart-network', eyebrow: 'Act III', title: 'Explain', description: '拆解方法和关键决策。' },
    { icon: 'i-carbon:flag', eyebrow: 'Act IV', title: 'Close', description: '给下一步动作与入口。' },
  ]" />
</div>

---
layout: page
glowSeed: 86
glow: left
---

<div class="starter-title">动效规范（click 节奏优化）</div>

<div class="mt-5">
  <MotionPrinciplesGallery :items="[
    { iconClass: 'i-carbon:cursor-1 text-emerald-300', title: '主文案先稳定', caption: '动画只做辅助，不抢正文。', animationClass: 'animate-balance-shake' },
    { iconClass: 'i-carbon:arrow-down-left text-blue-300', title: '动区文区分离', caption: '动效元素离开阅读主区。', animationClass: 'animate-balance-move-left' },
    { iconClass: 'i-carbon:dot-mark text-amber-300', title: '每步只引入一件事', caption: '避免一次性弹出过多信息。', animationClass: 'animate-balance-move-right' },
  ]" />
</div>

---
layout: page-wide
glowSeed: 98
clicks: 3
class: px-8 py-6
---

<div class="h-full flex flex-col justify-center gap-4">
  <div class="starter-title">复杂对象讲解：稳定双栏</div>

  <ArtifactExplainBoard
    mode="sidebar"
    artifactClass="min-h-[17rem]"
    panelClass="grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.9fr)]"
    subtitle="左边主体，右边按 click 逐条解释，避免上下堆叠导致溢出。"
    :items="[
      { icon: 'i-carbon:document', tone: 'cyan', title: '入口信息', description: '先说输入边界与上下文。' },
      { icon: 'i-carbon:tool-box', tone: 'green', title: '处理中段', description: '再说流程与关键动作。' },
      { icon: 'i-carbon:result', tone: 'purple', title: '输出落点', description: '最后说结果结构和去向。' },
    ]"
  >
    <div class="flex h-full items-center justify-center rounded-2xl border border-white/8 bg-neutral-950/70 p-6">
      <div class="grid w-full gap-3 grid-cols-3">
        <div class="neko-glass-card p-4 text-center">
          <div class="mb-2 text-cyan-300 i-carbon:document text-2xl" />
          <div class="font-semibold">Input</div>
        </div>
        <div class="neko-glass-card p-4 text-center">
          <div class="mb-2 text-green-300 i-carbon:tool-box text-2xl" />
          <div class="font-semibold">Process</div>
        </div>
        <div class="neko-glass-card p-4 text-center">
          <div class="mb-2 text-purple-300 i-carbon:result text-2xl" />
          <div class="font-semibold">Output</div>
        </div>
      </div>
    </div>
  </ArtifactExplainBoard>
</div>

---
layout: page
glowSeed: 330
clicks: 3
---

<div class="starter-title">联合讲者开场模板</div>

<div class="mt-5">
  <SpeakerLineupIntro
    title="三种常见协作角色"
    subtitle="即使你一个人做，也会在这三种角色之间来回切换。"
    :speakers="[
      { name: 'Speaker', role: '把节奏讲顺' },
      { name: 'Designer', role: '把层级拉开' },
      { name: 'Builder', role: '把交付跑通' },
    ]"
  />
</div>

---
layout: page
glowSeed: 380
clicks: 4
---

<div class="starter-title">继续扩展 starter 的优先级</div>

<div class="mt-5">
  <ProcessFlowGrid :columns="2" :items="[
    { icon: 'i-solar:chat-round-bold-duotone', title: '开场提问 / 误解纠偏页', description: '先把最常用开场页打磨到位。' },
    { icon: 'i-solar:notes-bold-duotone', title: '对比论证 / 取舍说明页', description: '中段逻辑页决定说服力。' },
    { icon: 'i-solar:diagram-up-bold-duotone', title: '流程拆解 / 决策链路页', description: '复杂内容要能稳稳讲清楚。' },
    { icon: 'i-solar:checklist-bold-duotone', title: 'FAQ / 收尾 CTA 页', description: '结尾要有明确行动指向。' },
  ]" />
</div>

---
layout: page
glowSeed: 418
clicks: 3
---

<div class="starter-title">媒体接入顺序（你录屏后再替换）</div>

<div class="mt-5">
  <ProcessFlowGrid :columns="3" :items="[
    { icon: 'i-carbon:edit', eyebrow: 'Step 1', title: '先写故事', description: '先确认每页目的和讲述顺序。' },
    { icon: 'i-carbon:image', eyebrow: 'Step 2', title: '再放静态占位', description: '封面图、案例图先到位，整份稿先能讲。' },
    { icon: 'i-carbon:media-library', eyebrow: 'Step 3', title: '最后替换录屏', description: '你录完后再替换真实视频，风险最低。' },
  ]" />
</div>

---
layout: page
glowSeed: 450
class: text-center
---

<div class="starter-title starter-title-center">联系方式（单二维码位）</div>

<div class="h-[68%] flex items-center justify-center mt-4">
  <div class="h-64 w-64 rounded-2xl border border-white/15 bg-black/20 p-4 flex items-center justify-center text-center">
    <div>
      <div class="text-sm uppercase tracking-[0.2em] opacity-65">QR Slot</div>
      <div class="mt-2 text-lg font-semibold">在这里放你的二维码</div>
      <div class="mt-2 text-xs opacity-70">建议复用同一个主入口二维码</div>
    </div>
  </div>
</div>

<div class="text-sm opacity-75 text-center">
  只保留一个二维码入口，减少视觉噪音。
</div>

---
layout: page
glowSeed: 420
---

<div class="starter-title">迁移检查清单</div>

<div class="mt-5">
  <GlassChecklist :items="[
    '先 smoke test：只放 <code>theme + glowSeed</code>，确认背景正常。',
    '标题层级要统一，不能退化成正文样式。',
    '每页内容保持在安全区内，不贴边、不溢出。',
    'click 一次只引入一个重点，避免节奏过密。',
    '导出前至少跑一次 <code>build</code>，保证交付稳定。',
  ]" />
</div>

---
layout: end
glowSeed: 700
---
