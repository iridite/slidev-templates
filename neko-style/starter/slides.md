---
theme: neko-style
layout: center
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

# neko-style Template

从 neko-talks 提取的设计精髓

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer hover:bg-white/10">
    开始探索 <carbon:arrow-right class="inline"/>
  </span>
</div>

---
glowSeed: 15
glow: top
glowPreset: blue
---

# 颜色预设系统

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
<div class="text-blue-400 font-bold mb-2">🔵 Blue</div>
<div class="text-sm opacity-80">
默认蓝色科技风<br/>
适用: 技术演讲、产品发布
</div>
</div>

<div class="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
<div class="text-orange-400 font-bold mb-2">🟠 Rust</div>
<div class="text-sm opacity-80">
橙红色活力风<br/>
适用: Rust 主题、创新演讲
</div>
</div>

<div class="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
<div class="text-cyan-400 font-bold mb-2">🔷 Cyan</div>
<div class="text-sm opacity-80">
青蓝色清新风<br/>
适用: AI/ML、学术演讲
</div>
</div>

</div>

---
glowSeed: 233
glow: center
glowPreset: rust
---

# Rust 橙红色预设

<div class="text-center mt-20">
<div class="text-6xl mb-8">🦀</div>
<div class="text-4xl font-bold mb-4">不要 Python</div>
<div class="text-2xl opacity-80">让我们用 Rust 实现跨平台高性能的 AI 推理！</div>
</div>

<div class="absolute bottom-10 left-10 text-sm opacity-50">
参考: neko-talks "Rust with AI for Better Portability"
</div>

---
glowSeed: 128
glow: bottom
glowPreset: cyan
theme: light
---

# Cyan 青蓝色预设 (Light Theme)

<div class="text-center mt-20">
<div class="text-6xl mb-8">🤖</div>
<div class="text-4xl font-bold mb-4 text-gray-800">Project AIRI</div>
<div class="text-2xl opacity-80 text-gray-600">复旦大学 AI 研究院开发者分享</div>
</div>

<div class="absolute bottom-10 left-10 text-sm opacity-50 text-gray-500">
参考: neko-talks "Fudan University AIRI Dev Talk"
</div>

---
glowSeed: 88
glow: left
glowPreset: blue
---

# 动画系统

<div class="grid grid-cols-3 gap-8 mt-16">

<div class="text-center">
<div class="text-6xl mb-4 animate-balance-shake">🎯</div>
<div class="text-xl font-bold mb-2">balance-shake</div>
<div class="text-sm opacity-70">
旋转摇摆动画
</div>
</div>

<div class="text-center">
<div class="text-6xl mb-4 animate-balance-move-left">⬆️</div>
<div class="text-xl font-bold mb-2">balance-move-left</div>
<div class="text-sm opacity-70">
左侧浮动动画
</div>
</div>

<div class="text-center">
<div class="text-6xl mb-4 animate-balance-move-right">⬇️</div>
<div class="text-xl font-bold mb-2">balance-move-right</div>
<div class="text-sm opacity-70">
右侧浮动动画
</div>
</div>

</div>

---
glowSeed: 55
glow: right
glowPreset: rust
---

# Glow 分布模式

<div class="grid grid-cols-4 gap-3 mt-8 text-sm">

<div class="bg-white/5 border border-white/10 rounded p-3">
<div class="font-bold mb-1">full</div>
<div class="opacity-70">全屏分布</div>
</div>

<div class="bg-white/5 border border-white/10 rounded p-3">
<div class="font-bold mb-1">top</div>
<div class="opacity-70">顶部分布</div>
</div>

<div class="bg-white/5 border border-white/10 rounded p-3">
<div class="font-bold mb-1">bottom</div>
<div class="opacity-70">底部分布</div>
</div>

<div class="bg-white/5 border border-white/10 rounded p-3">
<div class="font-bold mb-1">left</div>
<div class="opacity-70">左侧分布</div>
</div>

<div class="bg-white/5 border border-white/10 rounded p-3">
<div class="font-bold mb-1">right</div>
<div class="opacity-70">右侧分布</div>
</div>

<div class="bg-white/5 border border-white/10 rounded p-3">
<div class="font-bold mb-1">center</div>
<div class="opacity-70">中心分布</div>
</div>

<div class="bg-white/5 border border-white/10 rounded p-3">
<div class="font-bold mb-1">topmost</div>
<div class="opacity-70">顶部集中</div>
</div>

<div class="bg-white/5 border border-white/10 rounded p-3">
<div class="font-bold mb-1">top-left</div>
<div class="opacity-70">左上角</div>
</div>

</div>

---
glowSeed: 99
glow: topmost
glowPreset: cyan
---

# 技术栈

<div class="grid grid-cols-4 gap-6 mt-12 text-center">

<div>
<div class="text-4xl mb-2">⚛️</div>
<div class="font-bold">Vue 3</div>
<div class="text-xs opacity-60">响应式组件</div>
</div>

