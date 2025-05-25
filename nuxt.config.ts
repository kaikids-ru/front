// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss', 'swiper/swiper-bundle.css', ],
  modules: [
  'nuxt-swiper', 'vue-yandex-maps/nuxt', '@vee-validate/nuxt', '@primevue/nuxt-module'
  ],
    primevue: {
    components: {
        prefix: 'Prime',
        include: ['Paginator ']    /* Used as <PrimeButton /> and <PrimeDataTable /> */
    },
    options: {
      theme: {
          preset: Aura
      }
    }
  },
  yandexMaps: {
    apikey: 'ce367ffc-7d9f-4a3a-b783-a5b1700a023a',
  },
})
