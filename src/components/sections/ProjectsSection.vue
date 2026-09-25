<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal.js'
import { projects } from '../../data/projects.js'
import Cards3D from '../svg/Cards3D.vue'

const { revealRef, isVisible, isArmed } = useScrollReveal()

/** Feeds the cursor position to the card's spotlight gradient. */
function onCardMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
  card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section
    id="projects"
    ref="revealRef"
    class="projects"
    :class="{ reveal: isArmed, 'reveal--visible': isVisible }"
    aria-labelledby="projects-heading"
  >
    <div class="projects__bg mouse-parallax mouse-parallax--soft" aria-hidden="true">
      <div class="projects__pattern" />
      <div class="projects__glow" />
    </div>

    <div class="projects__inner container">
      <div class="projects__intro">
        <header class="section-header">
          <span class="section-eyebrow">Projects</span>
          <h2 id="projects-heading" class="section-heading">Featured work</h2>
          <p class="section-tagline">
            Live products and full stack builds — landing pages, productivity tools, dashboards, and business apps.
          </p>
        </header>

        <div class="projects__visual" aria-hidden="true">
          <Cards3D />
        </div>
      </div>

      <div
        class="projects__grid"
        :class="{ 'reveal-stagger': isArmed, 'reveal--visible': isVisible }"
      >
        <component
          :is="project.url ? 'a' : 'article'"
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          :class="{ 'project-card--live': project.url }"
          :style="{ '--i': index }"
          :href="project.url"
          :target="project.url ? '_blank' : undefined"
          :rel="project.url ? 'noopener noreferrer' : undefined"
          :aria-label="project.url ? `${project.title} — visit live site (opens in new tab)` : undefined"
          @mousemove="onCardMove"
        >
          <div class="project-card__image-wrap">
            <img
              :src="project.image"
              :alt="`${project.title} preview`"
              class="project-card__image"
              loading="lazy"
              width="640"
              height="360"
            />
            <span v-if="project.url" class="project-card__live">
              <span class="project-card__live-dot" aria-hidden="true" />
              Live
            </span>
          </div>

          <div class="project-card__body">
            <span v-if="project.category" class="project-card__category">{{ project.category }}</span>
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__desc">{{ project.description }}</p>

            <ul class="project-card__tags" role="list" aria-label="Project tags">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="project-card__tag"
              >
                {{ tag }}
              </li>
            </ul>

            <span v-if="project.url" class="project-card__visit" aria-hidden="true">
              {{ project.url.replace(/^https?:\/\//, '') }}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M5 11L11 5M6 5h5v5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  position: relative;
  padding: var(--section-padding-y) 0;
  background: #0a0812;
  overflow: hidden;
}

.projects__bg {
  position: absolute;
  inset: 0;
}

.projects__pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(30deg, rgba(124, 108, 255, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(124, 108, 255, 0.03) 87.5%, rgba(124, 108, 255, 0.03)),
    linear-gradient(150deg, rgba(124, 108, 255, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(124, 108, 255, 0.03) 87.5%, rgba(124, 108, 255, 0.03));
  background-size: 80px 140px;
}

.projects__glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 50% 40% at 100% 20%, rgba(56, 189, 248, 0.1), transparent 55%),
    radial-gradient(ellipse 40% 50% at 0% 80%, rgba(201, 162, 39, 0.06), transparent 50%);
}

.projects__inner {
  position: relative;
  z-index: 1;
}

.projects__intro {
  display: grid;
  grid-template-columns: 1fr minmax(240px, 360px);
  gap: var(--space-3xl);
  align-items: center;
  margin-bottom: var(--space-3xl);
}

.projects__visual {
  display: flex;
  justify-content: center;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-xl);
  perspective: 1200px;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(22, 22, 37, 0.8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  transform-style: preserve-3d;
  isolation: isolate;
  transition:
    transform var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out);
}

/* staggered entrance per card; `backwards` fill hands transform back to :hover afterwards */
.projects__grid.reveal-stagger.reveal--visible > .project-card {
  animation: project-card-in 700ms var(--ease-out) calc(var(--i, 0) * 90ms) backwards;
}

@keyframes project-card-in {
  from {
    opacity: 0;
    transform: translateY(32px) scale(0.97);
  }
}

/* cursor-following spotlight */
.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(
    380px circle at var(--spot-x, 50%) var(--spot-y, 50%),
    rgba(124, 108, 255, 0.16),
    transparent 60%
  );
  transition: opacity var(--duration-base) var(--ease-out);
}

/* animated gradient border */
.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 3;
  padding: 1px;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background: linear-gradient(
    120deg,
    var(--color-accent),
    var(--color-cyan),
    var(--color-gold),
    var(--color-accent)
  );
  background-size: 300% 300%;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: opacity var(--duration-base) var(--ease-out);
}

.project-card:hover::before,
.project-card:focus-visible::before {
  opacity: 1;
}

.project-card:hover::after,
.project-card:focus-visible::after {
  opacity: 1;
  animation: project-border-flow 4s linear infinite;
}

.project-card:hover,
.project-card:focus-visible {
  transform: translateY(-6px) rotateX(3deg) rotateY(-2deg);
  border-color: transparent;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45), 0 0 32px rgba(124, 108, 255, 0.14);
}

.project-card:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
}

@keyframes project-border-flow {
  to { background-position: 300% 0; }
}

.project-card__image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #0c0a14;
}

.project-card__image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(10, 8, 18, 0.55));
  pointer-events: none;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms var(--ease-out);
}

.project-card:hover .project-card__image {
  transform: scale(1.06);
}

.project-card__live {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.25rem 0.65rem;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  color: #6ee7b7;
  background: rgba(10, 20, 16, 0.75);
  border: 1px solid rgba(52, 211, 153, 0.4);
  border-radius: var(--radius-full);
  backdrop-filter: blur(6px);
}

.project-card__live-dot {
  position: relative;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
}

.project-card__live-dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #34d399;
  animation: live-ping 1.8s var(--ease-out) infinite;
}

@keyframes live-ping {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(2.8); opacity: 0; }
}

.project-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl);
  flex: 1;
}

.project-card__category {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: calc(var(--space-sm) * -1);
}

.project-card__title {
  font-size: var(--text-xl);
  transition: color var(--duration-base) var(--ease-out);
}

.project-card:hover .project-card__title {
  color: #fff;
}

.project-card__desc {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin-bottom: 0;
  flex: 1;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.project-card__tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-cyan);
  background: var(--color-cyan-subtle);
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-full);
}

.project-card__visit {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent-hover);
  padding-top: var(--space-sm);
  border-top: 1px dashed var(--color-border-strong);
  width: 100%;
}

.project-card__visit svg {
  width: 14px;
  height: 14px;
  transition: transform var(--duration-base) var(--ease-out);
}

.project-card:hover .project-card__visit svg {
  transform: translate(3px, -3px);
}

@media (prefers-reduced-motion: reduce) {
  .project-card:hover,
  .project-card:focus-visible {
    transform: none;
  }

  .project-card__live-dot::after,
  .project-card:hover::after {
    animation: none;
  }
}

@media (max-width: 900px) {
  .projects__intro {
    grid-template-columns: 1fr;
  }

  .projects__visual {
    max-width: 320px;
    margin-inline: auto;
  }
}

@media (max-width: 767px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
