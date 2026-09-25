<script setup>
import { contactChannels } from '../../data/social.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <p class="footer__copy">
        &copy; {{ year }} Set Maw Htay · Built with Vue &amp; Vite
      </p>
      <ul class="footer__links" role="list">
        <li v-for="channel in contactChannels" :key="channel.id">
          <a
            :href="channel.url"
            class="footer__link"
            :target="channel.id !== 'email' ? '_blank' : undefined"
            :rel="channel.id !== 'email' ? 'noopener noreferrer' : undefined"
          >
            {{ channel.label }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: #05050b;
  border-top: 1px solid var(--color-border);
  padding: var(--space-xl) 0;
}

.footer::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  width: min(420px, 80%);
  height: 1px;
  transform: translateX(-50%);
  background: linear-gradient(90deg, transparent, var(--color-accent), var(--color-cyan), transparent);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.footer__copy {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.footer__links {
  display: flex;
  gap: var(--space-lg);
}

.footer__link {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.footer__link:hover,
.footer__link:focus-visible {
  color: var(--color-text);
}

@media (max-width: 600px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
