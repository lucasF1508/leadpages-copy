import buildQuery from '../builder/buildQuery'
import runQuery from './runQuery'

export const getDocPerPage = async (schemaType, params) => {
  const query = buildQuery({
    slice: '0',
    order: false,
    projections: {
      perPage: `*[archiveOf == "${schemaType}"][0].docsPerPage`,
      found: `count(*[_type == "${schemaType}"])`,
    },
  })
  const { perPage = 12, found = 0 } = (await runQuery(query, params)) || {}
  const totalPages = Math.ceil(found / perPage)

  return {
    perPage,
    found,
    totalPages,
  }
}

export default getDocPerPage
