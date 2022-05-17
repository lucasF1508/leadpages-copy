import field from '../field'

export const reference = (types, { name, ...props } = {}) => {
  const typesArray = Array.isArray(types) ? types : [types]
  const fieldName = name ? name : typesArray[0]

  return field('reference', {
    name: fieldName,
    to: typesArray.map((type) => ({ type })),
    ...props,
  })
}

export default reference
