import { getParserConfig } from '../config'
import mapConditions from '../utils/mapConditions'
import defaultFields from '../primitives/reference'

const { fields = defaultFields, conditions } = getParserConfig('reference')

export const reference = (name) => {
  const object = {
    ...fields,
    ...mapConditions(conditions),
  }

  return name ? { [name]: object } : object
}
