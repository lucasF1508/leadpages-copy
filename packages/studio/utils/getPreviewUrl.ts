import type {ResolveProductionUrlContext, SanityDocumentLike} from 'sanity'
import sanityConfig from 'config'

const datasetEndpoints: Record<string, string> = {
  production_v3: '/preview',
  production: '/preview/api',
}

export const getPreviewUrl = (doc: SanityDocumentLike, dataset: string) => {
  const params = new URLSearchParams()
  params.set('preview', 'true')
  params.set('dataset', dataset)
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

  const endpoint = datasetEndpoints[dataset] || datasetEndpoints.production_v3

  return `${host}${endpoint}?${params}`
}

export const getPreviewPaneUrl = async (
  prev: string | undefined,
  context: ResolveProductionUrlContext
) => {
  if (!context?.document) return undefined

  const {document, dataset} = context
  const {_type} = document
  const pageTemplates = sanityConfig?.studio?.docTypes

  if (pageTemplates.includes(_type)) {
    const url = getPreviewUrl(document, dataset)
    return url
  }
}
