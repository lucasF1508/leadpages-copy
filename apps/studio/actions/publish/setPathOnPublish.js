import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
import sanityClient from 'part:@sanity/base/client'

const templateTypes = getTemplateTypes()

const client = sanityClient.withConfig({
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
})

const getDoctype = (isCategory, type) =>
  isCategory ? type.replace('category', '').toLowerCase() : type

export const setPathOnPublish = async (
  patch,
  { id, type: typeOrg, draft, slug }
) => {
  const isCategory = typeOrg.includes('category')
  const type = getDoctype(isCategory, typeOrg)
  const { parent } = draft

  if (!templateTypes?.includes(type)) {
    return null
  }

  const basePage = await client.fetch(`
    *[!(_id in path('drafts.**')) && (archiveOf == '${type}' || _id == '${parent?._ref}')][0] {
      "slug": slug.current,
      path,
    }
  `)
  let path = `/${slug || draft?.slug?.current}`

  if (basePage) {
    path = isCategory
      ? `${basePage.path || `/${basePage.slug}`}/category${path}`
      : `${basePage.path || `/${basePage.slug}`}${path}`
  }

  patch.execute([{ set: { path } }])

  return path
}

export default setPathOnPublish
