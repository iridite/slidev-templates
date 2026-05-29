---
glowSeed: {{seed}}
clicks: {{category_count}}
---

# {{title}}

<CategoryIconList :categories="[
  { title: '{{category1}}', items: [
    { icon: 'i-logos:{{icon1}}', label: '{{label1}}' },
    { icon: 'i-logos:{{icon2}}', label: '{{label2}}' },
    { icon: 'i-logos:{{icon3}}', label: '{{label3}}' },
  ]},
  { title: '{{category2}}', icon: 'i-carbon:{{cat_icon}}', items: [
    { icon: 'i-logos:{{icon4}}', label: '{{label4}}' },
    { icon: 'i-logos:{{icon5}}', label: '{{label5}}' },
  ]},
]" />
