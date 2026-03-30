# slidev-templates

> 高质量 [Slidev](https://sli.dev) 演示模板集合。当前主模板为 `neko-style`。

## 📦 当前模板

| 模板 | 定位 | 包含内容 |
|------|------|------|
| [neko-style](./neko-style/) | 技术演示风格（提炼自 neko-talks / KubeCon HK 2025） | 动态 Glow 背景、语义化组件、布局系统、文档与 starter |

## 🎬 Neko Style 实例 PPT 预览

这里是 `neko-style` 示例预览视频（MP4）：

[https://github.com/user-attachments/assets/6a4d34f7-cefd-47e1-b5d1-51d6e31845fe](https://github.com/user-attachments/assets/a8de803a-3857-43cf-988c-31578a26cb8b)

> 示例来源：`neko-style/starter/slides.md`（用于展示 glow seed 深色背景效果）

## ✨ 特性概览

### neko-style

- 动态 Glow 背景（基于 seed，页面级可控）
- 3 套颜色预设：`blue` / `rust` / `cyan`
- 语义化组件与布局（卡片、目录、章节、结束页等）
- 统一 500ms 动画节奏（支持 `v-click` 渐进）
- 完整文档（快速上手、组件、配色、动画、AI 使用说明）

## 🧱 仓库架构（简版）

这个仓库是一个轻量 monorepo：

- `neko-style/theme`：真正可复用的 Slidev 主题包（`slidev-theme-neko-style`）
- `neko-style/starter`：开箱即用示例工程（本地依赖 `file:../theme`）
- `neko-style/docs`：使用文档与设计沉淀

根目录 `package.json` 通过 workspace 串起 `theme` 和 `starter`，用于统一开发与构建。

## 🚀 使用方式

### 1) 直接用 Starter（推荐）

```bash
npx degit iridite/slidev-templates/neko-style/starter my-presentation
cd my-presentation
npm install
npm run dev
```

### 2) 在已有 Slidev 项目接入 Theme

> ⚠️ `slidev-theme-neko-style` 当前未发布到 npm registry，不能直接 `npm install slidev-theme-neko-style`。

安装支持状态（2026-03-30）：

| 安装方式 | 是否支持 | 说明 |
|------|------|------|
| `npm install slidev-theme-neko-style` | ❌ | 未发布到 npm |
| `npm install /absolute/path/to/neko-style/theme` | ✅ | 适合本机临时接入 |
| `package.json` 写 `file:/absolute/path/...` | ✅ | 适合团队固定本地路径 |

```bash
# 1) 获取仓库
git clone https://github.com/iridite/slidev-templates.git

# 2) 在你的项目中安装本地 theme 包
npm install /absolute/path/to/slidev-templates/neko-style/theme
```

也可以在你的 Slidev 项目 `package.json` 中直接声明本地依赖：

```json
{
  "dependencies": {
    "slidev-theme-neko-style": "file:/absolute/path/to/slidev-templates/neko-style/theme"
  }
}
```

再执行：

```bash
npm install
```

注意：
- 包名必须是 `slidev-theme-neko-style`（`theme/package.json` 的 `name`）。
- 幻灯片 frontmatter 里必须写 `theme: neko-style`（去掉 `slidev-theme-` 前缀后的名字）。
- `file:` 必须指向主题包目录本身（目录内应有 `package.json`），即 `.../neko-style/theme`。

然后在 `slides.md` 中启用主题：

```yaml
---
theme: neko-style
---
```

### 3) 在仓库内开发（贡献者）

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm install
npm run dev:neko
```

可用脚本（根目录）：

- `npm run dev:neko`：启动 starter 开发环境
- `npm run build:neko`：构建 starter
- `npm run export:neko`：导出 starter（PDF）

## 📁 目录结构

```text
slidev-templates/
├── package.json
├── README.md
└── neko-style/
    ├── README.md
    ├── SKILL.md
    ├── docs/
    ├── starter/
    │   ├── package.json
    │   └── slides.md
    └── theme/
        └── package.json
```

## 🎨 颜色预设

| 预设 | 主色渐变 | 场景 |
|------|---------|------|
| `blue`（默认） | `#18549a → #12238b` | 技术演讲、产品发布 |
| `rust` | `#ed5132 → #ed4832` | Rust 主题、创新表达 |
| `cyan` | `#32aeed → #32e5ed` | AI/ML、学术分享 |

示例：

```yaml
---
glowSeed: 42
glowPreset: rust # blue | rust | cyan
---
```

## 📖 文档入口

- [neko-style README](./neko-style/README.md)
- [快速开始](./neko-style/docs/QUICK-START.md)
- [组件指南](./neko-style/docs/components-guide.md)
- [布局指南](./neko-style/docs/layouts-guide.md)
- [高级组件](./neko-style/docs/advanced-components.md)
- [配色系统](./neko-style/docs/color-system.md)
- [动画模式](./neko-style/docs/animation-patterns.md)
- [可选依赖](./neko-style/docs/optional-dependencies.md)
- [AI 助手指南](./neko-style/docs/FOR-AI-ASSISTANTS.md)

## ✅ 可运行性验收（建议每次改动后执行）

目标：确保仓库文档中提到的核心能力都能跑通，且 `neko-style` 模板可实际复用。

### 1) 根仓库（monorepo）

```bash
npm install
npm run dev:neko
npm run build:neko
npm run export:neko
```

验收点：
- `dev:neko` 能正常启动 Slidev
- `build:neko` 无报错
- `export:neko` 能成功导出

### 2) Starter 独立可用性

```bash
cd neko-style/starter
npm install
npm run dev
npm run build
npm run export
```

验收点：
- Starter 脱离 monorepo 也能运行
- `slides.md` 使用 `theme: neko-style` 后样式与组件可正常加载

### 3) Theme 接入可用性（已有项目）

在任意 Slidev 项目执行：

```bash
npm install /absolute/path/to/slidev-templates/neko-style/theme
```

并在 `slides.md` 写入：

```yaml
---
theme: neko-style
---
```

验收点：
- 布局可用：`cover / section / contents-toc / page / page-wide / end`
- Glow 背景可用：`glowSeed`、`glowPreset` 生效
- 核心组件可导入并渲染

### 4) 可选高级能力（按需）

`theme` 已声明 optional dependencies。若要用高级功能，需按需安装对应包：

- `@vueuse/motion`（动效）
- `@nolebase/ui-asciinema` + `asciinema-player`（终端回放）
- `@tresjs/core` + `@tresjs/cientos` + `three`（3D）

---

如果你希望，我可以继续把这套验收流程同步到 `neko-style/README.md`，避免根 README 和子 README 描述漂移。

## 🤝 贡献

欢迎新增模板。建议每个模板至少包含：

- `README.md`（使用说明）
- `starter/`（可运行示例）
- `theme/`（可复用主题，若适用）
- 必要文档与示例素材

## 📄 License

MIT
