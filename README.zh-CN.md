# Slidev Templates

[English](./README.md)

这是一个面向 [Slidev](https://sli.dev) 的**高质量模板收录、发现与社区协作生态**，而不是单独维护某一个主题。

项目希望解决的是：优秀 Slidev 模板分散在不同仓库、质量和使用方式不统一、难以发现、难以判断是否还能使用，也缺少一致的贡献和维护入口。

因此，本仓库把「模板」定义为一套可复用的演示起点。一个模板可以同时包含 theme、starter、布局、组件、配置、示例、文档和推荐目录结构。Theme 只是模板的一部分，而不是本项目的收录边界。

## 当前模板

| 模板 | 状态 | 来源 | 适用场景 | 快速开始 |
| --- | --- | --- | --- | --- |
| [Neko Style](./neko-style/) | ✅ Verified | 仓库托管 | 技术分享、开发者演示、AI/ML、会议 | `npx degit iridite/slidev-templates/neko-style my-presentation` |

Neko Style 是当前 Registry 的第一个 reference implementation，用来验证模板目录、Starter、预览、测试、构建和导出这一整套维护流程。

## Registry

[`registry/templates.json`](./registry/templates.json) 是项目的机器可读模板目录，并由 [`registry/schema.json`](./registry/schema.json) 描述格式、由 CI 自动校验。

Registry 支持两种收录模式：

- **Hosted**：模板直接维护在本仓库，能够持续做测试和兼容性验证。
- **External**：模板继续维护在作者自己的 canonical repository，本项目只负责索引和发现，不复制、吞并第三方项目。

这样既可以保证高质量的托管模板，又允许生态规模增长，而不会把所有作者都强制塞进一个 monorepo。

## 如何提交模板

可以直接使用 GitHub 的 **Template submission** Issue Form，提供：

- 模板名称和用途；
- canonical repository/source；
- 代表性预览；
- 最短可复现使用方式；
- License；
- discovery tags。

一个适合收录的模板应该：

1. 不只是某一次演讲的成品，而能被其他人复用；
2. 有清晰 README 或使用说明；
3. 有可复现的启动/复制方式；
4. 有至少一张代表性预览；
5. 有明确 License 与第三方素材归属；
6. 能确认作者、维护者或 canonical source。

本项目追求的是**有用、可信、可维护的目录**，而不是单纯追求收录数量。

## 状态等级

- **Verified**：维护者已经审核并验证主要使用路径。
- **Community**：文档和授权满足收录标准，但本仓库不持续运行其测试。
- **Experimental**：仍处在早期阶段，兼容性承诺较弱。

状态代表验证程度，不代表热门程度。

## 维护与贡献

```bash
git clone https://github.com/iridite/slidev-templates.git
cd slidev-templates
npm ci
npm test
```

`npm test` 会校验 Registry 完整性以及仓库托管模板的回归测试。当前 Neko Style 还可以运行：

```bash
npm run dev:neko
npm run build:neko
npm run export:neko
```

详细规则见 [`CONTRIBUTING.md`](./CONTRIBUTING.md) 和 [`registry/README.md`](./registry/README.md)。

## 方向

下一阶段不是继续把仓库做成 Neko Style 的产品页，而是逐步形成真正的 Slidev Template discovery layer：收录更多独立维护的模板，丰富可搜索 metadata、兼容性信息和验证信号，并最终可以基于同一份 Registry 数据生成可浏览的模板 Gallery。

机器可读 Registry 也意味着未来其他网站、CLI、AI Agent 和 Slidev 工作流都可以直接消费这套数据，而不需要抓取 README。
