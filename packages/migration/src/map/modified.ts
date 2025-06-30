// @ts-nocheck
/* eslint-disable no-console */
import migrate from '@src/utils/migrate'

const mapDocuments = (docs: any) => docs.reduce((patches, doc, index) => {
    const {_updatedAt, modified} = doc

    if (modified) return patches

    return [
      ...patches,
      {
        _id: doc._id,
        _rev: doc._rev,
        modified: _updatedAt,
      },
    ]
  }, [])

const typeSet = [
  'customer',
  'publisher',
  'page',
  'post',
  'categoryPost',
  'template',
  'templateCategory',
  'comparison',
  'integration',
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
