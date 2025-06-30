/* eslint-disable no-console */
// @ts-expect-error - no types
import sanityImport from '@sanity/import'
import { transferClients } from '@src/client'
import { queueMappers } from '@src/utils/queueMappers'

const {from, to} = transferClients

const types = [
  'template',
]

const migrateDocs = async () => {
  const data = await from.fetch(`*[_type in $types]`, {
    types,
  })

  const docs = queueMappers(data)

  sanityImport(docs, {
    client: to,
    operation: 'createOrReplace',
  })
    .then(({numDocs, warnings}: {
      numDocs: number
      warnings: string[]
    }) => {
      console.log('Imported %d documents', numDocs)
      console.log('Warnings:', warnings)
      // Note: There might be warnings! Check `warnings`
    })
    .catch((err: Error) => {
      console.error('Import failed: %s', err.message)
    })
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
