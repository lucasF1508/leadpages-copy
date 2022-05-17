import { getParserConfig } from '../config'
import mapConditions from '../utils/mapConditions'
import defaultFields from '../primitives/link'

const {
  fields = defaultFields,
  conditions,
  filter = () => false,
} = getParserConfig('link')

export const link = (name, type) => {
  const object = {
    ...fields,
    ...mapConditions(conditions),
  }

  return filter(name, type) || (name ? { [name]: object } : object)
}
