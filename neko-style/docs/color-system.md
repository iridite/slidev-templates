# 配色系统

语义化配色,每种颜色有特定含义。

## 核心配色

| 颜色 | 用途 | Border | Background | Icon | Text |
|------|------|--------|------------|------|------|
| Red | 问题/警告 | `red-800` | `red-800/20` | `text-red-300` | `text-red-400` |
| Green | 解决方案/成功 | `green-800` | `green-800/20` | `text-green-300` | `text-green-400` |
| Blue | 中性信息 | `blue-800` | `blue-800/20` | `text-blue-300` | `text-blue-400` |
| Purple | 高级功能 | `purple-800` | `purple-800/20` | `text-purple-300` | `text-purple-400` |
| Yellow | 性能/速度 | `yellow-800` | `yellow-800/20` | `text-yellow-300` | `text-yellow-400` |
| Cyan | 容器/云 | `cyan-800` | `cyan-800/20` | `text-cyan-300` | `text-cyan-400` |
| Lime | 增长/提升 | `lime-800` | `lime-800/20` | `text-lime-300` | `text-lime-400` |

## 卡片结构

```vue
<div border="2 solid [color]-800" bg="[color]-800/20" rounded-lg overflow-hidden>
  <div bg="[color]-800/40" px-4 py-2>
    <div i-carbon:icon text-[color]-300 />
    <span>标题</span>
  </div>
  <div px-4 py-3>内容</div>
</div>
```

## 透明度层次

- `/20` - 卡片背景
- `/30` - 内部区域
- `/40` - 标题栏
- `/50` - 强调区域

## 常用组合

### 问题 vs 解决方案

```vue
<div grid grid-cols-2 gap-6>
  <div border="2 solid red-800" bg="red-800/20">问题</div>
  <div border="2 solid green-800" bg="green-800/20">解决方案</div>
</div>
```

### 三列特性

```vue
<div grid grid-cols-3 gap-4>
  <div border="2 solid yellow-800" bg="yellow-800/20">快速</div>
  <div border="2 solid blue-800" bg="blue-800/20">安全</div>
  <div border="2 solid purple-800" bg="purple-800/20">可扩展</div>
</div>
```

## 使用原则

1. 保持一致性 - 相同内容用相同颜色
2. 语义化 - 红=问题,绿=解决方案
3. 不过度 - 每页不超过 3-4 种主色
