import title from './custom/title'
import message from './custom/message'
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
  message(
    '⚠ ️The current page is set to redirect to a legacy version of the page. To disable this redirect, disable the <b>Redirect to legacy page</b> option in the <b>Page Options</b> tab and redeploy the website.',
    {
      name: 'redirectMessage',
      hidden: ({ parent }) => parent?.redirectToLegacy != true,
      group: 'content',
    }
  ),
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
