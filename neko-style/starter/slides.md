---
theme: neko-style
layout: center
class: px-14 py-10
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'neko-style Template Showcase'
lineNumbers: false
drawings:
  persist: false
mdc: true
glowSeed: 42
glowPreset: blue
---

# neko-style Template Showcase

从 neko-talks 提取的演示设计语言，开箱即用。

<div class="pt-10 opacity-80 text-sm">
  16 页完整示例 · 覆盖颜色系统 / 动画 / 布局 / 高级组件 / 实战建议
</div>

<div class="pt-8">
  <span @click="$slidev.nav.next" class="px-3 py-1.5 rounded cursor-pointer hover:bg-white/10 border border-white/20">
    开始探索 <carbon:arrow-right class="inline"/>
  </span>
</div>

---
glowSeed: 56
glow: top
glowPreset: blue
class: px-14 py-10
---

# 今天会看到什么

<div class="grid grid-cols-2 gap-5 mt-8 text-sm">
  <div class="bg-white/6 border border-white/15 rounded-lg p-4">
    <div class="font-bold mb-2">01 颜色预设</div>
    <div class="opacity-75">blue / rust / cyan 三套视觉气质</div>
  </div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-4">
    <div class="font-bold mb-2">02 动画系统</div>
    <div class="opacity-75">统一节奏，避免元素遮挡与跳动</div>
  </div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-4">
    <div class="font-bold mb-2">03 布局能力</div>
    <div class="opacity-75">cover / section / toc / end 的协作方式</div>
  </div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-4">
    <div class="font-bold mb-2">04 高级扩展</div>
    <div class="opacity-75">motion / asciinema / 3D 的接入位置</div>
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
glowSeed: 233
glow: center
glowPreset: rust
class: px-14 py-10
---

# Rust 预设示例

<div class="text-center mt-16">
  <div class="text-6xl mb-7">🦀</div>
  <div class="text-4xl font-bold mb-3">不要 Python</div>
  <div class="text-2xl opacity-80">让我们用 Rust 实现跨平台高性能 AI 推理</div>
</div>

<div class="absolute bottom-10 left-14 text-sm opacity-55">
  参考：Rust with AI for Better Portability
</div>

---
glowSeed: 128
glow: bottom
glowPreset: cyan
theme: light
class: px-14 py-10
---

# Cyan 预设示例（Light）

<div class="text-center mt-16">
  <div class="text-6xl mb-7">🤖</div>
  <div class="text-4xl font-bold mb-3 text-gray-800">Project AIRI</div>
  <div class="text-2xl opacity-80 text-gray-600">复旦大学 AI 研究院开发者分享</div>
</div>

<div class="absolute bottom-10 left-14 text-sm opacity-60 text-gray-500">
  参考：Fudan University AIRI Dev Talk
</div>

---
glowSeed: 88
glow: left
glowPreset: blue
class: px-14 py-10
---

# 动画系统（防遮挡优化版）

<div class="grid grid-cols-3 gap-8 mt-10">
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
    <div class="text-xs opacity-70">左偏浮动，文字不再被遮挡</div>
  </div>

  <div class="bg-white/6 border border-white/15 rounded-xl p-5 text-center">
    <div class="h-24 flex items-center justify-center mb-3 overflow-hidden">
      <div class="text-6xl animate-balance-move-right">⬇️</div>
    </div>
    <div class="font-bold mb-1">balance-move-right</div>
    <div class="text-xs opacity-70">右偏浮动，和说明区分层</div>
  </div>
</div>

<div class="mt-6 text-sm opacity-70">
统一建议：动画元素放进固定高度容器（如 h-24），说明文字放容器外。
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
glowSeed: 99
glow: topmost
glowPreset: cyan
class: px-14 py-10
---

# 技术栈

<div class="grid grid-cols-4 gap-6 mt-10 text-center">
  <div><div class="text-4xl mb-2">⚛️</div><div class="font-bold">Vue 3</div><div class="text-xs opacity-60">响应式组件</div></div>
  <div><div class="text-4xl mb-2">🎨</div><div class="font-bold">UnoCSS</div><div class="text-xs opacity-60">原子化 CSS</div></div>
  <div><div class="text-4xl mb-2">📊</div><div class="font-bold">Slidev</div><div class="text-xs opacity-60">演示框架</div></div>
  <div><div class="text-4xl mb-2">🎭</div><div class="font-bold">seedrandom</div><div class="text-xs opacity-60">稳定随机</div></div>
</div>

