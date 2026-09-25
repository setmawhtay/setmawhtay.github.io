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
    title: 'Capital Knowledge',
    category: 'Landing Page',
    description:
      'Conversion-focused marketing landing page with a clear value proposition, responsive sections, smooth animations, and SEO-friendly markup.',
    tags: ['Landing Page', 'Responsive', 'SEO', 'JavaScript'],
    image: '/images/projects/capital-knowledge.svg',
    url: 'https://capital-knowledge.com',
  },
  {
    id: 'ckmy-tasks',
    title: 'CKMY Task Manager',
    category: 'Productivity App',
    description:
      'Task management workspace for planning and tracking work — boards, priorities, due dates, and team progress in one place.',
    tags: ['Full Stack', 'Task Boards', 'Dashboard', 'Auth'],
    image: '/images/projects/task-manager.svg',
    url: 'https://docs.ckmy.eu.cc',
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
