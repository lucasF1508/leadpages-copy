import S from '@sanity/desk-tool/structure-builder'
import { AiOutlineFileText } from 'react-icons/ai'

/**
 * Convenience method for returning a list item representing a group of document
 * types or templates.
 *
 * @param {string[]} documentTypes - Names of document types/templates to include
 * @prop {string} `[title]` - The title to use for the list. Default: `Pages`.
 * @prop {function} `[icon]` - React component to use as icon. Default: `AiOutlineFileText`.
 * @returns {ListItem} List items of a group of document types
 *
 * @extends listItem
 * @see {@link https://www.sanity.io/docs/structure-builder-reference#4ee70ea3c244 listItem Docs}
 */
const documentListGroupListItem = (
  documentTypes = [],
  { title = 'Pages', icon = AiOutlineFileText } = {}
) => {
  const documentTypesString = JSON.stringify(
    documentTypes.sort((a, b) => a.length - b.length) // sort document types by length for creation menu
  )

  return S.listItem()
    .title(title)
    .child(
      S.documentList().title(title).filter(`_type in ${documentTypesString}`)
    )
    .icon(icon)
}
export default documentListGroupListItem
