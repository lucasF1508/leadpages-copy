import S from '@sanity/desk-tool/structure-builder'

/**
 * Convenience method. Returns an array of list items for all defined document
 * types in your schema, and configure them with the correct titles, icons,
 * initial value templates and similar.
 *
 * Identical to `S.documentTypeListItems()` but excludes `category` documents and
 * accepts an array of documentType names to exclude. Excludes `category`
 * documents by default.
 *
 * @prop {string[]} exclude - Names of documentTypes to exclude
 * @prop {string} category - Partial id of the documentTypes to consider a category
 * document, thus excluded. Default: `category`.
 * @returns {array} List items of document types
 *
 * @extends documentTypeListItems
 * @see {@link https://www.sanity.io/docs/structure-builder-reference#73d190da51ad documentTypeListItems Docs}
 */
const documentTypeListItems = ({
  exclude = [],
  category = 'category',
} = {}) => {
  return S.documentTypeListItems().filter(
    (listItem) =>
      !exclude.includes(listItem.getId()) &&
      !listItem.getId().includes(category)
  )
}

export default documentTypeListItems
