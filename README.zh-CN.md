# Slidev Templates

[English](./README.md)

这是一个面向 [Slidev](https://sli.dev) 的**高质量模板收录、发现、验证与社区协作生态**，不是只维护一个 Theme，也不是未经审核的链接清单。

本项目把 Template 定义为一套可以被其他人直接采用的演示起点。它可以包含 Starter、叙事结构、布局、Vue 组件、配置、示例、文档以及构建、导出或部署工作流。Theme 可以是 Template 的一部分，但不是本项目的收录边界。

[机器可读 Registry](./registry/templates.json) · [Template 标准](./docs/TEMPLATE_CONTRACT.md) · [提交模板](https://github.com/iridite/slidev-templates/issues/new?template=template_submission.yml) · [治理规则](./GOVERNANCE.md)

## 当前内容

当前初始目录包含 **4 个仓库托管模板**和 **7 个由上游独立治理的外部项目**。

### 仓库托管模板

| 模板 | 适用场景 | 预览 | 快速开始 |
| --- | --- | --- | --- |
| [Neko Style](./neko-style/) | 技术分享、开发者演示、AI/ML、会议 | [预览](./assets/neko-style-preview.png) | `npx degit iridite/slidev-templates/neko-style my-presentation` |
| [Paper Lab](./templates/paper-lab/) | 研究问题、方法、证据、结果、局限性 | [预览](./templates/paper-lab/preview.svg) | `npx degit iridite/slidev-templates/templates/paper-lab paper-lab-talk` |
| [Terminal Ink](./templates/terminal-ink/) | Incident Review、系统讲解、代码与运维叙事 | [预览](./templates/terminal-ink/preview.svg) | `npx degit iridite/slidev-templates/templates/terminal-ink terminal-talk` |
| [Editorial Grid](./templates/editorial-grid/) | 产品叙事、战略方案、发布与编辑式表达 | [预览](./templates/editorial-grid/preview.svg) | `npx degit iridite/slidev-templates/templates/editorial-grid editorial-talk` |

<table>
  <tr>
    <td width="33%"><img src="./templates/paper-lab/preview.svg" alt="Paper Lab 预览" /></td>
    <td width="33%"><img src="./templates/terminal-ink/preview.svg" alt="Terminal Ink 预览" /></td>
    <td width="33%"><img src="./templates/editorial-grid/preview.svg" alt="Editorial Grid 预览" /></td>
  </tr>
</table>

每个新托管模板都包含机器可读 manifest、可运行 starter、代表性预览、README、License 和来源说明。`neko-style/` 早于当前目录标准，为了兼容既有使用方式继续保留原路径。

### 外部项目

Registry 同时收录多演讲 Workspace、企业级演示系统、带部署工作流的 Starter，以及带视觉回归测试的生产级演示基础设施。

外部作者继续拥有各自项目的代码、License、发布流程和治理权。本仓库只保存发现元数据与健康度信号，不复制第三方品牌资产，也不会把外部项目描述成自己的成果。

## 浏览与搜索

### 本地 Gallery

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm run gallery:serve
```

打开 `http://127.0.0.1:4173/gallery/`，可以按关键词、类别、来源和验证状态筛选。Gallery 直接读取 canonical Registry，不维护第二份人工清单。

### Registry CLI

```bash
npm run templates -- list
npm run templates -- search academic
npm run templates -- info terminal-ink
npm run templates -- scaffold editorial-grid ./my-talk
```

CLI 会为外部项目返回 canonical 启动命令，也能直接复制本仓库托管的 Starter。

机器和其他工具可以直接读取：

- [`registry/templates.json`](./registry/templates.json)：模板目录唯一事实源；
- [`registry/schema.json`](./registry/schema.json)：Registry 格式；
- [`registry/hosted-template.schema.json`](./registry/hosted-template.schema.json)：托管模板 manifest 标准。

## 为什么不只是 Theme Gallery

Slidev 已经有 Theme 生态，但用户实际寻找的经常是完整起点：一个适合特定任务的 Starter、内容结构、组件、配置和交付方式。

本项目把原本需要逐个打开仓库判断的问题结构化：

- 模板为哪类演示任务设计；
- 它是 Starter、Workspace、Workflow 还是完整 Presentation System；
- 代码托管在本仓库还是由上游独立维护；
- 最短可复现启动命令是什么；
- License 与来源边界是什么；
- 哪些能力已经真正验证；
- canonical source 和 preview 是否仍可访问。

因此这份 Registry 可以直接被 Gallery、CLI、AI Agent、文档站和未来的 Slidev 工具消费，而不需要抓取 README。

## Hosted 与 External

**Hosted Template** 直接维护在本仓库。新模板遵循 [`docs/TEMPLATE_CONTRACT.md`](./docs/TEMPLATE_CONTRACT.md)，明确记录 provenance，并通过 Registry 测试与构建验证。

**External Template** 始终留在 canonical upstream repository。本项目只做 curated discovery，从而避免吞并上游治理、复制品牌资源或模糊 License。

验证等级：

- **Verified**：主要使用路径已经验证；托管模板还会在本仓库持续检查。
- **Community**：文档、来源和授权经过审核，但运行时验证仍由上游负责。
- **Experimental**：有独特价值但兼容性承诺较弱的早期项目。

状态代表审核与验证深度，不代表受欢迎程度或官方背书。

## 质量与维护

每个 Pull Request 都会运行三类独立检查：

1. Registry 完整性、Template Contract、Gallery 消费、CLI 搜索/Scaffold 和既有回归测试；
2. 所有带 manifest 的 Hosted Starter 干净构建；
3. Neko Style 构建与 PDF 导出。

另有 Registry Health Workflow，在目录改动和定时任务中检查外部 canonical source 与 preview 链接。

AI 或 Coding Agent 可以辅助公开项目发现、安装复现、元数据提取、测试、Issue Triage 和聚焦的 PR Review，但收录、License、来源、安全、合并与发布决策必须由人类维护者完成。规则见 [`docs/AI_ASSISTED_MAINTENANCE.md`](./docs/AI_ASSISTED_MAINTENANCE.md)。

## 提交模板

通过 [Template Submission Form](https://github.com/iridite/slidev-templates/issues/new?template=template_submission.yml) 提供：

- canonical source 与维护者；
- 代表性预览或 live demo；
- 可复现启动方式；
- License 和 Attribution；
- 目标人群、使用场景和独特价值；
- 希望以 Hosted 还是 External 方式收录。

本项目追求有用、可信、可维护，而不是单纯增加数量。仓库公开不等于允许复制。

## 开发与验证

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm ci
npm test
npm run build:hosted
npm run build:neko
```

涉及 Neko Style 渲染或导出时再执行：

```bash
npm run export:neko
```

新增 Hosted Template 前请先阅读 [`docs/TEMPLATE_CONTRACT.md`](./docs/TEMPLATE_CONTRACT.md)。

## 下一阶段

接下来重点不是无差别收录，而是分发与真实采用：发布 Gallery、补充兼容性信号、让下游工具更容易消费 Registry、接受高质量社区提交，并与被收录项目的上游作者建立反馈闭环。

GitHub 模板调研与当前收录决策记录在 [`docs/TEMPLATE_LANDSCAPE.md`](./docs/TEMPLATE_LANDSCAPE.md)。
