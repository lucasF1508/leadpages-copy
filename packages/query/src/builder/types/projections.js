import parser, { fieldsToGroq } from '../../parser'
import isString from 'lodash/isString'
import isObject from 'lodash/isObject'

const findField = (fields, target) =>
  !fields
    ? false
    : fields.find(
        (field) =>
          field.name === target ||
          (field?.type?.fields && findField(field.type.fields, target))
      )

const checkRegistry = (key, value, registry) => {
  const fieldName = value === true ? key : value.split(/->|\./).pop()
  const field = findField(registry.fields, fieldName)
  const [fieldObject] = field ? parser([field]) : [{}]

  if (
    !field ||
    !/^[a-z0-9.\->]+$/.test(value) ||
    fieldObject[value] === value
  ) {
    return { [key]: value }
  }

  return {
    [`"${key}": ${value}`]: value
      .split(/->|\./)
      .reduce(
        (object, key) =>
          !isObject(object) || !(key in object) ? object : object[key],
        fieldObject
      ),
  }
}

const buildObjectProjection = (object, registry) => {
  const fields = Object.keys(object)
    .map((key) =>
      isObject(object[key])
        ? { [`"${key}":`]: buildObjectProjection(object[key], registry) }
        : checkRegistry(key, object[key], registry)
    )
    .reduce(
      (object, field) => ({
        ...object,
        ...field,
      }),
      {}
    )

  return fields
}

export const projections = (projections, registry = {}) => {
  if (!projections) return undefined

  if (!isObject(projections) && !isString(projections)) {
    console.error(
      'Query projections expect a groq string, object of groq strings or reference to the schema registry'
    )
    return undefined
  }

  if (isObject(projections)) {
    return fieldsToGroq(buildObjectProjection(projections, registry), true)
  }

  return projections
}
