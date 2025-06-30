// @ts-nocheck
/* eslint-disable no-console */
import config from 'config'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'

const mapDocuments = (docs: any) => {
  // Condition should only be internal to not overwrite external links
  const paths = findPaths(docs, (key, value) => value?.condition === 'external' && value?.page)

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