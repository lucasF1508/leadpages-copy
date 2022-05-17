export const group = (group, fields = []) =>
  fields.map((field) => ({ ...field, group }))

export default group
