import sortBy from 'lodash/sortBy'
import {TbSection as icon} from 'react-icons/tb'
import * as allComponentsSchema from '@/schema/components'
import {F, P} from '@/schema/tool'

const componentsSchema = sortBy(
  [
    ...Object.values(allComponentsSchema),
  ]
    .filter(({name}) => !['sectionReference'].includes(name))
    .map(({name, title}) => F.field(name, {name, title})),
  (o) => o.title
)

export const sharedSection = {
  icon,
  name: 'sharedSection',
  title: 'Section',
  type: 'document',
  fields: [
    F.string({name: 'title'}),
    F.array({
      icon,
      name: 'components',
      of: [...componentsSchema],
    }),
  ],
  preview: P.titleImage(),
}
