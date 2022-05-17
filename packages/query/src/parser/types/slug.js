import { getParserConfig } from '../config'
import mapConditions from '../utils/mapConditions'
import defaultFields from '../primitives/slug'

const {
  fields = defaultFields,
  conditions,
  filter = () => false,
} = getParserConfig('slug')

export const slug = (name, type) => {
  const object = {
    ...fields,
    ...mapConditions(conditions),
  }

  return filter(name, type) || (name ? { [name]: object } : object)
}
