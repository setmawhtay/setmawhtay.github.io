<template>
  <div class="wave-bg" aria-hidden="true">
    <svg class="wave-bg__svg wave-bg__svg--top" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path
        d="M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,64 L1440,0 L0,0 Z"
        fill="currentColor"
      />
    </svg>
    <svg class="wave-bg__svg wave-bg__svg--bottom" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path
        d="M0,48 C360,96 480,16 720,56 C960,96 1080,32 1440,72 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<style scoped>
.wave-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  color: rgba(124, 108, 255, 0.04);
}

.wave-bg__svg {
  position: absolute;
  width: 200%;
  height: 120px;
}

.wave-bg__svg--top {
  top: 0;
  left: 0;
  animation: wave-slide 20s linear infinite;
}

.wave-bg__svg--bottom {
  bottom: 0;
  left: -50%;
  animation: wave-slide 25s linear infinite reverse;
  color: rgba(56, 189, 248, 0.04);
}

@keyframes wave-slide {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .wave-bg__svg--top,
  .wave-bg__svg--bottom {
    animation: none;
    width: 100%;
    left: 0;
  }
}
</style>
