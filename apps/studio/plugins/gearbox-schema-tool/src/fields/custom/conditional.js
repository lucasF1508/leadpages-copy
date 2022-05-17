import * as F from '../../fields'

export const conditional = (
  conditionTitle,
  { conditions, fields = [], preview = {}, ...props } = {}
) => {
  const { select = {} } = preview
  const inputList = []
  const optionsFields = []

  Object.keys(conditions).forEach((condition) => {
    if (!conditions[condition]) return

    inputList.push(condition)

    conditions[condition].forEach((field) => {
      optionsFields.push({
        ...field,
        hidden: ({ parent }) => parent?.condition !== condition,
      })
    })
  })

  const selectFields = optionsFields.reduce(
    (object, field) => ({
      ...object,
      [field.name]: field.name,
    }),
    {
      condition: 'condition',
    }
  )

  const conditionalPreview = {
    ...preview,
    select: {
      ...selectFields,
      ...select,
    },
  }

  return F.object({
    ...props,
    as: null,
    fields: [
      F.radio(inputList, {
        title: conditionTitle,
        name: 'condition',
      }),
      ...optionsFields,
      ...fields,
    ],
    preview: conditionalPreview,
  })
}

export default conditional
