import getDocPerPage from './getDocPerPage'

export const getDocPagination = async (schemaType, { found, ...params }) => {
  const { perPage } = await getDocPerPage(schemaType, params)
  const totalPages = Math.ceil(found / perPage)

  return {
    perPage,
    found,
    totalPages,
  }
}

export default getDocPagination
