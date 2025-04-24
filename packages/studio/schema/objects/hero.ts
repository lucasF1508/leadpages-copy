import {BsArrowsExpand as icon} from 'react-icons/bs'
import ArrayMaxItems from '@/components/Input/ArrayMaxItems'
import {F} from '@/schema/tool'
import * as heroes from './heroes'

const heroesSchema = Object.values(heroes).map(({name, title}) => F.field(name, {name, title}))

export const heroSchema = F.array({
  icon,
  name: 'hero',
  of: heroesSchema,
  validation: (Rule) => Rule.max(1),
  components: {
    input: ArrayMaxItems,
  },
})
