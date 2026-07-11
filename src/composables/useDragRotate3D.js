import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from './useReducedMotion.js'

/**
 * Pointer-drag 3D rotation with optional subtle mouse-follow tilt.
 * @param {import('vue').Ref<HTMLElement | null>} elRef
 * @param {{ tiltX?: number, sensitivity?: number, idleSpin?: number, reducedRotY?: number, mouseTilt?: number, rotYMin?: number, rotYMax?: number, rotXMin?: number, rotXMax?: number }} [options]
 */
export function useDragRotate3D(elRef, options = {}) {
  const {
    tiltX = -18,
    sensitivity = 0.45,
    idleSpin = 0.06,
    reducedRotY = 35,
    mouseTilt = 4,
    rotYMin,
    rotYMax,
    rotXMin = -75,
    rotXMax = 75,
  } = options

  const { prefersReduced } = useReducedMotion()
  const rotX = ref(tiltX)
  const rotY = ref(0)
  const mouseTiltX = ref(0)
  const mouseTiltY = ref(0)
  const isDragging = ref(false)
  const hasInteracted = ref(false)

  const enableMouseTilt = mouseTilt > 0

  /** @type {number | null} */
  let pointerId = null
  let lastClientX = 0
  let lastClientY = 0
  /** @type {number | null} */
  let rafId = null
  /** @type {IntersectionObserver | null} */
  let observer = null
  let canMouseTilt = false
  let isInView = false

  function startLoop() {
    if (rafId !== null) return
    rafId = requestAnimationFrame(tick)
  }

  function stopLoop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  function clampRotation() {
    rotY.value = Math.max(rotYMin ?? -Infinity, Math.min(rotYMax ?? Infinity, rotY.value))
    rotX.value = Math.max(rotXMin, Math.min(rotXMax, rotX.value))
  }

  function applyDelta(dx, dy) {
    rotY.value += dx * sensitivity
    rotX.value -= dy * sensitivity
    clampRotation()
  }

  function updateMouseTilt(clientX, clientY) {
    const el = elRef.value
    if (!el || !canMouseTilt || !enableMouseTilt) return

    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return

    const x = (clientX - rect.left) / rect.width - 0.5
    const y = (clientY - rect.top) / rect.height - 0.5

    mouseTiltY.value = x * mouseTilt * 2
    mouseTiltX.value = -y * mouseTilt * 2
  }

  function resetMouseTilt() {
    mouseTiltX.value = 0
    mouseTiltY.value = 0
  }

  function stopWindowDrag() {
    window.removeEventListener('pointermove', onWindowPointerMove)
    window.removeEventListener('pointerup', onWindowPointerUp)
    window.removeEventListener('pointercancel', onWindowPointerUp)
  }

  /** @param {PointerEvent} e */
  function onWindowPointerMove(e) {
    if (!isDragging.value || e.pointerId !== pointerId) return
    applyDelta(e.clientX - lastClientX, e.clientY - lastClientY)
    lastClientX = e.clientX
    lastClientY = e.clientY
  }

  /** @param {PointerEvent} e */
  function onWindowPointerUp(e) {
    if (e.pointerId !== pointerId) return
    isDragging.value = false
    pointerId = null
    stopWindowDrag()
    elRef.value?.releasePointerCapture(e.pointerId)
  }

  /** @param {PointerEvent} e */
  function onPointerDown(e) {
    if (prefersReduced.value) return
    isDragging.value = true
    hasInteracted.value = true
    pointerId = e.pointerId
    lastClientX = e.clientX
    lastClientY = e.clientY
    resetMouseTilt()
    elRef.value?.setPointerCapture(e.pointerId)
    window.addEventListener('pointermove', onWindowPointerMove)
    window.addEventListener('pointerup', onWindowPointerUp)
    window.addEventListener('pointercancel', onWindowPointerUp)
  }

  /** @param {PointerEvent} e */
  function onPointerMove(e) {
    if (isDragging.value) return

    if (enableMouseTilt && e.pointerType === 'mouse') {
      updateMouseTilt(e.clientX, e.clientY)
    }
  }

  /** @param {PointerEvent} e */
  function endDrag(e) {
    onWindowPointerUp(e)
  }

  function onPointerLeave() {
    if (!isDragging.value && enableMouseTilt) resetMouseTilt()
  }

  function tick() {
    if (
      isInView
      && !isDragging.value
      && !hasInteracted.value
      && !prefersReduced.value
      && idleSpin !== 0
    ) {
      rotY.value += idleSpin
      clampRotation()
    }
    rafId = requestAnimationFrame(tick)
  }

  function setupVisibilityObserver() {
    const el = elRef.value
    if (!el || idleSpin === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        isInView = entries.some((entry) => entry.isIntersecting)
        if (isInView) startLoop()
        else stopLoop()
      },
      { threshold: 0 }
    )
    observer.observe(el)
  }

  onMounted(() => {
    canMouseTilt = window.matchMedia('(pointer: fine)').matches

    if (prefersReduced.value) {
      rotY.value = reducedRotY
      return
    }

    setupVisibilityObserver()
  })

  onUnmounted(() => {
    stopWindowDrag()
    stopLoop()
    observer?.disconnect()
  })

  const transformStyle = computed(() => ({
    transform: `rotateX(${rotX.value + mouseTiltX.value}deg) rotateY(${rotY.value + mouseTiltY.value}deg)`,
  }))

  return {
    isDragging,
    transformStyle,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onPointerLeave: enableMouseTilt ? onPointerLeave : undefined,
  }
}
