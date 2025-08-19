/* eslint-disable no-console */
// @ts-expect-error - no types
import { SanityDocument } from "@sanity/client"
import sanityImport from '@sanity/import'
import { transferClients } from '@src/client'
import mapAssetRef from '@src/map/map-asset-ref'
import mapPage from '@src/map/map-page'
import { queueMappers } from '@src/utils/queueMappers'
import inquirer from 'inquirer'
import omit from 'lodash/omit'
import util from 'util'

const {from, to} = transferClients

const operation = 'createOrReplace'
const expected = 'yes'
const types = [
  'templateSettings',
]

const mapRemoveCta = (docs: SanityDocument[]) => docs.map(doc => omit(doc, 'cta'))

const migrateDocs = async () => {
  const data = await from.fetch(`*[_type in $types && !(_id in path('drafts.**'))]`, {
    types
  })

  const docs = await queueMappers(
    data,
    mapAssetRef,
    mapRemoveCta,
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
