import {F} from '@/legacy/schema/tool'

const colorOptions = [
  {title: 'None', value: 'transparent'},
  {title: 'Gray', value: 'gray'},
]

export const schemaBackgroundColor = F.radio(colorOptions, {
  name: 'backgroundColor',
  initialValue: 'transparent',
})
