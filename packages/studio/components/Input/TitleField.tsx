import React, {ForwardedRef, ChangeEvent, useCallback} from 'react'
import {Stack, TextInput, Text} from '@sanity/ui'
import {PatchEvent, set, unset, useFormValue} from 'sanity'

import {getTemplateTitle} from '@/utils/getTemplateTitle'

interface TitleFieldProps {
  value: string
  onChange?: (event: PatchEvent) => void
  elementProps?: React.ComponentProps<typeof TextInput>
}

const TitleField = React.forwardRef((
  props: TitleFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const {value = '', onChange, elementProps} = props

  const title = useFormValue(['title']) as string | undefined
  const kind = useFormValue(['kind']) as string | undefined

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return 

    const nextValue = event.currentTarget.value
    onChange(PatchEvent.from(nextValue ? set(nextValue) : unset()))
  }, [onChange])

  return (
    <Stack space={[3]}>
      <Text size={0}>Heading preview:</Text>
      <Text size={1}>
        {getTemplateTitle({
          templateTitle: title,
          heading: value || undefined,
          kind,
        })}
      </Text>
      <TextInput
        ref={ref}
        {...elementProps}
        onChange={handleChange}
        value={value}
      />
    </Stack>
  )
})

export default TitleField