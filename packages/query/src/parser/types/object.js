import parser from '../parser'

export const object = (name, type) => {
  const { fields = [] } = type
  const obj = parser(fields).reduce(
    (object, field) => ({
      ...object,
      ...field,
    }),
    {
      '...': true,
    }
  )

  return name ? { [name]: obj } : obj
}
