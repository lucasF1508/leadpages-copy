import parser from '../parser'
import mapConditions from './mapConditions'

export const mapFieldConditionsBy = (
  fields = {},
  key = '_type',
  base = { '...': true }
) => {
  const parsedFields = parser(fields)
    .filter((object) => {
      const [key] = Object.keys(object)
      return object[key] !== key && key !== '...'
    })
    .reduce(
      (object, field) => ({
        ...object,
        ...field,
      }),
      {}
    )

  return mapConditions(
    {
      [key]: parsedFields,
    },
    base
  )
}

export default mapFieldConditionsBy
