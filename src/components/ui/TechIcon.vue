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

    <!-- Redis -->
    <template v-else-if="id === 'redis'">
      <path d="M24 10 L40 17 L24 24 L8 17 Z" fill="#DC382D" />
      <path d="M8 23 L24 30 L40 23" stroke="#DC382D" stroke-width="3" stroke-linejoin="round" opacity="0.75" />
      <path d="M8 30 L24 37 L40 30" stroke="#DC382D" stroke-width="3" stroke-linejoin="round" opacity="0.5" />
      <path d="M20 16 L28 16" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.8" />
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

    <!-- SQLite -->
    <template v-else-if="id === 'sqlite'">
      <ellipse cx="24" cy="13" rx="13" ry="5" fill="#0F80CC" />
      <path d="M11 13 V33 C11 36 17 39 24 39 C31 39 37 36 37 33 V13" fill="#0F80CC" opacity="0.45" />
      <path d="M11 23 C11 26 17 29 24 29 C31 29 37 26 37 23" stroke="#44A8E6" stroke-width="1.5" />
      <path d="M30 6 L34 22 L28 38" stroke="#7FCCFF" stroke-width="2.5" stroke-linecap="round" />
    </template>

    <!-- CI/CD -->
    <template v-else-if="id === 'cicd'">
      <path d="M17 24 C17 18 24 18 24 24 C24 30 31 30 31 24 C31 18 24 18 24 24 C24 30 17 30 17 24 Z" stroke="#34D399" stroke-width="2.5" fill="none" transform="translate(-7 0) scale(1.3 1.3) translate(-1 -5.5)" />
      <path d="M36 16 L40 20 L36 24" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <path d="M12 24 L8 28 L12 32" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </template>

    <!-- Linux -->
    <template v-else-if="id === 'linux'">
      <ellipse cx="24" cy="27" rx="11" ry="14" fill="#1E1E28" stroke="#F2F2FA" stroke-opacity="0.5" />
      <ellipse cx="24" cy="30" rx="7" ry="9" fill="#F2F2FA" />
      <circle cx="20" cy="18" r="2.2" fill="#F2F2FA" /><circle cx="28" cy="18" r="2.2" fill="#F2F2FA" />
      <circle cx="20.5" cy="18.3" r="1" fill="#1E1E28" /><circle cx="27.5" cy="18.3" r="1" fill="#1E1E28" />
      <path d="M21 22 L24 24.5 L27 22 Z" fill="#FCC624" />
      <ellipse cx="17" cy="41" rx="5" ry="2.5" fill="#FCC624" /><ellipse cx="31" cy="41" rx="5" ry="2.5" fill="#FCC624" />
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
