// @ts-nocheck
/* eslint-disable no-console */
// Taken from https://www.sanity.io/schemas/migrate-plain-text-field-to-portable-text-a05f0300
// To run, navigate to the studio folder and run:
// sanity exec migration/3-lottie-data.ts --with-user-token

import {getCliClient} from 'sanity/cli'
import util from 'util'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import findPaths from '../utils/findPaths'
import {buildPatches, mergePatches, batchCommit} from '../utils/batchCommit'

const client = getCliClient().withConfig({apiVersion: '2021-06-15'})
const query = `*[_type == 'sanity.fileAsset' && extension == 'json'] {
  _id,
  url,
  width,
  height,
  frameRate,
  frames,
  animationName,
  "references": *[references(^._id)]
}`

const mapDocuments = (assets) =>
  assets
    .map((asset) => {
      const _docs = asset.references
      const paths = findPaths(_docs, (key, value) => value?.asset?._ref === asset?._id)

      return asset.references.reduce((patches, doc, index) => {
        const components = paths[index].reduce((acc, path) => {
          const component = get(doc, path)

          const {url, width, height, frameRate, frames, animationName} = asset

          return {
            ...acc,
            [path]: {
              ...component,
              ...(url ? {url} : {}),
              ...(width ? {width} : {}),
              ...(height ? {height} : {}),
              ...(frameRate ? {frameRate} : {}),
              ...(frames ? {frames} : {}),
              ...(animationName ? {animationName} : {}),
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

const migrateDocs = async () => {
  const data = await client.fetch(query)
  const assets = data.filter(({references}) => references?.length > 0)

  const mapDocsSet = mapDocuments(assets)
  const patches = mergePatches(buildPatches(mapDocsSet))

  await batchCommit({
    patches,
    client,
  })
  // console.log(util.inspect(patches, false, null, true /* enable colors */))
  console.log(`Migration complete. ${patches.length} lottie updates commited`)
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
