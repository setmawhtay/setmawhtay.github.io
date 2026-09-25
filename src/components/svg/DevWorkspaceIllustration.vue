<script setup>
import { useReducedMotion } from '../../composables/useReducedMotion.js'

const { prefersReduced } = useReducedMotion()

/** Where every badge's data trail lands (top edge of the main monitor). */
const target = { x: 305, y: 106 }

const floatingTech = [
  { label: 'PHP', x: 20, y: 70, color: '#8892bf', width: 60 },
  { label: 'Laravel', x: 92, y: 24, color: '#ff6b5a', width: 80 },
  { label: 'Vue', x: 196, y: 6, color: '#42b883', width: 60 },
  { label: 'React', x: 280, y: 30, color: '#61dafb', width: 70 },
  { label: 'Node.js', x: 372, y: 6, color: '#6cc24a', width: 80 },
  { label: 'MySQL', x: 470, y: 28, color: '#00a3c4', width: 74 },
  { label: 'AWS', x: 524, y: 88, color: '#ff9900', width: 58 },
  { label: 'Docker', x: 422, y: 100, color: '#2496ed', width: 76 },
].map((tech, i) => {
  const sx = tech.x + tech.width / 2
  const sy = tech.y + 30
  const cx = (sx + target.x) / 2 + (sx < target.x ? -18 : 18)
  const cy = Math.max(sy, target.y) - 8
  return {
    ...tech,
    delay: i * 0.35,
    trail: `M${sx} ${sy} Q${cx} ${cy} ${target.x} ${target.y}`,
  }
})

const codeLines = [
  { indent: 0, parts: [['#c792ea', 22], ['#82aaff', 38], ['#89ddff', 10]] },
  { indent: 1, parts: [['#c792ea', 18], ['#f2f2fa', 26], ['#89ddff', 8], ['#c3e88d', 34]] },
  { indent: 1, parts: [['#c792ea', 22], ['#ffcb6b', 30], ['#89ddff', 12]] },
  { indent: 2, parts: [['#82aaff', 28], ['#f2f2fa', 20], ['#f78c6c', 14]] },
  { indent: 2, parts: [['#c3e88d', 44], ['#89ddff', 8]] },
  { indent: 1, parts: [['#89ddff', 8]] },
  { indent: 1, parts: [['#c792ea', 26], ['#82aaff', 32], ['#89ddff', 10]] },
  { indent: 0, parts: [['#89ddff', 8]] },
].map((line, i) => {
  let x = 0
  const parts = line.parts.map(([color, width]) => {
    const part = { color, width, x }
    x += width + 4
    return part
  })
  return { ...line, parts, y: i * 10, width: x }
})

const LINE_STAGGER = 0.55
const TYPE_LOOP = 8

/** Cursor hops to the end of each line as it finishes typing. */
const cursorPath = {
  values: codeLines
    .map((line) => `${234 + line.indent * 10 + line.width - 2} ${174 + line.y}`)
    .join(';'),
  keyTimes: codeLines
    .map((_, i) => ((i * LINE_STAGGER) / TYPE_LOOP).toFixed(4))
    .join(';'),
}

const stars = [
  [44, 132, 1.2, 0], [70, 146, 0.9, 0.6], [98, 128, 1.1, 1.2], [122, 150, 0.8, 1.8],
  [56, 170, 0.9, 0.9], [110, 176, 1, 2.2], [132, 132, 0.8, 0.3], [84, 162, 0.7, 1.5],
]
</script>

