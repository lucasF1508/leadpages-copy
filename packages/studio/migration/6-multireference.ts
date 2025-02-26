// @ts-nocheck
/* eslint-disable no-console */
// Taken from https://www.sanity.io/schemas/migrate-plain-text-field-to-portable-text-a05f0300
// To run, navigate to the studio folder and run:
// sanity exec migration/6-multireference.ts --with-user-token
import config from 'config'
import util from 'util'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import findPaths from '../utils/findPaths'
import {migrateDocs} from './utils'
import {getCliClient} from 'sanity/cli'
import batchCommit, {buildPatches, mergePatches} from '@/utils/batchCommit'

const client = getCliClient().withConfig({apiVersion: '2021-06-15'})

const mapDocuments = (docs: any) => {
  return docs.reduce((patches, doc, index) => {
    const {title, authorName, authorTitle} = doc

    return [
      ...patches,
      {
        _id: doc._id,
        _rev: doc._rev,
        title: authorName,
        titleSecondary: title,
      },
    ]
  }, [])
}

const typeSet = ['testimonial']

const migrateDocs = async () => {
  const docs = await client.fetch(`*[_type in $types]`, {
    types: typeSet,
  })

  const mapDocsSet = mapDocuments(docs)
  const patches = mergePatches(buildPatches(mapDocsSet))

  await batchCommit({
    patches,
    client,
  })

  console.log(`Migration complete. ${patches.length} multireference patches commited`)
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
