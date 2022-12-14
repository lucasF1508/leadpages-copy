import * as shapers from './shapers'
import mapCategoryData from './map/mapCategoryData'

const shapeItem = async (value, map) => {
  const { to: toOrg } = map
  // eslint-disable-next-line no-unused-vars
  const [to, shaping] = toOrg.split('::')

  // Shape the data as per the expected Sanity format
  // console.log('shaping:', shaping)
  const shaper = shapers[shaping]
  // if (shaping === 'blockContent') {
  //   console.log(shaper)
  // }
  const shapedValue = shaper ? await shaper(value, map) : value

  return shapedValue
}

export const shapeData = async ({ data, categoryDocs, mapping }) => {
  const shaped = await Promise.all(
    data.map(async (dataItem) => {
      const mapped = {}

      // eslint-disable-next-line no-restricted-syntax
      for (const map of mapping) {
        const { to: toOrg, processing } = map
        const [to] = toOrg.split('::')
        let item = dataItem[to]

        if (processing === 'category') {
          item = mapCategoryData(item, categoryDocs)
        }

        // eslint-disable-next-line no-await-in-loop
        const shapedItem = await shapeItem(item, map)
        mapped[to] = shapedItem
      }

      return mapped
    })
  )

  return shaped
}
