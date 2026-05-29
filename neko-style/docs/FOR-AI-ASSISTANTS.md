# 给 AI 的使用说明

本文档专门为 AI 助手编写，帮助你快速理解和使用这个 Slidev 模板。

## 📋 模板概述

这是一个从 KubeCon HK 2025 演示文稿提取的专业技术演示模板，包含：
- 动态 Glow 背景效果（支持深色/浅色主题）
- 语义化配色系统
- 丰富的可复用组件
- 平滑的动画系统（统一 500ms 过渡）
- 完整的文档和示例
- 基于种子的稳定随机背景生成

## 🎯 核心设计原则

### 1. 语义化配色
- **红色系** (`red-800`) - 问题、警告、传统方案的缺点
- **绿色系** (`green-800`) - 解决方案、成功、改进
- **蓝色系** (`blue-800`) - 中性信息、技术细节
- **紫色系** (`purple-800`) - 高级功能、特殊特性
- **黄色系** (`yellow-800`) - 性能、速度、警告

### 2. 统一的动画时长
所有动画使用 `transition duration-500 ease-in-out`

### 3. 卡片结构模式
```vue
<div border="2 solid [color]-800" bg="[color]-800/20" rounded-lg overflow-hidden>
  <div bg="[color]-800/40" px-4 py-2>
    标题栏
  </div>
  <div px-4 py-3>
    内容区
  </div>
</div>
```

## 🔧 当用户请求创建 Slidev 时

### 步骤 1：了解需求
询问用户：
- 演示主题是什么？
- 需要展示哪些内容？（问题、解决方案、技术细节、指标等）
- 是否需要对比展示？

### 步骤 2：选择合适的组件

**详细的组件路由表请查阅 `docs/COMPONENT-CATALOG.md`**，以下是快速参考：

| 内容类型 | 推荐组件 | 复杂度 |
|---------|---------|--------|
| 分类图标/技术栈列表 | `CategoryIconList` | 简单 |
| 水平图标标签流（flex wrap） | `IconLabelWrap` | 简单 |
| 左边框强调列表（评估/决策） | `AccentBorderList` | 简单 |
| 议程/目录网格 | `AgendaGrid` | 简单 |
| 大字居中声明/引言 | `CenteredStatement` | 简单 |
| 统计/指标行 | `StatsRow` | 简单 |
| 学习路径/进阶步骤 | `LearningPathSteps` | 简单 |
| 代码+解释分栏 | `CodeExplainSplit` | 简单 |
| 功能/特性展示 | `FeatureIconGrid` | 简单 |
| 步骤/流程（带箭头） | `StackedFlowPipeline` | 中等 |
| 路线/进化/频谱 | `RouteProgressionLane` | 中等 |
| 系统架构图（节点连线） | `FlowDiagram` | 复杂 |
| 数据流/管道 | `EventPipeline` | 复杂 |
| 工具循环/轨道模型 | `TerminalOrbitDemo` | 复杂 |
| 系统分层 | `LayeredArchView` | 中等 |
| 问题 vs 解决方案 | `ProblemSolutionSplit` | 简单 |
| 原因 + 经验教训 | `ReasonLessonGrid` | 简单 |
| 关键洞察/要点 | `LearningCallout` | 简单 |
| 底部提示条 | `InsightCalloutBar` | 简单 |
| 横幅图片 + 事实列表 | `BannerSplitLayout` | 简单 |
| 全屏视频 + 标题覆盖 | `FadeVideoSlide` | 简单 |
| 问题/挑战三列 | `LifecycleChallengesThreeCol` | 简单 |
| 模式/概念卡片网格 | `PatternCardGrid` | 简单 |
| 清单（玻璃态） | `GlassChecklist` | 简单 |
| 对比展示 | `ProblemSolutionSplit` | 简单 |

**页面组合配方请查阅 `docs/PAGE-PATTERNS.md`** — 包含完整可复制的 slide 代码。

### 步骤 3：从 theme/README.md 查阅组件用法

**重要**：参考 `theme/README.md` 中的组件 props 和用法示例，然后修改：
1. 标题文字
2. 内容文字
3. 图标（如果需要）
4. 颜色（如果需要）

### 步骤 4：配置 Glow 背景

> ⚠️ 如果用户是在现有项目里“迁移”模板，不是从 starter 新建：
> 你必须先创建一页最小 smoke test，再继续写内容。

最小 smoke test（先复制这页再说）：

```yaml
---
theme: neko-style
glowSeed: 101
glowPreset: blue
glow: full
glowOpacity: 0.4
---

# Glow Smoke Test
```

然后检查项目是否存在会覆盖背景的全局 CSS：

```bash
rg -n "\.slidev-layout|background:\s*black|background-color:\s*#000|background-color:\s*black" .
```

若存在，先移除/注释后再继续生成内容。

