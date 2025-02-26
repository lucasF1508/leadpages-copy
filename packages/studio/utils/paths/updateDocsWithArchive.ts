import {SanityClient, SanityDocument} from 'sanity'
import {buildPatches, mergePatches, batchCommit} from '@/utils/batchCommit'
import {ToastContextValue} from '@sanity/ui'
import {buildLinkPatches} from './patches'

interface UpdateDocsWithArchiveProps {
  client: SanityClient
  toast: ToastContextValue
  archiveOf?: string
  path: string
}

interface fetchedDocs extends SanityDocument {
  references?: SanityDocument[]
}

export const updateDocsWithArchive = async ({
  client,
  toast,
  archiveOf,
  path,
}: UpdateDocsWithArchiveProps) => {
  if (!archiveOf) return

  const docs: fetchedDocs[] = await client.fetch(`
    *[_type == '${archiveOf}'] {
      _rev,
      _id,
      path,
      slug,
      "references": *[references(^._id)]
    }
  `)

  if (!docs.length) return
  const isSingular = docs.length === 1

  toast.push({
    title: `Slug update detected on archive page. Do not close browser or navigate away this could take a few mins. Updating paths and references, for type of ${archiveOf}.`,
    status: 'warning',
  })

  const relativeLinks = docs
    .reduce((acc, doc) => {
      if (!doc?.references?.length) return acc

      return [
        ...acc,
        buildLinkPatches({
          docs: doc.references,
          path: `${path}/${doc?.slug?.current}`,
          id: doc._id,
        }),
      ]
    }, [] as ReturnType<typeof buildLinkPatches>[])
    .flat()

  const patches = mergePatches([
    ...buildPatches(
      docs.map((doc) => ({
        _id: doc._id,
        _rev: doc._rev,
        path: `${path}/${doc?.slug?.current}`,
      }))
    ),
    ...relativeLinks,
  ])

  toast.push({
    title: `Building operations for documents & references...`,
    description: `${patches.length} operation${isSingular ? '' : 's'} required.`,
    status: 'warning',
  })

  try {
    await batchCommit({patches, client, toast, limit: 50})
    toast.push({
      title: `Document path${isSingular ? '' : 's'} updated.`,
      status: 'success',
    })
  } catch (error: any) {
    console.error(error)
    toast.push({
      title: `There was an issue with the operations. See console for more information.`,
      description: error?.message,
      status: 'error',
    })
  }
}

export default updateDocsWithArchive
