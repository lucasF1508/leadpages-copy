// @ts-nocheck
/* eslint-disable no-console */
// Taken from https://www.sanity.io/schemas/migrate-plain-text-field-to-portable-text-a05f0300
// To run, navigate to the studio folder and run:
// sanity exec migration/0-modified.ts --with-user-token
import config from 'config'
import util from 'util'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import findPaths from '../utils/findPaths'
import {migrateDocs} from './utils'
import {getCliClient} from 'sanity/cli'
import batchCommit, {buildPatches, mergePatches} from '@/utils/batchCommit'
import buildJSON from './buildJson'

const client = getCliClient().withConfig({apiVersion: '2021-06-15'})

const mapDocuments = (docs: any) => {
  return docs.reduce((patches, doc, index) => {
    const {_updatedAt, modified} = doc

    if (modified) return patches

    return [
      ...patches,
      {
        _id: doc._id,
        _rev: doc._rev,
        modified: _updatedAt,
      },
    ]
  }, [])
}

const typeSet = [
  'customer',
  'publisher',
  'page',
  'post',
  'categoryPost',
  'template',
  'templateCategory',
  'comparison',
  'integration',
]

const migrateDocs = async () => {
  const docs = await client.fetch(`*[_type in $types]`, {
    types: typeSet,
  })

  const mapDocsSet = mapDocuments(docs)
  const patches = mergePatches(buildPatches(mapDocsSet))

  // console.log(`Found ${patches.length} documents to migrate`, patches)
  console.log(util.inspect(patches, {showHidden: false, depth: null, colors: true}))

  // buildJSON('0-modified', patches)

  await batchCommit({
    patches,
    client,
  })

  console.log(`Migration complete. ${patches.length} modified patches commited`)
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
