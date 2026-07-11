<template>
  <svg class="floating-decor" viewBox="0 0 200 200" aria-hidden="true">
    <circle cx="40" cy="40" r="6" fill="#7c6cff" opacity="0.5" class="floating-decor__dot floating-decor__dot--1" />
    <circle cx="160" cy="60" r="4" fill="#38bdf8" opacity="0.6" class="floating-decor__dot floating-decor__dot--2" />
    <circle cx="170" cy="150" r="5" fill="#c9a227" opacity="0.45" class="floating-decor__dot floating-decor__dot--3" />
    <rect x="20" y="120" width="24" height="24" rx="4" fill="none" stroke="#7c6cff" stroke-opacity="0.3" class="floating-decor__shape floating-decor__shape--1" />
    <polygon points="150,130 170,150 150,170 130,150" fill="none" stroke="#38bdf8" stroke-opacity="0.3" class="floating-decor__shape floating-decor__shape--2" />
    <path d="M80 30 L95 50 L80 70 L65 50 Z" fill="none" stroke="#c9a227" stroke-opacity="0.35" class="floating-decor__shape floating-decor__shape--3" />
  </svg>
</template>

<style scoped>
.floating-decor {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-decor__dot--1 { animation: float-soft 4s ease-in-out infinite; }
.floating-decor__dot--2 { animation: float-soft 5.5s ease-in-out infinite reverse; }
.floating-decor__dot--3 { animation: float-soft 4.5s ease-in-out infinite; animation-delay: -2s; }
.floating-decor__shape--1 { animation: float-soft 6s ease-in-out infinite; transform-origin: 32px 132px; }
.floating-decor__shape--2 { animation: float-soft 7s ease-in-out infinite reverse; transform-origin: 150px 150px; }
.floating-decor__shape--3 { animation: float-soft 5s ease-in-out infinite; animation-delay: -1s; transform-origin: 80px 50px; }

@media (prefers-reduced-motion: reduce) {
  .floating-decor__dot,
  .floating-decor__shape {
    animation: none !important;
  }
}
</style>
