import { defineField, defineType } from 'sanity'

export const shapeBlogCard = defineType({
    name: 'blogCard',
    title: 'Blog Card',
    type: 'object',
    fields: [
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
        defineField({
            name: 'publishedDate',
            title: 'Published Date',
            type: 'datetime',
        }),
        defineField({
            name: 'tag',
            title: 'Tag',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'excerpt',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'href',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { author: 'author', media: 'image' },
        prepare({ author, media }) {
            return { title: author || 'Blog card', media }
        },
    },
})
