import { query } from "@/lib/queries"

const websiteBannerQuery = `*[_type == 'websiteBanner'][0] {
  enabled,
  text,
  "link": link[] {
    ...,
    condition,
    url,
    label,
    linkStyle,
    hasIcon,
    "page": page-> {
      _id,
      _type,
      "slug": slug.current,
      "path": path
    }
  }
}`

export const getWebsiteBanner = async (preview = false) => {
  const banner = await query(websiteBannerQuery, {
    preview,
  }).data || {}

  return banner
}

