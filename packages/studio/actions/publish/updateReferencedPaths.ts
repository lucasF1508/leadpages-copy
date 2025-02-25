import findPaths from '@/utils/findPaths'
import {SanityClient, SanityDocument} from 'sanity'
import {ToastContextValue} from '@sanity/ui'
import {buildPatches, batchCommit, BuildPatchesDocs} from '@/utils/batchCommit'

export const getReferencedDocuments = async ({client, id}: {client: SanityClient; id: string}) =>
  client.fetch(`
    *[references('${id}')]
  `)

export const buildLinkPatches = ({
  docs,
  path,
  id,
}: {
  docs: SanityDocument[] | undefined
  path: string
  id: string
}) => {
  if (!docs?.length) return []

  const paths = findPaths(
    docs,
    (key: string, value: any) => value?.page?._ref === id && value?.condition === 'internal'
  )

  return buildPatches(
    paths.reduce<BuildPatchesDocs[]>((acc, links, index) => {
      if (!links.some((link) => link.length)) return acc

      return [
        ...acc,
        {
          _id: docs[index]._id,
          _rev: docs[index]._rev,
          ...links.reduce((obj, link) => ({...obj, [`${link}.url`]: path}), {}),
        },
      ]
    }, [])
  )
}

export const updateReferencedPaths = async ({
  client,
  id,
  toast,
  path,
}: {
  client: SanityClient
  toast: ToastContextValue
  id: string
  path: string
}) => {
  const docs = await getReferencedDocuments({client, id})

  if (!docs.length) return undefined
  const isSingular = docs.length === 1

  toast.push({
    title: `Path updated reference link${
      isSingular ? '' : 's'
    } found. Do not close browser or navigate away.`,
    description: `${docs.length} document${isSingular ? '' : 's'} will be updated.`,
    status: 'warning',
  })

  const patches = buildLinkPatches({docs, path, id})

  await batchCommit({patches, client, toast})

  toast.push({
    title: `Referenced link${isSingular ? '' : 's'} updated.`,
    status: 'success',
  })
}

export default updateReferencedPaths
