<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion.js'

const { prefersReduced } = useReducedMotion()
const isVisible = ref(false)

function getThreshold() {
  return window.innerWidth < 768 ? 180 : 350
}

function onScroll() {
  isVisible.value = window.scrollY > getThreshold()
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: prefersReduced.value ? 'auto' : 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <button
    type="button"
    class="scroll-top"
    :class="{ 'scroll-top--visible': isVisible }"
    aria-label="Scroll to top"
    :aria-hidden="!isVisible"
    :tabindex="isVisible ? 0 : -1"
    @click="scrollToTop"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M12 19V5" stroke-linecap="round" />
      <path d="M5 12l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<style scoped>
.scroll-top {
  position: fixed;
  right: 1.5rem;
  bottom: calc(1.5rem + env(safe-area-inset-bottom, 0px));
  z-index: var(--z-fab);
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-full);
  background: rgba(22, 22, 37, 0.95);
  color: var(--color-text);
  cursor: pointer;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-md);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(12px) scale(0.9);
  transition:
    opacity var(--duration-fast) var(--ease-out),
    visibility var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    background var(--duration-fast) var(--ease-out);
}

.scroll-top--visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.scroll-top:hover {
  transform: translateY(-3px) scale(1);
  border-color: var(--color-accent);
  background: rgba(124, 108, 255, 0.2);
}

.scroll-top--visible:hover {
  transform: translateY(-3px) scale(1);
}

.scroll-top svg {
  width: 1.25rem;
  height: 1.25rem;
}

@media (max-width: 767px) {
  .scroll-top {
    right: 1rem;
    bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px));
    width: 3rem;
    height: 3rem;
  }
}
</style>
