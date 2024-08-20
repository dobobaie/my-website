import { defineNuxtPlugin } from 'nuxt/app'
import { useMainStore } from '~/store/profile'

export default defineNuxtPlugin(({ $pinia }: any) => {
  return {
    provide: {
      store: useMainStore($pinia)
    }
  }
})