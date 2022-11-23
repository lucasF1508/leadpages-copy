import title from './custom/title'
import slug from './types/slug'
import string from './types/string'
import reference from './types/reference'

// Fields
export * from './field'
export * from './types'
export * from './custom'

export const fieldDefaults = ({
  fieldset,
  title: _title = {},
  slug: _slug = {},
  path = {},
  parent = {},
} = {}) => [
  title({ fieldset, group: 'content', ..._title }),
  slug({ fieldset, group: 'meta', ..._slug }),
  reference('page', {
    name: 'parent',
    title: 'Parent Page',
    fieldset,
    group: 'meta',
    description: `Set parent page for nested URL structures. Path will prepend parent page's path.`,
    ...parent,
  }),
  string({
    name: 'path',
    fieldset,
    readOnly: true,
    group: 'meta',
    description: `Automatically updates on Publish.`,
    ...path,
  }),
]
