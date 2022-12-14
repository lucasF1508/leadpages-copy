import getDocPerPage from './getDocPerPage'

export const getDocSlice = async (page, schemaType, offsetStart, offestEnd) => {
  const num = parseInt(page, 10)
  const { perPage } = (await getDocPerPage(schemaType)) || {}

  if (!perPage) {
    return undefined
  }

  return `${(num - 1) * perPage + offsetStart}...${
    (num - 1) * perPage + (perPage + offestEnd)
  }`
}

export default getDocSlice
