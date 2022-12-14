const makeCategoryIndex = (categories) => {
  if (!categories) return {}

  return categories.reduce((index, category) => {
    const key = category?.slug?.current || 'category'
    return {
      ...index,
      [key]: category,
    }
  }, {})
}

export default makeCategoryIndex
