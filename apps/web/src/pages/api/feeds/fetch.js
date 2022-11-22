/* eslint-disable import/no-import-module-exports */
import corsMiddleware from '@lib/feeds/middleware/cors'
import getFeeds from '@lib/feeds/utils/sanity/fetchDocs'
import fetchFeedData from '@lib/feeds/utils/fetch'

module.exports = async (req, res) => {
  await corsMiddleware(req, res)

  const { method, query = {} } = req

  if (!['GET'].includes(method)) {
    return res.status(405).send('Method Not Allowed')
  }

  const { id } = query

  if (!id)
    return res
      .status(200)
      .json({ status: 'Error', message: 'No feed ID provided' })

  const [feed] = await getFeeds({ id })
  const feedData = await fetchFeedData(feed)

  return res.status(200).json(feedData)
}
