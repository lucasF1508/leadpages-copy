export const mapConditions = (conditions = {}, base = {}) =>
  Object.keys(conditions)
    .map((condition) =>
      Object.keys(conditions[condition]).map((value) => ({
        [`${condition} == "${value}" =>`]: conditions[condition][value],
      }))
    )
    .flat()
    .reduce(
      (object, field) => ({
        ...object,
        ...field,
      }),
      base
    )

export default mapConditions
