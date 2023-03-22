import getDocPerPage from './getDocPerPage'

export const getDocPagination = async (
  schemaType,
  { found, paginationHasFeatured, ...params }
) => {
  const { perPage } = await getDocPerPage(schemaType, params)
  const total = paginationHasFeatured ? found - 1 : found
  const totalPages = Math.ceil(total / perPage)

  return {
    perPage,
    found,
    totalPages,
  }
}

export default getDocPagination
