import type {ResolveProductionUrlContext, SanityDocumentLike} from 'sanity'
import sanityConfig from 'config'

export const getPreviewUrl = (doc: SanityDocumentLike) => {
  const params = new URLSearchParams()
  params.set('preview', 'true')
  params.set('dataset', import.meta.env.SANITY_STUDIO_API_DATASET)
  params.set('secret', import.meta.env.SANITY_STUDIO_PREVIEW_SECRET)

  if (doc?.slug?.current) {
    params.set('slug', doc.slug.current)
  }

  if (doc?.path) {
    params.set('path', doc.path)
  }

  if (doc?._type) {
    params.set('type', doc._type)
  }

  const host =
    window.location.origin == 'http://localhost:3333'
      ? 'http://localhost:3000'
      : window.location.origin

  return `${host}/api/preview?${params}`
}

export const getPreviewPaneUrl = async (
  prev: string | undefined,
  context: ResolveProductionUrlContext
) => {
  if (!context?.document) return undefined

  const {document} = context
  const {_type} = document
  const pageTemplates = sanityConfig?.studio?.docTypes

  if (pageTemplates.includes(_type)) {
    const url = getPreviewUrl(document)
    return url
  }
}
