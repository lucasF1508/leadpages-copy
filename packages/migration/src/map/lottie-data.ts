// @ts-nocheck
/* eslint-disable no-console */
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import batchCommit, {buildPatches, mergePatches} from '@gearbox-built/bolts'
import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'

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

          const {animationName, frameRate, frames, height, url, width} = asset

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

migrate({
  query,
  mappers: mapDocuments,
}).catch((err) => {
  console.error(err)
  process.exit(1)
})