const sanityClient = require('client').default
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

  const siteRedirects = await client.fetch(
    `*[_type == 'siteRedirects'][0].siteRedirects`
  )

  if (!siteRedirects) return []

  return siteRedirects
    .map(({ source, destination, permanent }) => ({
      source: source.endsWith('/') ? source.slice(0, -1) : source,
      destination,
      permanent,
    }))
    .filter((redirect) => !isEmpty(redirect))
}
