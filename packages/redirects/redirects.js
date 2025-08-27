const sanityClient = require('client')
const isEmpty = require('lodash/isEmpty')

module.exports = async ({ dataset, projectId }) => {
  const client = sanityClient({
    config: {
      dataset,
      projectId,
      useCdn: false,
    },
    preview: false,
  })

  const data = await client.fetch(`*[_type == 'siteRedirect']`)

  if (!data?.length) return []

  return data
    .map(({ destination, permanent, source }) => ({
      destination,
      permanent,
      source: source.endsWith('/') ? source.slice(0, -1) : source,
    }))
    .filter((redirect) => !isEmpty(redirect))
}
