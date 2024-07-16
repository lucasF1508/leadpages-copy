import { getGlobalQueries, formatGlobalQueries } from './getGlobalQueries'

export const runQueries = async (
  _docQueries,
  withGlobals = true,
  preview = false
) => {
  const docQueries = Array.isArray(_docQueries) ? _docQueries : [_docQueries]
  const globalQueries = await getGlobalQueries(preview, true)

  const responses = await Promise.allSettled([
    ...docQueries,
    ...(withGlobals ? globalQueries : []),
  ])

  const resolvedData = responses.map(({ status, reason, value }, index) => {
    if (status !== 'fulfilled') {
      console.error('Query failed: ', reason)
      console.error(`responses[${index}]:`, responses[index])
    }

    return value
  })

  const { data = null, queries = null } = resolvedData
    .slice(0, docQueries.length)
    .reduce(
      (obj, item) => {
        const { data: pageData, query, params = null } = item || {}

        return {
          data: [...obj.data, pageData],
          queries: [...obj.queries, { query, params }],
        }
      },
      { data: [], queries: [] }
    )

  const global = formatGlobalQueries(resolvedData.slice(docQueries.length))

  return { data, queries, ...(withGlobals ? { global } : {}) }
}

export default runQueries
