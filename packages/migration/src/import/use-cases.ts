/* eslint-disable no-console */
// @ts-expect-error - no types
import sanityImport from '@sanity/import'
import { transferClients } from '@src/client'
import mapAssetRef from '@src/map/map-asset-ref'
import mapPage from '@src/map/map-page'
import { queueMappers } from '@src/utils/queueMappers'
import inquirer from 'inquirer'

const {from, to} = transferClients

const operation = 'createOrReplace'
const expected = 'yes'
const types = [
  'page',
]

const migrateDocs = async () => {
  const data = await from.fetch(`*[_type in $types && path in $paths]`, {
    paths: [
      "/use-cases/small-business-websites",
      "/use-cases/demand-capture",
      "/use-cases/email-marketing",
      "/use-cases/social-media",
      "/use-cases/paid-ads",
      "/use-cases/search-engine-marketing",
      "/use-cases/ppc",
    ],
    types
  })

  const docs = await queueMappers(
    data,
    mapAssetRef,
    mapPage,
  )

  const { confirmation } = await inquirer.prompt([
    {
      message: `⚠️  This will ${operation} documents of types [${types}] from - "${from.config().projectId}" dataset: "${from.config().dataset}" to "${to.config().projectId}" dataset: "${to.config().dataset}".\n To confirm, type "${expected}":`,
      name: 'confirmation',
      type: 'input',
      validate: (input) => input === expected || `You must type "${expected}" to confirm.`,
    },
  ])

  if (confirmation !== expected) {
    console.log('Migration cancelled. 🚫')
    return
  }

  sanityImport(docs, {
    client: to,
    operation,
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
