<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { useScrollToSection } from '../../composables/useScrollToSection.js'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const { scrollToSection } = useScrollToSection()
const mobileOpen = ref(false)
const activeSection = ref('hero')
const firstLinkRef = ref(null)
const toggleRef = ref(null)

function setBodyScroll(lock) {
  document.body.classList.toggle('nav-open', lock)
}

async function openMobile() {
  mobileOpen.value = true
  setBodyScroll(true)
  await nextTick()
  firstLinkRef.value?.focus()
}

function closeMobile() {
  if (!mobileOpen.value) return
  mobileOpen.value = false
  setBodyScroll(false)
  nextTick(() => toggleRef.value?.focus())
}

function toggleMobile() {
  if (mobileOpen.value) closeMobile()
  else openMobile()
}

function scrollToSectionAndClose(id) {
  closeMobile()
  activeSection.value = id
  scrollToSection(id)
}

function setFirstLink(el) {
  firstLinkRef.value = el
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMobile()
}

function onResize() {
  if (window.innerWidth >= 768) closeMobile()
}

function updateActiveSection() {
  const offset = 120
  const atPageBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8

  if (atPageBottom) {
    activeSection.value = navItems[navItems.length - 1].id
    return
  }

  let current = navItems[0].id
  let closestTop = -Infinity

  for (const item of navItems) {
    const el = document.getElementById(item.id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top - offset <= 0 && top > closestTop) {
      closestTop = top
      current = item.id
    }
  }

  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', updateActiveSection)
  setBodyScroll(false)
})
</script>

<template>
  <header class="app-header" :class="{ 'app-header--menu-open': mobileOpen }" role="banner">
    <div class="app-header__inner container">
      <a
        class="app-header__logo"
        href="#hero"
        @click.prevent="scrollToSectionAndClose('hero')"
        aria-label="Go to top"
      >
        <img
          class="app-header__logo-mark"
          src="/images/profile.png"
          alt=""
          width="36"
          height="36"
        />
        <span class="app-header__logo-text">Set Maw Htay</span>
      </a>

      <!-- Desktop nav -->
      <nav class="app-header__desktop" aria-label="Main navigation">
        <ul class="app-header__desktop-list" role="list">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="app-header__desktop-link"
              :class="{ 'app-header__desktop-link--active': activeSection === item.id }"
              :aria-current="activeSection === item.id ? 'page' : undefined"
              @click.prevent="scrollToSectionAndClose(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        ref="toggleRef"
        class="app-header__toggle"
        :class="{ 'app-header__toggle--open': mobileOpen }"
        type="button"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        :aria-label="mobileOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMobile"
      >
        <span class="app-header__toggle-bar" />
        <span class="app-header__toggle-bar" />
        <span class="app-header__toggle-bar" />
      </button>
    </div>
  </header>

  <!-- Full-screen mobile menu outside header (avoids backdrop-filter clipping) -->
  <Teleport to="body">
    <div
      v-if="mobileOpen"
      id="mobile-nav"
      class="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      @click.self="closeMobile"
    >
      <div class="mobile-nav__glow" aria-hidden="true" />

      <nav class="mobile-nav__panel" aria-label="Mobile navigation">
        <ul class="mobile-nav__list" role="list">
          <li
            v-for="(item, index) in navItems"
            :key="item.id"
            class="mobile-nav__item"
            :style="{ '--i': index }"
          >
            <a
              :ref="index === 0 ? setFirstLink : undefined"
              :href="`#${item.id}`"
              class="mobile-nav__link"
              :class="{ 'mobile-nav__link--active': activeSection === item.id }"
              :aria-current="activeSection === item.id ? 'page' : undefined"
              @click.prevent="scrollToSectionAndClose(item.id)"
            >
              <span class="mobile-nav__label">{{ item.label }}</span>
              <span class="mobile-nav__arrow" aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="mobile-nav__footer">
        <a class="mobile-nav__mail" href="mailto:setmawhtay@protonmail.com">
          setmawhtay@protonmail.com
        </a>
        <p class="mobile-nav__hint">Tap a section to jump</p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  height: var(--header-height);
  background: rgba(7, 7, 15, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
}

.app-header--menu-open {
  /* Above .mobile-nav (z-nav: 300) so logo + X toggle stay clickable */
  z-index: calc(var(--z-nav) + 10);
  background: rgba(7, 7, 15, 0.96);
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.app-header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text);
  text-decoration: none;
  position: relative;
  z-index: 1;
}

.app-header__logo-mark {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: var(--radius-md);
  object-fit: cover;
  object-position: center top;
  border: 2px solid rgba(201, 162, 39, 0.45);
  box-shadow: 0 0 12px rgba(124, 108, 255, 0.2);
}

.app-header__logo-text {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
}

.app-header__desktop-list {
  display: flex;
  gap: var(--space-lg);
  list-style: none;
}

