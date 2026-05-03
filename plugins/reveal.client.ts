export default defineNuxtPlugin((nuxtApp) => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('reveal-in')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal-init')
      if (binding.value && typeof binding.value === 'number') {
        el.style.transitionDelay = `${binding.value}ms`
      }
      observer.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer.unobserve(el)
    },
  })
})
