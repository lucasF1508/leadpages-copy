import content from './content'
import meta from './meta'
import options from './options'

export * from './content'
export * from './fieldGroup'
export * from './group'
export * from './meta'
export * from './options'

export const fieldGroupDefaults = () => [content(), meta()]
export const fieldGroupComponentOptions = () => [content(), options()]
