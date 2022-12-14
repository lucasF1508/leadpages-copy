/* eslint-disable import/no-import-module-exports */
/* eslint-disable no-console */
import corsMiddleware from '@lib/feeds/middleware/cors'
import getFeeds from '@lib/feeds/utils/sanity/fetchDocs'
import runSanityImport from '@lib/feeds/utils/sanity/runSanityImport'
import { logPerformance, now } from '@lib/feeds/utils'
import processFeed from '@lib/feeds/utils/processFeed'
import processFeeds from '@lib/feeds/utils/processFeeds'
// import { serializeError } from 'serialize-error'

const timers = {}

module.exports = async (req, res) => {
  await corsMiddleware(req, res)

  const { method, query = {} } = req

  if (!['GET'].includes(method)) {
    return res.status(405).send('Method Not Allowed')
  }

  const { id, debug, dryRun } = query

  if (debug) {
    timers.importStart = now()
    console.log('\n======================')
    console.log('Import started\n======================\n')
  }

  const feeds = await getFeeds({ id })
  let results = []
  let importedDocs = false

  if (debug) {
    timers.processStart = now()
    console.log('Processing started\n----------------------')
  }

  try {
    results = id
      ? await processFeed(feeds[0], { debug })
      : await processFeeds({ feeds, debug })
  } catch (err) {
    console.error(err) // For logging
    return res.status(200).json({
      error: {
        status: 'Error',
        message: 'Failed to process feed.',
        // error: serializeError(err),
        error: err,
      },
    })
  }

  if (debug) {
    logPerformance(
      `Processing: ${id ? 'processFeed' : 'processFeeds'}`,
      timers.processStart
    )
  }

  if (debug) {
    timers.sanityImportStart = now()
    console.log('\nSanity Import started\n----------------------')
  }

  if (!dryRun) {
    importedDocs = await runSanityImport(results)
  }

  if (debug) {
    logPerformance('Sanity Import: runSanityImport', timers.sanityImportStart)
    console.log('\n======================')
    logPerformance('Import:', timers.importStart)
    console.log('======================')
  }

  return res.status(200).json(
    importedDocs
      ? {
          ...importedDocs,
          docs: importedDocs?.docs?.map(({ _type, _id, title }) => ({
            _type,
            _id,
            title,
          })),
        }
      : {
          dryRun: true,
          results: results?.map(({ _type, _id, title, content }) => ({
            _type,
            _id,
            title,
            content,
          })),
        }
  )
}
