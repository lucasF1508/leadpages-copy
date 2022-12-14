import { fetchCategoryPostDocs } from './sanity/fetchDocs'
import processFeed from './processFeed'
import { filterDuplicateByKey } from './utils'

export const processFeeds = async ({ feeds, debug }) => {
  const categoryPostDocs = await fetchCategoryPostDocs()
  const feedTasks = feeds.map((feed) =>
    processFeed(feed, { categoryPostDocs, debug })
  )
  const processedFeeds = await Promise.allSettled(feedTasks)

  const docs = processedFeeds.reduce(
    (allFeeds, feed) =>
      feed.status === 'fulfilled' ? [...allFeeds, ...feed.value] : allFeeds,
    []
  )

  return filterDuplicateByKey(docs, '_id')
}

export default processFeeds
