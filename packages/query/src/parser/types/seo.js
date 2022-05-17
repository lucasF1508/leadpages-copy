import { getParserConfig } from '../config'
import mapConditions from '../utils/mapConditions'
import defaultFields from '../primitives/seo'

const {
  fields = defaultFields,
  conditions,
  filter = () => false,
} = getParserConfig('seo')

export const seo = (name, type) => {
  const object = {
    ...fields,
    ...mapConditions(conditions),
  }

  return filter(name, type) || (name ? { [`"${name}": `]: object } : object)
}
