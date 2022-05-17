import { getParserConfig } from '../config'
import mapConditions from '../utils/mapConditions'
import defaultFields from '../primitives/media'

const {
  fields = defaultFields,
  conditions,
  filter = () => false,
} = getParserConfig('media')

export const media = (name, type) => {
  const object = {
    ...fields,
    ...mapConditions(conditions),
  }

  return filter(name, type) || (name ? { [name]: object } : object)
}
