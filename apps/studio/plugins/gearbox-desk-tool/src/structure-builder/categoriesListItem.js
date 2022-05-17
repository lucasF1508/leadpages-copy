import S from '@sanity/desk-tool/structure-builder'
import { FaSitemap } from 'react-icons/fa'

/**
 * Convenience method for returning a list item representing a group of category
 * documents.
 *
 * @param {string} category - Partial id of the documentTypes to consider a category
 * document. Default: `category`.
 * @prop {string} `[title]` - The title to use for the list. Default: `Categories`.
 * @prop {string[]} exclude - Names of documentTypes to exclude
 * @prop {function} `[icon]` - React component to use as icon. Default: `FaSitemap`.
 * @returns {ListItem} List items of category document types
 *
 * @extends listItem
 * @see {@link https://www.sanity.io/docs/structure-builder-reference#4ee70ea3c244 listItem Docs}
 */

const categoriesListItem = (
  category = 'category',
  { title = 'Categories', exclude = [], icon = FaSitemap } = {}
) => {
  const categories = Array.isArray(category) ? category : [category]
  return S.listItem()
    .title(title)
    .child(
      S.list()
        .title(title)
        .items([
          ...S.documentTypeListItems()
            .filter(
              (listItem) =>
                !exclude.includes(listItem.getId()) &&
                categories.some((cat) => listItem.getId().includes(cat))
            )
            .sort((a, b) =>
              a.getTitle() > b.getTitle()
                ? 1
                : b.getTitle() > a.getTitle()
                ? -1
                : 0
            ),
        ])
    )
    .icon(icon)
}

export default categoriesListItem
