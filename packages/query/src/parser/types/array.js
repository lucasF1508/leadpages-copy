import { getParserConfig } from '../config'
import { parseField } from '../parser'
import mapConditions from '../utils/mapConditions'

const {
  fields = {},
  conditions,
  filter = () => false,
} = getParserConfig('array')

export const array = (name, type = { of: [] }) => {
  const [field] = type?.of
  const isReference = [field?.name, field?.type?.name].includes('reference')
  const fieldName = isReference ? `${name}[]->` : `${name}[]`

  let parsedFields = ''
  if (type?.of?.length === 1) {
    parsedFields = parseField({
      ...field,
      type: field,
      name: false,
    })
  } else {
    const arrayFields =
      type?.of
        .map(({ name: fieldName, ...arrayField }) => ({
          [fieldName]: parseField({
            ...arrayField,
            type: arrayField,
            name: false,
          }),
        }))
        .reduce((obj, field) => ({ ...obj, ...field }), {}) || {}

    parsedFields = mapConditions({
      _type: { ...arrayFields },
    })
  }

  return filter(name, type) || ['string'].includes(field?.jsonType)
    ? { [fieldName]: true }
    : {
        [fieldName]: {
          '...': true,
          ...fields,
          ...parsedFields,
          ...mapConditions({
            ...conditions,
          }),
        },
      }
}
