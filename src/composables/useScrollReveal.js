import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * @param {Element | null} el
 * @param {IntersectionObserverInit} options
 */
function isInViewport(el, options = {}) {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  const margin = 40
  const threshold = options.threshold ?? 0.1
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
  const ratio = visibleHeight / rect.height
  return ratio >= threshold && rect.top < window.innerHeight - margin
}

/**
 * Scroll-triggered reveal. Content stays visible on first paint; animation
 * only arms for off-screen sections after mount (prevents reload flash).
 *
 * @param {IntersectionObserverInit} [options]
 */
export function useScrollReveal(options = {}) {
  const { prefersReduced } = useReducedMotion()
  const isVisible = ref(false)
  const isArmed = ref(false)
  const revealRef = ref(null)

  /** @type {IntersectionObserver | null} */
  let observer = null

  onMounted(() => {
    if (prefersReduced.value) {
      isVisible.value = true
      return
    }

    const el = revealRef.value
    if (!el) {
      isVisible.value = true
      return
    }

    if (isInViewport(el, options)) {
      isVisible.value = true
      return
    }

    isArmed.value = true

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (observer && revealRef.value) {
              observer.unobserve(revealRef.value)
            }
          }
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    )

    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { revealRef, isVisible, isArmed }
}
