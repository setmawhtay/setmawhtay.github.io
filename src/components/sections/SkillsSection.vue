<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal.js'
import { techStack, expertise } from '../../data/techStack.js'
import TechIcon from '../ui/TechIcon.vue'
import DevWorkspaceIllustration from '../svg/DevWorkspaceIllustration.vue'

const { revealRef, isVisible, isArmed } = useScrollReveal()
</script>

<template>
  <section
    id="skills"
    ref="revealRef"
    class="skills"
    :class="{ reveal: isArmed, 'reveal--visible': isVisible }"
    aria-labelledby="skills-heading"
  >
    <div class="skills__bg mouse-parallax mouse-parallax--soft" aria-hidden="true">
      <div class="skills__mesh" />
      <div class="skills__lines" />
    </div>

    <div class="skills__inner container">
      <header class="section-header skills__header">
        <span class="section-eyebrow">Tech Stack</span>
        <h2 id="skills-heading" class="section-heading">Technologies I work with</h2>
        <p class="section-tagline">
          Full stack toolkit spanning backend, frontend, databases, and cloud.
        </p>
      </header>

      <div
        class="skills__stack"
        :class="{ 'reveal-stagger': isArmed, 'reveal--visible': isVisible }"
      >
        <div class="skills__stack-visual" aria-hidden="true">
          <DevWorkspaceIllustration />
        </div>

        <div class="skills__tech-grid">
        <div
          v-for="(tech, index) in techStack"
          :key="tech.id"
          class="tech-pill"
          :style="{ '--i': index }"
        >
          <TechIcon :id="tech.id" />
          <div class="tech-pill__info">
            <span class="tech-pill__name">{{ tech.name }}</span>
            <span class="tech-pill__cat">{{ tech.category }}</span>
          </div>
        </div>
        </div>
      </div>

      <div
        class="skills__expertise"
        :class="{ 'reveal-stagger': isArmed, 'reveal--visible': isVisible }"
      >
        <article
          v-for="area in expertise"
          :key="area.id"
          class="expertise-card"
        >
          <div class="expertise-card__header">
            <h3 class="expertise-card__title">{{ area.title }}</h3>
            <span class="expertise-card__level">{{ area.level }}%</span>
          </div>
          <p class="expertise-card__desc">{{ area.description }}</p>
          <div class="expertise-card__bar" role="presentation">
            <div
              class="expertise-card__fill"
              :style="{ width: isVisible || !isArmed ? `${area.level}%` : '0%' }"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  position: relative;
  padding: var(--section-padding-y) 0;
  background: #08061a;
  overflow: hidden;
}

.skills__bg {
  position: absolute;
  inset: 0;
}

.skills__mesh {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 80% 20%, rgba(124, 108, 255, 0.14), transparent 55%),
    radial-gradient(ellipse 50% 40% at 10% 90%, rgba(56, 189, 248, 0.08), transparent 50%);
}

.skills__lines {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 40px,
    rgba(255, 255, 255, 0.015) 40px,
    rgba(255, 255, 255, 0.015) 41px
  );
}

.skills__inner {
  position: relative;
  z-index: 1;
}

.skills__header {
  margin-bottom: var(--space-3xl);
}

.skills__stack {
  display: grid;
  grid-template-columns: minmax(260px, 420px) 1fr;
  gap: var(--space-3xl);
  align-items: center;
  margin-bottom: var(--space-3xl);
}

.skills__stack-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills__tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-md);
}

.tech-pill {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  background: rgba(22, 22, 37, 0.75);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(4px);
  transition:
    transform var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out);
}

.tech-pill {
  position: relative;
  overflow: hidden;
}

/* light sweep on hover */
.tech-pill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.08) 50%, transparent 70%);
  transform: translateX(-120%);
  pointer-events: none;
}

.tech-pill:hover {
  transform: translateY(-4px);
  border-color: rgba(124, 108, 255, 0.45);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), 0 0 18px rgba(124, 108, 255, 0.15);
}

.tech-pill:hover::after {
  transform: translateX(120%);
  transition: transform 700ms var(--ease-out);
}

.tech-pill :deep(svg) {
  transition: transform var(--duration-base) var(--ease-out);
}

.tech-pill:hover :deep(svg) {
  transform: scale(1.12) rotate(-6deg);
}

/* pills pop in one by one once the section is revealed */
.skills__stack.reveal--visible .tech-pill {
  animation: tech-pill-in 560ms var(--ease-out) calc(200ms + var(--i, 0) * 60ms) backwards;
}

@keyframes tech-pill-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.92);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skills__stack.reveal--visible .tech-pill {
    animation: none;
  }

  .tech-pill:hover :deep(svg) {
    transform: none;
  }
}

.tech-pill__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tech-pill__name {
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  color: var(--color-text);
}

.tech-pill__cat {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.skills__expertise {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-xl);
}

.expertise-card {
  padding: var(--space-xl);
  background: rgba(22, 22, 37, 0.75);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.expertise-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-sm);
}

.expertise-card__title {
  font-size: var(--text-lg);
}

.expertise-card__level {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-cyan);
  font-weight: var(--weight-semibold);
}

.expertise-card__desc {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-md);
}

.expertise-card__bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.expertise-card__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-cyan));
  border-radius: var(--radius-full);
  position: relative;
  overflow: hidden;
  transition: width 1.2s var(--ease-out) 300ms;
}

.expertise-card__fill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: translateX(-100%);
  animation: bar-shimmer 2.8s ease-in-out 1.6s infinite;
}

@keyframes bar-shimmer {
  0% { transform: translateX(-100%); }
  60%, 100% { transform: translateX(100%); }
}

.expertise-card {
  transition:
    transform var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out);
}

.expertise-card:hover {
  transform: translateY(-3px);
  border-color: rgba(56, 189, 248, 0.3);
}

@media (max-width: 900px) {
  .skills__stack {
    grid-template-columns: 1fr;
  }

  .skills__stack-visual {
    max-width: 400px;
    margin-inline: auto;
  }
}

@media (max-width: 767px) {
  .skills__tech-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skills__expertise {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .skills__tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
