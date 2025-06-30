// @ts-nocheck
/* eslint-disable no-console */
import config from 'config'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import util from 'util'
import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'

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

migrate({
  query,
  params: {
    types: typeSet,
  },
  mappers: mapDocuments,
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
