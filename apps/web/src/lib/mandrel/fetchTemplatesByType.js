import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl } from '@legacy/constants/templates'
import { parseInt } from 'lodash'

const mandrelApi = new MandrelApi({
  baseUrl: templatesBaseUrl,
})

const fetchTemplatesByType = async (
  templateType,
  cursor = null,
  allTemplates = [],
  apiInstance = mandrelApi
) => {
  try {
    const acc = allTemplates
    const filters = cursor ? { cursor: { operator: '', value: cursor } } : {}

    let response
    if (templateType === 'Leadpage') {
      response = await apiInstance.getLeadpageTemplates(filters)
    } else if (templateType === 'Site') {
      response = await apiInstance.getSiteTemplates(filters)
    }

    const { _meta, _items } = response

    const updatedTemplates = acc.concat(_items)
    const { cursor: nextCursor, total } = _meta

    if (parseInt(nextCursor) !== total) {
      return await fetchTemplatesByType(
        templateType,
        nextCursor,
        updatedTemplates,
        apiInstance
      )
    }

    return updatedTemplates
  } catch (error) {
    console.error(`Error fetching ${templateType} templates:`, error)
    throw error
  }
}

export default fetchTemplatesByType
