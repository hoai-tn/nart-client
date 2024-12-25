import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
  },
})
  // ...Custom flat configs append after nuxt's configs
  .prepend
  // ...Prepend some flat configs in front
  ()
  // Override some rules in a specific config, based on their name
  .override('nuxt/typescript/rules', {
    rules: {
      // ...Override rules, for example:
      '@typescript-eslint/ban-types': 'off',
    },
  })
  .append()

// ...you can chain more operations as needed
