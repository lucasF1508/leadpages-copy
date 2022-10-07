import getQuery from '../builder/getQuery'
import runQuery from './runQuery'

export const getDoc = async (
  schemaType,
  {
    preview = false,
    params,
    projections,
    pipes,
    slice = '0',
    filters,
    order,
  } = {}
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

  return {
    data,
    query,
    params,
  }
}

export default getDoc
