// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  colorMode: {
    preference: 'dark'
  },
  ui: {
    primary: 'lime',
    gray: 'zinc',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-auto'
    }
  }
})
