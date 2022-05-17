import field from '../field'
import { autofill } from '../../validation'

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
  const source = options.source

  return field(name, {
    required,
    validation: autofill({ name, source }),
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
