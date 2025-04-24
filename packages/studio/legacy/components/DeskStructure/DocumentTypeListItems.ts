import type {StructureBuilder} from 'sanity/structure'

interface DocumentTypeListItemsType {
  S: StructureBuilder
  category?: string
  exclude: string[]
}

const DocumentTypeListItems = ({
  exclude = [],
  category = 'category',
  S,
}: DocumentTypeListItemsType) =>
  S.documentTypeListItems().filter((listItem) => {
    const id = listItem.getId()
    return id && !exclude.includes(id) && !id?.includes(category)
  })

export default DocumentTypeListItems
