import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { setIfMissing } from 'part:@sanity/form-builder/patch-event'
import { FormBuilderInput } from '@sanity/form-builder/lib/FormBuilderInput'
import FormField from 'part:@sanity/components/formfields/default'
import styles from '../styles/index.css'

export const fieldNames = {
  input: 'conditionsInput',
  options: 'conditionsOptions',
}

export const ConditionalFields = forwardRef((props, ref) => {
  const { type, value, level, focusPath, onFocus, onBlur } = props
  let condition = value?.condition

  const handleFieldChange = (field, fieldPatchEvent) => {
    const { onChange, type } = props
    // Whenever the field input emits a patch event, we need to make sure to each of the included patches
    // are prefixed with its field name, e.g. going from:
    // {path: [], set: <nextvalue>} to {path: [<fieldName>], set: <nextValue>}
    // and ensure this input's value exists
    onChange(
      fieldPatchEvent
        .prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }))
    )
  }

  const filterFields = (fields, condition) => {
    if (typeof condition === 'boolean') {
      return condition ? fields : []
    }

    return fields.filter((field) =>
      field.name.includes(condition) ? true : false
    )
  }

  return (
    <div ref={ref}>
      <FormField label={type.title} description={type.description}>
        {type.fields.map((field, index) => {
          const { type, name } = field

          const fields =
            name === fieldNames.input
              ? type.fields
              : name === fieldNames.options
              ? filterFields(type.fields, condition)
              : [field]

          return (
            <div styles={styles} key={`parent-${index}`}>
              {fields.map((field, i) => {
                return (
                  <div key={field.name}>
                    {index !== 0 && <br />}
                    <FormBuilderInput
                      id={field.name}
                      level={level + 1}
                      key={field.name}
                      type={field.type}
                      value={value && value[field.name]}
                      onChange={(patchEvent) =>
                        handleFieldChange(field, patchEvent)
                      }
                      path={[field.name]}
                      focusPath={focusPath}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </FormField>
    </div>
  )
})

ConditionalFields.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  level: PropTypes.number,
  value: PropTypes.shape({
    _type: PropTypes.string,
  }),
  focusPath: PropTypes.array,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}

export default ConditionalFields
