import { useReducedMotion } from './useReducedMotion.js'

export function useScrollToSection() {
  const { prefersReduced } = useReducedMotion()

  function scrollToSection(id) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({
      behavior: prefersReduced.value ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return { scrollToSection }
}
