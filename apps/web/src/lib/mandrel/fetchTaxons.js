import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl } from '@legacy/constants/templates'

const mandrelApi = new MandrelApi({
  baseUrl: templatesBaseUrl,
})

const fetchTaxons = async (apiInstance = mandrelApi) => {
  try {
    const response = await apiInstance.getTaxons()
    return response
  } catch (error) {
    console.error(`Error fetching taxons:`, error)
    throw error
  }
}

export default fetchTaxons
