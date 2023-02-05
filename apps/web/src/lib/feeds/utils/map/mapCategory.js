// eslint-disable-next-line import/no-extraneous-dependencies
import { uuid } from '@sanity/uuid'
import { category as categoryShaper } from '../shapers/category'
import makeCategoryIndex from './makeCategoryIndex'

export const mapCategory = (category, categoryDocs) => {
  const categoryIndex = makeCategoryIndex(categoryDocs)
  const { parent: parentSlug, ...categoryDoc } = categoryShaper(category)
  const slug = categoryDoc?.slug?.current

  // _id maps
  const { _id = uuid(), parent } = categoryIndex[slug] || {}
  const { _id: _ref } = categoryIndex[parentSlug] || {}

  return {
    _id,
    ...categoryDoc,
    parent: parent || (_ref ? { _ref, _type: 'reference' } : undefined),
  }
}

export default mapCategory
