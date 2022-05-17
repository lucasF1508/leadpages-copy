import { getParserConfig } from '../config'
import mapConditions from '../utils/mapConditions'
import mapFieldConditionsBy from '../utils/mapFieldConditionsBy'
import defaultFields from '../primitives/components'

const {
  fields = defaultFields,
  conditions,
  types = (value) => value,
} = getParserConfig('components')

export const components = (name, type) => {
  const typesOf = types(type.of)

  return {
    [`${name}[]`]: {
      ...fields,
      ...mapFieldConditionsBy(typesOf, '_type', { '...': true }),
      ...mapConditions(conditions),
    },
  }
}
