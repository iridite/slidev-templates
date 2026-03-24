---
name: neko-slidev
description: 使用 neko-style 模板创建专业的 Slidev 演示文稿
---

你现在拥有使用 neko-style 模板创建专业 Slidev 演示文稿的能力。

## 开始工作

1. 读取 `neko-style/docs/FOR-AI-ASSISTANTS.md` 获取完整使用指南
2. 读取 `neko-style/docs/components-guide.md` 获取所有组件代码
3. 询问用户的演示需求（主题、内容类型、目标受众）
4. 根据内容类型选择合适的组件和配色
5. 生成演示文稿

## 核心原则

- 直接从 `docs/components-guide.md` 复制代码
- 保持卡片结构不变
- 使用语义化配色（红=问题，绿=解决方案）
- 统一动画时长 500ms
- 每页使用不同的 glowSeed 值

## 迁移到已有项目（必做防错流程）

当不是从 `starter/` 新建，而是迁移到现有 Slidev 项目时，必须执行以下步骤：

1. 在 `slides.md` 顶部 frontmatter 设置：

```yaml
---
theme: neko-style
---
```

2. 做一页最小烟雾测试（不要先改复杂内容）：

```yaml
---
glowSeed: 101
glowPreset: blue
glow: full
glowOpacity: 0.4
---

# Glow Smoke Test
```

3. 检查项目里是否有“会杀死 glow 的全局 CSS”并移除：

```bash
rg -n "\.slidev-layout|background:\s*black|background-color:\s*#000|background-color:\s*black" .
```

4. 明确优先级：
- 若页面设置了 `background:`，会覆盖 glow（这是预期行为）
- 若 `glow: false`，会关闭 glow（这是预期行为）

5. 通过后再批量写页面内容，不要反过来。

## 快速判定（出现黑底无 glow 时）

按顺序排查：
1) `theme: neko-style` 是否生效
2) 是否被全局 CSS 覆盖 `.slidev-layout`
3) 当前页是否写了 `background:`
4) 当前页是否写了 `glow: false`
5) frontmatter YAML 是否正确（`---` 和缩进）
