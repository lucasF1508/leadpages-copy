import type { Params } from '@types'
import getClient from 'client'

export interface QueryParams {
  params?: Params
  preview?: boolean
  useCdn?: boolean
}

export type QueryType = {
  data: Promise<any>
  params?: Params
  preview?: boolean
  query: string
}

const query = (
  query: string,
  { params, preview = false, useCdn }: QueryParams = {}
): QueryType => {
  const client = getClient({
    // @ts-expect-error Better typing for client required
    config: {
      dataset: process.env.SANITY_STUDIO_API_DATASET,
      ...(useCdn !== undefined && { useCdn }),
    },
    preview
  })

  return {
    data: client.fetch(query, params),
    params,
    preview,
    query,
  }
}

export default query
