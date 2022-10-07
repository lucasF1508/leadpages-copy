const sanityClient = require('client')
const isEmpty = require('lodash/isEmpty')

module.exports = async ({ projectId, dataset }) => {
  const client = sanityClient({
    preview: false,
    config: {
      projectId,
      dataset,
      useCdn: false,
    },
  })

  const data = await client.fetch(`*[_type == 'siteRedirects'][0]{
    siteRedirects
  }`)

  if (!data?.siteRedirects) return []

  const { siteRedirects } = data

  return siteRedirects
    .map(({ source, destination, permanent }) => ({
      source: source.endsWith('/') ? source.slice(0, -1) : source,
      destination,
      permanent,
    }))
    .filter((redirect) => !isEmpty(redirect))
}
