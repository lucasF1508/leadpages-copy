import mapCategoryData from '../map/mapCategoryData'
import { fetchCategoryDocs, fetchPostDocs } from './fetchDocs'

export const prepareCategoryDocs = async (
  categoryDocsIn,
  categoryData = []
) => {
  const categoryDocs = categoryDocsIn || (await fetchCategoryDocs())

  return mapCategoryData(categoryData, categoryDocs).map((category) => ({
    ...category,
  }))
}

export const prepareArticleDocs = async (
  postDocsIn,
  articleData = [],
  { _type = 'post' } = {}
) => {
  const postDocs = postDocsIn || (await fetchPostDocs())
  const postIds = postDocs.map(({ _id }) => _id)

  return articleData.map((article) => {
    const { image, primaryCategory, _id, secondaryCategories } = article

    if ((!primaryCategory || !image) && !postIds.includes(_id)) {
      // eslint-disable-next-line no-param-reassign
      article._id = _id
    }

    return {
      _type,
      primaryCategory: secondaryCategories[0],
      ...article,
    }
  })
}
