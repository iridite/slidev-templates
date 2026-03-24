---
theme: neko-style
layout: center
class: px-14 py-10
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'neko-style Reusable Starter'
lineNumbers: false
drawings:
  persist: false
mdc: true
glowSeed: 42
glowPreset: blue
---

# neko-style Reusable Starter

从 raw-template 演讲中提取的可复用内容结构（不是只看配色）。

<div class="pt-8 text-sm opacity-80">
  覆盖：问题呈现 / 对比叙事 / 渐进卡片 / 布局节奏 / 防黑底排障
</div>

<div class="pt-8">
  <span @click="$slidev.nav.next" class="px-3 py-1.5 rounded cursor-pointer hover:bg-white/10 border border-white/20">
    Start tour <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: intro
class: px-20
glowSeed: 205
---

<div flex items-center justify-center gap-10>
  <div
    v-click
    class="flex items-center gap-3 text-4xl transition duration-500 ease-in-out"
    :class="$clicks < 1 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
  >
    <div i-carbon:presentation-file text-5xl text-blue-300 />
    <span font-semibold>Structure First</span>
  </div>
  <div
    v-after
    class="text-6xl transition duration-500 ease-in-out"
    :class="$clicks < 1 ? 'scale-80 opacity-60' : 'scale-100 opacity-100'"
  >
    ×
  </div>
  <div
    v-after
    class="flex items-center gap-3 text-4xl transition duration-500 ease-in-out"
    :class="$clicks < 1 ? 'translate-x-20 opacity-0' : 'translate-x-0 opacity-100'"
  >
    <div i-carbon:color-palette text-5xl text-cyan-300 />
    <span font-semibold>Visual Identity</span>
  </div>
</div>

<div mt-12 text-center opacity-75>
  原始演讲里最稳定的模式：先讲结构，再讲样式。
</div>

---
glowSeed: 56
glow: top
glowPreset: blue
class: px-14 py-10
---

# 目录（建议叙事节奏）

<div class="grid grid-cols-2 gap-5 mt-8 text-sm">
  <div class="bg-white/6 border border-white/15 rounded-lg p-4">
    <div class="font-bold mb-2">01 Problem Framing</div>
    <div class="opacity-75">用“症状 + 代价”快速建立上下文</div>
  </div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-4">
    <div class="font-bold mb-2">02 Solution Contrast</div>
    <div class="opacity-75">传统方案 vs 目标方案并排讲清楚</div>
  </div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-4">
    <div class="font-bold mb-2">03 Progressive Reveal</div>
    <div class="opacity-75">用 v-clicks 渐进展示复杂系统</div>
  </div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-4">
    <div class="font-bold mb-2">04 Delivery Checklist</div>
    <div class="opacity-75">迁移、排障、发布状态写进文档</div>
  </div>
</div>

---
glowSeed: 15
glow: top
glowPreset: blue
class: px-14 py-10
---

# 颜色预设系统

<div class="grid grid-cols-3 gap-5 mt-8">
  <div class="bg-blue-500/12 border border-blue-500/30 rounded-lg p-6">
    <div class="text-blue-400 font-bold mb-2">🔵 Blue</div>
    <div class="text-sm opacity-80 leading-relaxed">
      默认蓝色科技风<br/>
      适用：技术演讲、产品发布
    </div>
  </div>

  <div class="bg-orange-500/12 border border-orange-500/30 rounded-lg p-6">
    <div class="text-orange-400 font-bold mb-2">🟠 Rust</div>
    <div class="text-sm opacity-80 leading-relaxed">
      橙红色活力风<br/>
      适用：Rust 主题、创新分享
    </div>
  </div>

  <div class="bg-cyan-500/12 border border-cyan-500/30 rounded-lg p-6">
    <div class="text-cyan-400 font-bold mb-2">🔷 Cyan</div>
    <div class="text-sm opacity-80 leading-relaxed">
      青蓝色清新风<br/>
      适用：AI/ML、学术表达
    </div>
  </div>
</div>

---
layout: center
glowSeed: 120
class: text-center px-14 py-10
---

# “It Works On My Machine”

<div class="text-lg opacity-75 mt-2">这是 raw-template 中最常用的“痛点开场”结构。</div>