<template>
  <div class="dev-workspace" aria-hidden="true">
    <svg class="dev-workspace__svg" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dw-desk-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#2a2550" />
          <stop offset="100%" stop-color="#211d42" />
        </linearGradient>
        <linearGradient id="dw-desk-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a1636" />
          <stop offset="100%" stop-color="#120f26" />
        </linearGradient>
        <linearGradient id="dw-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#141a33" />
          <stop offset="100%" stop-color="#0b0f20" />
        </linearGradient>
        <linearGradient id="dw-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1b1446" />
          <stop offset="100%" stop-color="#2b3a7a" />
        </linearGradient>
        <linearGradient id="dw-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5b4df0" />
          <stop offset="100%" stop-color="#3b2fc4" />
        </linearGradient>
        <linearGradient id="dw-chair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2d2a4a" />
          <stop offset="100%" stop-color="#1c1a30" />
        </linearGradient>
        <linearGradient id="dw-lamp-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffd98a" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#ffd98a" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="dw-progress" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#7c6cff" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>
        <radialGradient id="dw-screen-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stop-color="#7c6cff" stop-opacity="0.5" />
          <stop offset="60%" stop-color="#38bdf8" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="dw-moon" cx="0.4" cy="0.4" r="0.6">
          <stop offset="0%" stop-color="#fff8dc" />
          <stop offset="100%" stop-color="#f5d77a" />
        </radialGradient>
        <clipPath id="dw-window-clip">
          <rect x="30" y="118" width="116" height="84" rx="6" />
        </clipPath>
        <filter id="dw-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" flood-color="#000" flood-opacity="0.4" />
        </filter>
        <filter id="dw-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <!-- ===== room ===== -->
      <ellipse cx="305" cy="412" rx="270" ry="8" fill="#000" opacity="0.35" />

      <!-- window with night sky -->
      <g class="dw-window">
        <rect x="26" y="114" width="124" height="92" rx="8" fill="#1a1636" />
        <g clip-path="url(#dw-window-clip)">
          <rect x="30" y="118" width="116" height="84" fill="url(#dw-sky)" />
          <circle cx="120" cy="140" r="11" fill="url(#dw-moon)" class="dw-moon" />
          <circle
            v-for="([x, y, r, d], i) in stars"
            :key="i"
            :cx="x" :cy="y" :r="r"
            fill="#fff"
            class="dw-star"
            :style="{ animationDelay: `${d}s` }"
          />
          <path d="M30 188 L52 176 L70 184 L92 170 L116 182 L146 172 L146 202 L30 202 Z" fill="#141033" />
          <g fill="#ffd98a" opacity="0.7">
            <rect x="58" y="188" width="3" height="3" class="dw-city-light" />
            <rect x="96" y="182" width="3" height="3" class="dw-city-light dw-city-light--2" />
            <rect x="124" y="186" width="3" height="3" class="dw-city-light dw-city-light--3" />
          </g>
        </g>
        <path d="M88 118 V202 M30 160 H146" stroke="#1a1636" stroke-width="4" />
      </g>

      <!-- ===== data trails from badges into the monitor ===== -->
      <g stroke-width="1.6" stroke-linecap="round" fill="none">
        <path
          v-for="tech in floatingTech"
          :id="`dw-trail-${tech.label}`"
          :key="`trail-${tech.label}`"
          :d="tech.trail"
          :stroke="tech.color"
          stroke-opacity="0.35"
          stroke-dasharray="4 8"
          class="dw-trail"
        />
      </g>

      <!-- packets flowing along trails (SMIL, skipped for reduced motion) -->
      <g v-if="!prefersReduced">
        <circle
          v-for="tech in floatingTech"
          :key="`packet-${tech.label}`"
          r="2.6"
          :fill="tech.color"
          opacity="0"
        >
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            :begin="`${tech.delay}s`"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="spline"
            keySplines="0.4 0 0.2 1"
          >
            <mpath :href="`#dw-trail-${tech.label}`" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.8;1"
            dur="3.2s"
            repeatCount="indefinite"
            :begin="`${tech.delay}s`"
          />
        </circle>
      </g>

      <!-- ===== floating tech badges ===== -->
      <g v-for="(tech, i) in floatingTech" :key="tech.label" filter="url(#dw-shadow)">
        <g
          class="dw-badge"
          :style="{ animationDelay: `${-tech.delay * 2}s`, animationDuration: `${4.2 + (i % 4) * 0.45}s` }"
        >
          <rect
            :x="tech.x" :y="tech.y" :width="tech.width" height="28" rx="14"
            fill="#15122a" fill-opacity="0.92"
            :stroke="tech.color" stroke-opacity="0.65" stroke-width="1.4"
          />
          <circle
            :cx="tech.x + 14" :cy="tech.y + 14" r="4"
            :fill="tech.color"
            class="dw-badge-dot"
            :style="{ animationDelay: `${tech.delay}s` }"
          />
          <text
            :x="tech.x + 24" :y="tech.y + 18.5"
            :fill="tech.color"
            font-family="IBM Plex Mono, monospace"
            font-size="11"
            font-weight="600"
          >{{ tech.label }}</text>
        </g>
      </g>

      <!-- ===== desk ===== -->
      <g class="dw-desk">
        <path d="M70 290 L540 290 L572 318 L38 318 Z" fill="url(#dw-desk-top)" />
        <path d="M70 290 L540 290" stroke="#7c6cff" stroke-opacity="0.35" />
        <path d="M38 318 L572 318 L572 336 L38 336 Z" fill="url(#dw-desk-front)" />
        <path d="M38 318 L572 318" stroke="#a5a0ff" stroke-opacity="0.25" />
        <path d="M60 336 L66 410 L78 410 L74 336 Z" fill="#120f26" />
        <path d="M536 336 L532 410 L544 410 L550 336 Z" fill="#120f26" />
      </g>

      <!-- screen light spilling onto desk -->
      <ellipse cx="320" cy="302" rx="150" ry="18" fill="url(#dw-screen-glow)" class="dw-desk-glow" />

      <!-- ===== desk lamp ===== -->
      <g class="dw-lamp">
        <path d="M118 222 L92 292 L176 292 L146 222 Z" fill="url(#dw-lamp-light)" class="dw-lamp-light" />
        <ellipse cx="84" cy="292" rx="18" ry="4" fill="#3a3560" />
        <path d="M84 290 L76 244 L118 214" stroke="#4a4478" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="76" cy="244" r="4" fill="#5b5596" />
        <path d="M108 206 L140 214 L150 228 L112 222 Z" fill="#f5d77a" />
        <ellipse cx="131" cy="225" rx="12" ry="3" fill="#fff4c2" class="dw-bulb" />
      </g>

      <!-- ===== main monitor: code editor ===== -->
      <g class="dw-monitor" filter="url(#dw-shadow)">
        <!-- stand (monitor is raised so the code stays visible above the developer's head) -->
        <path d="M299 224 L295 286 L315 286 L311 224 Z" fill="#2a2550" />
        <ellipse cx="305" cy="288" rx="32" ry="4.5" fill="#3a3560" />
        <g transform="translate(0 -44)">
        <rect x="208" y="148" width="194" height="122" rx="8" fill="#0d0b1c" stroke="#3a3560" stroke-width="2" />
        <rect x="215" y="155" width="180" height="108" rx="4" fill="url(#dw-screen)" />
        <!-- title bar -->
        <rect x="215" y="155" width="180" height="12" rx="4" fill="#1a1f3d" />
        <circle cx="223" cy="161" r="2" fill="#ff5f57" />
        <circle cx="230" cy="161" r="2" fill="#febc2e" />
        <circle cx="237" cy="161" r="2" fill="#28c840" />
        <rect x="248" y="157" width="40" height="10" rx="2" fill="#141a33" />
        <rect x="254" y="161" width="26" height="2.5" rx="1" fill="#82aaff" opacity="0.8" />
        <!-- gutter -->
        <g fill="#3f4775">
          <rect v-for="(line, i) in codeLines" :key="`ln-${i}`" x="220" :y="175 + line.y" width="6" height="3" rx="1" />
        </g>
        <!-- typed code -->
        <g transform="translate(234 175)">
          <g
            v-for="(line, i) in codeLines"
            :key="`code-${i}`"
            class="dw-code-line"
            :style="{ animationDelay: `${i * LINE_STAGGER}s`, animationDuration: `${TYPE_LOOP}s` }"
          >
            <rect
              v-for="(part, j) in line.parts"
              :key="j"
              :x="line.indent * 10 + part.x"
              :y="line.y"
              :width="part.width"
              height="4"
              rx="2"
              :fill="part.color"
              opacity="0.9"
            />
          </g>
        </g>
        <rect
          width="3" height="6" fill="#38bdf8" class="dw-cursor"
          :transform="`translate(${cursorPath.values.split(';').at(-1)})`"
        >
          <animateTransform
            v-if="!prefersReduced"
            attributeName="transform"
            type="translate"
            calcMode="discrete"
            :values="cursorPath.values"
            :keyTimes="cursorPath.keyTimes"
            :dur="`${TYPE_LOOP}s`"
            repeatCount="indefinite"
          />
        </rect>
        <!-- status bar -->
        <rect x="215" y="257" width="180" height="6" fill="#7c6cff" opacity="0.5" />
        </g>
      </g>

      <!-- ===== side monitor: build terminal ===== -->
      <g class="dw-side-monitor" filter="url(#dw-shadow)">
        <rect x="412" y="176" width="100" height="94" rx="7" fill="#0d0b1c" stroke="#3a3560" stroke-width="2" />
        <rect x="418" y="182" width="88" height="82" rx="3" fill="#07091a" />
        <g font-family="IBM Plex Mono, monospace" font-size="7">
          <text x="423" y="194" fill="#6ee7b7">$</text>
          <text x="430" y="194" fill="#c7c9e0">npm run build</text>
          <text x="423" y="206" fill="#7d86b8">vite building…</text>
        </g>
        <rect x="423" y="212" width="78" height="5" rx="2.5" fill="#1a1f3d" />
        <rect x="423" y="212" width="78" height="5" rx="2.5" fill="url(#dw-progress)" class="dw-progress" />
        <g font-family="IBM Plex Mono, monospace" font-size="7">
          <text x="423" y="230" fill="#34d399" class="dw-term-line dw-term-line--1">✓ built in 1.2s</text>
          <text x="423" y="242" fill="#34d399" class="dw-term-line dw-term-line--2">✓ tests passed</text>
          <text x="423" y="254" fill="#38bdf8" class="dw-term-line dw-term-line--3">↑ deployed</text>
        </g>
        <path d="M456 270 L454 286 L466 286 L464 270 Z" fill="#2a2550" />
        <ellipse cx="460" cy="288" rx="20" ry="3.5" fill="#3a3560" />
      </g>

      <!-- floating code glyphs -->
      <g font-family="IBM Plex Mono, monospace" font-weight="600">
        <text x="184" y="176" font-size="12" fill="#a5a0ff" class="dw-glyph">&lt;/&gt;</text>
        <text x="404" y="160" font-size="11" fill="#38bdf8" class="dw-glyph dw-glyph--2">{ }</text>
        <text x="520" y="190" font-size="12" fill="#f5d77a" class="dw-glyph dw-glyph--3">;</text>
      </g>

      <!-- ===== desk items ===== -->
      <!-- keyboard -->
      <!-- books -->
      <g>
        <rect x="190" y="280" width="50" height="9" rx="2" fill="#38bdf8" fill-opacity="0.75" />
        <rect x="194" y="272" width="44" height="8" rx="2" fill="#c9a227" fill-opacity="0.85" />
        <rect x="188" y="264" width="46" height="8" rx="2" fill="#7c6cff" fill-opacity="0.85" />
        <path d="M196 268 H226 M200 276 H230" stroke="#fff" stroke-opacity="0.35" stroke-width="1.2" />
      </g>
      <g class="dw-keyboard" transform="translate(14 0)">
        <path d="M238 294 L344 294 L350 306 L232 306 Z" fill="#2d2a4a" stroke="#4a4478" stroke-width="1" />
        <g fill="#6b64a8">
          <rect
            v-for="k in 12"
            :key="`k-${k}`"
            :x="236 + k * 8.4" y="297" width="6" height="2.6" rx="0.6"
            class="dw-key"
            :style="{ animationDelay: `${(k * 0.37) % 1.2}s` }"
          />
          <rect
            v-for="k in 11"
            :key="`k2-${k}`"
            :x="238 + k * 8.4" y="301" width="6" height="2.6" rx="0.6"
            class="dw-key"
            :style="{ animationDelay: `${(k * 0.53) % 1.2}s` }"
          />
        </g>
      </g>
      <!-- mouse -->
      <ellipse cx="378" cy="302" rx="7" ry="4.5" fill="#2d2a4a" stroke="#4a4478" />
      <!-- coffee -->
      <g class="dw-coffee" transform="translate(10 0)">
        <rect x="380" y="278" width="18" height="18" rx="3" fill="#f5f3ff" />
        <path d="M398 282 Q406 282 406 287 Q406 292 398 292" stroke="#f5f3ff" stroke-width="2.5" fill="none" />
        <rect x="380" y="283" width="18" height="4" fill="#7c6cff" opacity="0.8" />
        <path d="M385 272 Q382 266 385 260" stroke="#c7c9e0" stroke-width="1.5" stroke-linecap="round" class="dw-steam" />
        <path d="M392 272 Q395 265 392 258" stroke="#c7c9e0" stroke-width="1.5" stroke-linecap="round" class="dw-steam dw-steam--2" />
      </g>
      <!-- plant -->
      <g class="dw-plant">
        <g class="dw-leaves">
          <path d="M531 274 Q516 250 522 232 Q534 250 531 274 Z" fill="#34d399" />
          <path d="M533 274 Q540 244 556 236 Q552 260 533 274 Z" fill="#10b981" />
          <path d="M532 274 Q528 246 536 222 Q544 246 532 274 Z" fill="#6ee7b7" />
          <path d="M530 274 Q506 262 504 248 Q522 254 530 274 Z" fill="#059669" />
        </g>
        <path d="M518 272 L546 272 L542 294 L522 294 Z" fill="#c9a227" />
        <rect x="516" y="270" width="32" height="5" rx="2" fill="#f5d77a" />
      </g>

      <!-- ===== developer (seen from behind, centred on the main monitor) ===== -->
      <g class="dw-dev">
        <!-- torso / hoodie -->
        <path d="M255 338 Q252 286 305 274 Q358 286 355 338 Z" fill="url(#dw-hoodie)" />
        <path d="M286 278 Q305 292 324 278" stroke="#2e24a8" stroke-width="3" stroke-linecap="round" />
        <!-- arms reaching forward to the keyboard -->
        <path d="M268 286 Q244 294 256 304" stroke="#4a3ee0" stroke-width="12" stroke-linecap="round" />
        <path d="M342 286 Q366 294 354 304" stroke="#4a3ee0" stroke-width="12" stroke-linecap="round" />
        <!-- neck -->
        <rect x="297" y="256" width="16" height="20" rx="5" fill="#d99888" />
        <!-- head -->
        <g class="dw-head">
          <ellipse cx="305" cy="238" rx="22" ry="24" fill="#2a1d14" />
          <path d="M287 226 Q305 212 325 226" stroke="#3d2a1c" stroke-width="3" stroke-linecap="round" />
          <!-- rim light from the screen -->
          <path d="M322 222 Q329 236 324 252" stroke="#a5a0ff" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round" />
          <path d="M288 222 Q281 236 286 252" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" />
          <!-- headphones -->
          <path d="M283 238 Q283 206 305 206 Q327 206 327 238" stroke="#7c6cff" stroke-width="5" stroke-linecap="round" />
          <rect x="276" y="232" width="11" height="18" rx="5" fill="#7c6cff" />
          <rect x="323" y="232" width="11" height="18" rx="5" fill="#7c6cff" />
          <circle cx="328.5" cy="241" r="2" fill="#38bdf8" class="dw-headphone-led" />
        </g>
      </g>

      <!-- typing hands -->
      <ellipse cx="259" cy="303" rx="7" ry="4.5" fill="#e8a598" class="dw-hand dw-hand--left" />
      <ellipse cx="351" cy="303" rx="7" ry="4.5" fill="#e8a598" class="dw-hand dw-hand--right" />

      <!-- ===== chair ===== -->
      <g class="dw-chair">
        <path d="M265 386 Q257 336 271 306 Q305 292 339 306 Q353 336 345 386 Z" fill="url(#dw-chair)" stroke="#4a4478" stroke-width="1.5" />
        <path d="M279 324 Q305 316 331 324" stroke="#7c6cff" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" />
        <path d="M277 350 Q305 342 333 350" stroke="#7c6cff" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" />
        <rect x="299" y="384" width="12" height="16" rx="3" fill="#2d2a4a" />
        <path d="M277 404 L333 404 M305 398 L287 410 M305 398 L323 410" stroke="#2d2a4a" stroke-width="5" stroke-linecap="round" />
        <circle cx="277" cy="408" r="3.5" fill="#1c1a30" />
        <circle cx="333" cy="408" r="3.5" fill="#1c1a30" />
        <circle cx="287" cy="412" r="3.5" fill="#1c1a30" />
        <circle cx="323" cy="412" r="3.5" fill="#1c1a30" />
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
  overflow: visible;
}

