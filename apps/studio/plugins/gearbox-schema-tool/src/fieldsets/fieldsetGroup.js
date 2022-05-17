export const fieldsetGroup = (fieldset, fields = []) =>
  fields.map((field) => ({ ...field, fieldset }))

export default fieldsetGroup
