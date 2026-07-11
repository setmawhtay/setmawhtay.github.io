const contactEmail = 'setmawhtay@protonmail.com'
const telegramUsername = 'setmawhtay'

/**
 * @typedef {Object} ContactChannel
 * @property {string} id
 * @property {string} label
 * @property {string} value
 * @property {string} url
 * @property {string} hint
 */

/** @type {ContactChannel[]} */
export const contactChannels = [
  {
    id: 'email',
    label: 'Email',
    value: contactEmail,
    url: `mailto:${contactEmail}`,
    hint: 'Best for detailed inquiries',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: `@${telegramUsername}`,
    url: 'https://t.me/setmawhtay',
    hint: 'Fastest way to reach me',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'setmawhtay',
    url: 'https://github.com/setmawhtay',
    hint: 'See my open source work',
  },
]