/* badges */
.dw-badge {
  animation: dw-badge-float 4.5s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}

.dw-badge-dot {
  animation: dw-dot-pulse 2.4s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}

.dw-trail {
  animation: dw-trail-flow 1.6s linear infinite;
}

/* window */
.dw-star {
  animation: dw-twinkle 2.6s ease-in-out infinite;
}

.dw-moon {
  filter: drop-shadow(0 0 6px rgba(245, 215, 122, 0.6));
}

.dw-city-light { animation: dw-twinkle 3.2s ease-in-out infinite; }
.dw-city-light--2 { animation-delay: 1.1s; }
.dw-city-light--3 { animation-delay: 2s; }

/* lamp + screen light */
.dw-lamp-light { animation: dw-lamp-flicker 6s ease-in-out infinite; }
.dw-bulb { filter: drop-shadow(0 0 5px #ffd98a); }
.dw-desk-glow { animation: dw-glow-pulse 4s ease-in-out infinite; }

/* code typing: each line types in, holds, then fades before the loop restarts */
.dw-code-line {
  transform-box: fill-box;
  transform-origin: left center;
  animation: dw-type-line 8s var(--ease-out) infinite backwards;
}

.dw-cursor {
  animation: dw-cursor-blink 0.9s step-end infinite;
}

/* terminal */
.dw-progress {
  transform-box: fill-box;
  transform-origin: left center;
  animation: dw-progress 5s ease-in-out infinite;
}

.dw-term-line {
  opacity: 0;
  animation: dw-term-in 5s ease-out infinite;
}
.dw-term-line--2 { animation-delay: 0.35s; }
.dw-term-line--3 { animation-delay: 0.7s; }

/* keyboard + hands */
.dw-key {
  animation: dw-key-press 1.2s ease-in-out infinite;
}

.dw-hand {
  transform-box: fill-box;
  transform-origin: center;
}
.dw-hand--left { animation: dw-type-hand 0.42s ease-in-out infinite; }
.dw-hand--right { animation: dw-type-hand 0.42s ease-in-out infinite 0.21s; }

.dw-head {
  animation: dw-head-nod 3.6s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}

.dw-headphone-led { animation: dw-twinkle 1.4s ease-in-out infinite; }

/* desk items */
.dw-steam { animation: dw-steam-rise 2.8s ease-in-out infinite; }
.dw-steam--2 { animation-delay: 1s; }

.dw-leaves {
  animation: dw-sway 5s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}

.dw-glyph {
  opacity: 0;
  animation: dw-glyph-float 6s ease-in-out infinite;
}
.dw-glyph--2 { animation-delay: 2s; }
.dw-glyph--3 { animation-delay: 4s; }

@keyframes dw-badge-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}
@keyframes dw-dot-pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.35); opacity: 1; }
}
@keyframes dw-trail-flow {
  to { stroke-dashoffset: -24; }
}
@keyframes dw-twinkle {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}
@keyframes dw-lamp-flicker {
  0%, 100% { opacity: 1; }
  46% { opacity: 1; }
  48% { opacity: 0.7; }
  50% { opacity: 1; }
}
@keyframes dw-glow-pulse {
  0%, 100% { opacity: 0.65; }
  50% { opacity: 1; }
}
@keyframes dw-type-line {
  0% { transform: scaleX(0); opacity: 1; }
  8% { transform: scaleX(1); opacity: 1; }
  78% { transform: scaleX(1); opacity: 1; }
  88%, 100% { transform: scaleX(1); opacity: 0; }
}
@keyframes dw-cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes dw-progress {
  0% { transform: scaleX(0); }
  55%, 100% { transform: scaleX(1); }
}
@keyframes dw-term-in {
  0%, 55% { opacity: 0; }
  62%, 92% { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes dw-key-press {
  0%, 100% { fill: #6b64a8; }
  50% { fill: #a5a0ff; }
}
@keyframes dw-type-hand {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(2.5px); }
}
@keyframes dw-head-nod {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-2deg); }
}
@keyframes dw-steam-rise {
  0% { transform: translateY(0); opacity: 0; }
  40% { opacity: 0.7; }
  100% { transform: translateY(-10px); opacity: 0; }
}
@keyframes dw-sway {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
@keyframes dw-glyph-float {
  0% { transform: translateY(8px); opacity: 0; }
  20%, 60% { opacity: 0.9; }
  100% { transform: translateY(-22px); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .dev-workspace__svg * {
    animation: none !important;
  }

  .dw-term-line,
  .dw-glyph {
    opacity: 1;
  }
}
</style>
