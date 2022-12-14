// import { serializeError } from 'serialize-error'
import Parser from 'rss-parser'

const fetchRssFeed = async ({ url }, customFields = { item: [] }) => {
  const rssParser = new Parser({ customFields })
  const { items, data } = await rssParser
    .parseURL(url)
    .catch((err) => ({ data: { err } }))

  return data || items
}

export default fetchRssFeed