<div class="mt-6 bg-white/6 backdrop-blur-sm border border-white/10 rounded-lg px-1 py-0 text-left">

```bash
$ python train.py
ImportError: libcudart.so.11.0: cannot open shared object file

$ pip install torch --index-url https://download.pytorch.org/whl/cu118
RuntimeError: CUDA error: no kernel image is available for execution

$ ldd $(which python3) | grep 'not found'
        libstdc++.so.6 => not found
```

</div>

<div class="mt-4 text-sm opacity-70">用 20 秒让观众代入：问题是真实、重复、可复现的。</div>

---
class: py-10 px-14
glowSeed: 175
---

# Development vs Training（对比卡模板）

<div mt-6 grid grid-cols-2 gap-6>
  <div
    v-click
    border="2 solid red-800" bg="red-800/20"
    rounded-lg overflow-hidden
  >
    <div bg="red-800/40" px-4 py-2 flex items-center>
      <div i-carbon:warning-alt text-red-300 text-xl mr-2 />
      <span font-bold>The Common Pattern</span>
    </div>
    <div px-4 py-3 flex flex-col gap-2>
      <div flex items-center gap-2 py-1>
        <div i-carbon:development text-amber-300 text-xl />
        <div>
          <div font-bold>Development</div>
          <div text-sm opacity-80>环境和依赖手工拼接</div>
        </div>
      </div>
      <div flex items-center gap-2 py-1>
        <div i-carbon:machine-learning-model text-amber-300 text-xl />
        <div>
          <div font-bold>Training</div>
          <div text-sm opacity-80>迁移后版本漂移</div>
        </div>
      </div>
      <div mt-2 bg="red-900/30" rounded-lg p-3 text-sm>
        <div flex items-center gap-1 text-xs><div i-carbon:close text-red-400 />Dependency drift</div>
        <div flex items-center gap-1 text-xs mt-1><div i-carbon:close text-red-400 />No lockfile trace</div>
      </div>
    </div>
  </div>

  <div
    v-click
    border="2 solid green-800" bg="green-800/20"
    rounded-lg overflow-hidden
  >
    <div bg="green-800/40" px-4 py-2 flex items-center>
      <div i-carbon:checkmark text-green-300 text-xl mr-2 />
      <span font-bold>The Better Pattern</span>
    </div>
    <div px-4 py-3 flex flex-col gap-2 h-full>
      <div bg="green-900/30" rounded-lg p-3 flex flex-col gap-2>
        <div font-bold text-sm>Define once, use everywhere</div>
        <div flex items-center gap-2><div i-carbon:checkmark-outline text-green-400 />统一环境定义</div>
        <div flex items-center gap-2><div i-carbon:checkmark-outline text-green-400 />可追踪锁文件</div>
        <div flex items-center gap-2><div i-carbon:checkmark-outline text-green-400 />开发/训练一致</div>
      </div>
    </div>
  </div>
</div>

---
class: py-10 px-14
glowSeed: 100
---

# Challenges Across Lifecycle（三栏挑战模板）

<div mt-6 grid grid-cols-3 gap-3 h-74>
  <v-clicks>
    <div border="2 solid white/5" rounded-lg overflow-hidden bg="white/5" backdrop-blur-sm>
      <div flex items-center bg="white/10" px-3 py-2><div i-carbon:warning-alt text-amber-300 mr-2 />Dependency Hell</div>
      <div px-4 py-3 text-sm opacity-80>
        CUDA 版本漂移、工具链碎片化、安装重试成本高。
      </div>
    </div>

    <div border="2 solid white/5" rounded-lg overflow-hidden bg="white/5" backdrop-blur-sm>
      <div flex items-center bg="white/10" px-3 py-2><div i-carbon:download text-blue-300 mr-2 />Data Preparation</div>
      <div px-4 py-3 text-sm opacity-80>
        数据来源分散、下载流程耗时且容易失败。
      </div>
    </div>

    <div border="2 solid white/5" rounded-lg overflow-hidden bg="white/5" backdrop-blur-sm>
      <div flex items-center bg="white/10" px-3 py-2><div i-carbon:data-check text-green-300 mr-2 />Governance</div>
      <div px-4 py-3 text-sm opacity-80>
        团队共享、版本可追溯、跨环境复现要求同时存在。
      </div>
    </div>
  </v-clicks>
