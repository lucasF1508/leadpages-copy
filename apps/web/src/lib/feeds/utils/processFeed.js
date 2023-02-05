import { shapeData } from './shape'
import mapData from './map/mapData'
import fetchFeedData from './fetch/fetchFeedData'
import { fetchCategoryPostDocs } from './sanity/fetchDocs'
import { prepareArticleDocs, prepareCategoryDocs } from './sanity/prepareDocs'
import { logPerformance, now } from './utils'

export const processFeed = async (
  { mapping, ...feed },
  { categoryPostDocs, debug, timers = {} }
) => {
  if (debug) {
    // eslint-disable-next-line no-param-reassign
    timers.start = now()
  }

  const [_id] = mapping.filter((mappingItem) =>
    mappingItem?.to?.includes('_id')
  )
  if (!_id)
    return [
      { status: 'Error', message: 'Feed mapping missing `_id` field mapping.' },
    ]

  const data = await fetchFeedData(feed)

  if (!data) return [{ status: 'Error', message: 'No data' }]

  // 0. Fetch Sanity docs
  const { categories, posts } =
    categoryPostDocs || (await fetchCategoryPostDocs())

  // 1. Map feed data to mapping settings
  const [articleJson, categoryData] = mapData({ data, mapping })

  // 2. Prepare categories
  const categoryDocs = await prepareCategoryDocs(categories, categoryData)

  // 3. Shape and map categories to data
  const articleData = await shapeData({
    data: articleJson,
    categoryDocs,
    mapping,
  })

  // 4. Prepare articles
  const { feedDocType: _type } = feed?.feedOptions || {}
  const articleDocs = await prepareArticleDocs(posts, articleData, { _type })

  if (debug) {
    logPerformance(`${feed.title}: processFeed`, timers.start)
  }

  return [...categoryDocs, ...articleDocs]
}

export default processFeed
