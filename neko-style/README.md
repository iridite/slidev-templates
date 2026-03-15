# neko-style Slidev 模板

专业技术演示模板,提取自 neko-talks / KubeCon HK 2025 演示文稿。

## ✨ 特性

- 🎨 **动态 Glow 背景** - 基于种子的稳定随机渐变,每页独立配置
- 🌈 **3 种颜色预设** - blue(科技蓝)、rust(橙红)、cyan(青蓝)
- 🎯 **语义化配色** - 红色=问题,绿色=解决方案,蓝色=信息
- 📦 **丰富组件库** - 信息卡片、对比卡片、指标卡片
- 🎭 **专业布局系统** - 封面、章节、目录、结束页布局
- 🚀 **平滑动画系统** - 统一 500ms 过渡效果
- ⚡ **高级功能** - v-motion 动画、Asciinema 播放器、Three.js 3D
- 📚 **完整文档** - 快速入门、组件指南、AI 助手指南
- 🎓 **真实案例** - 来自 KubeCon、LLM 深度解析等演讲

## 🚀 快速开始

### 方式 1: 使用 Starter Template（推荐新手）

直接复制 starter 模板开始：

```bash
npx degit user/repo/neko-style/starter my-presentation
cd my-presentation
npm install
npm run dev
```

### 方式 2: 安装 Theme Package（推荐进阶用户）

在现有 Slidev 项目中安装 theme：

```bash
npm install slidev-theme-neko-style
```

在 slides.md 中引用：

```yaml
---
theme: neko-style
---
```

### 在 Monorepo 中开发

```bash
# 在仓库根目录
npm install
npm run dev:neko
```

## 📖 文档

| 文档 | 说明 |
|------|------|
| [docs/QUICK-START.md](./docs/QUICK-START.md) | 5 分钟快速入门 ⭐ |
| [docs/components-guide.md](./docs/components-guide.md) | 所有组件使用方法 ⭐⭐⭐ |
| [docs/layouts-guide.md](./docs/layouts-guide.md) | 布局系统使用指南 ⭐⭐ |
| [docs/advanced-components.md](./docs/advanced-components.md) | 高级组件指南 |
| [docs/color-system.md](./docs/color-system.md) | 配色系统说明 |
| [docs/animation-patterns.md](./docs/animation-patterns.md) | 动画模式指南 |
| [docs/optional-dependencies.md](./docs/optional-dependencies.md) | 可选依赖说明 |
| [docs/FOR-AI-ASSISTANTS.md](./docs/FOR-AI-ASSISTANTS.md) | AI 助手使用指南 |
| [examples/README.md](./examples/README.md) | 真实演讲案例 ⭐ |

**推荐学习顺序**:
1. 运行 `example` 项目(5 分钟)
2. 阅读 `components-guide.md`(10 分钟)⭐ 最重要
3. 开始创建你的演示

## 📁 项目结构

```
neko-style/
├── README.md                    # 本文件
├── theme/                       # NPM Theme Package
│   ├── package.json
│   ├── components/              # 主题组件
│   │   ├── GlowBackground.vue
│   │   ├── Background.vue
│   │   └── advanced/
│   ├── layouts/                 # 布局系统
│   │   ├── cover.vue
│   │   ├── section.vue
│   │   ├── contents-toc.vue
│   │   └── end.vue
│   ├── styles/
│   │   └── index.css
│   ├── setup/
│   └── README.md
├── starter/                     # Starter Template ⭐
│   ├── package.json
│   ├── slides.md                # 示例幻灯片
│   ├── uno.config.ts
│   └── README.md
├── docs/                        # 文档
│   ├── QUICK-START.md
│   ├── components-guide.md      ⭐⭐⭐
│   ├── layouts-guide.md
│   └── ...
└── examples/                    # 真实演讲案例
    └── README.md
```

## 🎨 颜色预设

支持 3 种颜色预设,灵感来自 neko-talks 演讲系列:

| 预设 | 主色渐变 | 适用场景 |
|------|---------|---------|
| **blue** (默认) | #18549a → #12238b | 技术演讲、产品发布 |
| **rust** | #ed5132 → #ed4832 | Rust 主题、创新演讲 |
| **cyan** | #32aeed → #32e5ed | AI/ML、学术演讲 |

### 使用方法

```yaml
---
glowSeed: 42
glowPreset: rust  # blue | rust | cyan
theme: dark       # dark | light
---
```

## 🎯 核心组件

### 信息卡片

```vue
<div border="2 solid blue-800" bg="blue-800/20" rounded-lg overflow-hidden>
  <div bg="blue-800/40" px-4 py-2>标题</div>
  <div px-4 py-3>内容</div>
</div>
```

### 对比卡片

```vue
<div grid grid-cols-2 gap-6>
  <div border="2 solid red-800" bg="red-800/20" rounded-lg p-4>
    问题
  </div>
  <div border="2 solid green-800" bg="green-800/20" rounded-lg p-4>
    解决方案
  </div>
</div>
```

更多组件请查看 [docs/components-guide.md](./docs/components-guide.md)

## 🎬 动画效果

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  内容从下方滑入
</div>
```

更多动画模式请查看 [docs/animation-patterns.md](./docs/animation-patterns.md)

## 💡 使用技巧

1. **每页不同背景** - 改变 `glowSeed` 值(如 100, 150, 200...)
2. **语义化配色** - 红色=问题,绿色=解决方案
3. **渐进展示** - 使用 `v-click` 控制出现顺序
4. **复制粘贴** - 直接从 `components-guide.md` 复制代码

## 🤖 AI 辅助创作

本模板提供了专门的 AI 助手指南,支持:
- 让 AI 读取模板文档并自动应用风格
- 使用 Claude Code skill 快速创建演示

### 使用 Claude Code Skill

复制 skill 文件到本地:

```bash
cp neko-style/skills.md .claude/skills/neko-slidev.md
```

然后使用 `/neko-slidev` 命令激活。

详见 [docs/FOR-AI-ASSISTANTS.md](./docs/FOR-AI-ASSISTANTS.md) 和 [skills.md](./skills.md)

## 📄 License

MIT

## 🙏 Credits

原始设计来自 [nekomeowww](https://github.com/nekomeowww) 的 neko-talks 演讲系列。
