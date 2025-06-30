import React, {ForwardedRef} from 'react'
import {Stack, Heading, Card, useTheme} from '@sanity/ui'
import {useFormValue} from 'sanity'

const IdField = React.forwardRef(function IdField(
  props: unknown,
  ref: ForwardedRef<HTMLDivElement>
) {
  const theme = useTheme()
  const _id = useFormValue(['_id']) as string | undefined

  if (!_id) return null

  return (
    <Stack space={3} ref={ref}>
      <Heading size={0}>Template ID:</Heading>
      <Card
        radius={1}
        shadow={1}
        paddingX={3}
        paddingY={2}
        style={{
          backgroundColor: theme.sanity.v2?.color?.muted?.bg,
        }}
      >
        {_id.replace(/drafts\./g, '')}
      </Card>
    </Stack>
  )
})

export default IdField