<div>
<div class="text-4xl mb-2">🎨</div>
<div class="font-bold">UnoCSS</div>
<div class="text-xs opacity-60">原子化 CSS</div>
</div>

<div>
<div class="text-4xl mb-2">📊</div>
<div class="font-bold">Slidev</div>
<div class="text-xs opacity-60">演示框架</div>
</div>

<div>
<div class="text-4xl mb-2">🎭</div>
<div class="font-bold">seedrandom</div>
<div class="text-xs opacity-60">稳定随机</div>
</div>

</div>

<div class="mt-12 text-center opacity-70">
<div class="text-sm">支持 11 种 Glow 分布 × 3 种颜色预设 × 2 种主题</div>
<div class="text-xs mt-2">= 66 种视觉组合</div>
</div>

---
glowSeed: 22
glow: center
glowPreset: blue
class: text-center
---

# 谢谢观看

<div class="mt-12 space-y-4">
<div class="text-xl opacity-80">neko-style - 从 neko-talks 提取的设计精髓</div>
<div class="flex justify-center gap-8 mt-8">
<div class="text-blue-400">
<carbon-logo-github class="inline text-2xl"/> GitHub
</div>
<div class="text-blue-400">
<carbon-document class="inline text-2xl"/> 文档
</div>
</div>
</div>

---
layout: section
glowSeed: 300
sectionNumber: 1
sectionTitle: 布局系统演示
sectionSubtitle: 专业演讲结构
accentColor: '#60cd6a'
---

---
layout: contents-toc
glowSeed: 350
sections:
  - 布局系统演示
  - 高级组件功能
  - 真实案例参考
clicks: 1
---

---
glowSeed: 400
---

# 新增布局系统

neko-style 现在包含完整的布局系统:

<div class="grid grid-cols-2 gap-6 mt-8">

<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2 font-bold>cover.vue</div>
  <div px-4 py-3 text-sm>
    封面页布局<br/>
    支持 logo 和品牌元素
  </div>
</div>

<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2 font-bold>section.vue</div>
  <div px-4 py-3 text-sm>
    章节分隔页<br/>
    清晰的主题过渡
  </div>
</div>

<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2 font-bold>contents-toc.vue</div>
  <div px-4 py-3 text-sm>
    目录页<br/>
    带动画的章节列表
  </div>
</div>

<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2 font-bold>end.vue</div>
  <div px-4 py-3 text-sm>
    结束页<br/>
    感谢和联系方式
  </div>
</div>

</div>

---
layout: section
glowSeed: 450
sectionNumber: 2
sectionTitle: 高级组件
sectionSubtitle: 可选功能扩展
accentColor: '#3b82f6'
---

---
glowSeed: 500
---

# 高级组件功能

<div class="space-y-6 mt-8">

<div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
  <div bg="purple-800/40" px-4 py-2 font-bold>@vueuse/motion</div>
  <div px-4 py-3>
    声明式动画系统，流畅的入场效果
  </div>
</div>

<div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
  <div bg="purple-800/40" px-4 py-2 font-bold>Asciinema Player</div>
  <div px-4 py-3>
    终端录屏播放器，展示命令行操作
  </div>
</div>

<div border="2 solid purple-800" bg="purple-800/20" rounded-lg overflow-hidden>
  <div bg="purple-800/40" px-4 py-2 font-bold>Three.js / TresJS</div>
  <div px-4 py-3>
    3D 可视化，交互式图形展示
  </div>
</div>

</div>

<div class="mt-8 text-sm opacity-70">
💡 所有高级功能都是可选依赖，不会影响基础功能
</div>

---
glowSeed: 550
---

# 真实演讲案例

从 17 个真实演讲中提取的最佳实践:

<div class="grid grid-cols-2 gap-4 mt-8 text-sm">

<div bg="white/5" border="border-white/10" rounded p-4>
  <div class="font-bold mb-2">🎤 KubeCon Hong Kong</div>
  <div class="opacity-70">专业会议演讲风格</div>
</div>

<div bg="white/5" border="border-white/10" rounded p-4>
  <div class="font-bold mb-2">🧠 LLM 深度解析</div>
  <div class="opacity-70">技术深度内容展示</div>
</div>

<div bg="white/5" border="border-white/10" rounded p-4>
  <div class="font-bold mb-2">🤖 AI/ML 主题</div>
  <div class="opacity-70">学术研究分享</div>
</div>

<div bg="white/5" border="border-white/10" rounded p-4>
  <div class="font-bold mb-2">🦀 Rust 技术</div>
  <div class="opacity-70">创新技术演讲</div>
</div>

</div>

<div class="mt-8 text-center opacity-70">
查看 <span class="text-blue-400">examples/README.md</span> 了解详细案例
</div>

---
layout: end
glowSeed: 600
---
