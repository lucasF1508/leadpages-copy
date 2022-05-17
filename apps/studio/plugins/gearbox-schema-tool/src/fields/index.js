import fieldTitle from './custom/title'
import fieldSlug from './types/slug'
import fieldString from './types/string'

// Fields
export * from './field'
export * from './types'
export * from './custom'

export const fieldDefaults = ({
  fieldset,
  title = {},
  slug = {},
  path = {},
} = {}) => [
  fieldTitle({ fieldset, group: 'content', ...title }),
  fieldSlug({ fieldset, group: 'meta', ...slug }),
  fieldString({
    name: 'path',
    fieldset,
    readOnly: true,
    group: 'meta',
    ...path,
  }),
]
