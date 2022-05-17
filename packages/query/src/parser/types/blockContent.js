import { getParserConfig } from '../config'
import mapConditions from '../utils/mapConditions'
import mapFieldConditionsBy from '../utils/mapFieldConditionsBy'
import defaultFields from '../primitives/blockContent'

const {
  name: key = 'content',
  fields = defaultFields,
  conditions,
  filter = () => false,
  types = (value) => value,
} = getParserConfig('blockContent')

export const blockContent = (name, type) => {
  const hasFields = type?.fields?.length
  const contentFields = mapFieldConditionsBy(
    hasFields ? types(type?.fields[0].type.of) : types(type?.of),
    '_type',
    fields
  )

  const result = filter(name, type)

  return (
    result || {
      [hasFields ? name : `${name}[]`]: {
        ...(hasFields
          ? {
              [`${key}[]`]: contentFields,
            }
          : contentFields),
        ...fields,
        ...mapConditions(conditions),
      },
    }
  )
}
