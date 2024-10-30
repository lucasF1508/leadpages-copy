import React from 'react'
import { Stack, Heading, Card } from '@sanity/ui'

// eslint-disable-next-line react/display-name
export const IdField = React.forwardRef(({ parent }, ref) => {
  const { _id } = parent
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
          background: '#f2f3f5',
        }}
      >
        {_id.replace(/drafts\./g, '')}
      </Card>
    </Stack>
  )
})
