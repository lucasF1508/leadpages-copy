// /schema/blocks/resourcesGrid.ts
import { F } from '@/schema/tool'
import { DocumentTextIcon as icon } from '@sanity/icons'

export const resourcesGrid = F.object({
  name: 'resourcesGrid',
  title: 'Resources Grid',
  icon,
  fields: [
    F.string({ name: 'heading', title: 'Heading' }),
    F.string({ name: 'subheading', title: 'Subheading' }),
    F.field('array', {
      name: 'items',
      title: 'Items',
      of: [{ type: 'mediaWithText' }], 
      validation: (Rule: any) => Rule.min(1),
    }),
  ],
  preview: {
    select: { heading: 'heading', items: 'items' },
    prepare({ heading, items }: any) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title: heading || 'Resources Grid',
        subtitle: `${count} item(s)`,
      }
    },
  },
})
