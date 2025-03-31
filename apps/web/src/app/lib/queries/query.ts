import type { Params } from '@types'
import getClient from 'client'

export interface QueryParams {
  params?: Params
  preview?: boolean
}

export type QueryType = {
  data: Promise<any>
  params?: Params
  preview?: boolean
  query: string
}

const query = (
  query: string,
  { params, preview = false }: QueryParams = {}
): QueryType => {
  const client = getClient({ preview })

  return {
    data: client.fetch(query, params),
    params,
    preview,
    query,
  }
}

export default query
