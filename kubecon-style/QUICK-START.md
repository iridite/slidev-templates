# 快速入门指南

5 分钟快速上手 KubeCon Style 模板。

## 🚀 方式一：使用示例项目（推荐）

### 1. 复制示例项目

```bash
cd slidev-templates/kubecon-style
cp -r example my-presentation
cd my-presentation
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

浏览器会自动打开 `http://localhost:3030`，你会看到完整的示例演示。

### 4. 开始编辑

编辑 `slides.md` 文件，保存后会自动刷新。

---

## 📝 方式二：在现有项目中使用

### 1. 复制必要文件

```bash
# 复制 Glow 背景组件（必需）
cp components/GlowBackground.vue your-project/global-bottom.vue

# 复制样式文件（必需）
cp styles/base.css your-project/style.css

# 复制 UnoCSS 配置（必需）
cp configs/uno.config.example.ts your-project/uno.config.ts
```

### 2. 安装依赖

```bash
cd your-project
npm install seedrandom
npm install -D @iconify-json/carbon @iconify-json/logos @iconify-json/devicon
```

### 3. 在 slides.md 中使用

```markdown
---
layout: center
glowSeed: 229
glow: right
---

# 你的标题

<div border="2 solid blue-800" bg="blue-800/20" rounded-lg p-4>
  你的内容
</div>
```

---

## 📚 学习路径

### 第 1 步：运行示例（5 分钟）

运行 `example` 项目，浏览所有示例页面，了解可用的组件和效果。

### 第 2 步：阅读组件指南（10 分钟）

打开 `components-guide.md`，这是最重要的文档，包含所有可用组件的代码示例。

**重点关注**：
- 信息卡片
- 对比卡片（问题 vs 解决方案）
- 指标展示卡片

### 第 3 步：了解配色系统（5 分钟）

打开 `color-system.md`，学习语义化配色：
- 红色 = 问题
- 绿色 = 解决方案
- 蓝色 = 中性信息

### 第 4 步：学习动画（5 分钟）

打开 `animation-patterns.md`，学习如何添加动画效果。

### 第 5 步：开始创建（∞）

复制 `components-guide.md` 中的代码，根据需要修改内容和颜色。

---

## 🎯 第一个幻灯片

### 创建标题页

```markdown
---
layout: cover
glowSeed: 229
---

# 我的演示标题

副标题或简短描述

<div mt-8 text-xl opacity-70>
  日期 | 地点
</div>
```

### 创建内容页

```markdown
---
glowSeed: 100
---

# 页面标题

<div mt-6 grid grid-cols-2 gap-6>

<v-click>
<div border="2 solid blue-800" bg="blue-800/20" rounded-lg p-4>
  左侧内容
</div>
</v-click>

<v-click>
<div border="2 solid green-800" bg="green-800/20" rounded-lg p-4>
  右侧内容
</div>
</v-click>

</div>
```

---

## 💡 常用代码片段

### 信息卡片

```vue
<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2 flex items-center>
    <div i-carbon:information text-blue-300 text-xl mr-2 />
    <span font-bold>标题</span>
  </div>
  <div px-4 py-3>
    内容
  </div>
</div>
```

### 问题卡片

```vue
<div border="2 solid red-800" bg="red-800/20" rounded-lg overflow-hidden>
  <div bg="red-800/40" px-4 py-2 flex items-center>
    <div i-carbon:warning-alt text-red-300 text-xl mr-2 />
    <span font-bold>问题</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:close text-red-400 />
      <span>问题点 1</span>
    </div>
  </div>
</div>
```

### 解决方案卡片

```vue
<div border="2 solid green-800" bg="green-800/20" rounded-lg overflow-hidden>
  <div bg="green-800/40" px-4 py-2 flex items-center>
    <div i-carbon:checkmark text-green-300 text-xl mr-2 />
    <span font-bold>解决方案</span>
  </div>
  <div px-4 py-3 flex flex-col gap-2>
    <div flex items-center gap-2>
      <div i-carbon:checkmark-outline text-green-400 />
      <span>优势 1</span>
    </div>
  </div>
</div>
```

### 指标卡片

```vue
<div border="2 solid lime-800" bg="lime-800/20" rounded-lg p-5 flex flex-col items-center>
  <div i-carbon:lightning text-yellow-500 text="[80px]" mb-4 />
  <div font-bold text-xl>性能</div>
  <div text-lime-300 text-2xl font-bold mt-2>10x</div>
  <div text-sm opacity-70 mt-1>提升</div>
</div>
```

---

## 🎨 自定义 Glow 背景

在每页�� frontmatter 中配置：

```yaml
---
glowSeed: 229        # 改变这个数字获得不同的图案
glow: right          # 位置: full/top/bottom/left/right/center
glowOpacity: 0.4     # 透明度 (0-1)
glowHue: 0           # 色相偏移
---
```

**建议**：每页使用不同的 `glowSeed` 值（如 100, 150, 200...）

---

## 🔧 常见问题

### Q: 背景不显示？
**A**: 确保 `GlowBackground.vue` 被重命名为 `global-bottom.vue` 并放在项目根目录。

### Q: 图标不显示？
**A**: 运行 `npm install -D @iconify-json/carbon`

### Q: 如何更改颜色？
**A**: 将 `blue-800` 替换为其他颜色，如 `green-800`, `red-800`, `purple-800`

### Q: 如何添加动画？
**A**: 使用 `v-click` 和过渡类：
```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  内容
</div>
```

---

## 📖 下一步

1. ✅ 运行示例项目
2. ✅ 阅读 `components-guide.md`
3. ✅ 创建你的第一个幻灯片
4. 📚 深入学习 `color-system.md` 和 `animation-patterns.md`
5. 🎨 根据需要自定义样式

---

## 💬 需要帮助？

- 查看 `components-guide.md` - 所有组件的完整示例
- 查看 `color-system.md` - 配色方案说明
- 查看 `animation-patterns.md` - 动画效果指南
- 查看 `example/slides.md` - 完整的示例代码

---

## 🌟 提示

1. **从示例开始**：复制 `example` 项目，在此基础上修改
2. **复制粘贴**：直接从 `components-guide.md` 复制代码
3. **保持一致**：使用相同的动画时长和配色方案
4. **渐进展示**：使用 `v-click` 控制内容出现顺序
5. **每页不同背景**：改变 `glowSeed` 值

开始创建你的专业演示吧！🚀
