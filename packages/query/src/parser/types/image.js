import { getParserConfig } from '../config'
import defaultFields from '../primitives/image'
import mapConditions from '../utils/mapConditions'

const { fields = defaultFields, conditions } = getParserConfig('image')

export const image = (name) => {
  const object = {
    ...fields,
    ...mapConditions(conditions),
  }

  return name ? { [name]: object } : object
}
