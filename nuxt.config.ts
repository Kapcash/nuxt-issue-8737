// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
  ],
  modules: [
    '@averjs/nuxt-compression',
    '@nuxtjs/tailwindcss',
    './modules/heroicons',
  ],
  // build: {
  //   transpile: ['@heroicons/vue', '@headlessui/vue'],
  // },
})
