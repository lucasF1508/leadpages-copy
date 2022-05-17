import React from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { styled } from '@design'
import useFormValidation from '@hooks/useFormValidation'
import { FormField } from '@components/Form'

export const $Input = styled('input', {
  position: 'relative',
  z: '$content',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
  width: '100%',
  border: '$base',
  br: '$border',
  h: '$form$inputHeight',
  p: '0 $form$inputPaddingX',
  bc: 'transparent',
  type: 'input',
  outline: 0,
  appearance: 'none',
  caretColor: '$brand',
  resize: 'none',

  '&::placeholder': {
    opacity: 1,
    type: 'input',
    c: '$textAlt',
  },

  '&:only-child': {
    mb: 0,
  },

  '.focus-outline &:focus': {
    outline: '$form$outline',
    outlineOffset: '$form$outlineOffset',
  },

  variants: {
    type: {
      textarea: {
        h: '15rem',
        pt: '0.75rem',
      },
      select: {
        p: 0,

        '.focus-outline &:focus-within': {
          outline: '$form$outline',
          outlineOffset: '$form$outlineOffset',
        },
      },
      file: {
        d: 'flex',
        ff: 'row wrap',
        jc: 'flex-start',
        ai: 'center',
        cursor: 'pointer',

        '& input': {
          display: 'none',
        },
      },
    },
  },
})

const Input = ({
  label,
  name,
  type,
  required,
  errorMessage,
  defaultValue = '',
  placeholder,
  ...props
}) => {
  const { control } = useFormContext()
  const rules = useFormValidation({ type, required, errorMessage })
  const {
    field: { ref, ...inputProps },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue,
    rules,
  })

  return (
    <FormField
      required={required}
      label={label}
      name={name}
      type={type}
      fieldState={fieldState}
      {...props}
    >
      <$Input
        {...inputProps}
        ref={ref}
        as={type === 'textarea' ? 'textarea' : undefined}
        label={label}
        type={type}
        placeholder={placeholder}
      />
    </FormField>
  )
}

export default Input
