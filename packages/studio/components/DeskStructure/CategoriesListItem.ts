import type {ConfigContext} from 'sanity'
import type {StructureBuilder} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {FaSitemap} from 'react-icons/fa'

interface CategoriesListItemProps {
  S: StructureBuilder
  context: ConfigContext
  exclude?: string[]
  icon?: React.ComponentType
  title?: string
  type: string
}

const CategoriesListItem = ({
  type = 'category',
  title = 'Categories',
  exclude = [],
  icon = FaSitemap,
  S,
  context,
}: CategoriesListItemProps) => {
  const categories = Array.isArray(type) ? type : [type]

  return S.listItem()
    .title(title)
    .child(
      S.list()
        .title(title)
        .items([
          ...S.documentTypeListItems()
            .filter((listItem) => {
              const id = listItem.getId()
              return id && !exclude.includes(id) && categories.some((cat) => id?.includes(cat))
            })
            .map((listItem) => {
              const schemaType = listItem.getSchemaType()
              if (!schemaType || typeof schemaType === 'string') return listItem
              const {name: type, title, icon} = schemaType

              return orderableDocumentListDeskItem({
                type,
                title,
                icon,
                S,
                context,
              })
            }),
        ])
    )
    .icon(icon)
}

export default CategoriesListItem
