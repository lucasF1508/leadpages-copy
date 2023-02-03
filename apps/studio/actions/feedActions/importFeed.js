import React, { useState, useEffect } from 'react'
import { Stack, Inline, Button, Text, Heading, Code, Card } from '@sanity/ui'
import styled from 'styled-components'
import { BsFillPlayFill as icon } from 'react-icons/bs'

const $Card = styled(Card)`
  max-height: 40vh;
  overflow: auto;
`

const FeedError = ({ data } = {}) => (
  <>
    <Card marginBottom={5}>
      <Heading size={2}>
        Original Feed:{' '}
        {!data ? '🔄' : data.name === 'StatusError' ? '⚠️' : '❌'}
      </Heading>
    </Card>
    <Card marginBottom={4}>
      <Text weight="semibold" muted={true} size={2}>
        Status:
      </Text>
    </Card>
    <$Card padding={[3, 3, 4]} radius={2} shadow={1} scheme="dark">
      <Code language="json" size={1}>
        {!data ? 'Loading...' : JSON.stringify(data, null, 2)}
      </Code>
    </$Card>
  </>
)

const FeedPreview = ({ data, heading } = {}) => {
  const { response, docs, error } = data || {}
  const slicedDocs = docs?.slice(0, 5)

  return (
    <>
      <Card marginTop={1}>
        <Card marginBottom={5}>
          <Heading size={2}>
            {`${heading} `}
            {!data ? '🔄' : error ? '⚠️' : '✅'}
          </Heading>
        </Card>
        <Card marginBottom={4}>
          <Text weight="semibold" muted={true} size={2}>
            Response:
          </Text>
        </Card>
        <$Card
          padding={[3, 3, 4]}
          marginBottom={5}
          radius={2}
          shadow={1}
          scheme="dark"
        >
          <Code language="json" size={1}>
            {!response ? 'Loading...' : JSON.stringify(response, null, 2)}
          </Code>
        </$Card>
        <Card marginBottom={4}>
          <Text weight="semibold" muted={true} size={2}>
            Docs Preview:
          </Text>
        </Card>
        <$Card padding={[3, 3, 4]} radius={2} shadow={1} scheme="dark">
          <Code language="json" size={1}>
            {!docs ? 'Loading...' : JSON.stringify(slicedDocs, null, 2)}
          </Code>
        </$Card>
      </Card>
    </>
  )
}

const FeedImport = ({ id, onComplete } = {}) => {
  const [url, setUrl] = useState(false)
  const [data, setData] = useState()
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const urlBase = window.location.origin.replace(/:3333/, ':3000')
    setUrl(`${urlBase}/api/feeds/import?id=${id}`)
  }, [])

  useEffect(() => {
    if (accepted && url) {
      fetch(url).then((res) =>
        res.json().then((response) => {
          setData(response)
        })
      )
    }
  }, [accepted])

  return (
    <>
      <Card marginTop={2}>
        {accepted ? (
          data?.error ? (
            <FeedError data={data.error} />
          ) : (
            <FeedPreview data={data} heading="Feed Import: " />
          )
        ) : (
          <Stack space={[3, 3, 4, 5]}>
            <Card>
              <Text align="center" size={[2, 2, 3, 3]}>
                Are you sure you want to run this feed import?
              </Text>
            </Card>
            <Card style={{ textAlign: 'center' }}>
              <Inline space={[3, 3, 4]}>
                <Button
                  fontSize={2}
                  mode="ghost"
                  text="Cancel"
                  onClick={onComplete}
                />
                <Button
                  fontSize={2}
                  text="Import"
                  tone="primary"
                  onClick={() => {
                    setAccepted(true)
                  }}
                />
              </Inline>
            </Card>
          </Stack>
        )}
      </Card>
    </>
  )
}

export const importFeed = ({ id, type, draft, published, onComplete }) => {
  if (type !== 'feed') {
    return null
  }

  const { mapping = [] } = draft || {}
  const [isDialogOpen, setDialogOpen] = useState(false)
  const label = 'Run Feed Import'

  return {
    icon,
    label,
    disabled: !published || !!draft,
    title: !published
      ? 'This feed is not enabled.'
      : !!draft
      ? 'This feed has outstanding changes. Please discard your changes or update the feed.'
      : null,
    onHandle: () => {
      setDialogOpen(true)
    },
    onComplete: () => {
      setDialogOpen(false)
      setData(false)
    },
    dialog: isDialogOpen && {
      type: 'modal',
      onClose: () => {
        onComplete()
      },
      header: label,
      content: <FeedImport id={id} onComplete={onComplete} />,
    },
  }
}
