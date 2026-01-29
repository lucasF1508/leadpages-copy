import { IoCheckmarkCircle as icon } from 'react-icons/io5'
import { F, G } from '@/schema/tool'

export const heroHomeNew = F.object({
  icon,
  name: 'heroHomeNew',
  title: 'Hero Home New',

  groups: [
    G.define('content', { title: 'Content', default: true }),
    G.define('media', { title: 'Media' }),
    G.define('options', { title: 'Options' }),
  ],

  fields: [
    ...G.group('content', [
      F.string({
        name: 'heading',
        title: 'Heading (left title)',
        validation: (Rule) => Rule.required().max(120),
      }),

      F.field('blockContentHero', {
        name: 'content',
        title: 'Content (left body text)',
      }),

      F.object({
        name: 'primaryCta',
        title: 'Primary Button',
        fields: [
          F.string({ name: 'label', title: 'Label', validation: (Rule) => Rule.required() }),
          F.string({ name: 'href', title: 'Link (href)', validation: (Rule) => Rule.required() }),
        ],
      }),

      F.object({
        name: 'secondaryCta',
        title: 'Secondary Button',
        fields: [
          F.string({ name: 'label', title: 'Label' }),
          F.string({ name: 'href', title: 'Link (href)' }),
        ],
      }),
    ]),

    ...G.group('media', [
      F.media(),
    ]),

    ...G.group('options', [
      F.radio(['dark', 'light'], {
        name: 'theme',
        title: 'Theme',
        initialValue: 'dark',
        description:
          'Colors are automatic: dark = white/black buttons, light = green/black buttons.',
      }),
    ]),
  ],
})