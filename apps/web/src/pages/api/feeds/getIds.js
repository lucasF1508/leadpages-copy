/* eslint-disable import/no-import-module-exports */
import corsMiddleware from '@lib/feeds/middleware/cors'
import { getIds } from '@lib/feeds/utils/sanity/fetchDocs'

module.exports = async (req, res) => {
  await corsMiddleware(req, res)

  const { method } = req

  if (!['GET'].includes(method)) {
    return res.status(405).send('Method Not Allowed')
  }

  const feed = await getIds()
  return res.status(200).json(feed)
}
