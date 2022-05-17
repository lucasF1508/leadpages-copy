import React, { useRef, useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import useFormValidation from '@hooks/useFormValidation'
import { FormField } from '@components/Form'
import { $Input } from '@components/Form/Inputs'
import {
  InputSelectStylesOverrides,
  InputSelectOption,
  InputSelectIcon,
} from '../InputSelect'

const SelectField = ({
  name,
  label,
  type,
  required,
  errorMessage,
  choices,
  placeholder,
  ...props
}) => {
  const ref = useRef()
  const { control, parseChoices } = useFormContext()
  const [options] = useState(parseChoices(choices))
  const rules = useFormValidation({ type, required, errorMessage })

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
          <$Input
            as="div"
            type={type}
            css={{
              p: 0,
            }}
          >
            <ReactSelect
              ref={ref}
              components={{
                DropdownIndicator: null,
                IndicatorSeparator: null,
                Option: InputSelectOption,
              }}
              styles={InputSelectStylesOverrides}
              options={options}
              placeholder={placeholder}
              value={options.find((choice) => choice.value === field.value)}
              onChange={({ value }) => field.onChange(value)}
              openMenuOnFocus
            />
            <InputSelectIcon />
          </$Input>
        </FormField>
      )}
    />
  )
}

export default SelectField
