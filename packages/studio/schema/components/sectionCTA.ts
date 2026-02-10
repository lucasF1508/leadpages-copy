import { defineType, defineField } from 'sanity'

export const sectionCTA = defineType({
  name: 'sectionCTA',
  title: 'Section CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'gradient',
      options: {
        list: [
          { title: 'Gradient (purple)', value: 'gradient' },
          { title: 'Dark solid', value: 'dark' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label (optional)',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading (optional)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'stats',
      title: 'Stats (optional)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string', validation: (r) => r.required() },
            { name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() },
          ],
          preview: {
            select: { value: 'value', label: 'label' },
            prepare: ({ value, label }) => ({ title: value, subtitle: label }),
          },
        },
      ],
      options: { sortable: true },
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [
        {
          type: 'link',
        },
        {
          type: 'object',
          name: 'ctaSimple',
          title: 'Simple CTA',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() },
            { name: 'url', title: 'URL', type: 'string', validation: (r) => r.required() },
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
            },
            {
              name: 'style',
              title: 'Button Style',
              type: 'string',
              options: {
                list: [
                  { title: 'Solid', value: 'button-solid' },
                  { title: 'Outline', value: 'button-outline' },
                  { title: 'Ghost', value: 'button-ghost' },
                ],
              },
            },
          ],
          preview: {
            select: { label: 'label', url: 'url' },
            prepare: ({ label, url }) => ({ title: label, subtitle: url }),
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'label', variant: 'variant' },
    prepare: ({ title, subtitle, variant }) => ({
      title,
      subtitle: `${subtitle ? subtitle + ' • ' : ''}${variant ?? 'gradient'}`,
    }),
  },
})
