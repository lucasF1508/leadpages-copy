const futurePublishedDateFilter = () => {
  const today = new Date().toLocaleDateString('en-CA')
  return `(!defined(publishedDate) || publishedDate <= '${today}')`
}

const filterForPublishedDate = (_filters) => {
  const filters = Array.isArray(_filters) ? _filters : [_filters]
  return [...filters, futurePublishedDateFilter()].filter(Boolean)
}

export { futurePublishedDateFilter }
export default filterForPublishedDate
