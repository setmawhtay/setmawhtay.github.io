<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal.js'
import { contactChannels } from '../../data/social.js'

const { revealRef, isVisible, isArmed } = useScrollReveal()
</script>

<template>
  <section
    id="contact"
    ref="revealRef"
    class="contact"
    :class="{ reveal: isArmed, 'reveal--visible': isVisible }"
    aria-labelledby="contact-heading"
  >
    <div class="contact__backdrop mouse-parallax mouse-parallax--soft" aria-hidden="true">
      <div class="contact__backdrop-base" />
      <div class="contact__backdrop-pattern" />
      <div class="contact__backdrop-orb contact__backdrop-orb--one" />
      <div class="contact__backdrop-orb contact__backdrop-orb--two" />
      <div class="contact__backdrop-glow" />
    </div>

    <div class="contact__inner container">
      <header class="section-header section-header--center">
        <span class="section-eyebrow">Contact</span>
        <h2 id="contact-heading" class="section-heading">Let's work together</h2>
        <p class="section-tagline">
          Discuss a project or just want to say hi? Pick your preferred channel below.
        </p>
      </header>

      <div
        class="contact__cards"
        :class="{ 'reveal-stagger': isArmed, 'reveal--visible': isVisible }"
      >
        <a
          v-for="channel in contactChannels"
          :key="channel.id"
          :href="channel.url"
          class="contact-card"
          :class="`contact-card--${channel.id}`"
          :target="channel.id !== 'email' ? '_blank' : undefined"
          :rel="channel.id !== 'email' ? 'noopener noreferrer' : undefined"
        >
          <div class="contact-card__icon" aria-hidden="true">
            <svg v-if="channel.id === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            <svg v-else-if="channel.id === 'telegram'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.021C22 6.484 17.522 2 12 2z"/>
            </svg>
          </div>

          <div class="contact-card__body">
            <span class="contact-card__label">{{ channel.label }}</span>
            <span class="contact-card__value">{{ channel.value }}</span>
            <span class="contact-card__hint">{{ channel.hint }}</span>
          </div>

          <span class="contact-card__arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  padding: var(--section-padding-y) 0 var(--space-4xl);
  background: #07060f;
  overflow: hidden;
}

.contact__backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.contact__backdrop-base {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #0a0816 0%, #07060f 45%, #05040c 100%);
}

.contact__backdrop-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse 85% 75% at 50% 55%, black, transparent);
}

.contact__backdrop-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
}

.contact__backdrop-orb--one {
  width: 300px;
  height: 300px;
  top: 5%;
  left: -5%;
  background: rgba(124, 108, 255, 0.14);
}

.contact__backdrop-orb--two {
  width: 260px;
  height: 260px;
  bottom: 0;
  right: -5%;
  background: rgba(56, 189, 248, 0.1);
}

.contact__backdrop-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 65% 45% at 50% 100%, rgba(124, 108, 255, 0.14), transparent 65%),
    radial-gradient(ellipse 35% 25% at 80% 25%, rgba(201, 162, 39, 0.07), transparent 55%);
}

.contact__backdrop::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(124, 108, 255, 0.35),
    rgba(56, 189, 248, 0.35),
    transparent
  );
}

.contact__inner {
  position: relative;
  z-index: 1;
}

.contact__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-lg);
  max-width: 56rem;
  margin-inline: auto;
}

.contact-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-2xl);
  background: rgba(22, 22, 37, 0.7);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  text-decoration: none;
  transition:
    transform var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  color: inherit;
}

.contact-card--email:hover { border-color: rgba(124, 108, 255, 0.35); }
.contact-card--telegram:hover { border-color: rgba(56, 189, 248, 0.35); }
.contact-card--github:hover { border-color: rgba(201, 162, 39, 0.3); }

.contact-card__icon {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
}

.contact-card__icon svg {
  width: 1.35rem;
  height: 1.35rem;
}

.contact-card--email .contact-card__icon { color: var(--color-accent); }
.contact-card--telegram .contact-card__icon { color: #38bdf8; }
.contact-card--github .contact-card__icon { color: var(--color-gold); }

.contact-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.contact-card__label {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
}

.contact-card__value {
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-text);
  overflow-wrap: anywhere;
}

.contact-card__hint {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.contact-card__arrow {
  position: absolute;
  top: var(--space-xl);
  right: var(--space-xl);
  color: var(--color-text-muted);
  transition: transform var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);
}

.contact-card:hover .contact-card__arrow {
  transform: translateX(4px);
  color: var(--color-text);
}

@media (max-width: 900px) {
  .contact__cards {
    grid-template-columns: 1fr;
    max-width: 24rem;
  }
}
</style>
