import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * Typewriter effect composable.
 * @param {string} text
 * @param {number} [speed=55]
 */
export function useTypewriter(text, speed = 55) {
  const { prefersReduced } = useReducedMotion()
  const display = ref('')
  const isDone = ref(false)

  /** @type {ReturnType<typeof setInterval> | null} */
  let timer = null

  onMounted(() => {
    if (prefersReduced.value) {
      display.value = text
      isDone.value = true
      return
    }

    let i = 0
    timer = setInterval(() => {
      display.value = text.slice(0, i + 1)
      i += 1
      if (i >= text.length) {
        isDone.value = true
        if (timer) clearInterval(timer)
      }
    }, speed)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { display, isDone }
}
