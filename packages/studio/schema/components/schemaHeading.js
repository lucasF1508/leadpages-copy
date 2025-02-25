import {FaHeading as icon} from 'react-icons/fa'
import {F} from '@/schema/tool'

const headingTags = [
  {title: 'H1', value: 'h1'},
  {title: 'H2', value: 'h2'},
  {title: 'H3', value: 'h3'},
  {title: 'H4', value: 'h4'},
  {title: 'H5', value: 'h5'},
]

export const schemaHeading = F.object({
  icon,
  name: 'heading',
  fields: [
    F.string({name: 'heading'}),
    F.radio(headingTags, {
      title: 'Size',
      name: 'tags',
    }),
  ],
})
