import { defineNuxtConfig } from 'nuxt/config';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  sourcemap: {
    server: true,
    client: true
  },

  app: {
    head: {
      title: 'Eddy Mhalli — Digital Fridge Leader',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Eddy Mhalli — fullstack & lead engineer. TypeScript / Node / NestJS / Vue. Annecy & Genève.' },
        { name: 'theme-color', content: '#1a2d3b' },
        { property: 'og:title', content: 'Eddy Mhalli — Digital Fridge Leader' },
        { property: 'og:description', content: 'Lead fullstack engineer — TypeScript universe.' },
        { property: 'og:image', content: '/photo.webp' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // ---
  
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    define: {
      'process.env.DEBUG': true,
    },
    // ssr: { // if ssr enabled in future, this config is required to load vuetify properly
    //   noExternal: ['vuetify']
    // }
  },
})
