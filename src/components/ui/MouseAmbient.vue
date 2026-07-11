<template>
  <div class="mouse-ambient" aria-hidden="true">
    <div class="mouse-ambient__glow mouse-ambient__glow--primary" />
    <div class="mouse-ambient__glow mouse-ambient__glow--secondary" />
  </div>
</template>

<style scoped>
.mouse-ambient {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 90;
  overflow: hidden;
}

.mouse-ambient__glow {
  position: absolute;
  border-radius: 50%;
  left: calc(var(--mouse-x, 0.5) * 100vw);
  top: calc(var(--mouse-y, 0.5) * 100vh);
  transform: translate(-50%, -50%);
  opacity: calc(var(--mouse-active, 0) * 1);
  will-change: left, top, opacity;
}

.mouse-ambient__glow--primary {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(124, 108, 255, 0.09), transparent 68%);
}

.mouse-ambient__glow--secondary {
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.06), transparent 70%);
  transform: translate(-50%, -50%)
    translate(
      calc((var(--mouse-x, 0.5) - 0.5) * 18px),
      calc((var(--mouse-y, 0.5) - 0.5) * 14px)
    );
}

@media (prefers-reduced-motion: reduce) {
  .mouse-ambient {
    display: none;
  }
}
</style>
