import { F, G } from '@/schema/tool'
import { LinkIcon as icon } from '@sanity/icons'

export const relatedContent = F.object({
    name: 'relatedContent',
    title: 'Related Content',
    icon,
    groups: [
        G.define('content', { title: 'Content', default: true }),
    ],
    fields: [
        ...G.group('content', [
            F.string({
                name: 'heading',
                title: 'Heading',
                initialValue: 'Related Content',
                validation: (Rule: any) => Rule.required()
            }),
            F.field('array', {
                name: 'items',
                title: 'Related Posts',
                of: [
                    {
                        type: 'object',
                        name: 'relatedPost',
                        fields: [
                            F.string({
                                name: 'title',
                                title: 'Post Title (Optional)',
                                description: 'Leave blank if no title is needed'
                            }),
                            F.image({
                                name: 'image',
                                title: 'Post Image',
                                options: { hotspot: true },
                                fields: [F.string({ name: 'alt', title: 'Alt text' })],
                                validation: (Rule: any) => Rule.required()
                            }),
                            F.string({
                                name: 'author',
                                title: 'Author',
                                validation: (Rule: any) => Rule.required()
                            }),
                            F.date({
                                name: 'date',
                                title: 'Date',
                                validation: (Rule: any) => Rule.required()
                            }),
                            F.string({
                                name: 'url',
                                title: 'Post URL',
                                validation: (Rule: any) => Rule.required()
                            }),
                        ],
                        preview: {
                            select: {
                                title: 'title',
                                author: 'author',
                                date: 'date',
                                image: 'image'
                            },
                            prepare({ title, author, date, image }: any) {
                                return {
                                    title: title || 'Sin título',
                                    subtitle: `${author} | ${date ? new Date(date).toLocaleDateString() : 'Sin fecha'}`,
                                    media: image
                                }
                            },
                        },
                    },
                ],
                validation: (Rule: any) => Rule.min(1).max(4),
            }),
        ]),
    ],
    preview: {
        select: { heading: 'heading', items: 'items' },
        prepare({ heading, items }: any) {
            const count = Array.isArray(items) ? items.length : 0
            return { title: heading || 'Related Content', subtitle: `${count} post(s)` }
        },
    },
})
