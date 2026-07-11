<script setup>
const floatingTech = [
  { label: 'PHP', x: 88, y: 18, color: '#8892bf', width: 72, delay: 0 },
  { label: 'Laravel', x: 192, y: 6, color: '#ff6b5a', width: 78, delay: 0.4 },
  { label: 'Vue', x: 302, y: 12, color: '#42b883', width: 68, delay: 0.8 },
  { label: 'React', x: 408, y: 26, color: '#61dafb', width: 72, delay: 1.2 },
  { label: 'React Native', x: 48, y: 72, color: '#00d8ff', width: 104, delay: 1.6 },
  { label: 'AWS', x: 462, y: 88, color: '#ff9900', width: 68, delay: 2 },
  { label: 'Docker', x: 368, y: 102, color: '#2496ed', width: 78, delay: 2.4 },
]
</script>

<template>
  <div class="dev-workspace" aria-hidden="true">
    <svg class="dev-workspace__svg" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dw-desk-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3d7fd6" />
          <stop offset="100%" stop-color="#2b6bc4" />
        </linearGradient>
        <linearGradient id="dw-desk-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2459a8" />
          <stop offset="100%" stop-color="#1a4588" />
        </linearGradient>
        <linearGradient id="dw-chair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5ec8f2" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>
        <linearGradient id="dw-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a2848" />
          <stop offset="100%" stop-color="#0d1224" />
        </linearGradient>
        <filter id="dw-shadow" x="-15%" y="-15%" width="130%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000" flood-opacity="0.35" />
        </filter>
      </defs>

      <!-- badge trails -->
      <g opacity="0.4" stroke-width="2.5" stroke-linecap="round">
        <path d="M124 42 C170 78, 220 118, 260 148" stroke="#8892bf" stroke-dasharray="8 10" class="dw-trail dw-trail--1" />
        <path d="M230 26 C270 68, 300 108, 318 142" stroke="#42b883" stroke-dasharray="8 10" class="dw-trail dw-trail--2" />
        <path d="M360 48 C350 88, 335 122, 318 152" stroke="#61dafb" stroke-dasharray="8 10" class="dw-trail dw-trail--3" />
        <path d="M100 96 C150 118, 210 138, 250 158" stroke="#00d8ff" stroke-dasharray="8 10" class="dw-trail dw-trail--4" />
        <path d="M496 108 C440 128, 390 148, 350 162" stroke="#ff9900" stroke-dasharray="8 10" class="dw-trail dw-trail--5" />
        <path d="M407 122 C370 142, 330 158, 300 168" stroke="#2496ed" stroke-dasharray="8 10" class="dw-trail dw-trail--6" />
      </g>

      <!-- floating badges -->
      <g v-for="(tech, i) in floatingTech" :key="tech.label" filter="url(#dw-shadow)">
        <g
          class="dw-badge"
          :class="`dw-badge--${i + 1}`"
          :style="{ animationDelay: `${tech.delay}s` }"
        >
          <rect
            :x="tech.x" :y="tech.y" :width="tech.width" height="32" rx="4"
            :fill="tech.color" fill-opacity="0.22"
            :stroke="tech.color" stroke-opacity="0.7" stroke-width="1.5"
          />
          <text
            :x="tech.x + tech.width / 2" :y="tech.y + 20"
            text-anchor="middle" :fill="tech.color"
            font-family="IBM Plex Mono, monospace"
            :font-size="tech.label.length > 10 ? 10 : 12"
            font-weight="700"
          >{{ tech.label }}</text>
        </g>
      </g>

      <!-- chair -->
      <g class="dw-chair">
        <!-- wheels / base -->
        <ellipse cx="168" cy="292" rx="42" ry="8" fill="#1a3058" opacity="0.6" />
        <rect x="162" y="268" width="12" height="24" rx="3" fill="#2a4a78" />
        <!-- seat -->
        <ellipse cx="168" cy="258" rx="46" ry="14" fill="url(#dw-chair)" />
        <!-- backrest -->
        <path
          d="M128 258 Q118 200 128 148 Q148 130 168 132 Q188 130 208 148 Q218 200 208 258 Z"
          fill="url(#dw-chair)" stroke="#7dd3fc" stroke-opacity="0.4" stroke-width="1.5"
        />
        <path d="M138 200 Q168 188 198 200" stroke="#bae6fd" stroke-opacity="0.35" fill="none" stroke-width="2" />
      </g>

      <!-- developer (back 3/4 view, glasses) -->
      <g class="dw-dev">
        <!-- legs -->
        <path d="M148 258 L142 290 L156 290 L160 258 Z" fill="#6b7280" />
        <path d="M176 258 L182 290 L168 290 L164 258 Z" fill="#5b6370" />
        <!-- torso -->
        <path d="M138 218 Q168 205 198 218 L204 258 L132 258 Z" fill="#3b5bdb" />
        <path d="M148 228 L128 248 L140 254 L156 234 Z" fill="#364fc7" />
        <path d="M188 228 L208 244 L196 252 L180 234 Z" fill="#364fc7" />
        <!-- neck -->
        <rect x="160" y="198" width="16" height="22" rx="4" fill="#e8a598" />
        <!-- head + hair -->
        <ellipse cx="168" cy="182" rx="22" ry="24" fill="#2d1f14" />
        <ellipse cx="168" cy="186" rx="18" ry="20" fill="#e8a598" />
        <!-- glasses (side/back view) -->
        <g class="dw-glasses">
          <rect x="148" y="178" width="14" height="10" rx="2" fill="none" stroke="#1e293b" stroke-width="2.5" />
          <rect x="174" y="178" width="14" height="10" rx="2" fill="none" stroke="#1e293b" stroke-width="2.5" />
          <path d="M162 183 L170 183" stroke="#1e293b" stroke-width="2" />
          <path d="M146 182 L140 180" stroke="#1e293b" stroke-width="2" stroke-linecap="round" />
        </g>
        <!-- arms toward keyboard -->
        <path d="M140 234 Q200 228 230 222" stroke="#364fc7" stroke-width="14" stroke-linecap="round" fill="none" />
        <path d="M196 234 Q240 230 268 224" stroke="#364fc7" stroke-width="12" stroke-linecap="round" fill="none" />
      </g>

      <!-- typing hands -->
      <g class="dw-hands">
        <g class="dw-hand dw-hand--left">
          <ellipse cx="236" cy="222" rx="11" ry="7" fill="#e8a598" />
          <ellipse cx="228" cy="218" rx="4" ry="3" fill="#d4958a" />
        </g>
        <g class="dw-hand dw-hand--right">
          <ellipse cx="272" cy="220" rx="11" ry="7" fill="#e8a598" />
          <ellipse cx="280" cy="216" rx="4" ry="3" fill="#d4958a" />
        </g>
      </g>

      <!-- desk -->
      <g class="dw-desk" filter="url(#dw-shadow)">
        <!-- top -->
        <path d="M100 248 L500 248 L540 278 L140 278 Z" fill="url(#dw-desk-top)" stroke="#60a5fa" stroke-opacity="0.35" />
        <!-- front -->
        <path d="M140 278 L540 278 L540 302 L140 302 Z" fill="url(#dw-desk-front)" />
        <!-- legs -->
        <path d="M155 302 L165 338 L178 338 L168 302 Z" fill="#1a4588" />
        <path d="M505 302 L515 338 L528 338 L518 302 Z" fill="#1a4588" />
      </g>

      <!-- monitor -->
      <g class="dw-monitor">
        <rect x="268" y="148" width="148" height="92" rx="5" fill="#0f172a" stroke="#94a3b8" stroke-width="2" />
        <rect x="276" y="156" width="132" height="76" rx="3" fill="url(#dw-screen)" class="dw-screen" />
        <!-- code on screen -->
        <g transform="translate(286 168)">
          <rect width="52" height="5" rx="2" fill="#7c6cff" class="dw-code dw-code--1" />
          <rect y="12" width="78" height="5" rx="2" fill="#38bdf8" class="dw-code dw-code--2" />
          <rect y="24" width="64" height="5" rx="2" fill="#42b883" class="dw-code dw-code--3" />
          <rect y="36" width="70" height="5" rx="2" fill="#c9a227" class="dw-code dw-code--4" />
          <rect x="74" y="36" width="7" height="12" fill="#38bdf8" class="dw-cursor" />
        </g>
        <!-- stand -->
        <path d="M330 240 L330 250 L318 250 L342 250 Z" fill="#334155" />
        <rect x="310" y="250" width="56" height="5" rx="2" fill="#475569" />
      </g>

      <!-- tablet / pad left -->
      <rect x="168" y="256" width="44" height="6" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="1" />

      <!-- keyboard -->
      <g class="dw-keyboard">
        <rect x="222" y="254" width="118" height="14" rx="3" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
        <!-- key rows -->
        <g fill="#94a3b8" opacity="0.7">
          <rect x="228" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--1" />
          <rect x="240" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--2" />
          <rect x="252" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--3" />
          <rect x="264" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--4" />
          <rect x="276" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--5" />
          <rect x="288" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--6" />
          <rect x="300" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--7" />
          <rect x="312" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--8" />
          <rect x="324" y="257" width="8" height="3" rx="0.5" class="dw-key dw-key--9" />
        </g>
        <rect x="240" y="262" width="72" height="3" rx="0.5" fill="#94a3b8" opacity="0.5" />
      </g>

      <!-- coffee cup -->
      <g class="dw-coffee">
        <rect x="388" y="248" width="22" height="18" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <path d="M410 254 L418 254 Q422 258 418 262 L410 262 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
        <path d="M394 248 L396 242 L404 242 L406 248" fill="#e2e8f0" />
        <ellipse cx="399" cy="256" rx="6" ry="2" fill="#8b5a2b" opacity="0.5" class="dw-coffee-surface" />
        <!-- steam -->
        <path d="M396 238 Q394 232 396 226" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" fill="none" class="dw-steam dw-steam--1" opacity="0.5" />
        <path d="M402 236 Q404 230 402 224" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" fill="none" class="dw-steam dw-steam--2" opacity="0.5" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.dev-workspace {
  width: 100%;
  max-width: 560px;
  margin-inline: auto;
}