### 常规 Glow 配置（通过 smoke test 后再用）

每页使用不同的 `glowSeed` 值，可选配置主题：
```yaml
---
glowSeed: 100        # 第一页（深色主题，默认）
---

---
glowSeed: 150        # 第二页
theme: light         # 可选：切换到浅色主题
glowOpacity: 0.6     # 可选：调整透明度
---

---
glowSeed: 200        # 第三页
glow: right          # 可选：背景位置（full/top/bottom/left/right/center）
glowHue: 30          # 可选：色相偏移
---
```

**新功能**：
- `theme: light` - 切换到浅色主题（默认 `dark`）
- `glowOpacity` - 控制背景透明度（0-1，默认 0.4）
- `glowHue` - 色相偏移（0-360，默认 0）
- `glow` - 背景分布位置

## 📝 常见场景的代码模板

### 场景 1：展示问题和解决方案

```markdown
---
glowSeed: 150
---

# 标题

<div grid grid-cols-2 gap-6>

<v-click>
<div border="2 solid red-800" bg="red-800/20" rounded-lg overflow-hidden>
  <div bg="red-800/40" px-4 py-2 flex items-center>
    <div i-carbon:warning-alt text-red-300 text-xl mr-2 />
    <span font-bold>传统方案的问题</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:close text-red-400 />
      <span>问题点 1</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:close text-red-400 />
      <span>问题点 2</span>
    </div>
  </div>
</div>
</v-click>

<v-click>
<div border="2 solid green-800" bg="green-800/20" rounded-lg overflow-hidden>
  <div bg="green-800/40" px-4 py-2 flex items-center>
    <div i-carbon:checkmark text-green-300 text-xl mr-2 />
    <span font-bold>我们的解决方案</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>优势 1</span>
    </div>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>优势 2</span>
    </div>
  </div>
</div>
</v-click>

</div>
```

### 场景 2：展示性能指标

```markdown
---
glowSeed: 200
---

# 性能提升

<div grid grid-cols-3 gap-4>

<v-click>
<div border="2 solid lime-800" bg="lime-800/20" rounded-lg p-5 flex flex-col items-center>
  <div i-carbon:lightning text-yellow-500 text="[80px]" mb-4 />
  <div font-bold text-xl>速度</div>
  <div text-lime-300 text-2xl font-bold mt-2>10x</div>
  <div text-sm opacity-70 mt-1>更快</div>
</div>
</v-click>

<v-click>
<div border="2 solid cyan-800" bg="cyan-800/20" rounded-lg p-5 flex flex-col items-center>
  <div i-carbon:save text-cyan-500 text="[80px]" mb-4 />
  <div font-bold text-xl>存储</div>
  <div text-cyan-300 text-2xl font-bold mt-2>90%</div>
  <div text-sm opacity-70 mt-1>节省</div>
</div>
</v-click>

<v-click>
<div border="2 solid purple-800" bg="purple-800/20" rounded-lg p-5 flex flex-col items-center>
  <div i-carbon:time text-purple-500 text="[80px]" mb-4 />
  <div font-bold text-xl>时间</div>
  <div text-purple-300 text-2xl font-bold mt-2>75%</div>
  <div text-sm opacity-70 mt-1>减少</div>
</div>
</v-click>

</div>
```

### 场景 3：技术栈展示

```markdown
---
glowSeed: 250
---

# 技术栈

<div flex items-center justify-center gap-8>

<v-click>
<div flex items-center gap-3>
  <div i-logos:kubernetes text-6xl />
  <span text-4xl>Kubernetes</span>
</div>
</v-click>

<v-click>
<div text-4xl opacity-50>+</div>
</v-click>

<v-click>
<div flex items-center gap-3>
  <div i-logos:docker-icon text-6xl />
  <span text-4xl>Docker</span>
</div>
</v-click>

</div>
```

## 🎨 图标选择指南

常用图标（来自 `@iconify-json/carbon`）：

| 用途 | 图标 |
|------|------|
| 警告/问题 | `i-carbon:warning-alt` |
| 成功/完成 | `i-carbon:checkmark` |
| 错误/关闭 | `i-carbon:close` |
| 信息 | `i-carbon:information` |
| 性能/速度 | `i-carbon:lightning` |
| 时间 | `i-carbon:time` |
| 代码 | `i-carbon:code` |
| 数据 | `i-carbon:data-volume` |
| 安全 | `i-carbon:security` |
| 火箭/启动 | `i-carbon:rocket` |

品牌图标（来自 `@iconify-json/logos`）：
- `i-logos:kubernetes`
- `i-logos:docker-icon`
- `i-logos:python`
- `i-logos:nodejs-icon`

## 🚫 强制约束：使用 neko-style 时必须优先复用内置组件

