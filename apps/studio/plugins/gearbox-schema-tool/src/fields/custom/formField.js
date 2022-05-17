import * as F from '../../fields'

export const formField = ({
  fields = [],
  defaultFields = [
    F.string({ name: 'label', required: true }),
    F.checkbox({
      name: 'required',
      title: 'Required Field',
    }),
  ],
  ...props
} = {}) =>
  F.object({
    fields: [...defaultFields, ...fields],
    ...props,
  })

export default formField
