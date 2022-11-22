import mapCategory from './mapCategory'

const mapCategoryData = (categoryData, categoryDocs) =>
  categoryData.map((category) => mapCategory(category, categoryDocs))

export default mapCategoryData
