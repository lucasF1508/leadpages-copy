import { getParserConfig } from '../config'
import mapConditions from '../utils/mapConditions'
import defaultFields from '../primitives/reference'

const {
  fields = defaultFields,
  conditions,
  filter = () => false,
} = getParserConfig('reference')

export const reference = (name, type) => {
  const object = {
    ...fields,
    ...mapConditions(conditions),
  }

  return (
    filter(name, type) ||
    (name
      ? {
          [`${name}->`]: object,
        }
      : object)
  )
}
