import { F } from 'part:gearbox-schema-tool/schema-builder'

const colorOptions = [
  { title: 'None', value: 'transparent' },
  { title: 'Gray', value: '$grayAlt' },
]

export const schemaBackgroundColor = F.radio(colorOptions, {
  name: 'backgroundColor',
  initialValue: 'transparent',
})
