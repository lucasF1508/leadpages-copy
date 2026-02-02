import { BsStars as icon } from 'react-icons/bs'
import { F, G, P } from '@/schema/tool'

export const addOnsSection = F.object({
  name: 'addOnsSection',
  title: 'Add-ons Section',
  icon,
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.string({ name: 'eyebrow', title: 'Eyebrow' }),

      F.field('blockContentSimple', {
        name: 'heading',
        title: 'Heading',
        validation: (Rule) => Rule.required(),
      }),

      F.field('blockContentSimple', {
        name: 'description',
        title: 'Description',
      }),

      F.array({
        name: 'cards',
        title: 'Add-on Cards',
        validation: (Rule) => Rule.required().min(1).max(4),
        of: [F.field('addonCard', { name: 'addonCard', title: 'Card' })],
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      cards: 'cards',
      description: 'description',
    },
    prepare: ({ heading = [], cards = [], description = [] }) => ({
      title: P.richText(heading) || 'Add-ons Section',
      subtitle: cards?.length
        ? `${cards.length} cards`
        : P.richText(description),
      media: icon,
    }),
  },
})
