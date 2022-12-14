import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import { filterDuplicateByKey } from '../utils'
import maybeMerge from './maybeMerge'
import mapItem from './mapItem'

export const mapData = ({ data, mapping = [] }) => {
  if (isEmpty(mapping)) return []

  const documents = []
  const categories = []

  data.forEach((dataItem) => {
    const doc = mapping.reduce((result, map) => {
      const { from, to: toOrg, processing } = map

      if (!from || !toOrg) return result

      const [to] = toOrg.split('::')
      const mappedItem = mapItem(get(dataItem, from), map)

      if (!mappedItem) return result

      const item = maybeMerge({ to, processing, result, item: mappedItem })

      if (processing === 'category') {
        categories.push(
          ...mappedItem[to].map(({ name, parent }) => ({ name, parent }))
        )
      }

      return { ...result, ...item }
    }, {})

    documents.push(doc)
  })

  return [documents, filterDuplicateByKey(categories, 'name')]
}

export default mapData
