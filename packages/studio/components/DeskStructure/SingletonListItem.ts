import type {IconType} from 'react-icons/lib'
import type {StructureBuilder} from 'sanity/structure'
import startCase from 'lodash/startCase'
import {AiOutlineFileText as defaultIcon} from 'react-icons/ai'

interface SingletonListItemProps {
  S: StructureBuilder
  documentId?: string
  editorTitle?: string
  icon?: IconType
  id?: string
  title?: string
  type: string
}

const SingletonListItem = ({
  type: schemaType,
  id: orgId,
  title: orgTitle,
  documentId: orgDocumentId,
  editorTitle: orgEditorTitle,
  S,
  icon,
}: SingletonListItemProps) => {
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
        .views([S.view.form()])
    )
    .icon(icon || defaultIcon)
}

export default SingletonListItem
