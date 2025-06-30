// @ts-nocheck
/* eslint-disable no-console */
import migrate from '@src/utils/migrate'

const mapSecondary = (docs: any) => docs.reduce((patches, doc) => {
  const {title} = doc

  return [
    ...patches,
    {
      ...doc,
      _id: doc._id,
      _rev: doc._rev,
      titleSecondary: `${title}-secondary`,
    },
  ]
}, [])

const mapDocuments = (docs: any) => docs.reduce((patches, doc) => {
    const {title} = doc

    return [
      ...patches,
      {
        ...doc,
        _id: doc._id,
        _rev: doc._rev,
        title: `${title}-test`,
        titleSecondary: title,
      },
    ]
  }, [])

migrate({
  query: `*[_type in $types]`,
  params: {
    types: ['testimonial'],
  },
  mappers: [mapDocuments, mapSecondary],
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
