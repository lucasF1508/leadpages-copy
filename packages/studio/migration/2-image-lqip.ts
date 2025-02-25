// @ts-nocheck
/* eslint-disable no-console */
// Taken from https://www.sanity.io/schemas/migrate-plain-text-field-to-portable-text-a05f0300
// To run, navigate to the studio folder and run:
// sanity exec migration/2-image-lqip.ts --with-user-token

import {getCliClient} from 'sanity/cli'
import util from 'util'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import findPaths from '../utils/findPaths'
import {buildPatches, mergePatches, batchCommit} from '../utils/batchCommit'

const client = getCliClient().withConfig({apiVersion: '2021-06-15'})
const query = `*[_type == 'sanity.imageAsset'] {
  _id,
  url,
  altText,
  "lqip": metadata.lqip,
  "references": *[references(^._id)]._id
}`

const mapDocuments = (assets, docs) =>
  assets
    .map((asset) => {
      const findRefrencedDoc = asset.references
        .map((_id) => docs.find((doc) => doc._id === _id))
        .filter(Boolean)

      // check for existence of references
      if (isEmpty(findRefrencedDoc) || !findRefrencedDoc || findRefrencedDoc.length === 0) {
        return
      }

      const paths = findPaths(findRefrencedDoc, (key, value) => value?.asset?._ref === asset?._id)

      return findRefrencedDoc.reduce((patches, doc, index) => {
        const components = paths[index].reduce((acc, path) => {
          const component = get(doc, path)
          const altText = component?.altText || asset?.altText || component?.title

          return {
            ...acc,
            [path]: {
              // moves altText data from asset to field
              ...component,
              ...(altText ? {altText} : {}),
              lqip: asset.lqip,
            },
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
    })
    .flat()

const typeSet = [
  'post',
  'integration',
  'page',
  'templateCategory',
  'navigation',
  'customer',
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
  const data = await client.fetch(query)
  const assets = data.filter(({references}) => references?.length > 0)
  // const generateTypeset = [...new Set(assets?.map(({references}) => references).flat())]
  // console.log(generateTypeset, 'generateTypeset')

  const docs = await client.fetch(`*[_type in $types]`, {
    types: typeSet,
  })

  const mapDocsSet = mapDocuments(assets, docs)
  const patches = mergePatches(buildPatches(mapDocsSet))

  await batchCommit({
    patches,
    client,
  })

  console.log(`Migration complete. ${patches.length} image patches commited`)
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
