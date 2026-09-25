<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
/** @type {number | null} */
let rafId = null

function update() {
  rafId = null
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
}

function onScroll() {
  if (rafId === null) rafId = requestAnimationFrame(update)
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (rafId !== null) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <div class="scroll-progress__bar" :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: calc(var(--z-nav) + 10);
  pointer-events: none;
}

.scroll-progress__bar {
  height: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--color-accent), var(--color-cyan), var(--color-gold));
  box-shadow: 0 0 10px var(--color-accent-glow);
}
</style>
