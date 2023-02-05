import React, { useState, useEffect } from 'react'
import { Tab, TabList, TabPanel, Text, Heading, Code, Card } from '@sanity/ui'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import isEmpty from 'lodash/isEmpty'

const $Card = styled(Card)`
  max-height: 40vh;
  overflow: auto;
`

const FeedPreview = ({ data: dataOrg } = {}) => {
  const data = dataOrg?.filter((value) => !isEmpty(value))

  return (
    <>
      <Card marginBottom={4}>
        <Text weight="semibold" muted={true} size={2}>
          Keys:
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
          {!data
            ? 'Loading...'
            : JSON.stringify([...new Set(data.flatMap(Object.keys))], null, 2)}
        </Code>
      </$Card>
      <Card marginBottom={4}>
        <Text weight="semibold" muted={true} size={2}>
          Data Preview:
        </Text>
      </Card>
      <$Card padding={[3, 3, 4]} radius={2} shadow={1} scheme="dark">
        <Code language="json" size={1}>
          {!data ? 'Loading...' : JSON.stringify(data, null, 2)}
        </Code>
      </$Card>
    </>
  )
}

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

const FeedTabs = ({ data } = {}) => {
  const { feed, mapped, error, feedOptions } = data
  const [tabId, setTabId] = useState('feed')

  return (
    <>
      <TabList space={2}>
        <Tab
          aria-controls="feed-panel"
          id="feed-tab"
          label="Original Feed"
          icon={tabId === 'feed' && <>✔</>}
          onClick={() => setTabId('feed')}
          selected={tabId === 'feed'}
          space={2}
        />
        <Tab
          aria-controls="preview-panel"
          id="preview-tab"
          label="Mapped Feed"
          icon={tabId === 'preview' && <>✔</>}
          onClick={() => setTabId('preview')}
          selected={tabId === 'preview'}
          space={2}
        />
      </TabList>

      <TabPanel
        aria-labelledby="feed-tab"
        hidden={tabId !== 'feed'}
        id="feed-panel"
      >
        <Card border marginTop={2} padding={4} radius={2}>
          {error ? (
            <FeedError data={error} />
          ) : (
            <Card marginTop={1}>
              <Card marginBottom={5}>
                <Heading size={2}>
                  {`Original Feed:  `}
                  {!data ? '🔄' : isEmpty(data) ? '⚠️' : '✅'}
                </Heading>
              </Card>
              <Card marginBottom={4}>
                <Text weight="semibold" muted={true} size={2}>
                  Feed Options:
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
                  {!feedOptions
                    ? 'Loading...'
                    : JSON.stringify(feedOptions, null, 2)}
                </Code>
              </$Card>
              <FeedPreview data={feed} />
            </Card>
          )}
        </Card>
      </TabPanel>

      <TabPanel
        aria-labelledby="preview-tab"
        hidden={tabId !== 'preview'}
        id="preview-panel"
      >
        <Card border marginTop={2} padding={4}>
          <Card marginTop={1}>
            <Card marginBottom={5}>
              <Heading size={2}>
                {`Mapped Feed:  `}
                {!data ? '🔄' : isEmpty(data) ? '⚠️' : '✅'}
              </Heading>
            </Card>
            <FeedPreview data={mapped} />
          </Card>
        </Card>
      </TabPanel>
    </>
  )
}

export function displayFeedDocumentAction({
  id,
  type,
  icon,
  onComplete,
  url: urlOrg,
  label = 'View Original Feed',
}) {
  if (type !== 'feed') {
    return null
  }

  const [urlBase, setUrlBase] = useState(false)
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [data, setData] = useState(false)

  useEffect(() => {
    setUrlBase(window.location.origin.replace(/:3333/, ':3000'))
  }, [])

  return (
    urlBase && {
      label,
      icon,
      onHandle: () => {
        const url = `${urlBase}${urlOrg}`
        fetch(url).then((res) =>
          res.json().then((response) => {
            setData(response)
          })
        )
        setDialogOpen(true)
      },
      onComplete: () => {
        setData(false)
      },
      dialog: isDialogOpen && {
        type: 'modal',
        onClose: () => {
          setDialogOpen(false)
          onComplete()
        },
        header: label,
        content: (
          <>
            <FeedTabs data={data} />
          </>
        ),
      },
    }
  )
}

export const previewFeed = (props) => {
  return displayFeedDocumentAction({
    icon: BsSearch,
    label: 'Preview Feed',
    heading: 'Original Feed',
    url: `/api/feeds/preview?id=${props.id}`,
    ...props,
  })
}
