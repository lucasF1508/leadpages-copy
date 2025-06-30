// @ts-nocheck
/* eslint-disable no-console */
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import {client} from '@src/client'
import util from 'util'
import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'
import { withContext } from '@src/utils/withContext'

const query = `*[_type == 'sanity.imageAsset'] {
  _id,
  url,
  altText,
  "lqip": metadata.lqip,
  "references": *[references(^._id)]._id
}`
const mapDocumentsWithAssets = (assets) => {
  return (docs) => {
    return assets
      .map((asset) => {
        const findRefrencedDoc = asset.references
          .map((_id) => docs.find((doc) => doc._id === _id))
          .filter(Boolean)

        if (isEmpty(findRefrencedDoc)) {
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
                ...component,
                ...(altText ? { altText } : {}),
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
  }
}

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
  const assets = (await client.fetch(query)).filter(({ references }) => references?.length > 0)

  await migrate({
    query: `*[_type in $types]`,
    params: { types: typeSet },
    mappers: mapDocumentsWithAssets(assets),
  })
}

migrateDocs()
