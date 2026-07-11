import { ref, onMounted, onUnmounted } from 'vue'

export function useReducedMotion() {
  const prefersReduced = ref(
    typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  /** @type {MediaQueryList | null} */
  let mq = null

  /** @param {MediaQueryListEvent} e */
  function onChange(e) {
    prefersReduced.value = e.matches
  }

  onMounted(() => {
    mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReduced.value = mq.matches
    mq.addEventListener('change', onChange)
  })

  onUnmounted(() => {
    mq?.removeEventListener('change', onChange)
  })

  return { prefersReduced }
}
