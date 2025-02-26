// @ts-nocheck
/* eslint-disable no-console */
// Taken from https://www.sanity.io/schemas/migrate-plain-text-field-to-portable-text-a05f0300
// To run, navigate to the studio folder and run:
// sanity exec migration/7-link-external.ts --with-user-token
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
  const paths = findPaths(docs, (key, value) => value?.condition === 'external' && value?.page)

  console.log(
    'test',
    paths.filter((path) => path.length > 0)
  )

  return docs.reduce((patches, doc, index) => {
    const components = paths[index].reduce((acc, path) => {
      const link = get(doc, path)

      if (!link?.page?._ref) {
        console.log('Found', link, path, doc.title)
      }

      return {
        ...acc,
        [`${path}.page`]: null,
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

  // console.log(util.inspect(patches, {showHidden: false, depth: null}))

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
