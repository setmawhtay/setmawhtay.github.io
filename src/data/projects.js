/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {string} image
 * @property {string} [url] Live URL — shows a "Live" badge and makes the card clickable
 * @property {string} [category]
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'capital-knowledge',
    title: 'Capital Knowledge Myanmar',
    category: 'Corporate Landing Page',
    description:
      'Bilingual (English / Myanmar) company website for an EC consulting, system offshore, and ISO consulting firm — built with a pure PHP backend and React frontend, featuring a hero slider, service pages, achievements, and recruitment.',
    tags: ['PHP', 'React', 'MySQL'],
    image: '/images/projects/capital-knowledge.svg',
    url: 'https://capital-knowledge.com/',
  },
  {
    id: 'ckmy-docs',
    title: 'CKMY Docs',
    category: 'Task Management System',
    description:
      'Team task and helpdesk platform on Laravel and Vue 3 with drag-and-drop Kanban boards, filters, per-project access, documentation, activity logs, roles & permissions, API clients, and Redis-backed caching and queues.',
    tags: ['Laravel', 'Vue 3', 'Redis', 'MySQL'],
    image: '/images/projects/ckmy-docs.svg',
    url: 'https://docs.ckmy.eu.cc/',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    category: 'Web Platform',
    description:
      'Full stack online store with Laravel API, Vue storefront, payment integration, and admin dashboard.',
    tags: ['Laravel', 'Vue', 'PHP', 'MySQL'],
    image: '/images/projects/ecommerce.svg',
  },
  {
    id: 'lms',
    title: 'LMS Learning Platform',
    category: 'Web Platform',
    description:
      'Course management system with student enrollment, video lessons, quizzes, and progress tracking.',
    tags: ['PHP', 'React', 'MySQL', 'AWS'],
    image: '/images/projects/lms.svg',
  },
  {
    id: 'restaurant',
    title: 'Restaurant POS System',
    category: 'Business App',
    description:
      'Point-of-sale and kitchen display system with order management, billing, and real-time sync.',
    tags: ['Laravel', 'Vue', 'JavaScript', 'Docker'],
    image: '/images/projects/restaurant.svg',
  },
  {
    id: 'saas',
    title: 'SaaS Admin Portal',
    category: 'Business App',
    description:
      'Multi-tenant business portal with role-based access, analytics dashboards, and reporting modules.',
    tags: ['PHP', 'Vue', 'Docker', 'AWS'],
    image: '/images/projects/saas.svg',
  },
]
