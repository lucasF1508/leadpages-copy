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

  const siteRewrites = await client.fetch(
    `*[_type == 'siteRewrites'][0].siteRewrites`
  )

  if (!siteRewrites) return []

  return siteRewrites
    .map(({ source, destination }) => ({
      source: source.endsWith('/') ? source.slice(0, -1) : source,
      destination,
    }))
    .filter((redirect) => !isEmpty(redirect))
}
