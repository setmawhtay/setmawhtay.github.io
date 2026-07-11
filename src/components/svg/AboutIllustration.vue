<template>
  <svg
    class="about-illustration"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Full stack development illustration"
  >
    <defs>
      <linearGradient id="about-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7c6cff" />
        <stop offset="100%" stop-color="#38bdf8" />
      </linearGradient>
    </defs>

    <circle cx="200" cy="200" r="150" stroke="url(#about-grad)" stroke-opacity="0.2" stroke-width="2" stroke-dasharray="6 10" class="about-illustration__ring" />

    <!-- server stack -->
    <g class="about-illustration__float about-illustration__float--1">
      <rect x="60" y="120" width="80" height="100" rx="10" fill="#161625" stroke="#7c6cff" stroke-opacity="0.4" />
      <rect x="72" y="136" width="56" height="8" rx="2" fill="#7c6cff" opacity="0.5" />
      <rect x="72" y="152" width="56" height="8" rx="2" fill="#38bdf8" opacity="0.35" />
      <rect x="72" y="168" width="56" height="8" rx="2" fill="#9b9bb8" opacity="0.25" />
      <circle cx="76" cy="196" r="3" fill="#34d399" />
      <text x="86" y="200" fill="#9b9bb8" font-family="monospace" font-size="9">API</text>
    </g>

    <!-- browser window -->
    <g class="about-illustration__float about-illustration__float--2">
      <rect x="230" y="80" width="120" height="90" rx="8" fill="#12121f" stroke="#38bdf8" stroke-opacity="0.4" />
      <rect x="230" y="80" width="120" height="18" rx="8" fill="#1e1e32" />
      <circle cx="244" cy="89" r="3" fill="#f87171" opacity="0.7" />
      <circle cx="254" cy="89" r="3" fill="#fbbf24" opacity="0.7" />
      <circle cx="264" cy="89" r="3" fill="#34d399" opacity="0.7" />
      <rect x="242" y="108" width="48" height="4" rx="2" fill="#7c6cff" opacity="0.6" />
      <rect x="242" y="118" width="72" height="4" rx="2" fill="#38bdf8" opacity="0.4" />
      <rect x="242" y="128" width="56" height="4" rx="2" fill="#9b9bb8" opacity="0.3" />
      <rect x="242" y="148" width="40" height="14" rx="4" fill="#7c6cff" opacity="0.3" />
    </g>

    <!-- mobile -->
    <g class="about-illustration__float about-illustration__float--3">
      <rect x="155" y="250" width="56" height="96" rx="10" fill="#161625" stroke="#7c6cff" stroke-opacity="0.35" />
      <rect x="163" y="262" width="40" height="64" rx="4" fill="#0f172a" />
      <rect x="169" y="272" width="28" height="4" rx="2" fill="#38bdf8" opacity="0.5" />
      <rect x="169" y="282" width="20" height="4" rx="2" fill="#7c6cff" opacity="0.4" />
      <circle cx="183" cy="340" r="5" stroke="#9b9bb8" stroke-opacity="0.4" />
    </g>

    <!-- cloud -->
    <g class="about-illustration__float about-illustration__float--4">
      <path d="M270 280 C270 262 286 250 306 250 C322 250 336 260 340 274 C354 276 366 288 366 304 C366 322 352 336 334 336 L278 336 C262 336 250 322 250 306 C250 292 258 282 270 280 Z" fill="#161625" stroke="#38bdf8" stroke-opacity="0.35" />
      <text x="288" y="310" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="600">AWS</text>
    </g>

    <!-- connecting lines -->
    <path d="M140 170 L230 130" stroke="#7c6cff" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="4 6" class="about-illustration__line" />
    <path d="M290 170 L183 250" stroke="#38bdf8" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="4 6" class="about-illustration__line about-illustration__line--2" />
    <path d="M140 200 L300 300" stroke="#7c6cff" stroke-opacity="0.15" stroke-width="1.5" stroke-dasharray="4 6" />
  </svg>
</template>

<style scoped>
.about-illustration {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.about-illustration__ring {
  transform-origin: 200px 200px;
  animation: spin-slow 40s linear infinite;
}

.about-illustration__float--1 { animation: float-soft 5s ease-in-out infinite; }
.about-illustration__float--2 { animation: float-soft 6s ease-in-out infinite reverse; animation-delay: -1.5s; }
.about-illustration__float--3 { animation: float-soft 4.5s ease-in-out infinite; animation-delay: -0.5s; }
.about-illustration__float--4 { animation: float-soft 7s ease-in-out infinite reverse; }

.about-illustration__line {
  stroke-dashoffset: 0;
  animation: dash-flow 3s linear infinite;
}

.about-illustration__line--2 {
  animation-delay: -1.5s;
}

@keyframes spin-slow {
  to { transform: rotate(360deg); }
}

@keyframes dash-flow {
  to { stroke-dashoffset: -20; }
}

@media (prefers-reduced-motion: reduce) {
  .about-illustration__ring,
  .about-illustration__float--1,
  .about-illustration__float--2,
  .about-illustration__float--3,
  .about-illustration__float--4,
  .about-illustration__line {
    animation: none !important;
  }
}
</style>
