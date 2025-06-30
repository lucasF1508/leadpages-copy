// @ts-nocheck
/* eslint-disable no-console */
import config from 'config'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import util from 'util'
import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'

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

migrate({
  query: `*[_type in $types]`,
  params: {
    types: typeSet,
  },
  mappers: mapDocuments,
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
