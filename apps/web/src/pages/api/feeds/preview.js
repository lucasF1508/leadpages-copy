/* eslint-disable import/no-import-module-exports */
import corsMiddleware from '@lib/feeds/middleware/cors'
import getFeeds from '@lib/feeds/utils/sanity/fetchDocs'
import mapData from '@lib/feeds/utils/map/mapData'
import fetchFeedData from '@lib/feeds/utils/fetch/fetchFeedData'

module.exports = async (req, res) => {
  await corsMiddleware(req, res)

  const { method, query = {} } = req

  if (!['GET'].includes(method)) {
    return res.status(405).send('Method Not Allowed')
  }

  const { id } = query

  if (!id) {
    return res
      .status(200)
      .json({ status: 'Error', message: 'No feed ID provided' })
  }

  const [feedOrg] = await getFeeds({ id })

  // Do the things

  const { mapping, vertical, ...feed } = feedOrg || {}
  const feedData = await fetchFeedData(feed)

  if (!feedData || feedData?.error) {
    return res
      .status(500)
      .json(
        feedData?.error
          ? feedData
          : { error: { status: 'Error', message: 'No data' } }
      )
  }

  const [articleJson] = mapData({ data: feedData, mapping })

  return res.status(200).json({
    feed: feedData,
    mapped: articleJson,
    feedOptions: feed.feedOptions,
  })
}
