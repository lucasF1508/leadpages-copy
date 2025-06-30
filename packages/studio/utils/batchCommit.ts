// @ts-nocheck
import type {Transaction} from '@sanity/client'
import type {ToastContextValue} from '@sanity/ui'
import type {PatchOperations, SanityClient, SanityDocument} from 'sanity'
import merge from 'deepmerge'
import groupBy from 'lodash/groupBy'
import omitBy from 'lodash/omitBy'

export type PatchItem = {
  id: string
  patch: PatchOperations
}

export type PatchesType = PatchItem[]

export type BuildPatchesDocs = Omit<Partial<SanityDocument>, '_id' | '_rev'> &
  Pick<SanityDocument, '_id' | '_rev'>

export const buildPatches = (
  docs: BuildPatchesDocs[],
  filter = (doc: Record<string, unknown>) => doc
) =>
  docs.reduce((acc, doc) => {
    if (!doc) return acc

    return [
      ...acc,
      {
        id: doc._id,
        patch: {
          // This will cause the migration to fail if any of the documents has been
          // modified since it was fetched.
          ifRevisionID: doc._rev,
          set: {
            ...filter(omitBy(doc, (v, k) => ['_id', '_rev'].includes(k))),
          },
        },
      },
    ]
  }, [] as PatchesType)

export const buildDraftPatches = (
  docs: BuildPatchesDocs[] = [],
  filter = (doc: Record<string, unknown>) => doc
) =>
  docs.reduce((acc, doc) => {
    if (!doc) return acc

    return [
      ...acc,
      {
        id: `drafts.${doc._id}`,
        create: {
          ...filter(omitBy(doc, (v, k) => ['_id', '_rev'].includes(k))),
        },
      },
    ]
  }, [] as PatchesType)

export const buildDocPatches = (
  docs: BuildPatchesDocs[] = [],
  filter = (doc: Record<string, unknown>) => doc
) =>
  docs.reduce((acc, doc) => {
    if (!doc) return acc

    return [
      ...acc,
      {
        id: doc._id,
        create: {
          ...filter(omitBy(doc, (v, k) => ['_id', '_rev'].includes(k))),
        },
      },
    ]
  }, [] as PatchesType)

export const buildDeletePatches = (docs: BuildPatchesDocs[] = []) =>
  docs.reduce((acc, doc) => {
    if (!doc) return acc

    return [
      ...acc,
      {
        id: doc._id,
        delete: {
          id: doc._id,
        },
      },
    ]
  }, [] as PatchesType)

// Merges patches with the same id into a single patch.
export const mergePatches = (patches: PatchesType): PatchesType =>
  Object.values(groupBy(patches, 'id')).reduce((acc: PatchesType, operations: PatchesType) => {
    if (operations.length === 0) return acc
    if (operations.length === 1) return [...acc, operations[0]]

    const mergedOperation = merge.all(operations) as PatchItem
    return [...acc, mergedOperation]
  }, [])

export const createTransaction = (patches: PatchesType, client: SanityClient) =>
  patches.reduce((tx, patch) => {
    if (patch.delete) return tx.delete(patch.delete.id)
    if (patch.create) return tx.createIfNotExists({_id: patch.id, ...patch.create})

    return tx.patch(patch.id, patch.patch)
  }, client.transaction())

export const commitTransaction = (tx: Transaction) => tx.commit()

export const commitPatches = async (patches: PatchesType, client: SanityClient) => {
  const transaction = createTransaction(patches, client)
  await commitTransaction(transaction)
}

export const batchCommit = async ({
  client,
  limit = 200,
  patches,
  start = 0,
  toast,
}: {
  client: SanityClient
  limit?: number
  patches: PatchesType
  start?: number
  toast?: ToastContextValue
}) => {
  const range = patches.slice(start, start + limit)
  if (!range.length) return

  if (toast) {
    toast.push({
      description:
        range.length === 1
          ? `Updating document ${start + 1}`
          : `Updating documents ${start + 1} - ${start + range.length}`,
      status: 'warning',
      title: `Batch updates in progress. Do not close browser or navigate away...`,
    })
  }

  await commitPatches(range, client)
  await batchCommit({client, limit, patches, start: start + limit, toast})
}

export default batchCommit
