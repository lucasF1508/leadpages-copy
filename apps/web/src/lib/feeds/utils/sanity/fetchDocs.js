import getClient from 'client'
import {
  feedQuery,
  feedIdsQuery,
  postQuery,
  categoryPostQuery,
  categoryQuery,
} from './feedQueries'

const client = getClient({ preview: true })

export const getFeeds = async ({ id = false }) => {
  const query = feedQuery({ id })
  return client.fetch(query, { id })
}
export const getIds = async () => client.fetch(feedIdsQuery)
export const fetchPostDocs = async () => client.fetch(postQuery)
export const fetchCategoryPostDocs = async () => client.fetch(categoryPostQuery)
export const fetchCategoryDocs = async () => client.fetch(categoryQuery)

export default getFeeds
