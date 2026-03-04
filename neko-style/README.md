# KubeCon Style Slidev Template

> 从 KubeCon HK 2025 演示文稿提取的专业技术演示模板

## ✨ 特性

- 🎨 **动态 Glow 背景** - 每页独特的渐变效果
- 🎯 **语义化配色** - 红色=问题，绿色=解决方案
- 📦 **丰富组件库** - 开箱即用的卡片、指标、动画
- 🚀 **平滑动画** - 统一的过渡效果
- 📚 **完整文档** - 详细的使用指南和示例

## 🚀 5 分钟快速开始

```bash
# 1. 复制示例项目
cp -r example my-presentation
cd my-presentation

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

浏览器会自动打开，你会看到完整的示例演示。

## 📖 文档

| 文档 | 说明 |
|------|------|
| [QUICK-START.md](./QUICK-START.md) | 5 分钟快速入门 ⭐ |
| [components-guide.md](./components-guide.md) | 所有组件的使用方法 ⭐⭐⭐ |
| [color-system.md](./color-system.md) | 配色系统说明 |
| [animation-patterns.md](./animation-patterns.md) | 动画模式指南 |

**推荐学习顺序**：
1. 运行 `example` 项目（5 分钟）
2. 阅读 `components-guide.md`（10 分钟）⭐ 最重要
3. 阅读 `QUICK-START.md`（5 分钟）
4. 开始创建你的演示

## 📁 项目结构

```
kubecon-style/
├── README.md                    # 本文件
├── QUICK-START.md              # 快速入门指南 ⭐
├── components-guide.md          # 组件使用指南 ⭐⭐⭐
├── animation-patterns.md        # 动画模式指南
├── color-system.md             # 配色系统说明
├── components/
│   └── GlowBackground.vue      # Glow 背景组件
├── styles/
│   └── base.css                # 基础样式
├── configs/
│   └── uno.config.example.ts   # UnoCSS 配置示例
└── example/                    # 完整示例项目 ⭐
    ├── slides.md               # 示例幻灯片
    ├── package.json
    ├── uno.config.ts
    ├── style.css
    └── global-bottom.vue
```

## 🎨 核心组件预览

### 信息卡片
```vue
<div border="2 solid blue-800" bg="blue-800/20" rounded-lg p-4>
  内容
</div>
```

### 对比卡片
```vue
<!-- 问题 -->
<div border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
  问题描述
</div>

<!-- 解决方案 -->
<div border="2 solid green-800" bg="green-800/20" rounded-lg p-4>
  解决方案
</div>
```

### 指标展示
```vue
<div border="2 solid lime-800" bg="lime-800/20" rounded-lg p-5 flex flex-col items-center>
  <div i-carbon:lightning text-yellow-500 text="[80px]" />
  <div text-lime-300 text-2xl font-bold>10x</div>
</div>
```

更多组件请查看 [components-guide.md](./components-guide.md)

## 🎯 配色系统

| 颜色 | 用途 | 示例 |
|------|------|------|
| 🔴 红色 | 问题、警告 | `red-800` |
| 🟢 绿色 | 解决方案、成功 | `green-800` |
| 🔵 蓝色 | 中性信息 | `blue-800` |
| 🟣 紫色 | 高级功能 | `purple-800` |
| 🟡 黄色 | 性能、速度 | `yellow-800` |

详细说明请查看 [color-system.md](./color-system.md)

## 🎬 动画效果

```vue
<!-- 从下方滑入 -->
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  内容
</div>
```

更多动画模式请查看 [animation-patterns.md](./animation-patterns.md)

## 🔧 依赖

### 必需
- `seedrandom` - Glow 背景效果
- `@iconify-json/carbon` - Carbon 图标集
- `@iconify-json/logos` - 品牌 Logo
- `@iconify-json/devicon` - 开发工具图标

### 安装
```bash
npm install seedrandom
npm install -D @iconify-json/carbon @iconify-json/logos @iconify-json/devicon
```

## 💡 使用技巧

1. **每页不同背景**：改变 `glowSeed` 值
   ```yaml
   ---
   glowSeed: 229
   ---
   ```

2. **语义化配色**：红色=问题，绿色=解决方案

3. **渐进展示**：使用 `v-click` 控制出现顺序

4. **保持一致**：使用统一的动画时长（500ms）

5. **复制粘贴**：直接从 `components-guide.md` 复制代码

## 📝 常见问题

### Q: Glow 背景不显示？
**A**: 确保 `GlowBackground.vue` 被重命名为 `global-bottom.vue` 并放在项目根目录。

### Q: 图标不显示？
**A**: 检查是否安装了对应的图标集：
```bash
npm install -D @iconify-json/carbon
```

### Q: 如何自定义颜色？
**A**: 参考 [color-system.md](./color-system.md)，使用 UnoCSS 的颜色工具类。

### Q: 如何添加动画？
**A**: 参考 [animation-patterns.md](./animation-patterns.md)，使用 `v-click` 和过渡类。

## 🌟 最佳实践

1. ✅ 先运行 `example` 项目了解效果
2. ✅ 从 `components-guide.md` 复制代码
3. ✅ 使用语义化配色
4. ✅ 保持动画时长一致
5. ✅ 每页使用不同的 `glowSeed`

## 📄 License

MIT

## 🙏 Credits

设计灵感来自 KubeCon HK 2025 演示文稿。

---

**开始创建你的专业演示吧！** 🚀

有问题？查看 [QUICK-START.md](./QUICK-START.md) 或 [components-guide.md](./components-guide.md)

## 🎨 颜色预设

支持 3 种颜色预设，灵感来自 neko-talks 演讲系列：

- **blue** (默认) - 蓝色科技风 - 适用于技术演讲、产品发布
- **rust** - 橙红色活力风 - 适用于 Rust 主题、创新演讲  
- **cyan** - 青蓝色清新风 - 适用于 AI/ML、学术演讲

### 使用方法

在 slides.md 的 frontmatter 中指定 `glowPreset`:

```yaml
---
glowSeed: 42
glowPreset: rust  # 使用 rust 橙红色预设
glow: center
theme: dark
---
```

### 可用预设详情

| 预设 | 主色渐变 | 强调色 | 适用场景 |
|------|---------|--------|---------|
| blue | #18549a → #12238b | #01b6d1 | 技术演讲、产品发布 |
| rust | #ed5132 → #ed4832 | #ed5132 | Rust 相关、创新主题 |
| cyan | #32aeed → #32e5ed | #32aeed | AI/ML 主题、学术演讲 |

更多详情请查看 [AI-GUIDE.md](./AI-GUIDE.md#颜色预设系统)
