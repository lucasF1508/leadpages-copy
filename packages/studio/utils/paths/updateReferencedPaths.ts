import {SanityClient} from 'sanity'
import {ToastContextValue} from '@sanity/ui'
import {batchCommit} from '@/utils/batchCommit'
import {getReferencedDocuments, getChildrenDocuments} from './getters'
import {buildLinkPatches, buildChildrenPathPatches} from './patches'

export const updateReferencedPaths = async ({
  client,
  id,
  toast,
  path,
  prevPath,
}: {
  client: SanityClient
  toast: ToastContextValue
  id: string
  path: string
  prevPath: string
}) => {
  const [docs, children] = await Promise.all([
    getReferencedDocuments({client, id}),
    getChildrenDocuments({client, ids: [id]}),
  ])

  if (!docs.length) return undefined
  const isSingular = docs.length === 1

  toast.push({
    title: `Path updated reference link${
      isSingular ? '' : 's'
    } found. Do not close browser or navigate away.`,
    description: `${docs.length} document${isSingular ? '' : 's'} will be updated.`,
    status: 'warning',
  })

  let patches = buildLinkPatches({docs, path, id})
  if (children?.length) {
    patches = [...patches, ...buildChildrenPathPatches({docs: children, path, prevPath})]
  }

  await batchCommit({patches, client, toast})

  toast.push({
    title: `Referenced link${isSingular ? '' : 's'} updated.`,
    status: 'success',
  })
}

export default updateReferencedPaths
