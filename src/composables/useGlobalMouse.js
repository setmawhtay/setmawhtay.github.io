import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * Tracks mouse position globally and exposes CSS variables on :root.
 * --mouse-x / --mouse-y are normalized 0–1; --mouse-active is 0 or 1.
 */
export function useGlobalMouse() {
  const { prefersReduced } = useReducedMotion()
  const isActive = ref(false)

  let targetX = 0.5
  let targetY = 0.5
  let currentX = 0.5
  let currentY = 0.5
  /** @type {number | null} */
  let rafId = null
  let canTrack = false

  function setVars(x, y, active) {
    const root = document.documentElement
    root.style.setProperty('--mouse-x', x.toFixed(4))
    root.style.setProperty('--mouse-y', y.toFixed(4))
    root.style.setProperty('--mouse-active', active ? '1' : '0')
  }

  /** @param {MouseEvent} e */
  function onMouseMove(e) {
    if (!canTrack) return
    targetX = e.clientX / window.innerWidth
    targetY = e.clientY / window.innerHeight
    isActive.value = true
  }

  function onMouseLeave() {
    isActive.value = false
    targetX = 0.5
    targetY = 0.5
  }

  function tick() {
    currentX += (targetX - currentX) * 0.1
    currentY += (targetY - currentY) * 0.1
    setVars(currentX, currentY, isActive.value)
    rafId = requestAnimationFrame(tick)
  }

  function start() {
    setVars(0.5, 0.5, false)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    tick()
  }

  function stop() {
    window.removeEventListener('mousemove', onMouseMove)
    document.documentElement.removeEventListener('mouseleave', onMouseLeave)
    if (rafId !== null) cancelAnimationFrame(rafId)
    document.documentElement.style.removeProperty('--mouse-x')
    document.documentElement.style.removeProperty('--mouse-y')
    document.documentElement.style.removeProperty('--mouse-active')
  }

  onMounted(() => {
    canTrack = window.matchMedia('(pointer: fine)').matches
    if (!prefersReduced.value && canTrack) start()
  })

  onUnmounted(stop)

  return { isActive }
}
