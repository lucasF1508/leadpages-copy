import getQuery from '../builder/getQuery'
import runQuery from './runQuery'
import getGlobalQueries from './getGlobalQueries'

export const getDoc = async (
  schemaType,
  { preview = false, params, projections, pipes, slice, filters, order } = {}
) => {
  const query = getQuery({
    schemaType,
    projections,
    params,
    pipes,
    filters,
    order,
    slice,
  })

  const data = await runQuery(query, params, preview)
  const global = await getGlobalQueries(preview)

  return {
    data,
    query,
    ...global,
  }
}

export default getDoc
