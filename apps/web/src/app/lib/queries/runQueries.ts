import type { QueryType } from './query'
import type { Data } from '@types'
import { formatGlobalQueries, getGlobalQueries } from './globalQueries'

export interface ResolveQueriesProps {
  docQueries: [] | QueryType[]
  withGlobals?: boolean
}

export interface FormatQueriesProps {
  docQueries: [] | QueryType[]
  resolvedData: Data[]
  withGlobals?: boolean
}

const resolveQueries = async ({
  docQueries,
  withGlobals = true,
}: ResolveQueriesProps) => {
  const responses = await Promise.allSettled([
    ...(Array.isArray(docQueries) && docQueries.length > 0
      ? docQueries.map(({ data }: { data?: Promise<any> } = {}) => data)
      : []),
    ...(withGlobals
      ? getGlobalQueries({
          preview: false,
        })
      : []),
  ])

  const handleResponse = (result: PromiseSettledResult<any>, index: number) => {
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
  docQueries,
  resolvedData,
  withGlobals = true,
}: FormatQueriesProps) => {
  const { data = null, queries = null } = resolvedData
    .slice(0, docQueries.length)
    .reduce(
      (obj, data, index) => {
        const { params = null, query } = docQueries[index] || {}
        if (!query) return obj

        return {
          data: [...obj.data, data],
          queries: [...obj.queries, { params, query }],
        }
      },
      { data: [], queries: [] }
    )

  const global = withGlobals
    ? formatGlobalQueries(resolvedData.slice(docQueries.length))
    : undefined

  return { data, queries, ...(withGlobals ? { global } : {}) }
}

export const runQueries = async (
  _docQueries?: QueryType | QueryType[],
  withGlobals = true
) => {
  let docQueries: QueryType[] = []

  if (Array.isArray(_docQueries)) {
    docQueries = _docQueries
  } else if (_docQueries) {
    docQueries = [_docQueries]
  }

  const resolvedData = await resolveQueries({ docQueries, withGlobals })

  return formatQueries({ docQueries, resolvedData, withGlobals })
}

export default runQueries
