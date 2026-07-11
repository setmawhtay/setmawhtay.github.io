<script setup>
import { ref } from 'vue'
import { useDragRotate3D } from '../../composables/useDragRotate3D.js'
import { ringTechs } from '../../data/ringTechs.js'

const radius = 130
const sceneRef = ref(null)
const {
  isDragging,
  transformStyle,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
} = useDragRotate3D(sceneRef, {
  tiltX: 12,
  sensitivity: 0.5,
  reducedRotY: -20,
  mouseTilt: 0,
  idleSpin: 0,
})

function itemTransform(index) {
  const angle = (360 / ringTechs.length) * index
  return `rotateY(${angle}deg) translateZ(${radius}px)`
}
</script>

<template>
  <div
    ref="sceneRef"
    class="cards-3d"
    :class="{ 'cards-3d--dragging': isDragging }"
    aria-hidden="true"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerCancel"
  >
    <div class="cards-3d__stage" :style="transformStyle">
      <div
        v-for="(tech, index) in ringTechs"
        :key="tech.name"
        class="cards-3d__card"
        :class="{ 'cards-3d__card--compact': tech.compact }"
        :style="{
          transform: itemTransform(index),
          color: tech.color,
          background: tech.bg,
          borderColor: `${tech.color}44`,
        }"
      >
        <span>{{ tech.name }}</span>
      </div>
    </div>

    <div class="cards-3d__ring" />
    <div class="cards-3d__glow" />
  </div>
</template>

<style scoped>
.cards-3d {
  position: relative;
  width: 100%;
  max-width: 360px;
  height: 300px;
  margin-inline: auto;
  perspective: 1100px;
  cursor: grab;
  touch-action: none;
  user-select: none;
}

.cards-3d--dragging {
  cursor: grabbing;
}

.cards-3d__stage {
  position: absolute;
  left: 50%;
  top: calc(50% - 0.75rem);
  width: 0;
  height: 0;
  transform-style: preserve-3d;
  will-change: transform;
}

.cards-3d__card {
  position: absolute;
  left: -72px;
  top: -40px;
  width: 144px;
  height: 80px;
  display: grid;
  place-items: center;
  padding: var(--space-sm);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  text-align: center;
  line-height: 1.2;
  border-radius: var(--radius-md);
  border: 1px solid;
  backface-visibility: hidden;
  box-shadow: var(--shadow-md);
}

.cards-3d__card--compact {
  font-size: 0.7rem;
}

.cards-3d__ring {
  position: absolute;
  left: 50%;
  top: calc(50% - 0.75rem);
  width: 280px;
  height: 280px;
  margin-left: -140px;
  margin-top: -140px;
  border-radius: 50%;
  border: 1px dashed rgba(124, 108, 255, 0.15);
  pointer-events: none;
}

.cards-3d__glow {
  position: absolute;
  left: 50%;
  top: calc(50% - 0.75rem);
  width: 200px;
  height: 200px;
  margin-left: -100px;
  margin-top: -100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 108, 255, 0.16), transparent 70%);
  filter: blur(24px);
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .cards-3d {
    cursor: default;
  }
}
</style>
