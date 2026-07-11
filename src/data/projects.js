/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {string} image
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description:
      'Full stack online store with Laravel API, Vue storefront, payment integration, and admin dashboard.',
    tags: ['Laravel', 'Vue', 'PHP', 'MySQL'],
    image: '/images/projects/ecommerce.svg',
  },
  {
    id: 'lms',
    title: 'LMS Learning Platform',
    description:
      'Course management system with student enrollment, video lessons, quizzes, and progress tracking.',
    tags: ['PHP', 'React', 'MySQL', 'AWS'],
    image: '/images/projects/lms.svg',
  },
  {
    id: 'restaurant',
    title: 'Restaurant POS System',
    description:
      'Point-of-sale and kitchen display system with order management, billing, and real-time sync.',
    tags: ['Laravel', 'Vue', 'JavaScript', 'Docker'],
    image: '/images/projects/restaurant.svg',
  },
  {
    id: 'saas',
    title: 'SaaS Admin Portal',
    description:
      'Multi-tenant business portal with role-based access, analytics dashboards, and reporting modules.',
    tags: ['PHP', 'Vue', 'Docker', 'AWS'],
    image: '/images/projects/saas.svg',
  },
]
