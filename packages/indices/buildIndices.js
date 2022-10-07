const staticFiles = require('config/indices')
const getClient = require('client')
const buildJSON = require('./buildJSON')

module.exports = {
  init: async ({ files = staticFiles, client: sanityClient } = {}) => {
    if (!files) {
      /* eslint-disable no-console */
      console.log('No files found for indices')
      console.log('Files: ', files)
      /* eslint-enable no-console */
      return undefined
    }
    const client = sanityClient || getClient({ preview: false })

    const queryPromises = files.map(async ({ path, query, params }) => {
      const data = await client.fetch(query, params)

      return {
        path,
        query,
        data,
      }
    })

    const queryResponse = await Promise.allSettled(queryPromises)
    const filesResponse = await buildJSON.init({
      files: queryResponse.map(({ value }) => value),
    })
    const filesResult = await Promise.allSettled(filesResponse)

    return filesResult
  },
}
