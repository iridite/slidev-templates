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

根据内容类型选择：

| 内容类型 | 推荐组件 | 颜色 |
|---------|---------|------|
| 问题/挑战 | 问题卡片 | `red-800` |
| 解决方案 | 解决方案卡片 | `green-800` |
| 技术说明 | 信息卡片 | `blue-800` |
| 性能指标 | 指标卡片 | `lime-800` |
| 高级功能 | 信息卡片 | `purple-800` |
| 对比展示 | 左右对比布局 | `red-800` + `green-800` |

### 步骤 3：从 components-guide.md 复制代码

**重要**：直接从 `components-guide.md` 复制完整的代码块，然后修改：
1. 标题文字
2. 内容文字
3. 图标（如果需要）
4. 颜色（如果需要）

### 步骤 4：配置 Glow 背景

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
所有动画使用：
```vue
transition duration-500 ease-in-out
:class="$clicks < N ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
```

### 3. 使用语义化配色
- 问题 → 红色
- 解决方案 → 绿色
- 信息 → 蓝色
- 不要随意混用

### 4. 每页不同的 glowSeed
每页使用不同的 `glowSeed` 值（如 100, 150, 200, 250...）

## 🔍 调试清单

当用户报告问题时，检查：

1. ✅ `global-bottom.vue` 是否在项目根目录
2. ✅ 是否安装了 `seedrandom`
3. ✅ 是否安装了图标集（`@iconify-json/carbon` 等）
4. ✅ `style.css` 是否包含基础样式
5. ✅ `uno.config.ts` 是否正确配置

## 📚 文档优先级

当用户需要帮助时，按以下顺序引导：

1. **components-guide.md** ⭐⭐⭐ - 最重要，包含所有组件代码
2. **QUICK-START.md** ⭐⭐ - 快速入门
3. **color-system.md** ⭐ - 配色说明
4. **animation-patterns.md** ⭐ - 动画说明
5. **example/slides.md** - 完整示例

## 💡 最佳实践

1. **从示例开始**：建议用户先运行 `example` 项目
2. **复制粘贴**：从 `components-guide.md` 直接复制代码
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

然后从 `components-guide.md` 复制合适的组件代码，修改内容。

## 🚀 效率提升技巧

1. **预设模板**：记住常用的页面结构
2. **批量替换**：使用查找替换修改颜色
3. **增量构建**：先创建基本结构，再添加动画
4. **参考示例**：遇到不确定的情况，查看 `example/slides.md`

---

记住：这个模板的核心价值在于**可复用的组件**和**语义化的配色**。
直接从 `components-guide.md` 复制代码，然后修改内容，是最高效的使用方式。
