import {F} from '@gearbox-built/sanity-schema-tool'
import {types} from '@gearbox-built/sanity-structured-data'

const {fields, ...type} = types.article

export const article = {
  ...type,
  fields: [
    ...fields
      .filter(({name}) => !['publisher', 'author'].includes(name))
      .toSpliced(
        3,
        0,
        F.object({
          name: 'author',
          fields: [
            F.string({
              name: 'type',
              title: '@type',
              initialValue: 'Organization',
              options: {list: ['Organization', 'Person'], layout: 'dropdown'},
            }),
            F.string({
              name: 'id',
              title: '@id',
              hidden: ({parent}) => parent?.type !== 'Organization',
              initialValue: '@Leadpages',
            }),
            F.string({
              name: 'name',
              hidden: ({parent}) => parent?.type !== 'Person',
            }),
            F.string({name: 'url', hidden: ({parent}) => parent?.type !== 'Person'}),
          ],
        })
      ),
  ],
}
