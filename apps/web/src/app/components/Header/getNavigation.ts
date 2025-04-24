import { query } from "@/lib/queries"

const navigationQuery = `*[_type == 'navigation' && slug.current == 'primary-navigation'] | order(_updatedAt desc) [0]`

export const getNavigation = async (preview = false) => {
  const navigation = await query(navigationQuery, {
    preview,
  }).data || {}

  return navigation
}