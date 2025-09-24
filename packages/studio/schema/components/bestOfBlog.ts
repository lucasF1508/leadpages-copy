import { F } from '@/schema/tool'
import { SparklesIcon as icon } from '@sanity/icons'

export const bestOfBlog = F.object({
  name: 'bestOfBlog',
  title: 'Best of the Blog (Section)',
  icon,
  fields: [
    F.string({ name: 'heading', title: 'Heading' }),
    F.string({ name: 'subheading', title: 'Subheading' }),
    F.object({
      name: 'cta',
      title: 'CTA',
      fields: [
        F.string({ name: 'label', title: 'Label' }),
        F.field('url', { name: 'href', title: 'URL' }),
        F.radio(['_self', '_blank'], { name: 'target', title: 'Target', initialValue: '_self' }),
      ],
    }),
    F.field('array', {
      name: 'items',
      title: 'Items',
      of: [{ type: 'bestOfBlogItem' }],
      validation: (Rule:any)=>Rule.min(1),
    }),
  ],
  preview: {
    select: { heading: 'heading', items: 'items' },
    prepare({ heading, items }: any) {
      const count = Array.isArray(items) ? items.length : 0
      return { title: heading || 'Best of the Blog', subtitle: `${count} item(s)` }
    },
  },
})
