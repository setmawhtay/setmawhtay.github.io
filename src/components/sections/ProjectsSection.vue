<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal.js'
import { projects } from '../../data/projects.js'
import Cards3D from '../svg/Cards3D.vue'

const { revealRef, isVisible, isArmed } = useScrollReveal()
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
            Full stack builds across web platforms, dashboards, and business applications.
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
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-card__image-wrap">
            <img
              :src="project.image"
              :alt="`${project.title} preview`"
              class="project-card__image"
              loading="lazy"
            />
          </div>

          <div class="project-card__body">
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__desc">{{ project.description }}</p>

            <ul class="project-card__tags" role="list" aria-label="Technologies used">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="project-card__tag"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </article>
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
  display: flex;
  flex-direction: column;
  background: rgba(22, 22, 37, 0.8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transform-style: preserve-3d;
  transition:
    transform var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out);
}

.project-card:hover {
  transform: translateY(-6px) rotateX(4deg) rotateY(-3deg);
  border-color: rgba(124, 108, 255, 0.3);
  box-shadow: var(--shadow-md);
}

.project-card__image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #0c0a14;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.project-card:hover .project-card__image {
  transform: scale(1.03);
}

.project-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl);
  flex: 1;
}

.project-card__title {
  font-size: var(--text-xl);
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

@media (prefers-reduced-motion: reduce) {
  .project-card:hover {
    transform: translateY(-6px);
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
