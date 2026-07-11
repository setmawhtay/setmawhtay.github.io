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
          Full stack toolkit spanning backend, frontend, mobile, and cloud.
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
          v-for="tech in techStack"
          :key="tech.id"
          class="tech-pill"
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

.tech-pill:hover {
  transform: translateY(-3px);
  border-color: rgba(124, 108, 255, 0.35);
  box-shadow: var(--shadow-sm);
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
  transition: width 1s var(--ease-out);
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
