import {BsArrowsExpand as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'
import sortBy from 'lodash/sortBy'
import * as allComponentsSchema from '../components'
import {section} from './section'

const componentsSchema = sortBy(
  [section, ...Object.values(allComponentsSchema)]
    .filter(({name}) => !['embed', 'video', 'mediaWithTextSticky'].includes(name))
    .map(({name, title}) => F.field(name, {name, title})),
  (o) => o.title
)

export const schemaComponents = F.array({
  icon,
  name: 'components',
  of: componentsSchema,
})
