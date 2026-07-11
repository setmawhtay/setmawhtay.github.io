import { ref, computed, onMounted } from 'vue'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * Subtle translate parallax from mouse position.
 * @param {import('vue').Ref<HTMLElement | null>} elRef
 * @param {number} [maxOffset=6]
 */
export function useMouseParallax(elRef, maxOffset = 6) {
  const { prefersReduced } = useReducedMotion()
  const offsetX = ref(0)
  const offsetY = ref(0)
  let canParallax = false

  /** @param {MouseEvent} e */
  function onMouseMove(e) {
    if (!canParallax || prefersReduced.value) return
    const el = elRef.value
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    offsetX.value = x * maxOffset
    offsetY.value = y * maxOffset
  }

  function onMouseLeave() {
    offsetX.value = 0
    offsetY.value = 0
  }

  onMounted(() => {
    canParallax = window.matchMedia('(pointer: fine)').matches
  })

  const parallaxStyle = computed(() => ({
    transform: `translate(${offsetX.value}px, ${offsetY.value}px)`,
  }))

  return { parallaxStyle, onMouseMove, onMouseLeave }
}
