import query from './query'

const runQuery = async (_query, params = {}) => query(_query, params).data

export default runQuery
