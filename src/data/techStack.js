/**
 * @typedef {Object} TechItem
 * @property {string} id
 * @property {string} name
 * @property {string} category
 */

/** @type {TechItem[]} */
export const techStack = [
  { id: 'php', name: 'PHP', category: 'Backend' },
  { id: 'laravel', name: 'Laravel', category: 'Backend' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend' },
  { id: 'vue', name: 'Vue.js', category: 'Frontend' },
  { id: 'react', name: 'React', category: 'Frontend' },
  { id: 'react-native', name: 'React Native', category: 'Mobile' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend' },
  { id: 'mysql', name: 'MySQL', category: 'Database' },
  { id: 'aws', name: 'AWS', category: 'Cloud' },
  { id: 'docker', name: 'Docker', category: 'DevOps' },
  { id: 'git', name: 'Git', category: 'Tools' },
]

/**
 * @typedef {Object} ExpertiseArea
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {number} level
 */

/** @type {ExpertiseArea[]} */
export const expertise = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'End-to-end web apps — APIs, databases, admin panels, and polished frontends.',
    level: 92,
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Responsive UIs with Vue, React, animations, and pixel-perfect component systems.',
    level: 75,
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Cross-platform apps with React Native connected to REST and real-time backends.',
    level: 70,
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    description: 'AWS hosting, Dockerized services, CI workflows, and production monitoring.',
    level: 80,
  },
]
