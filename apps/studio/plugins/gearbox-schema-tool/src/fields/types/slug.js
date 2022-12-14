import field from '../field'

export const slug = ({
  required = true,
  minLength = 4,
  maxLength = 96,
  description = 'Leave blank to autofill.',
  options = {
    source: 'title',
  },
  ...props
} = {}) => {
  const name = 'slug'
  const { source } = options

  return field(name, {
    required,
    validation: (Rule) => Rule.custom(() => true),
    description,
    options: {
      source,
      maxLength,
      minLength,
    },
    ...props,
  })
}

export default slug
