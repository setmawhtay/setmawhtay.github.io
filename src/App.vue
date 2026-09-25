<script setup>
import { useGlobalMouse } from './composables/useGlobalMouse.js'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import ScrollProgress from './components/ui/ScrollProgress.vue'
import ScrollToTop from './components/ui/ScrollToTop.vue'
import MouseAmbient from './components/ui/MouseAmbient.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

useGlobalMouse()
</script>

<template>
  <ScrollProgress />
  <MouseAmbient />
  <AppHeader />
  <main id="main-content">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <AppFooter />
  <ScrollToTop />
</template>
