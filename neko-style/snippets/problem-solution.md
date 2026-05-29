---
glowSeed: {{seed}}
clicks: 6
---

# {{title}}

<ProblemSolutionSplit
  :problems="[
    { icon: 'i-carbon:warning-alt', text: '{{problem1}}' },
    { icon: 'i-carbon:warning-alt', text: '{{problem2}}' },
    { icon: 'i-carbon:warning-alt', text: '{{problem3}}' },
  ]"
  :solutions="[
    { icon: 'i-carbon:checkmark', text: '{{solution1}}' },
    { icon: 'i-carbon:checkmark', text: '{{solution2}}' },
    { icon: 'i-carbon:checkmark', text: '{{solution3}}' },
  ]"
/>
