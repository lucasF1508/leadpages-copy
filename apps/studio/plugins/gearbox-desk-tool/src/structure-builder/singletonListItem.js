import S from '@sanity/desk-tool/structure-builder'
import addPreviewPane from 'part:gearbox-live-preview/add-preview-pane'
import addSEOPane from 'part:gearbox-seo-pane/add-seo-pane'
import startCase from 'lodash/startCase'

/**
 * Convenience method for returning a list item representing a singleton.
 *
 * @param {string} schemaType - Name of the schema type.
 * @prop {string} `[id]` - Identifier for the document node used to reflect
 * the current structure state in the studio’s URL. Default: `schemaType`.
 * @prop {string} `[title]` - The title to use for the list. Default:
 * `startCase(schemaType)`.
 * @prop {string} `[documentId]` - Document ID to use for this node
 * @prop {string} `[editorTitle]` - The title to use for the document
 * @returns {ListItem} List items of document types
 *
 * @extends listItem
 * @see {@link https://www.sanity.io/docs/structure-builder-reference#4ee70ea3c244 listItem Docs}
 */
const singletonListItem = (
  schemaType,
  {
    id: orgId,
    title: orgTitle,
    documentId: orgDocumentId,
    editorTitle: orgEditorTitle,
  } = {}
) => {
  const id = orgId || schemaType
  const title = orgTitle || startCase(schemaType)
  const editorTitle = orgEditorTitle || title
  const documentId = orgDocumentId || orgId || schemaType

  return S.listItem()
    .title(title)
    .child(
      S.editor()
        .id(id)
        .title(editorTitle)
        .schemaType(schemaType)
        .documentId(documentId)
        .views([
          S.view.form(),
          addPreviewPane({
            deskStructure: S,
          }),
          addSEOPane({
            deskStructure: S,
          }),
        ])
    )
}

export default singletonListItem
