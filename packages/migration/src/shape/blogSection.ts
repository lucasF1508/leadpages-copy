import { defineField, defineType } from 'sanity'

export const shapeBlogSection = defineType({
    name: 'blogSection',
    title: 'Blog Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'blogCard' }],
            validation: (Rule) => Rule.min(1),
        }),
    ],
    preview: {
        select: { heading: 'heading', items: 'items' },
        prepare({ heading, items }) {
            const count = items?.length || 0
            return {
                title: heading || 'Blog Section',
                subtitle: `${count} blog ${count === 1 ? 'card' : 'cards'}`,
            }
        },
    },
})