> **这是硬性规则，不是建议。** 当用户明确要求使用 neko-style 主题时，AI 必须先匹配内置组件，而不是直接手写通用 div。

### 组件优先决策流程

在生成每一页之前，按以下流程决策：

```
1. 这页要表达什么内容类型？
   ↓
2. 查 COMPONENT-CATALOG.md 或下表，是否有匹配组件？
   ↓
3. 有 → 使用组件（修改 props 内容，不要重新实现）
   没有 → 使用 .neko-glass-card 语义卡片模式（见下方）
   ↓
4. 交付前执行自检清单（见下方）
```

### 高频场景强制组件匹配

| 页面意图 | 必须优先用 | 禁止替代方案 |
|---------|-----------|------------|
| 议程 / 目录 / 三件事 | `AgendaGrid` | 手写 flex div 列表 |
| 三列能力 / 特性 / 挑战 | `FeatureIconGrid` 或 `LifecycleChallengesThreeCol` | 手写三列 grid |
| 模式 / 方法学 / 概念卡片 | `PatternCardGrid` | 手写 2x2 grid |
| 流程步骤（带箭头） | `ProcessFlowGrid` 或 `StackedFlowPipeline` | 手写 flex + 箭头 |
| 问题 vs 解决方案 | `ProblemSolutionSplit` | 手写红绿双列 |
| Checklist / 要点列表 | `GlassChecklist` | 手写 ul/li |
| 结论强调条 | `InsightCalloutBar` | 手写 banner div |
| 指标 / 数字 | `StatsRow` | 手写数字卡片 |
| 技术栈 / 图标列表 | `CategoryIconList` 或 `IconLabelWrap` | 手写 flex wrap |
| 代码 + 说明 | `CodeExplainSplit` | 手写双列 grid |
| 分层架构 | `LayeredArchView` | 手写堆叠 div |

### 禁止的浅色卡片写法

下列写法在 neko-style 深色主题下会产生视觉割裂，**除非该页显式设置 `theme: light`，否则禁止使用**：

```html
<!-- ❌ 禁止 -->
<div class="p-5 border border-sky-200 bg-sky-50 rounded-lg">
<div class="bg-emerald-50 border border-emerald-200">
<div class="bg-violet-50 text-slate-600">
<div class="bg-slate-100 border border-gray-200">
```

正确替代：

```html
<!-- ✅ 使用主题组件 -->
<FeatureIconGrid :columns="3" :items="..." />

<!-- ✅ 或使用 neko-glass-card 语义模式 -->
<div class="neko-glass-card p-5">内容</div>

<!-- ✅ 或使用语义色边框卡片 -->
<div border="2 solid green-800" bg="green-800/20" rounded-lg overflow-hidden>
  <div bg="green-800/40" px-4 py-2>标题</div>
  <div px-4 py-3>内容</div>
</div>
```

### 交付前 AI 自检清单

在生成完所有页面后，逐项检查：

```
□ 是否出现大量普通 div 卡片（没有使用任何内置组件）？
□ 是否存在 bg-*-50 / bg-slate-100 / border-*-200 等浅色卡片样式？
□ 是否存在 text-slate-600 / text-gray-700 等深色文字（在暗色背景下几乎不可见）？
□ 每一页是否能对应到 neko-style 的一个 layout 或 component？
□ 如果某页没有使用内置组件，是否有明确原因？
```

如果上述任一项为"是"，先修正再交付。

## ⚠️ 重要注意事项

### 1. 不要修改核心结构
保持卡片的基本结构不变：
```vue
<div border="2 solid [color]-800" bg="[color]-800/20" rounded-lg overflow-hidden>
  <div bg="[color]-800/40" px-4 py-2>
    <!-- 标题栏 -->
  </div>
  <div px-4 py-3>
    <!-- 内容区 -->
  </div>
</div>
```

### 2. 保持动画一致性
所有动画使用 class-toggle + CSS transition：
```vue
transition duration-500 ease-in-out
:class="$clicks < N ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'"
```

**禁止使用 `<Transition>` 或 `<TransitionGroup>`** 来做 click 动画。
原因：Vue Transition 控制 DOM 插入/移除，导致：
- 倒放时元素瞬间消失（无 leave 动画）
- 页面切换时元素在 fade-out 完成前被移除

正确做法：始终用 `:class` 绑定 + CSS `transition` 属性，元素常驻 DOM，前进/后退都平滑过渡。

### 3. 使用语义化配色
- 问题 → 红色
- 解决方案 → 绿色
- 信息 → 蓝色
- 不要随意混用

### 4. 每页不同的 glowSeed，全场统一 glowPreset
每页使用不同的 `glowSeed` 值（如 100, 150, 200, 250...），但 `glowPreset` 在整个演示文档中只用一个。

