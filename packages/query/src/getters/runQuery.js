import getClient from 'client'

export const runQuery = async (query, params, preview) => {
  const client = getClient({ preview })
  return client.fetch(query, params)
}

export default runQuery
