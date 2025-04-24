import React from 'react'
import {Stack, TextInput, Text} from '@sanity/ui'

import {getTemplateTitle} from '@/utils/getTemplateTitle'
import {PatchEvent, set, unset, useFormValue} from 'sanity'

const TitleField = React.forwardRef((props, ref) => {
  const {value} = props
  const {onChange, onBlur, onFocus} = props?.elementProps || {}
  const title = useFormValue(['title'])
  const kind = useFormValue(['kind'])

  const handleChange = (event) => {
    const inputValue = event.target.value
    onChange(PatchEvent.from(value === '' ? unset() : set(inputValue)))
  }

  return (
    <Stack space={[3]}>
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

export default TitleField
