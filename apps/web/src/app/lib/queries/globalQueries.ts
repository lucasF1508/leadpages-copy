import type { Data, Query } from '@types'
import runQuery from './runQuery'

const globalQueries: Record<string, Query> = {
  footer: {
    query: `*[_type == 'footer'][0] {
      ...,
      "menu": navigation->,
      "social": *[_type == "companyInfo"][0].social,
    }`,
  },
  navigation: {
    params: {
      slug: 'primary-navigation',
    },
    query: `*[_type == 'navigation' && slug.current == $slug][0]`,
  },
  siteMeta: {
    query: `*[_type == 'seoSite'][0] {
      ...,
      "company": *[_type=='companyInfo'][0]
    }`,
  },
}

export const seoQuery = `"seo": {
  "seoTitle": coalesce(seo.seoTitle, title),
  "seoDescription": coalesce(
    seo.seoDescription,
    array::join(string::split((pt::text(content)), "")[0..152], "") + "...",
  ),
  ...(seo)
}`

export const formatGlobalQueries = (responses: Data[]) => {
  const globalData: Data = {}

  Object.keys(globalQueries).forEach((key, index) => {
    globalData[key] = responses[index]
  })

  return globalData
}

export const getGlobalQueries = ({ preview = false }) =>
  Object.keys(globalQueries).map((key) => {
    const { params, query } = globalQueries[key] || {}

    if (!query) {
      console.error(`No query found for ${key}`)
      return null
    }

    return runQuery(query, { params, preview })
  })

export default globalQueries
