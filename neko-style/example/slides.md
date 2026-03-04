---
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
