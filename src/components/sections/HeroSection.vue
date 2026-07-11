<script setup>
import { ref } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion.js'
import { useScrollToSection } from '../../composables/useScrollToSection.js'
import { useTypewriter } from '../../composables/useTypewriter.js'
import { useMouseParallax } from '../../composables/useMouseParallax.js'
import ProfileFrame from '../svg/ProfileFrame.vue'
import FloatingDecor from '../svg/FloatingDecor.vue'
import WaveBackground from '../svg/WaveBackground.vue'

const { prefersReduced } = useReducedMotion()
const { scrollToSection } = useScrollToSection()
const { display: roleText, isDone: roleDone } = useTypewriter('Full Stack Developer', 60)

const heroVisualRef = ref(null)
const { parallaxStyle, onMouseMove, onMouseLeave } = useMouseParallax(heroVisualRef, 5)
</script>

<template>
  <section id="hero" class="hero" aria-labelledby="hero-heading">
    <div class="hero__bg mouse-parallax mouse-parallax--slow" aria-hidden="true">
      <WaveBackground />
      <div class="hero__gradient" />
      <div class="hero__grid" />
      <div class="hero__orb hero__orb--one" />
      <div class="hero__orb hero__orb--two" />
      <div class="hero__orb hero__orb--three" />
    </div>

    <div class="hero__inner container">
      <div class="hero__content hero-text-animate">
        <p class="hero__eyebrow">Hi, I'm</p>
        <h1 id="hero-heading" class="hero__title">
          Set Maw Htay
          <span class="hero__title-accent hero-title-accent">
            <span aria-hidden="true">
              {{ roleText }}<span v-if="!roleDone && !prefersReduced" class="hero-cursor" />
            </span>
            <span class="hero__sr-only">Full Stack Developer</span>
          </span>
        </h1>
        <p class="hero__subtitle">
          I build scalable web and mobile applications — from PHP &amp; Laravel backends
          to Vue, React, and React Native frontends, deployed on AWS with production-ready quality.
        </p>

        <div class="hero__actions">
          <a
            href="#projects"
            class="hero__cta hero__cta--primary"
            @click.prevent="scrollToSection('projects')"
          >
            View Projects
          </a>
          <a
            href="#contact"
            class="hero__cta hero__cta--secondary"
            @click.prevent="scrollToSection('contact')"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div
        ref="heroVisualRef"
        class="hero__visual"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
      >
        <div class="hero__visual-inner" :style="parallaxStyle">
          <FloatingDecor />
          <ProfileFrame />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-block: var(--space-3xl);
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 20%, rgba(124, 108, 255, 0.2), transparent 55%),
    radial-gradient(ellipse 60% 50% at 80% 30%, rgba(56, 189, 248, 0.12), transparent 50%),
    radial-gradient(ellipse 50% 40% at 70% 80%, rgba(201, 162, 39, 0.08), transparent 50%),
    var(--color-bg);
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 40%, black, transparent);
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  animation: float-soft 8s var(--ease-in-out) infinite;
}

.hero__orb--one {
  width: 320px;
  height: 320px;
  top: 5%;
  right: 5%;
  background: rgba(124, 108, 255, 0.25);
}

.hero__orb--two {
  width: 240px;
  height: 240px;
  bottom: 10%;
  left: 5%;
  background: rgba(56, 189, 248, 0.18);
  animation-delay: -3s;
}

.hero__orb--three {
  width: 200px;
  height: 200px;
  top: 50%;
  right: 30%;
  background: rgba(201, 162, 39, 0.12);
  animation-delay: -5s;
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

.hero__eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-gold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--space-md);
}

.hero__title {
  font-size: var(--text-5xl);
  letter-spacing: -0.03em;
  margin-bottom: var(--space-lg);
  line-height: 1.1;
}

.hero__title-accent {
  display: block;
  margin-top: var(--space-sm);
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-accent) 50%, var(--color-cyan) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.65em;
}

.hero__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.hero__subtitle {
  font-size: clamp(1rem, 1.2vw + 0.5rem, 1.2rem);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 34rem;
  margin-bottom: var(--space-2xl);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 10rem;
  padding: 0.9rem 1.5rem;
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition:
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.hero__cta:active {
  transform: scale(0.98);
}

.hero__cta--primary {
  background: linear-gradient(135deg, var(--color-accent), #6357e8);
  color: #fff;
  box-shadow: 0 8px 28px rgba(124, 108, 255, 0.35);
}

.hero__cta--primary:hover {
  box-shadow: var(--shadow-glow);
  color: #fff;
}

.hero__cta--secondary {
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
}

.hero__cta--secondary:hover {
  border-color: var(--color-gold);
  color: var(--color-text);
}

.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__visual-inner {
  position: relative;
  width: 100%;
  transition: transform 0.25s var(--ease-out);
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__subtitle {
    margin-inline: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__visual {
    order: -1;
    max-width: 340px;
    margin-inline: auto;
  }
}

@media (max-width: 767px) {
  .hero__actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-inline: auto;
  }

  .hero__cta {
    width: 100%;
  }
}
</style>
