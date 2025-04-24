import type {IconType} from 'react-icons/lib'
import type {EditorNode, StructureBuilder} from 'sanity/structure'
import startCase from 'lodash/startCase'
import {AiOutlineFileText as defaultIcon} from 'react-icons/ai'

interface SingletonListItemProps extends Partial<Omit<EditorNode, 'options'>> {
  S: StructureBuilder
  documentId?: string
  editorTitle?: string
  icon?: IconType
  id?: string
  options?: Partial<EditorNode['options']>
  title?: string
  type: string
}

const SingletonListItem = ({
  type,
  id: orgId,
  title: orgTitle,
  documentId: orgDocumentId,
  editorTitle: orgEditorTitle,
  S,
  icon,
  ...props
}: SingletonListItemProps) => {
  const id = orgId || type
  const title = orgTitle || startCase(type)
  const editorTitle = orgEditorTitle || title
  const documentId = orgDocumentId || orgId || type

  return S.listItem()
    .title(title)
    .child(
      S.editor({
        id,
        title: editorTitle,
        type,
        ...props,
        options: {id: documentId, ...props.options},
      }).views([S.view.form()])
    )
    .icon(icon || defaultIcon)
}

export default SingletonListItem
