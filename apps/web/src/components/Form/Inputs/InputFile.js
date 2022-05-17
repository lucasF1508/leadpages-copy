import React, { useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { styled } from '@design'
import useFormValidation from '@hooks/useFormValidation'
import { FiFilePlus } from '@react-icons/all-files/fi/FiFilePlus'
import { FormField } from '@components/Form'
import { $Input } from '../Inputs'

export const $InputFileLabel = styled('span', {
  c: '$textAlt',

  variants: {
    isActive: {
      true: {
        c: '$text',
      },
    },
  },
})

export const $InputFileIcon = styled('div', {
  position: 'absolute',
  top: '50%',
  right: '$2',
  w: '$space$3',
  h: '$space$3',
  mt: '-0.75rem',
  z: '$under',

  '& svg': {
    d: 'block',
    w: '100%',
    h: '100%',
    stroke: '$brand',
    strokeWidth: '1px',
  },
})

export default function InputFile({
  label = 'Upload File...',
  name,
  type,
  required,
  errorMessage,
  placeholder,
  ...props
}) {
  const [inputValue, setInputValue] = useState(label)
  const { control, trigger, clearErrors } = useFormContext()
  const rules = useFormValidation({ type, required, errorMessage })

  const onChange = ({ target, field }) => {
    if (!target.files.length) {
      setInputValue(label)
      field.onChange(undefined)
      clearErrors(name)
      trigger(name)
      return
    }

    setInputValue(target.files[0].name)
    field.onChange(target.files)
    clearErrors(name)
    trigger(name)
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ fieldState, field }) => (
        <FormField
          required={required}
          label={label}
          name={name}
          type={type}
          fieldState={fieldState}
          {...props}
        >
          <$Input type={type} htmlFor={name} as="label">
            <$InputFileLabel isActive={label !== inputValue}>
              {inputValue}
            </$InputFileLabel>
            <input
              id={name}
              type={type}
              ref={field.ref}
              placeholder={placeholder}
              onChange={({ target }) => onChange({ field, target })}
            />
            <$InputFileIcon>
              <FiFilePlus />
            </$InputFileIcon>
          </$Input>
        </FormField>
      )}
    />
  )
}
