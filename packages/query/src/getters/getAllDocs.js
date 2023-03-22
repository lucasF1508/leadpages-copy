import { fieldsToGroq, reference } from '../parser'
import { getQuery, buildQuery } from '../builder'
import getDocSlice from './getDocSlice'
import runQuery from './runQuery'
import getDocPagination from './getDocPagination'

export const getAllDocs = async (
  schemaType,
  {
    projections,
    params,
    pipes,
    filters,
    slice: orgSlice,
    order = 'order(_createdAt desc)',
    preview = false,
    currentPage = 1,
    asCards = false,
    offsetStart = 0,
    offsetEnd = 0,
    paginationHasFeatured = false,
  } = {}
) => {
  const slice =
    orgSlice ||
    (await getDocSlice(currentPage, schemaType, offsetStart, offsetEnd))
  const queryParams = {
    schemaType,
    projections,
    params,
    pipes,
    filters,
    order,
  }

  const docsQuery = asCards
    ? buildQuery({
        ...queryParams,
        projections: fieldsToGroq({
          ...reference(),
          ...projections,
        }),
        slice,
      })
    : getQuery({
        ...queryParams,
        slice,
      })

  const query = buildQuery({
    slice: '0',
    params,
    projections: {
      docs: docsQuery,
      found: `count(${getQuery(queryParams)})`,
    },
  })

  const { docs = [], found = 0 } =
    (await runQuery(query, params, preview)) || {}

  const { perPage, totalPages } =
    (await getDocPagination(schemaType, {
      found,
      paginationHasFeatured,
    })) || {}

  return {
    data: {
      docs,
      pagination: {
        currentPage,
        found,
        perPage,
        totalPages,
      },
    },
    query,
    params,
  }
}

export default getAllDocs
