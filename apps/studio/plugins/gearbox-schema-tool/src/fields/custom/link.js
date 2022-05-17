import * as F from '../../fields'
import { BsLink as icon } from 'react-icons/bs'
import startCase from 'lodash/startCase'

export const linkConditions = ({ types }) => ({
  internal: [F.reference(types, { name: 'page' })],
  external: [
    F.url({ description: 'eg. https://google.com', validation: false }),
    F.checkbox({ name: 'target', title: 'Open in a New Tab' }),
  ],
  download: [F.file()],
})

/**
 * Convenience method for quickly creating conditional link schema fields
 *
 * Example usage:
 * @example
 * // Basic
 * F.link(['post', 'page'])
 * @example
 * // With `getTemplateTypes` helper
 * import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
 * F.link(pageTemplates)
 * @example
 * // Turn condition off
 * import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
 * F.link(pageTemplates, { conditions: { download: false } })
 * @example
 * // Add condition
 * import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
 * F.link(pageTemplates, { conditions: { none: [F.title({})] } })
 */
export const link = (types, { conditions, ...props } = {}) =>
  F.conditional('Select the link type', {
    icon,
    name: 'link',
    parseType: 'link',
    conditions: {
      ...linkConditions({ types }),
      ...conditions,
    },
    fields: [
      F.string({
        name: 'label',
        hidden: ({ parent }) => parent.condition === 'none',
      }),
    ],
    preview: {
      select: {
        label: 'label',
        pageTitle: 'page.title',
        downloadFile: 'file.asset.originalFilename',
        externalUrl: 'url',
      },
      prepare: ({ condition, label, ...link }) => {
        let title

        switch (condition) {
          case 'internal':
            title = label || link.pageTitle
            break
          case 'external':
            title = label || link.externalUrl
            break
          case 'download':
            title = label || link.downloadFile
            break
          default:
            title =
              label || link[`${condition}Label`] || link[`${condition}Title`]
            break
        }

        return {
          title: title || `${startCase(condition)} Link`,
        }
      },
    },
    ...props,
  })

export default link
