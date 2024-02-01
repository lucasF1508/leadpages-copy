import { F } from 'part:gearbox-schema-tool/schema-builder'
import { features } from 'config'

export const colorOptions = [
  { title: 'None', value: 'transparent' },
  { title: 'Gray', value: 'gray' },
  { title: 'Gray 4', value: 'gray4' },
  { title: 'White', value: 'white' },
  { title: 'Light Lavender', value: 'lavender' },
  { title: 'Teal', value: 'teal' },
  { title: 'Light Teal', value: 'tealLight' },
  ...features.darkHeros,
]

export const schemaBackgroundColorFull = F.dropdown(colorOptions, {
  name: 'backgroundColorFull',
  initialValue: 'transparent',
  description: 'Defaults to transparent.',
})
