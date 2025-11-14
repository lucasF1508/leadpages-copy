import { F } from '@/schema/tool'
import { DocumentTextIcon as icon } from '@sanity/icons'

export const bestOfBlogItem = F.object({
    name: 'bestOfBlogItem',
    title: 'Best of Blog – Item',
    icon,
    fields: [
        F.string({
            name: 'title',
            title: 'Title',
            validation: (Rule: any) => Rule.required(),
        }),
        F.field('text', { name: 'excerpt', title: 'Excerpt', rows: 3 }),
        F.image({
            name: 'image',
            title: 'Image',
            options: { hotspot: true },
            fields: [F.string({ name: 'alt', title: 'Alt text' })],
        }),
        F.string({ name: 'tag', title: 'Tag' }),
        F.field('url', {
            name: 'href',
            title: 'URL',
            validation: (Rule: any) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: 'title', media: 'image' },
        prepare({ title, media }: any) {
            return { title: title || 'Blog item', media }
        },
    },
})

