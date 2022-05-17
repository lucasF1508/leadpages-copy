import getDocPerPage from './getDocPerPage'

export const getDocSlice = async (page, schemaType) => {
  const num = parseInt(page, 10)
  const { perPage } = (await getDocPerPage(schemaType)) || {}

  if (!perPage) {
    return undefined
  }

  return `${(num - 1) * perPage}...${(num - 1) * perPage + perPage}`
}

export default getDocSlice
