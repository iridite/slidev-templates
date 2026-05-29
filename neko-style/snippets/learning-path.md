---
glowSeed: {{seed}}
clicks: {{step_count}}
---

# {{title}}

<LearningPathSteps :steps="[
  { icon: 'i-carbon:{{icon1}}', title: '{{stage1}}', tone: 'blue', items: ['{{item1a}}', '{{item1b}}', '{{item1c}}'] },
  { icon: 'i-carbon:{{icon2}}', title: '{{stage2}}', tone: 'purple', items: ['{{item2a}}', '{{item2b}}'] },
  { icon: 'i-carbon:{{icon3}}', title: '{{stage3}}', tone: 'green', items: ['{{item3a}}', '{{item3b}}'] },
]" />
