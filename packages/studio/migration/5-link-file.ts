// @ts-nocheck
/* eslint-disable no-console */
// Taken from https://www.sanity.io/schemas/migrate-plain-text-field-to-portable-text-a05f0300
// To run, navigate to the studio folder and run:
// sanity exec migration/5-link-file.ts --with-user-token
import config from 'config'
import util from 'util'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import findPaths from '../utils/findPaths'
import {migrateDocs} from './utils'
import {getCliClient} from 'sanity/cli'
import batchCommit, {buildPatches, mergePatches} from '@/utils/batchCommit'

const client = getCliClient().withConfig({apiVersion: '2021-06-15'})

const query = `*[_type == 'sanity.fileAsset'] {
  _id,
  url
}`

const mapDocuments = (docs: any, assets: any) => {
  // Condition should only be download to not overwrite existing links
  const paths = findPaths(
    docs,
    (key, value) => value?.condition && value?.condition === 'download' && value?.file
  )

  return docs.reduce((patches, doc, index) => {
    const components = paths[index].reduce((acc, path) => {
      const link = get(doc, path)

      // update to asset with same ref._id
      const to = assets.find((refDoc) => link?.file?.asset?._ref === refDoc._id)

      // if no path is found, is weird, bail
      if (!to?.url) return

      // attach file url to link
      return {
        ...acc,
        [`${path}.url`]: to.url,
      }
    }, {})

    if (isEmpty(components)) {
      return patches
    }

    return [
      ...patches,
      {
        _id: doc._id,
        _rev: doc._rev,
        ...components,
      },
    ]
  }, [])
}

const typeSet = [
  'post',
  'integration',
  'page',
  'templateCategory',
  'navigation',
  'customer',
  'footer',
  'pageHome',
  'templateSettings',
  'inlineCTAGlobal',
  'comparison',
  'testimonial',
  'seoSite',
  'publisher',
  'pageArchive',
]

const migrateDocs = async () => {
  const assets = await client.fetch(query)
  const docs = await client.fetch(`*[_type in $types]`, {
    types: typeSet,
  })

  const mapDocsSet = mapDocuments(docs, assets)
  const patches = mergePatches(buildPatches(mapDocsSet))

  await batchCommit({
    patches,
    client,
  })

  console.log(`Migration complete. ${patches.length} link patches commited`)
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