.app-header__desktop-link {
  position: relative;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-muted);
  text-decoration: none;
  padding: var(--space-xs) 0;
  transition: color var(--duration-fast) var(--ease-out);
}

.app-header__desktop-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-fast) var(--ease-out);
}

.app-header__desktop-link:hover,
.app-header__desktop-link:focus-visible,
.app-header__desktop-link--active {
  color: var(--color-text);
}

.app-header__desktop-link--active::after,
.app-header__desktop-link:hover::after,
.app-header__desktop-link:focus-visible::after {
  transform: scaleX(1);
}

.app-header__toggle {
  display: none;
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  padding: 0;
  z-index: 1;
  transition:
    border-color var(--duration-fast) var(--ease-out),
    background var(--duration-fast) var(--ease-out);
}

.app-header__toggle:hover,
.app-header__toggle:focus-visible {
  border-color: var(--color-border-strong);
  background: var(--color-accent-subtle);
}

.app-header__toggle-bar {
  display: block;
  position: absolute;
  left: 50%;
  width: 1.15rem;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
  transform: translateX(-50%);
  transition:
    transform var(--duration-base) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out),
    top var(--duration-base) var(--ease-out);
}

.app-header__toggle-bar:nth-child(1) { top: calc(50% - 6px); }
.app-header__toggle-bar:nth-child(2) { top: 50%; }
.app-header__toggle-bar:nth-child(3) { top: calc(50% + 6px); }

.app-header__toggle--open .app-header__toggle-bar:nth-child(1) {
  top: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.app-header__toggle--open .app-header__toggle-bar:nth-child(2) {
  opacity: 0;
}

.app-header__toggle--open .app-header__toggle-bar:nth-child(3) {
  top: 50%;
  transform: translateX(-50%) rotate(-45deg);
}

@media (max-width: 767px) {
  .app-header__desktop {
    display: none;
  }

  .app-header__toggle {
    display: inline-flex;
  }
}

@media (min-width: 768px) {
  .app-header__toggle {
    display: none;
  }
}
</style>

<!-- Teleported menu is outside scoped parent DOM; unscoped styles with unique class -->
<style>
.mobile-nav {
  position: fixed;
  inset: 0;
  z-index: var(--z-nav);
  display: flex;
  flex-direction: column;
  padding:
    calc(var(--header-height) + var(--space-2xl))
    var(--section-padding-x)
    max(var(--space-2xl), env(safe-area-inset-bottom));
  background: #07070f;
  animation: mobile-nav-in var(--duration-base) var(--ease-out);
}

.mobile-nav__glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 70% 45% at 80% 0%, rgba(124, 108, 255, 0.22), transparent 55%),
    radial-gradient(ellipse 50% 40% at 10% 90%, rgba(56, 189, 248, 0.12), transparent 50%);
}

.mobile-nav__panel {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
}

.mobile-nav__list {
  width: 100%;
  max-width: 28rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.mobile-nav__item {
  border-bottom: 1px solid var(--color-border);
  opacity: 0;
  transform: translateY(12px);
  animation: mobile-nav-item-in 360ms var(--ease-out) forwards;
  animation-delay: calc(60ms + var(--i) * 55ms);
}

.mobile-nav__item:first-child {
  border-top: 1px solid var(--color-border);
}

.mobile-nav__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  min-height: 4.25rem;
  padding-block: var(--space-md);
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.mobile-nav__label {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 7vw, 2.25rem);
  font-weight: var(--weight-bold);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: inherit;
}

.mobile-nav__arrow {
  font-size: var(--text-lg);
  color: var(--color-accent);
  opacity: 0;
  transform: translateX(-6px);
  transition:
    opacity var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.mobile-nav__link:hover,
.mobile-nav__link:focus-visible {
  color: var(--color-text);
}

.mobile-nav__link:hover .mobile-nav__arrow,
.mobile-nav__link:focus-visible .mobile-nav__arrow,
.mobile-nav__link--active .mobile-nav__arrow {
  opacity: 1;
  transform: translateX(0);
}

.mobile-nav__link--active {
  color: var(--color-text);
}

.mobile-nav__link--active .mobile-nav__label {
  background: linear-gradient(90deg, var(--color-text), var(--color-accent-hover));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.mobile-nav__footer {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding-top: var(--space-xl);
  opacity: 0;
  animation: mobile-nav-item-in 360ms var(--ease-out) 0.35s forwards;
}

.mobile-nav__mail {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-cyan);
  text-decoration: none;
  word-break: break-all;
}

.mobile-nav__mail:hover,
.mobile-nav__mail:focus-visible {
  color: var(--color-accent-hover);
}

.mobile-nav__hint {
  margin: 0;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

@keyframes mobile-nav-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes mobile-nav-item-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mobile-nav,
  .mobile-nav__item,
  .mobile-nav__footer {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>
