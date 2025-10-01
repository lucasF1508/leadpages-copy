import {defineField, defineType} from 'sanity'

export const pressArticleItem = defineType({
  name: 'pressArticleItem',
  title: 'Press Article Item',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        list: [
          {title: 'Half (pair)', value: 'half'},
          {title: 'Full width', value: 'full'},
        ],
        layout: 'radio',
      },
      initialValue: 'half',
      validation: r => r.required(),
    }),
    defineField({name: 'title', type: 'string', validation: r => r.required()}),
    defineField({name: 'date', type: 'date', options: {dateFormat: 'YYYY-MM-DD'}}),
    defineField({name: 'excerpt', type: 'text', rows: 3}),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        {name: 'label', type: 'string', initialValue: 'Read More'},
        {name: 'href', type: 'url', validation: r => r.required()},
        {name: 'target', type: 'string', options: {list: ['_self','_blank']}},
      ],
    }),
  ],
})