</div>

<div v-click mt-6 flex justify-center>
  <div border="2 solid white/5" bg="white/5" rounded-lg px-6 py-3 flex items-center gap-3>
    <div i-carbon:idea text-yellow-300 text-2xl />
    <span text-lg>先把问题切成结构化模块，再做技术选型。</span>
  </div>
</div>

---
class: py-10 px-14
clicks: 5
glowSeed: 220
---

# 能力矩阵（渐进功能卡模板）

<div flex items-center gap-4>
  <v-clicks>
    <div :class="$clicks < 1 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'" rounded-lg border="2 solid pink-800" bg="pink-800/20" flex-1 h-full transition duration-500 ease-in-out>
      <div px-5 py-14 flex items-center justify-center><div i-solar:database-bold-duotone size-20 /></div>
      <div bg="pink-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>记忆层</div>
    </div>

    <div :class="$clicks < 2 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'" rounded-lg border="2 solid fuchsia-800" bg="fuchsia-800/20" flex-1 h-full transition duration-500 ease-in-out>
      <div px-5 py-14 flex items-center justify-center><div i-solar:microphone-3-bold-duotone size-20 /></div>
      <div bg="fuchsia-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>语音流水线</div>
    </div>

    <div :class="$clicks < 3 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'" rounded-lg border="2 solid purple-800" bg="purple-800/20" flex-1 h-full transition duration-500 ease-in-out>
      <div px-5 py-14 flex items-center justify-center><div i-solar:gamepad-minimalistic-bold-duotone size-20 /></div>
      <div bg="purple-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>交互场景</div>
    </div>

    <div :class="$clicks < 4 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'" rounded-lg border="2 solid violet-800" bg="violet-800/20" flex-1 h-full transition duration-500 ease-in-out>
      <div px-5 py-14 flex items-center justify-center><div i-solar:face-scan-square-bold-duotone size-20 /></div>
      <div bg="violet-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>动作与表情</div>
    </div>

    <div :class="$clicks < 5 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'" rounded-lg border="2 solid indigo-800" bg="indigo-800/20" flex-1 h-full transition duration-500 ease-in-out>
      <div px-5 py-14 flex items-center justify-center><div i-solar:link-circle-line-duotone size-20 /></div>
      <div bg="indigo-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>MCP / A2A</div>
    </div>
  </v-clicks>
</div>

---
glowSeed: 88
glow: left
glowPreset: blue
class: px-14 py-10
---

# 动画系统（防遮挡写法）

<div class="grid grid-cols-3 gap-8 mt-8">
  <div class="bg-white/6 border border-white/15 rounded-xl p-5 text-center">
    <div class="h-24 flex items-center justify-center mb-3">
      <div class="text-6xl animate-balance-shake">🎯</div>
    </div>
    <div class="font-bold mb-1">balance-shake</div>
    <div class="text-xs opacity-70">旋转摇摆，适合强调点</div>
  </div>

  <div class="bg-white/6 border border-white/15 rounded-xl p-5 text-center">
    <div class="h-24 flex items-center justify-center mb-3 overflow-hidden">
      <div class="text-6xl animate-balance-move-left">⬆️</div>
    </div>
    <div class="font-bold mb-1">balance-move-left</div>
    <div class="text-xs opacity-70">固定高度容器，避免遮挡文案</div>
  </div>

  <div class="bg-white/6 border border-white/15 rounded-xl p-5 text-center">
    <div class="h-24 flex items-center justify-center mb-3 overflow-hidden">
      <div class="text-6xl animate-balance-move-right">⬇️</div>
    </div>
    <div class="font-bold mb-1">balance-move-right</div>
    <div class="text-xs opacity-70">图标运动区和说明区分离</div>
  </div>
</div>

<div class="mt-6 text-sm opacity-70">
  Reusable rule：动画元素进容器，说明文字不跟着位移。
</div>

---
glowSeed: 55
glow: right
glowPreset: rust
class: px-14 py-10
---

# Glow 分布模式

