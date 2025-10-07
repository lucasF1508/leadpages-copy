import { defineField, defineType } from 'sanity'
import { RiBook2Line } from 'react-icons/ri'

export const brand = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'object',
  icon: RiBook2Line,
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),

    defineField({
      name: 'images',
      title: 'Top Images (4)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Caption (optional)', type: 'string' },
          ],
        },
      ],
      validation: (r) => r.length(4),
    }),

    defineField({
      name: 'categories',
      title: 'Sidebar Sections',
      type: 'array',
      of: [
        defineField({
          name: 'category',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'sidebarTitle',
              title: 'Sidebar Title (optional)',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Short description (shown under title)',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'icon',
              title: 'Icon (optional)',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'subsections',
              title: 'Subsections',
              type: 'array',
              of: [
                defineField({
                  name: 'subsection',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Subsection title',
                      type: 'string',
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: 'content',
                      title: 'Content (Rich Text)',
                      type: 'array',
                      of: [
                        { type: 'block' }, // texto
                        {
                          type: 'image',
                          options: { hotspot: true },
                          fields: [
                            { name: 'alt', title: 'Alt text', type: 'string' },
                            { name: 'caption', title: 'Caption', type: 'string' },
                          ],
                        },
                      ],
                    }),
                    defineField({
                      name: 'cta',
                      title: 'CTA (optional)',
                      type: 'object',
                      fields: [
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'url', title: 'URL', type: 'url' },
                        {
                          name: 'target',
                          title: 'Target',
                          type: 'string',
                          options: {
                            list: [
                              { title: 'Same tab', value: '_self' },
                              { title: 'New tab', value: '_blank' },
                            ],
                          },
                          initialValue: '_self',
                        },
                      ],
                    }),
                  ],
                  preview: { select: { title: 'title' } },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'sidebarTitle', media: 'icon' },
            prepare: ({ title, subtitle, media }) => ({
              title,
              subtitle: subtitle || 'Brand section',
              media,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'heading', media: 'images.0' },
    prepare: ({ title, media }) => ({ title: title || 'Brand', media }),
  },
})

export default brand
