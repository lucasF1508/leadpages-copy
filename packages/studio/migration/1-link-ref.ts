// @ts-nocheck
/* eslint-disable no-console */
// Taken from https://www.sanity.io/schemas/migrate-plain-text-field-to-portable-text-a05f0300
// To run, navigate to the studio folder and run:
// sanity exec migration/1-link-ref.ts --with-user-token
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
  // Condition should only be internal to not overwrite external links
  const paths = findPaths(
    docs,
    (key, value) => value?.condition && value?.condition === 'internal' && value?.page
  )

  return docs.reduce((patches, doc, index) => {
    const components = paths[index].reduce((acc, path) => {
      const link = get(doc, path)

      // this is a doc (what the link is linking to)
      const to = docs.find((refDoc) => link.page._ref === refDoc._id)

      // if no path is found, is weird, bail
      if (!to?.path) {
        console.log('Found Document with reference that should have a path', doc?._id, path)
        return
      }

      // attach path to link (url)
      return {
        ...acc,
        [`${path}.url`]: to.path,
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

export const typeSet = [
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
  'cta',
  'seoSite',
  'publisher',
  'pageArchive',
  'template',
]

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

  console.log(`Migration complete. ${patches.length} link patches commited`)
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
