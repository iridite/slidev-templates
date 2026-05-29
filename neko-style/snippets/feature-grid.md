---
glowSeed: {{seed}}
clicks: {{item_count}}
---

# {{title}}

<FeatureIconGrid :columns="3" :items="[
  { icon: 'i-carbon:{{icon1}}', title: '{{title1}}', description: '{{desc1}}', tone: 'amber' },
  { icon: 'i-carbon:{{icon2}}', title: '{{title2}}', description: '{{desc2}}', tone: 'teal' },
  { icon: 'i-carbon:{{icon3}}', title: '{{title3}}', description: '{{desc3}}', tone: 'violet' },
]" />
