import {findPath} from './findPaths'
import {SanityDocument} from '@sanity/client'
import {uuid} from '@sanity/uuid'

export const deepUpdateKeys = (doc: SanityDocument, propertyName: string = '_key') => {
  const paths = findPath(doc, (k, v) => typeof v === 'object' && propertyName in v)
  const indexArray = paths.map((path) => path.split(/\.|\[|\].?/).filter(Boolean))

  indexArray.forEach((indexes) => {
    const lastIndexPosition = indexes.length - 1

    indexes.reduce((prev, curr, position) => {
      if (position === lastIndexPosition) {
        prev[curr][propertyName] = uuid()
      }

      return prev[curr]
    }, doc)
  })

  return doc
}
