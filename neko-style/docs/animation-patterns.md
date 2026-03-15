# 动画模式

统一使用 `transition duration-500 ease-in-out`

## 基础动画

### 从下方滑入（最常用）

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
>
  内容
</div>
```

### 其他方向

- 从上: `translate-y--20`
- 从左: `translate-x--20`
- 从右: `translate-x-20`

## 缩放动画

```vue
<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
>
  内容
</div>
```

## 序列动画

```vue
<div flex gap-4>
  <div v-click="1" transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'">
    第一个
  </div>
  <div v-click="2" transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'">
    第二个
  </div>
</div>
```

## 左右对比

```vue
<div flex gap-6>
  <div v-click flex-1 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'">
    左侧
  </div>
  <div v-click flex-1 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'">
    右侧
  </div>
</div>
```

## 最佳实践

1. 保持 500ms 统一时长
2. 问题从左,解决方案从右
3. 新内容从下,标题从上
4. 使用 `v-click` 编号控制复杂序列
