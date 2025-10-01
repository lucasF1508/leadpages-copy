import {defineArrayMember, defineField, defineType} from 'sanity'

export const pressArticlesSection = defineType({
  name: 'pressArticlesSection',
  title: 'Press Articles Section',
  type: 'object',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow'}),
    defineField({name: 'heading', type: 'string', title: 'Heading'}),
    defineField({name: 'subheading', type: 'text', rows: 3}),
    defineField({
      name: 'items',
      title: 'Articles',
      type: 'array',
      of: [defineArrayMember({type: 'pressArticleItem'})],
      // si querés tope duro: validation: r => r.min(1).max(2),
      validation: r => r.min(1),
    }),
  ],
})