**在第一页 frontmatter 决定配色，其余页沿用，不要中途切换：**
```yaml
# ✅ 正确：全场统一 preset
glowPreset: cyan   # 确定后所有页都用这个

# ❌ 错误：封面 blue → 中间 cyan → 附录 rust（视觉横跳）
```

配色选择参考：
- `blue` — 技术产品发布、工程主题
- `rust` — Rust/创新/突破性话题
- `cyan` — AI/ML、医疗影像、学术研究

## 🔍 调试清单

当用户报告问题时，检查：

1. ✅ `global-bottom.vue` 是否在项目根目录
2. ✅ 是否安装了 `seedrandom`
3. ✅ 是否安装了图标集（`@iconify-json/carbon` 等）
4. ✅ `style.css` 是否包含基础样式
5. ✅ `uno.config.ts` 是否正确配置

## 📚 文档优先级

当用户需要帮助时，按以下顺序引导：

1. **theme/README.md** ⭐⭐⭐ - 最重要，包含所有组件 props、布局、配色、动画
2. **docs/FOR-AI-ASSISTANTS.md** ⭐⭐ - 本文件，AI 使用指南
3. **starter/slides.md** ⭐ - 完整运行示例
4. **docs/design-language-airi-2025-10.md** - 设计语言参考

## 🤖 Claude Code Skill

如果用户使用 Claude Code，可以创建一个 skill 来快速激活这个模板：

1. 复制 `neko-style/SKILL.md` 到项目根目录的 `.claude/skills/neko-slidev.md`
2. 使用 `/neko-slidev` 命令激活

```bash
cp neko-style/SKILL.md .claude/skills/neko-slidev.md
```

**注意**：`.claude/` 目录已被 `.gitignore` 排除，每个用户需要在本地创建。

## 💡 最佳实践

1. **从示例开始**：建议用户先运行 `starter` 项目
2. **复制粘贴**：从 `theme/README.md` 参考组件用法
3. **渐进修改**：先复制，再修改文字和颜色
4. **保持简洁**：一页不要放太多内容
5. **使用 v-click**：控制内容渐进展示

## 🎯 快速响应模板

当用户说"帮我创建一个关于 XXX 的演示"时：

```
好的！我会使用 KubeCon Style 模板为你创建演示。

这个模板包含：
- 动态 Glow 背景
- 专业的卡片组件
- 平滑的动画效果

我会创建以下页面：
1. 封面页
2. [根据主题列出页面]
3. ...

让我开始创建...
```

然后从 `theme/README.md` 查阅合适的组件用法，修改内容。

## 🚀 效率提升技巧

1. **预设模板**：记住常用的页面结构
2. **批量替换**：使用查找替换修改颜色
3. **增量构建**：先创建基本结构，再添加动画
4. **参考示例**：遇到不确定的情况，查看 `starter/slides.md`

---

记住：这个模板的核心价值在于**可复用的组件**和**语义化的配色**。
参考 `theme/README.md` 中的组件代码示例，然后修改内容，是最高效的使用方式。

## 颜色预设系统

neko-style 现在支持 3 种颜色预设，灵感来自 neko-talks 演讲系列：

### 可用预设

1. **blue** (默认) - 蓝色科技风
   - 主色: #18549a → #12238b
   - 强调色: #01b6d1
   - 适用场景: 技术演讲、产品发布

2. **rust** - 橙红色活力风
   - 主色: #ed5132 → #ed4832
   - 强调色: #ed5132
   - 适用场景: Rust 相关、创新主题
   - 参考: neko-talks "Rust with AI for Better Portability"

3. **cyan** - 青蓝色清新风
   - 主色: #32aeed → #32e5ed
   - 强调色: #32aeed
   - 适用场景: AI/ML 主题、学术演讲
   - 参考: neko-talks "Fudan University AIRI Dev Talk"

### 使用方法

在 slides.md 的 frontmatter 中指定 `glowPreset`:

```yaml
---
glowSeed: 42
glowPreset: rust  # 使用 rust 橙红色预设
---
```

### 组合示例

```yaml
---
# Rust 主题演讲
glowSeed: 233
glowPreset: rust
glow: center
glowOpacity: 0.4
theme: dark
---
```

```yaml
---
# AI 学术演讲
glowSeed: 128
glowPreset: cyan
glow: top
glowOpacity: 0.3
theme: light
---
```

### 自定义颜色

如果需要自定义颜色，可以修改 `components/GlowBackground.vue` 中的 `colorPresets` 对象：

```typescript
const colorPresets: Record<ColorPreset, { from: string; to: string; accent: string }> = {
  // 添加新预设
  purple: {
    from: '#8b5cf6',
    to: '#6d28d9',
    accent: '#a78bfa',
  },
}
```

然后在 TypeScript 类型中添加：

```typescript
export type ColorPreset = 'blue' | 'rust' | 'cyan' | 'purple'
```
