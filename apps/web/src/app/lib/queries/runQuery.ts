import type { QueryParams } from './query';
import query from './query'

const runQuery = async (_query: string, params: QueryParams = {}) =>
  await query(_query, params).data

export default runQuery
