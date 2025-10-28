import React, {useEffect, useState} from 'react'
import {Card, Text, Stack, Heading, Box} from '@sanity/ui'

// Recibe props de Sanity; tipamos como any para simplificar
export default function CustomSidebarLinksReference(props: any) {
  const doc = props?.parent
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    const content = doc?.content
    const sideBarData =
      content?.reduce((acc: any[], {markDefs, children}: any) => {
        const def = markDefs?.find(({_type}: any) => _type === 'sidebarLink')
        if (def) {
          const child = children?.find(({marks}: any) => marks?.includes(def._key))
          const selectedText = child?.text
          if (selectedText && selectedText.length > 0) {
            return [...acc, {...def, selectedText}]
          }
        }
        return acc
      }, []) ?? []
    setItems(sideBarData)
  }, [doc?.content])

  return (
    <Card shadow={1} padding={4}>
      <Stack space={3}>
        <Box paddingBottom={3}>
          <Heading as="h4" size={2}>
            Current Custom Sidebar Links
          </Heading>
        </Box>
        {items?.map(({style, selectedText, text}: any, i: number) => (
          <div key={i}>
            <Text size={2}>
              {style !== 'h2' ? <span style={{whiteSpace: 'pre'}}>{`    • `}</span> : <>• </>}
              {selectedText}
              {text && <strong style={{fontWeight: 500}}>{` [${text}]`}</strong>}
            </Text>
          </div>
        ))}
      </Stack>
    </Card>
  )
}
