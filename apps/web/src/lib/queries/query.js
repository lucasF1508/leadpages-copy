import getClient from 'client'

const query = (groq, { preview = false, params } = {}) => {
  const client = getClient({ preview })

  return {
    data: client.fetch(groq, params),
    query: groq,
    params,
    preview,
  }
}

export default query
