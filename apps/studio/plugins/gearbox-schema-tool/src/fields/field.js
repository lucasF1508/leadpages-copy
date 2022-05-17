import camelCase from 'lodash/camelCase'
import startCase from 'lodash/startCase'
import { required } from '../validation'

/**
 * Convenience method for quickly creating Sanity schema fields
 *
 * @param {string} type - Schema type. Sets defaults based on this value.
 * @param {object} props - Schema type properties.
 * @prop {string} `as` - Render as a different schema type.
 * @prop {boolean} `required` - Sets validation for a required field.
 * @prop {function} `validation` - Sets validation. Overrides `required`
 * @returns {object}
 *
 * @see {@link https://www.sanity.io/docs/object-type object schema type docs}
 */
export const field = (
  type,
  {
    name: fieldName,
    title: fieldTitle,
    required: isRequired,
    validation,
    as,
    ...props
  } = {}
) => {
  const name = fieldName || camelCase(fieldTitle) || type
  const title = fieldTitle || startCase(name)

  return {
    name,
    title,
    validation: validation ? validation : isRequired ? required : null,
    ...props,
    type: as || type,
  }
}

export default field
