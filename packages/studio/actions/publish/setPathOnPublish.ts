import type {ToastContextValue} from '@sanity/ui'
import type {ConfigContext, DocumentActionProps, FieldOperationsAPI} from 'sanity'
import config from 'config'
import generatePath from '@/utils/paths/generatePath'
import updateDocsWithArchive from './updateDocsWithArchive'
import updateReferencedPaths from './updateReferencedPaths'

const pageTemplates = config?.studio?.docTypes || ['post', 'page']

interface SetPathOnPublishProps
  extends Pick<DocumentActionProps, 'draft' | 'id' | 'published' | 'type'> {
  slug?: string
}

export const setPathOnPublish = async (
  patch: FieldOperationsAPI['patch'],
  {type, draft, slug: _slug, published, id}: SetPathOnPublishProps,
  context: ConfigContext,
  toast: ToastContextValue
) => {
  const client = context.getClient({apiVersion: import.meta.env.SANITY_STUDIO_API_VERSION})
  const slug = _slug || draft?.slug?.current
  const archiveOf = draft?.archiveOf as string | undefined

  if (!pageTemplates?.includes(type) || !slug) {
    return null
  }

  const path = await generatePath({slug, type, document: draft, client})

  if (path !== published?.path) {
    await updateReferencedPaths({client, id, toast, path})

    if (archiveOf) {
      await updateDocsWithArchive({client, toast, archiveOf, path})
    }
  }

  patch.execute([{set: {path}}])

  return path
}

export default setPathOnPublish