<div class="grid grid-cols-4 gap-3 mt-8 text-sm">
  <div class="bg-white/5 border border-white/10 rounded p-3"><div class="font-bold mb-1">full</div><div class="opacity-70">全屏分布</div></div>
  <div class="bg-white/5 border border-white/10 rounded p-3"><div class="font-bold mb-1">top</div><div class="opacity-70">顶部分布</div></div>
  <div class="bg-white/5 border border-white/10 rounded p-3"><div class="font-bold mb-1">bottom</div><div class="opacity-70">底部分布</div></div>
  <div class="bg-white/5 border border-white/10 rounded p-3"><div class="font-bold mb-1">left</div><div class="opacity-70">左侧分布</div></div>
  <div class="bg-white/5 border border-white/10 rounded p-3"><div class="font-bold mb-1">right</div><div class="opacity-70">右侧分布</div></div>
  <div class="bg-white/5 border border-white/10 rounded p-3"><div class="font-bold mb-1">center</div><div class="opacity-70">中心分布</div></div>
  <div class="bg-white/5 border border-white/10 rounded p-3"><div class="font-bold mb-1">topmost</div><div class="opacity-70">顶部集中</div></div>
  <div class="bg-white/5 border border-white/10 rounded p-3"><div class="font-bold mb-1">top-left</div><div class="opacity-70">左上角</div></div>
</div>

---
layout: section
glowSeed: 300
sectionNumber: 1
sectionTitle: 布局系统演示
sectionSubtitle: 控制节奏，而不是堆内容
accentColor: '#60cd6a'
---

---
layout: contents-toc
glowSeed: 350
sections:
  - 布局系统演示
  - 可选高级能力
  - 迁移与排障
clicks: 1
---

---
glowSeed: 400
class: px-14 py-10
---

# 布局能力（可复用）

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">
  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
    <div bg="blue-800/40" px-4 py-2 font-bold>cover / intro</div>
    <div px-4 py-3>开场、人物、主题声明。用于建立情境。</div>
  </div>
  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
    <div bg="blue-800/40" px-4 py-2 font-bold>section</div>
    <div px-4 py-3>章节切换，给观众“呼吸点”。</div>
  </div>
  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
    <div bg="blue-800/40" px-4 py-2 font-bold>contents-toc</div>
    <div px-4 py-3>路线图预告，避免信息迷路。</div>
  </div>
  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
    <div bg="blue-800/40" px-4 py-2 font-bold>end</div>
    <div px-4 py-3>收尾和 Q&A 过渡，不要过早出现。</div>
  </div>
</div>

---
layout: section
glowSeed: 450
sectionNumber: 2
sectionTitle: 高级组件能力
sectionSubtitle: Optional，不影响基础可用性
accentColor: '#3b82f6'
---

---
glowSeed: 500
class: px-14 py-10
---

# 高级组件（按需启用）

<div class="space-y-5 mt-8">
  <div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
    <div bg="purple-800/40" px-4 py-2 font-bold>@vueuse/motion</div>
    <div px-4 py-3>声明式动效，适合页面级入场。</div>
  </div>
  <div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
    <div bg="purple-800/40" px-4 py-2 font-bold>Asciinema Player</div>
    <div px-4 py-3>终端录屏嵌入，适合演示 CLI 流程。</div>
  </div>
  <div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
    <div bg="purple-800/40" px-4 py-2 font-bold>Three.js / TresJS</div>
    <div px-4 py-3>3D 交互可视化，适合高级场景。</div>
  </div>
</div>

<div class="mt-6 text-sm opacity-70">提示：先把基础叙事做稳，再加高级能力。</div>

---
glowSeed: 610
glow: center
glowPreset: blue
class: px-14 py-10
---

# 迁移到现有项目的防错清单

<div class="space-y-3 mt-6 text-sm leading-relaxed">
  <div class="bg-white/6 border border-white/15 rounded-lg p-3">1) 先做 smoke test：只放 `theme + glowSeed` 看背景是否正常。</div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-3">2) 排查 `.slidev-layout` 全局背景覆盖（最常见黑底原因）。</div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-3">3) 检查当前页是否设置了 `background:` 或 `glow: false`。</div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-3">4) 主题未发布 npm registry，已有项目请用本地路径安装 theme。</div>
</div>

<div class="mt-7 opacity-75 text-sm">
  参考源：raw-template/neko-style/talks/packages/* 的开场、对比、渐进、节奏结构。
</div>

---
layout: end
glowSeed: 700
---