import {BsArrowsExpand as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'
import * as allComponentsSchema from '../components'
import { section } from './section'

const componentsSchema = Object.values(allComponentsSchema).map(({name, title}) =>
  F.field(name, {name, title})
)

export const schemaComponents = F.array({
  icon,
  name: 'components',
  of: [section, ...componentsSchema],
})
