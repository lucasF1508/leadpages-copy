import type { ResolveProductionUrlContext, SanityDocumentLike } from 'sanity'
import sanityConfig from 'config'

const datasetEndpoints: Record<string, string> = {
  production_v3: '/preview',
  production: '/api/preview',
}

export const getPreviewUrl = (doc: SanityDocumentLike, dataset: string) => {
  const params = new URLSearchParams()
  params.set('preview', 'true')
  params.set('dataset', dataset)

  const secret = import.meta.env.SANITY_STUDIO_PREVIEW_SECRET
  if (secret) {
    params.set('secret', secret)
  }

  if (doc?.slug?.current) {
    params.set('slug', doc.slug.current)
  }

  if (doc?.path) {
    params.set('path', doc.path)
  }

  if (doc?._type) {
    params.set('type', doc._type)
  }

  // Determinar el host para el preview
  // Prioridad:
  // 1. Variable de entorno SANITY_STUDIO_PREVIEW_URL (para branches/preview deployments)
  // 2. Localhost mapping (si estamos en localhost:3333, usar localhost:3000)
  // 3. window.location.origin (fallback por defecto)
  const previewUrl = import.meta.env.SANITY_STUDIO_PREVIEW_URL
  const host = previewUrl 
    ? previewUrl.replace(/\/$/, '') // Remover trailing slash si existe
    : window.location.origin == 'http://localhost:3333'
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

  const { document, dataset } = context
  const { _type } = document

  try {
    const pageTemplates = sanityConfig?.studio?.docTypes || []

    if (pageTemplates.includes(_type)) {
      const url = getPreviewUrl(document, dataset)
      return url
    }
  } catch (error) {
    console.warn('Error getting preview URL:', error)
    return undefined
  }
}
