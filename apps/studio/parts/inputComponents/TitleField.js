import React from 'react'
import { Stack, Heading, TextInput, Text } from '@sanity/ui'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'

import { getTemplateTitle } from 'web/src/lib/utils/getTemplateTitle'

// eslint-disable-next-line react/display-name
export const TitleField = React.forwardRef((props, ref) => {
  const { type, value, onChange, onBlur, onFocus, parent } = props
  const { kind, title } = parent

  const handleChange = (event) => {
    const inputValue = event.target.value
    onChange(PatchEvent.from(value === '' ? unset() : set(inputValue)))
  }

  return (
    <Stack space={[3]}>
      <Heading size={0}>{type.title}</Heading>
      <Text size={0}>Heading preview:</Text>
      <Text size={1}>
        {!value
          ? getTemplateTitle({
              templateTitle: title,
              heading: undefined,
              kind,
            })
          : getTemplateTitle({
              templateTitle: title,
              heading: value,
              kind,
            })}
      </Text>
      <TextInput
        ref={ref}
        onChange={handleChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </Stack>
  )
})
