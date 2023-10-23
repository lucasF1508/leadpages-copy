import omitBy from 'lodash/omitBy'
import groupBy from 'lodash/groupBy'

export const buildPatches = (docs = [], filter = (doc) => doc) =>
  docs.reduce((acc, doc) => {
    if (!doc) return acc

    return [
      ...acc,
      {
        id: doc._id,
        patch: {
          set: {
            ...filter(omitBy(doc, (v, k) => ['_id', '_rev'].includes(k))),
          },
          // this will cause the migration to fail if any of the documents has been
          // modified since it was fetched.
          ifRevisionID: doc._rev,
        },
      },
    ]
  }, [])

export const buildDraftPatches = (docs = [], filter = (doc) => doc) =>
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
  }, [])

export const buildDeletePatches = (docs = []) =>
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
  }, [])

// Merges patches with the same id into a single patch. Expects the shape of a patch.
export const mergePatches = (patches) =>
  Object.values(groupBy(patches, 'id')).reduce((acc, operations) => {
    if (operations.length === 0) return acc
    if (operations.length === 1) return [...acc, operations[0]]

    return [
      ...acc,
      operations.reduce(
        (ops, op) => ({
          ...op,
          patch: {
            ...op.patch,
            set: {
              ...(ops?.patch?.set || {}),
              ...op.patch.set,
            },
          },
        }),
        {}
      ),
    ]
  }, [])

export const createTransaction = (patches, client) =>
  patches.reduce((tx, patch) => {
    if (patch.delete) return tx.delete(patch.delete.id)
    if (patch.create)
      return tx.createIfNotExists({ _id: patch.id, ...patch.create })

    return tx.patch(patch.id, patch.patch)
  }, client.transaction())

export const commitTransaction = (tx) => tx.commit()

export const commitPatches = async (patches, client) => {
  const transaction = createTransaction(patches, client)
  await commitTransaction(transaction)
}

export const batchCommit = async ({
  patches,
  client,
  toast = false,
  start = 0,
  limit = 200,
}) => {
  const range = patches.slice(start, start + limit)
  if (!range.length) return

  if (toast) {
    toast.push({
      title: `Batch updates in progress. Do not close browser or navigate away...`,
      description:
        range.length === 1
          ? `Updating document ${start + 1}`
          : `Updating documents ${start + 1} - ${start + range.length}`,
      status: 'warning',
    })
  }

  await commitPatches(range, client)
  await batchCommit({ patches, client, toast, start: start + limit, limit })
}

export default batchCommit
