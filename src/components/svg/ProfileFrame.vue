<template>
  <div class="profile-frame">
    <svg class="profile-frame__ring" viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <linearGradient id="profile-ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#c9a227" />
          <stop offset="50%" stop-color="#7c6cff" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="188" fill="none" stroke="url(#profile-ring-grad)" stroke-width="2" stroke-opacity="0.5" class="profile-frame__orbit" />
      <polygon points="200,24 360,112 360,288 200,376 40,288 40,112" fill="none" stroke="url(#profile-ring-grad)" stroke-width="1.5" stroke-opacity="0.35" class="profile-frame__hex" />
    </svg>

    <div class="profile-frame__glow" aria-hidden="true" />

    <div class="profile-frame__image-wrap">
      <img
        class="profile-frame__image"
        src="/images/profile.png"
        alt="Set Maw Htay — Full Stack Developer"
        width="320"
        height="320"
        loading="eager"
      />
    </div>

    <!-- floating SVG accents -->
    <svg class="profile-frame__badge profile-frame__badge--code" viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="4" width="40" height="40" rx="10" fill="#161625" stroke="#7c6cff" stroke-opacity="0.5" />
      <text x="24" y="30" text-anchor="middle" fill="#7c6cff" font-family="monospace" font-size="14">&lt;/&gt;</text>
    </svg>

    <svg class="profile-frame__badge profile-frame__badge--stack" viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="4" width="40" height="40" rx="10" fill="#161625" stroke="#38bdf8" stroke-opacity="0.5" />
      <rect x="12" y="14" width="24" height="4" rx="1" fill="#38bdf8" opacity="0.7" />
      <rect x="12" y="22" width="18" height="4" rx="1" fill="#7c6cff" opacity="0.5" />
      <rect x="12" y="30" width="20" height="4" rx="1" fill="#c9a227" opacity="0.5" />
    </svg>
  </div>
</template>

<style scoped>
.profile-frame {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
}

.profile-frame__ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.profile-frame__orbit {
  transform-origin: 200px 200px;
  animation: spin-slow 30s linear infinite;
}

.profile-frame__hex {
  transform-origin: 200px 200px;
  animation: spin-slow 45s linear infinite reverse;
}

.profile-frame__glow {
  position: absolute;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201, 162, 39, 0.2), rgba(124, 108, 255, 0.15), transparent 70%);
  filter: blur(20px);
  animation: pulse-ring 4s ease-in-out infinite;
}

.profile-frame__image-wrap {
  position: relative;
  z-index: 1;
  width: 78%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(201, 162, 39, 0.45);
  box-shadow:
    0 0 0 6px rgba(26, 42, 78, 0.5),
    0 16px 48px rgba(0, 0, 0, 0.45),
    0 0 40px rgba(124, 108, 255, 0.15);
}

.profile-frame__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.profile-frame__badge {
  position: absolute;
  width: 3rem;
  height: 3rem;
  z-index: 2;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
}

.profile-frame__badge--code {
  top: 8%;
  right: 2%;
  animation: float-soft 5s ease-in-out infinite;
}

.profile-frame__badge--stack {
  bottom: 10%;
  left: 0;
  animation: float-soft 6s ease-in-out infinite reverse;
}

@keyframes spin-slow {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .profile-frame__orbit,
  .profile-frame__hex,
  .profile-frame__glow,
  .profile-frame__badge {
    animation: none !important;
  }
}
</style>