.dev-workspace__svg {
  width: 100%;
  height: auto;
  display: block;
}

/* floating badges */
.dw-badge {
  animation: dw-badge-float 4s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.dw-badge--1 { animation-duration: 4.2s; }
.dw-badge--2 { animation-duration: 4.8s; }
.dw-badge--3 { animation-duration: 5.1s; }
.dw-badge--4 { animation-duration: 4.5s; }
.dw-badge--5 { animation-duration: 5.3s; }
.dw-badge--6 { animation-duration: 4.7s; }
.dw-badge--7 { animation-duration: 5.5s; }

.dw-trail {
  animation: dw-trail-flow 2.5s linear infinite;
}
.dw-trail--2 { animation-delay: 0.6s; }
.dw-trail--3 { animation-delay: 1.2s; }
.dw-trail--4 { animation-delay: 0.3s; }
.dw-trail--5 { animation-delay: 0.9s; }
.dw-trail--6 { animation-delay: 1.5s; }

/* screen */
.dw-screen { animation: dw-screen-glow 3s ease-in-out infinite; }
.dw-code { animation: dw-code-pulse 2s ease-in-out infinite; }
.dw-code--2 { animation-delay: 0.25s; }
.dw-code--3 { animation-delay: 0.5s; }
.dw-code--4 { animation-delay: 0.75s; }
.dw-cursor { animation: dw-cursor-blink 1s step-end infinite; }

/* typing: hands alternate, keys flash */
.dw-hand--left {
  animation: dw-type-left 0.45s ease-in-out infinite;
  transform-origin: 236px 222px;
  transform-box: fill-box;
}
.dw-hand--right {
  animation: dw-type-right 0.45s ease-in-out infinite;
  transform-origin: 272px 220px;
  transform-box: fill-box;
}

.dw-key--1 { animation: dw-key-press 0.9s ease-in-out infinite; }
.dw-key--3 { animation: dw-key-press 0.9s ease-in-out infinite 0.15s; }
.dw-key--5 { animation: dw-key-press 0.9s ease-in-out infinite 0.3s; }
.dw-key--7 { animation: dw-key-press 0.9s ease-in-out infinite 0.45s; }
.dw-key--2 { animation: dw-key-press 0.9s ease-in-out infinite 0.45s; }
.dw-key--4 { animation: dw-key-press 0.9s ease-in-out infinite 0.6s; }
.dw-key--6 { animation: dw-key-press 0.9s ease-in-out infinite 0.75s; }
.dw-key--8 { animation: dw-key-press 0.9s ease-in-out infinite 0.9s; }

.dw-dev {
  animation: dw-dev-bob 4s ease-in-out infinite;
  transform-origin: 168px 240px;
  transform-box: fill-box;
}

.dw-steam--1 { animation: dw-steam-rise 2.5s ease-in-out infinite; }
.dw-steam--2 { animation: dw-steam-rise 2.5s ease-in-out infinite 0.8s; }

@keyframes dw-badge-float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(5px, -8px); }
}
@keyframes dw-trail-flow {
  to { stroke-dashoffset: -36; }
}
@keyframes dw-screen-glow {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 1; }
}
@keyframes dw-code-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
@keyframes dw-cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes dw-type-left {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}
@keyframes dw-type-right {
  0%, 100% { transform: translateY(4px); }
  50% { transform: translateY(0); }
}
@keyframes dw-key-press {
  0%, 100% { fill: #94a3b8; opacity: 0.7; }
  50% { fill: #7c6cff; opacity: 1; }
}
@keyframes dw-dev-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(2px); }
}
@keyframes dw-steam-rise {
  0%, 100% { transform: translateY(0); opacity: 0.3; }
  50% { transform: translateY(-6px); opacity: 0.6; }
}

@media (prefers-reduced-motion: reduce) {
  .dw-badge, .dw-trail, .dw-screen, .dw-code, .dw-cursor,
  .dw-hand--left, .dw-hand--right, .dw-key, .dw-dev, .dw-steam {
    animation: none !important;
  }
}
</style>
