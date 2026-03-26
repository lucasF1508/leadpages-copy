import {IoRocketOutline as icon} from 'react-icons/io5'
import {F, G} from '@/schema/tool'

export const heroPlatformPage = F.object({
  icon,
  name: 'heroPlatformPage',
  title: 'Hero Platform Page',

  groups: [
    G.define('content', {title: 'Content', default: true}),
    G.define('media', {title: 'Media'}),
    G.define('stats', {title: 'Stats'}),
  ],

  fields: [
    ...G.group('content', [
      F.string({
        name: 'label',
        title: 'Label (overline text)',
        description: 'Small uppercase text above the heading (e.g. "TRUSTED BY 466,000+ BUSINESSES")',
      }),

      F.string({
        name: 'heading',
        title: 'Heading',
        validation: (Rule) => Rule.required().max(120),
      }),

      F.field('blockContentHero', {
        name: 'content',
        title: 'Body text',
      }),

      F.object({
        name: 'primaryCta',
        title: 'Primary Button',
        fields: [
          F.string({name: 'label', title: 'Label', validation: (Rule) => Rule.required()}),
          F.string({
            name: 'href',
            title: 'Link (href)',
            description: 'Ruta interna (ej. /pricing) o URL completa (ej. https://lp.leadpages.com/page-studio-beta/). Las URLs externas se abren en nueva pestaña.',
            validation: (Rule) => Rule.required(),
          }),
        ],
      }),

      F.object({
        name: 'secondaryCta',
        title: 'Secondary Button',
        fields: [
          F.string({name: 'label', title: 'Label'}),
          F.string({
            name: 'href',
            title: 'Link (href)',
            description: 'Ruta interna (ej. /page-studio-beta) o URL completa (ej. https://lp.leadpages.com/page-studio-beta/). Las URLs externas se abren en nueva pestaña.',
          }),
        ],
      }),
    ]),

    ...G.group('media', [F.media()]),

    ...G.group('stats', [
      F.array({
        name: 'stats',
        title: 'Stats',
        of: [
          F.object({
            name: 'stat',
            fields: [
              F.string({name: 'value', title: 'Value (e.g. 466,000+)', validation: (Rule) => Rule.required()}),
              F.string({name: 'description', title: 'Description', validation: (Rule) => Rule.required()}),
            ],
            preview: {
              select: {title: 'value', subtitle: 'description'},
            },
          }),
        ],
        validation: (Rule) => Rule.max(5),
      }),
    ]),
  ],

  preview: {
    select: {
      heading: 'heading',
      label: 'label',
    },
    prepare({heading = '', label = ''}) {
      return {
        title: heading || 'Hero Platform Page',
        subtitle: label,
        media: icon,
      }
    },
  },
})
