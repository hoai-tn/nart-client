// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
  ],
  shadcn: {
    componentDir: 'app/components/ui',
  },
  pinia: {
    storesDirs: ['./app/stores/**'],
  },
  // imports: {
  //   dirs: ["types/*.ts", "stores/*.ts", "types/**/*.ts"],
  // },
})
