<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal.js'
import AboutIllustration from '../svg/AboutIllustration.vue'

const { revealRef, isVisible, isArmed } = useScrollReveal()

const highlights = [
  'Backend APIs with PHP, Laravel & Node.js',
  'Frontend & mobile with Vue, React & React Native',
  'Cloud deployment, Docker & AWS infrastructure',
]
</script>

<template>
  <section
    id="about"
    ref="revealRef"
    class="about"
    :class="{ reveal: isArmed, 'reveal--visible': isVisible }"
    aria-labelledby="about-heading"
  >
    <div class="about__bg mouse-parallax mouse-parallax--slow" aria-hidden="true">
      <div class="about__pattern" />
    </div>

    <div class="about__inner container">
      <div class="about__layout">
        <div class="about__visual">
          <AboutIllustration />
        </div>

        <div class="about__content">
          <header class="section-header">
            <span class="section-eyebrow">About Me</span>
            <h2 id="about-heading" class="section-heading">Full stack developer who ships end-to-end</h2>
            <p class="section-tagline">
              Passionate about building complete products — database to UI, web to mobile, local to cloud.
            </p>
          </header>

          <div class="about__text">
            <p>
              I'm a <strong>full stack developer</strong> experienced across the entire product lifecycle.
              I design RESTful APIs, craft responsive interfaces, build cross-platform mobile apps,
              and deploy services that scale on <strong>AWS</strong>.
            </p>
            <p>
              Whether it's a Laravel backend, a Vue admin dashboard, a React consumer app,
              or a React Native mobile build — I focus on clean architecture, maintainable code,
              and reliable delivery.
            </p>
          </div>

          <ul class="about__highlights" role="list">
            <li
              v-for="(item, index) in highlights"
              :key="index"
              class="about__highlight"
            >
              <span class="about__highlight-dot" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  padding: var(--section-padding-y) 0;
  background: #0b0d16;
  overflow: hidden;
}

.about__bg {
  position: absolute;
  inset: 0;
}

.about__pattern {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 10% 20%, rgba(124, 108, 255, 0.1), transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(56, 189, 248, 0.08), transparent 40%),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.about__inner {
  position: relative;
  z-index: 1;
}

.about__layout {
  display: grid;
  grid-template-columns: minmax(280px, 400px) 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

.about__visual {
  display: flex;
  justify-content: center;
}

.about__text p {
  line-height: var(--leading-relaxed);
}

.about__highlights {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.about__highlight {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--color-text);
  padding: var(--space-sm) var(--space-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.about__highlight-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent), var(--color-cyan));
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .about__layout {
    grid-template-columns: 1fr;
  }

  .about__visual {
    max-width: 360px;
    margin-inline: auto;
  }
}
</style>
