import { getGlobalQueries, formatGlobalQueries } from './globalQueries'

const resolveQueries = async ({ docQueries, withGlobals = true }) => {
  const responses = await Promise.allSettled([
    ...(docQueries.length > 0 ? docQueries.map(({ data } = {}) => data) : []),
    ...(withGlobals
      ? getGlobalQueries({
          preview: false,
        })
      : []),
  ])

  const handleResponse = (result, index) => {
    if (result.status === 'rejected') {
      console.error('Query failed: ', result.reason)
      console.error(`responses[${index}]:`, result)
      return null
    }
    return result.value
  }

  return responses.map(handleResponse)
}

const formatQueries = async ({
  resolvedData,
  docQueries,
  withGlobals = true,
}) => {
  const { data = null, queries = null } = resolvedData
    .slice(0, docQueries.length)
    .reduce(
      (obj, response, index) => {
        const { query, params = null } = docQueries[index] || {}
        if (!query) return obj
        return {
          data: [...obj.data, response],
          queries: [...obj.queries, { query, params }],
        }
      },
      { data: [], queries: [] }
    )

  const global = withGlobals
    ? formatGlobalQueries(resolvedData.slice(docQueries.length))
    : undefined

  return { data, queries, ...(withGlobals ? { global } : {}) }
}

export const runQueries = async (_docQueries, withGlobals = true) => {
  const docQueries = Array.isArray(_docQueries) ? _docQueries : [_docQueries]
  const resolvedData = await resolveQueries({ docQueries, withGlobals })

  return formatQueries({ resolvedData, docQueries, withGlobals })
}

export default runQueries
