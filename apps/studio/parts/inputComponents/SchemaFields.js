/* eslint-disable react/display-name */
import React, { useCallback } from 'react'
import { FormField } from '@sanity/base/components'
import { Stack, Select } from '@sanity/ui'
import { withDocument } from 'part:@sanity/form-builder'
import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'
import { useId } from '@reach/auto-id'

const SchemaFields = React.forwardRef(
  (
    {
      type,
      // value,
      // readOnly,
      // placeholder,
      markers,
      presence,
      onFocus,
      onBlur,
      onChange,
      document,
    },
    ref
  ) => {
    // Get field data
    const { feedDocType } = document?.feedOptions || {}
    const [schema] = getTemplateSchemas().filter(
      ({ name }) => name == feedDocType
    )
    const { fields } = schema || {}

    // Form input
    const inputId = useId()
    const handleChange = useCallback(
      (event) => {
        const inputValue = event.currentTarget.value
        onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
      },
      [onChange]
    )

    return (
      <Stack padding={0} space={3}>
        <FormField
          description={type.description}
          title={type.title}
          __unstable_markers={markers}
          __unstable_presence={presence}
          inputId={inputId}
        >
          <Select
            fontSize={2}
            padding={3}
            space={3}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
          >
            <option disabled selected>
              Select field...
            </option>
            <option key="_id" value="_id::string">
              _id
            </option>
            {fields?.map(({ type: shaper, name }) => (
              <option key={name} value={`${name}::${shaper}`}>
                {name}
              </option>
            ))}
          </Select>
        </FormField>
      </Stack>
    )
  }
)

export default withDocument(SchemaFields)
