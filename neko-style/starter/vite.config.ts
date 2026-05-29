export default {
  slidev: {
    // Restrict auto component scanning to .vue and .md files only.
    // Without this, unplugin-vue-components picks up liquid-glass/index.ts
    // and derives a component name "LiquidGlass", conflicting with LiquidGlass.vue.
    components: {
      extensions: ['vue', 'md'],
    },
  },
}
