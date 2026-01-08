import getClient from 'client'

const query = (groq, { preview = false, params, useCdn } = {}) => {
  // Allow overriding CDN usage (useful for pricing page to bypass cache)
  const client = getClient({ preview, config: useCdn !== undefined ? { useCdn } : undefined })

  return {
    data: client.fetch(groq, params),
    query: groq,
    params,
    preview,
  }
}

export default query
