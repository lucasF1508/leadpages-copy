import React from 'react'
import {Stack, Heading, Card} from '@sanity/ui'
import {useFormValue} from 'sanity'

const IdField = React.forwardRef((props, ref) => {
  const _id = useFormValue(['_id'])
  if (!_id) return null

  return (
    <Stack space={3} ref={ref}>
      <Heading size={0}>Template ID:</Heading>
      <Card radius={1} shadow={1} paddingX={3} paddingY={2}>
        {_id.replace(/drafts\./g, '')}
      </Card>
    </Stack>
  )
})

export default IdField
