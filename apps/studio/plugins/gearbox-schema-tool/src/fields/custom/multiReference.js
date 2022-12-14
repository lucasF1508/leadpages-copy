import { multiReferenceSchema } from 'part:gearbox-multi-references/multi-references'

export const multiReference = (types, { name, options, ...props } = {}) => {
  const typesArray = Array.isArray(types) ? types : [types]
  const fieldName = name || typesArray[0]

  return multiReferenceSchema
    ? { ...props, ...multiReferenceSchema({ name: fieldName, types, options }) }
    : {}
}

export default multiReference
