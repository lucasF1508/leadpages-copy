import React, { useState } from 'react'
import { styled } from '@design'
import { FiCheck } from '@react-icons/all-files/fi/FiCheck'
import { useFormContext, Controller } from 'react-hook-form'
import * as CheckboxPrimitives from '@radix-ui/react-checkbox'
import useFormValidation from '@hooks/useFormValidation'
import { FormField } from '@components/Form'

const $CheckboxGroup = styled('div', {
  d: 'flex',
  gap: '$3',
})

const $Checkbox = styled(CheckboxPrimitives.Root, {
  all: 'unset',
  bc: 'white',
  w: '$space$3',
  h: '$space$3',
  br: 4,
  d: 'flex',
  ai: 'center',
  jc: 'center',
  bs: '$s',
  cursor: 'pointer',
  '&:hover': { bc: '$mauve3' },
  '&:focus': { bs: `0 0 0 2px $colors$brand` },
})

const $CheckboxOption = styled('div', {
  d: 'flex',
  jc: 'center',
  ai: 'center',
  gap: '$1',
})

const $CheckboxIndicator = styled(CheckboxPrimitives.Indicator, {
  color: '$brand',
  d: 'flex',
  ff: 'column',
  jc: 'center',
  ai: 'center',
})

const InputCheckbox = ({
  name,
  label,
  type,
  required,
  defaultValue = [],
  choices: choicesRaw,
  errorMessage,
}) => {
  const { control, parseChoices } = useFormContext()
  const [choices] = useState(parseChoices(choicesRaw))
  const rules = useFormValidation({ type, required, errorMessage })

  const onChange = ({ field, isChecked, choice: { value } = {} }) =>
    field.onChange(
      isChecked
        ? [...field.value, value]
        : field.value.filter((v) => v !== value)
    )

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ fieldState, field }) => (
        <FormField
          required={required}
          label={label}
          name={name}
          type={type}
          fieldState={fieldState}
        >
          <$CheckboxGroup>
            {choices &&
              choices.map((choice, choiceIndex) => {
                const id = `${name}_${choiceIndex}`

                return (
                  <$CheckboxOption key={id}>
                    <$Checkbox
                      onCheckedChange={(isChecked) =>
                        onChange({ field, isChecked, choice })
                      }
                      defaultChecked={defaultValue.includes(choice?.value)}
                      id={id}
                      value={choice?.value}
                    >
                      <$CheckboxIndicator>
                        <FiCheck />
                      </$CheckboxIndicator>
                    </$Checkbox>
                    <label htmlFor={id}>{choice?.label}</label>
                  </$CheckboxOption>
                )
              })}
          </$CheckboxGroup>
        </FormField>
      )}
    />
  )
}

export default InputCheckbox
