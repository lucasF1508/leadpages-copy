import fetchJsonFeed from './fetchJsonFeed'
import fetchRssFeed from './fetchRssFeed'
import fetchCSVFeed from './fetchCSVFeed'

// Renamed fields. Uppercase fields are ignored.
const customFields = {
  item: [
    ['Teams', 'teams'],
    ['media:content', 'media:content'],
    ['dc:created', 'dc:created'],
    ['keywords', 'keywords'],
    ['image', 'image'],
  ],
}

export const fetchFeedData = async ({ type, ...feed } = {}) => {
  if (!type || !feed) return false
  let data
  try {
    switch (type) {
      case 'rss':
        data = await fetchRssFeed(feed, customFields)
        break
      case 'json':
        data = await fetchJsonFeed(feed)
        break
      case 'csv':
        data = await fetchCSVFeed(feed)
        break
      default:
        data = false
        break
    }
  } catch (err) {
    console.error('fetch.js error', err)
    return false
  }

  return data.filter((row) => !Object.values(row).every((value) => !value))
}

export default fetchFeedData