<div class="mt-10 text-center opacity-70">
  <div class="text-sm">11 种分布 × 3 种预设 × 2 种主题</div>
  <div class="text-xs mt-1">= 66 种视觉组合</div>
</div>

---
layout: section
glowSeed: 300
sectionNumber: 1
sectionTitle: 布局系统演示
sectionSubtitle: cover / section / toc / end
accentColor: '#60cd6a'
---

---
layout: contents-toc
glowSeed: 350
sections:
  - 布局系统演示
  - 高级组件能力
  - 实战落地建议
clicks: 1
---

---
glowSeed: 400
class: px-14 py-10
---

# 常用布局能力

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">
  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
    <div bg="blue-800/40" px-4 py-2 font-bold>cover.vue</div>
    <div px-4 py-3>封面布局，适合演讲标题、作者、组织信息。</div>
  </div>

  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
    <div bg="blue-800/40" px-4 py-2 font-bold>section.vue</div>
    <div px-4 py-3>章节切换，建立叙事节奏和视觉停顿。</div>
  </div>

  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
    <div bg="blue-800/40" px-4 py-2 font-bold>contents-toc.vue</div>
    <div px-4 py-3>目录布局，配合 click 动画做路线预告。</div>
  </div>

  <div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
    <div bg="blue-800/40" px-4 py-2 font-bold>end.vue</div>
    <div px-4 py-3>收尾布局，用于结束语和 Q&A 过渡。</div>
  </div>
</div>

---
layout: section
glowSeed: 450
sectionNumber: 2
sectionTitle: 高级组件能力
sectionSubtitle: 可选依赖，按需启用
accentColor: '#3b82f6'
---

---
glowSeed: 500
class: px-14 py-10
---

# 高级组件（Optional）

<div class="space-y-5 mt-8">
  <div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
    <div bg="purple-800/40" px-4 py-2 font-bold>@vueuse/motion</div>
    <div px-4 py-3>声明式动画系统，适合做页面级入场与强调。</div>
  </div>

  <div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
    <div bg="purple-800/40" px-4 py-2 font-bold>Asciinema Player</div>
    <div px-4 py-3>终端录屏播放器，展示命令行过程非常直观。</div>
  </div>

  <div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
    <div bg="purple-800/40" px-4 py-2 font-bold>Three.js / TresJS</div>
    <div px-4 py-3>3D 可视化与交互展示，适合高级技术场景。</div>
  </div>
</div>

<div class="mt-6 text-sm opacity-70">
  💡 全部为可选依赖，不安装也不影响基础模板使用。
</div>

---
glowSeed: 550
class: px-14 py-10
---

# 真实演讲案例参考

<div class="grid grid-cols-2 gap-4 mt-8 text-sm">
  <div bg="white/5" border="border-white/10" rounded p-4>
    <div class="font-bold mb-2">🎤 KubeCon Hong Kong</div>
    <div class="opacity-70">专业会议演讲风格，节奏清晰。</div>
  </div>
  <div bg="white/5" border="border-white/10" rounded p-4>
    <div class="font-bold mb-2">🧠 LLM 深度解析</div>
    <div class="opacity-70">重技术内容的可视化表达。</div>
  </div>
  <div bg="white/5" border="border-white/10" rounded p-4>
    <div class="font-bold mb-2">🤖 AI / ML 主题</div>
    <div class="opacity-70">学术和工程混合叙事。</div>
  </div>
  <div bg="white/5" border="border-white/10" rounded p-4>
    <div class="font-bold mb-2">🦀 Rust 技术分享</div>
    <div class="opacity-70">高性能主题的视觉强化。</div>
  </div>
</div>

<div class="mt-8 text-center opacity-70">
  查看 <span class="text-blue-400">examples/README.md</span> 获取原始案例来源
</div>

---
glowSeed: 610
glow: center
glowPreset: blue
class: px-14 py-10
---

# 实战建议（你现在就能用）

<div class="space-y-3 mt-7 text-sm leading-relaxed">
  <div class="bg-white/6 border border-white/15 rounded-lg p-3">每页独立设置 <code>glowSeed</code>，避免背景重复感。</div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-3">动画元素放进固定高度容器，说明文字单独占位，避免遮挡。</div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-3">章节切换优先用 <code>section</code> 布局，而不是直接硬切内容页。</div>
  <div class="bg-white/6 border border-white/15 rounded-lg p-3">一页一个主观点，卡片结构统一，信息密度会更舒服。</div>
</div>

<div class="mt-7 opacity-75">
  下一步：复制这份 starter，按你的主题替换标题和卡片内容即可。
</div>

---
layout: end
glowSeed: 700
---