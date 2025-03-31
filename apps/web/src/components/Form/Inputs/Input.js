/* eslint-disable perfectionist/sort-objects */

import React, { forwardRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { styled } from '@design'
import useFormValidation from '@hooks/useFormValidation'

export const $Input = styled('input', {
  position: 'relative',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
  bc: 'transparent',
  type: 'input',
  outline: 0,
  appearance: 'none',
  caretColor: '$brand',
  resize: 'none',
  border: 'none',

  '&::placeholder': {
    opacity: 1,
    type: 'input',
  },

  variants: {
    component: {
      emailSignUp: {
        flex: 1,
        type: 'base',
        padding: '$1_5 $2_5',
        borderTopLeftRadius: '$button',
        borderBottomLeftRadius: '$button',
        border: '3px solid $colors$primary',
        boxSizing: 'border-box',
        color: '$input',
        caretColor: '$primary',

        '&::placeholder': {
          color: '$placeholder',
          type: 'base',
        },

        '@<420': {
          width: '100%',
        },
      },
    },
  },
})

const Input = forwardRef(
  (
    {
      label,
      name,
      type,
      required,
      errorMessage,
      placeholder,
      component,
      useValidation = true,
      ...props
    },
    ref
  ) => {
    const rules =
      useValidation && useFormValidation({ type, required, errorMessage })
    const { control } = useFormContext()

    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <$Input
            {...field}
            as={type === 'textarea' ? 'textarea' : undefined}
            component={component}
            label={label}
            placeholder={placeholder}
            ref={ref}
            type={type}
            {...props}
          />
        )}
        rules={rules}
      />
    )
  }
)

export default Input
