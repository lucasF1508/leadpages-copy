import { getNavigation } from '@/components/Header/getNavigation'
import { getFooter } from '@/components/Footer/getFooter'

import runQuery from './runQuery'

const globalQueries = {
  navigation: {},
  siteMeta: {
    query: `*[_type == 'seoSite'][0] {
      ...,
      "company": *[_type=='companyInfo'][0],
      "siteBanner": *[_type=='siteBanner'][0]
    }`,
  },
  leadboxes: {
    query: `*[_type == 'leadboxes'][0]`,
  },
  footer: {},
}

export const seoQuery = `"seo": {
  "seoTitle": coalesce(seo.seoTitle, title),
  "seoDescription": coalesce(
    seo.seoDescription,
    array::join(string::split((pt::text(content)), "")[0..152], "") + "...",
  ),
  "hasCustomSeoTitle": defined(seo.seoTitle),
  ...(seo)
}`

export const formatGlobalQueries = (responses) => {
  const globalData = {}

  Object.keys(globalQueries).forEach((key, index) => {
    globalData[key] = responses[index]
  })

  return globalData
}

export const getGlobalQueries = ({ preview = false }) => {
  const _globals = Object.keys(globalQueries).map((key) => {
    const { query, params } = globalQueries[key]
    if (!query) return null

    return runQuery(query, { params, preview })
  }).filter(Boolean)

  const globals = [getNavigation(preview), ..._globals, getFooter(preview)]
  return globals
}

export default globalQueries
