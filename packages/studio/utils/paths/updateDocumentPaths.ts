import type {ToastContextValue} from '@sanity/ui'
import type {SanityClient} from 'sanity'
import updateDocsWithArchive from './updateDocsWithArchive'
import updateReferencedPaths from './updateReferencedPaths'

interface updateDocumentPathsProps {
  client: SanityClient
  id: string
  path: string
  prevPath?: string
  archiveOf?: string
  toast: ToastContextValue
}

const updateDocumentPaths = async ({
  client,
  id,
  path,
  prevPath,
  archiveOf,
  toast,
}: updateDocumentPathsProps) => {
  if (!prevPath || path === prevPath) {
    return
  }

  await Promise.all([
    updateReferencedPaths({client, id, toast, path, prevPath}),
    updateDocsWithArchive({client, toast, archiveOf, path}),
  ])
}

export default updateDocumentPaths
