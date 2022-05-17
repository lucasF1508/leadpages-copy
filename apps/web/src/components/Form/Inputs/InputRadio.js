import React, { useState } from 'react'
import { styled } from '@design'
import { useFormContext, Controller } from 'react-hook-form'
import * as RadioGroupPrimitives from '@radix-ui/react-radio-group'
import useFormValidation from '@hooks/useFormValidation'
import { FormField } from '@components/Form'

const $RadioGroup = styled(RadioGroupPrimitives.Root, {
  d: 'flex',
  gap: '$3',
})

const $RadioOption = styled('div', {
  d: 'flex',
  jc: 'center',
  ai: 'center',
  gap: '$1',
})

const $RadioButton = styled(RadioGroupPrimitives.Item, {
  all: 'unset',
  bc: 'white',
  w: '$space$3',
  h: '$space$3',
  br: '100%',
  bs: '$s',
  cursor: 'pointer',
  '&:hover': { bc: '$mauve3' },
  '&:focus': { bs: `0 0 0 2px $colors$brand` },
})

const $RadioButtonIndicator = styled(RadioGroupPrimitives.Indicator, {
  d: 'flex',
  ai: 'center',
  jc: 'center',
  w: '100%',
  h: '100%',
  position: 'relative',
  '&::after': {
    position: 'absolute',
    content: '""',
    d: 'block',
    w: '50%',
    h: '50%',
    br: '50%',
    bc: '$brand',
  },
})

const InputRadio = ({
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

  const onChange = ({ field, target }) => {
    if (field.value.includes(target)) {
      return field.onChange(field.value.filter((v) => v !== target))
    }

    return field.onChange(
      type === 'radio' ? [target] : [...field.value, target]
    )
  }

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
          <$RadioGroup
            id={name}
            type={type}
            name={name}
            onValueChange={(target) => onChange({ field, target })}
          >
            {choices &&
              choices.map((choice, choiceIndex) => {
                const id = `${name}_${choiceIndex}`

                return (
                  <$RadioOption key={id}>
                    <$RadioButton id={id} value={choice.value}>
                      <$RadioButtonIndicator />
                    </$RadioButton>
                    <label htmlFor={id}>{choice?.label}</label>
                  </$RadioOption>
                )
              })}
          </$RadioGroup>
        </FormField>
      )}
    />
  )
}

export default InputRadio
