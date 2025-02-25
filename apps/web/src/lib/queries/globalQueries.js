import runQuery from './runQuery'

const globalQueries = {
  navigation: {
    query: `*[_type == 'navigation' && slug.current == $slug][0]`,
    params: {
      slug: 'primary-navigation',
    },
  },
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
  footer: {
    query: `*[_type == 'footer'][0] {
      ...,
      navigation->
    }`,
  },
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

export const getGlobalQueries = ({ preview = false }) =>
  Object.keys(globalQueries).map((key) => {
    const { query, params } = globalQueries[key]

    return runQuery(query, { params, preview })
  })

export default globalQueries
