import content from './content'
import meta from './meta'
import options from './options'
import fieldGroup from './fieldGroup'

export * from './content'
export * from './fieldGroup'
export * from './group'
export * from './meta'
export * from './options'

export const fieldGroupDefaults = () => [content(), meta()]
export const fieldGroupComponentOptions = () => [
  content(),
  fieldGroup('media'),
  fieldGroup('links'),
  options(),
]
