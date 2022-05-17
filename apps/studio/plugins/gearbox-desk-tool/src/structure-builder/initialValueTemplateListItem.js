import S from '@sanity/desk-tool/structure-builder'
import pluralize from 'pluralize'
import startCase from 'lodash/startCase'

/**
 * Convenience method. Returns a list item for the document type specified and
 * configure it with the correct titles, icons, initial value templates and
 * similar.
 */
const initialValueTemplateListItem = (
  type,
  templateId,
  { title: orgTitle, defaultOrdering = [] } = {}
) => {
  const initialValueTemplates = S.initialValueTemplateItem(templateId)
  const title = orgTitle || startCase(pluralize(type))

  return S.listItem()
    .title(title)
    .schemaType(type)
    .child(
      S.documentTypeList(type)
        .title(title)
        .initialValueTemplates([initialValueTemplates])
        .defaultOrdering(defaultOrdering)
    )
}

export default initialValueTemplateListItem
