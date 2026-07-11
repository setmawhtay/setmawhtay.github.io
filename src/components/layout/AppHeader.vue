<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
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

function setBodyScroll(lock) {
  document.body.classList.toggle('nav-open', lock)
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
  setBodyScroll(mobileOpen.value)
}

function closeMobile() {
  mobileOpen.value = false
  setBodyScroll(false)
}

function scrollToSectionAndClose(id) {
  closeMobile()
  activeSection.value = id
  scrollToSection(id)
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMobile()
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
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('scroll', updateActiveSection)
  setBodyScroll(false)
})
</script>

<template>
  <header class="app-header" role="banner">
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

      <button
        v-if="mobileOpen"
        class="app-header__backdrop"
        type="button"
        aria-label="Close navigation menu"
        @click="closeMobile"
      />

      <nav
        id="main-nav"
        class="app-header__nav"
        :class="{ 'app-header__nav--open': mobileOpen }"
        aria-label="Main navigation"
      >
        <ul class="app-header__list" role="list">
          <li v-for="item in navItems" :key="item.id" class="app-header__item">
            <a
              :href="`#${item.id}`"
              class="app-header__link"
              :class="{ 'app-header__link--active': activeSection === item.id }"
              :aria-current="activeSection === item.id ? 'page' : undefined"
              @click.prevent="scrollToSectionAndClose(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        class="app-header__toggle"
        type="button"
        :aria-expanded="mobileOpen"
        aria-controls="main-nav"
        aria-label="Toggle navigation menu"
        @click="toggleMobile"
      >
        <span class="app-header__toggle-bar" />
        <span class="app-header__toggle-bar" />
        <span class="app-header__toggle-bar" />
      </button>
    </div>
  </header>
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

.app-header__nav {
  display: flex;
}

.app-header__list {
  display: flex;
  gap: var(--space-lg);
}

.app-header__link {
  position: relative;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-muted);
  text-decoration: none;
  padding: var(--space-xs) 0;
  transition: color var(--duration-fast) var(--ease-out);
}

.app-header__link::after {
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

.app-header__link:hover,
.app-header__link:focus-visible,
.app-header__link--active {
  color: var(--color-text);
}

.app-header__link--active::after,
.app-header__link:hover::after,
.app-header__link:focus-visible::after {
  transform: scaleX(1);
}

.app-header__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
}

.app-header__toggle-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
}

.app-header__backdrop {
  display: none;
}

@media (max-width: 767px) {
  .app-header__toggle {
    display: flex;
    z-index: calc(var(--z-nav) + 1);
  }

  .app-header__backdrop {
    display: block;
    position: fixed;
    inset: 0;
    top: var(--header-height);
    border: none;
    background: rgba(0, 0, 0, 0.55);
    cursor: pointer;
    z-index: var(--z-overlay);
  }

  .app-header__nav {
    position: fixed;
    inset: 0;
    top: var(--header-height);
    background: var(--color-bg-secondary);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: transform var(--duration-base) var(--ease-out);
    z-index: var(--z-nav);
    border-left: 1px solid var(--color-border);
  }

  .app-header__nav--open {
    transform: translateX(0);
  }

  .app-header__list {
    flex-direction: column;
    align-items: center;
    gap: var(--space-2xl);
  }

  .app-header__link {
    font-size: var(--text-xl);
  }
}
</style>
