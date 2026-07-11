<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <svg class="tech-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <!-- PHP -->
    <template v-if="id === 'php'">
      <ellipse cx="24" cy="24" rx="20" ry="11" fill="#8892BF" opacity="0.2" />
      <text x="24" y="28" text-anchor="middle" fill="#8892BF" font-family="monospace" font-size="13" font-weight="700">PHP</text>
    </template>

    <!-- Laravel -->
    <template v-else-if="id === 'laravel'">
      <path d="M8 32 L24 10 L40 32 Z" fill="#FF2D20" opacity="0.85" />
      <path d="M14 32 L24 18 L34 32 Z" fill="#FF2D20" opacity="0.4" />
    </template>

    <!-- JavaScript -->
    <template v-else-if="id === 'javascript'">
      <rect x="8" y="8" width="32" height="32" rx="4" fill="#F7DF1E" opacity="0.9" />
      <text x="24" y="30" text-anchor="middle" fill="#323330" font-family="monospace" font-size="14" font-weight="700">JS</text>
    </template>

    <!-- Vue -->
    <template v-else-if="id === 'vue'">
      <path d="M24 8 L40 36 H32 L24 22 L16 36 H8 Z" fill="#42b883" />
      <path d="M24 14 L32 30 H28 L24 22 L20 30 H16 Z" fill="#35495e" />
    </template>

    <!-- React -->
    <template v-else-if="id === 'react'">
      <circle cx="24" cy="24" r="4" fill="#61DAFB" />
      <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#61DAFB" stroke-width="1.5" class="tech-icon__react-orbit" />
      <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#61DAFB" stroke-width="1.5" transform="rotate(60 24 24)" class="tech-icon__react-orbit" />
      <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#61DAFB" stroke-width="1.5" transform="rotate(120 24 24)" class="tech-icon__react-orbit" />
    </template>

    <!-- React Native -->
    <template v-else-if="id === 'react-native'">
      <circle cx="24" cy="24" r="4" fill="#61DAFB" />
      <ellipse cx="24" cy="24" rx="14" ry="6" stroke="#61DAFB" stroke-width="1.5" />
      <ellipse cx="24" cy="24" rx="14" ry="6" stroke="#61DAFB" stroke-width="1.5" transform="rotate(60 24 24)" />
      <rect x="18" y="36" width="12" height="4" rx="2" fill="#61DAFB" opacity="0.5" />
    </template>

    <!-- Node.js -->
    <template v-else-if="id === 'nodejs'">
      <path d="M24 6 L38 14 V30 L24 38 L10 30 V14 Z" fill="#339933" opacity="0.85" />
      <text x="24" y="27" text-anchor="middle" fill="#fff" font-family="monospace" font-size="9" font-weight="700">node</text>
    </template>

    <!-- MySQL -->
    <template v-else-if="id === 'mysql'">
      <ellipse cx="24" cy="14" rx="14" ry="6" fill="#00758F" opacity="0.7" />
      <path d="M10 14 V30 C10 36 16 40 24 40 C32 40 38 36 38 30 V14" fill="#00758F" opacity="0.5" />
      <ellipse cx="24" cy="30" rx="14" ry="6" fill="#00758F" opacity="0.3" />
    </template>

    <!-- AWS -->
    <template v-else-if="id === 'aws'">
      <path d="M10 30 C10 22 16 16 24 16 C32 16 38 22 38 30" stroke="#FF9900" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <text x="24" y="34" text-anchor="middle" fill="#FF9900" font-family="monospace" font-size="10" font-weight="700">AWS</text>
    </template>

    <!-- Docker -->
    <template v-else-if="id === 'docker'">
      <rect x="10" y="22" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="20" y="22" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="30" y="22" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="20" y="12" width="8" height="8" rx="1" fill="#2496ED" opacity="0.7" />
      <path d="M8 32 H40" stroke="#2496ED" stroke-width="2" />
    </template>

    <!-- Git -->
    <template v-else-if="id === 'git'">
      <circle cx="24" cy="14" r="4" fill="#F05032" />
      <circle cx="14" cy="34" r="4" fill="#F05032" />
      <circle cx="34" cy="34" r="4" fill="#F05032" />
      <line x1="22" y1="17" x2="16" y2="31" stroke="#F05032" stroke-width="2" />
      <line x1="26" y1="17" x2="32" y2="31" stroke="#F05032" stroke-width="2" />
      <line x1="18" y1="34" x2="30" y2="34" stroke="#F05032" stroke-width="2" />
    </template>
  </svg>
</template>

<style scoped>
.tech-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.tech-icon__react-orbit {
  transform-origin: 24px 24px;
  animation: spin-slow 8s linear infinite;
}

@keyframes spin-slow {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .tech-icon__react-orbit {
    animation: none;
  }
}
</style>
