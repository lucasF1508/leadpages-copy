import content from './content'
import meta from './meta'
import options from './options'
import fieldGroup from './fieldGroup'

export * from './content'
export * from './fieldGroup'
export * from './group'
export * from './meta'
export * from './options'

export const fieldGroupDefaults = ({ content: _content, meta: _meta } = {}) => [
  content(_content),
  meta(_meta),
]

export const fieldGroupComponentOptions = ({
  content: _content,
  media,
  links,
  options: _options,
} = {}) => [
  content(_content),
  fieldGroup('media', media),
  fieldGroup('links', links),
  options(_options),
]
