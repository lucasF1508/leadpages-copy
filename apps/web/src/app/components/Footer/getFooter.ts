import { query } from "@/lib/queries"

const footerQuery = `*[_type == 'footer'] | order(_updatedAt desc) [0]`

export const getFooter = async (preview = false) => {
  const footer = await query(footerQuery, {
    preview,
  }).data || {}

  return footer
}