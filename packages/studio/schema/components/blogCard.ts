import { F } from '@/schema/tool'
import { DocumentTextIcon as icon } from '@sanity/icons'

export const blogCard = F.object({
  name: 'blogCard',
  title: 'Blogs Card',
  icon,
  fields: [
    F.string({ name: 'author', title: 'Author' }),
    F.datetime({ name: 'publishedDate', title: 'Published Date' }),
    F.string({ name: 'tag', title: 'Tag' }),
    F.image({
      name: 'image',
      title: 'Image',
      options: { hotspot: true },
      fields: [F.string({ name: 'alt', title: 'Alt text' })],
    }),
    F.field('text', { name: 'excerpt', title: 'Description', rows: 3 }),
    F.field('url', {
      name: 'href',
      title: 'URL',
      validation: (Rule: any) => Rule.required().custom((url: string) => {
        if (!url) return 'URL is required'

        // Auto-add https:// if no protocol is specified
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          return true // Allow URLs without protocol - we'll handle it in the component
        }

        // Basic URL validation
        try {
          new URL(url)
          return true
        } catch {
          return 'Please enter a valid URL'
        }
      })
    }),
  ],
  preview: {
    select: { author: 'author', media: 'image' },
    prepare({ author, media }: any) {
      return { title: author || 'Blogs card', media }
    },
  },
})
