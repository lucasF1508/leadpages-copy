import React, { useEffect, useState } from 'react'
import { Spinner, Flex, Text, Box } from '@sanity/ui'
import resolveProductionUrl from 'part:@sanity/production-preview/resolve-production-url'
import styles from '../styles/index.css'

export default function IframePreview(props) {
  const { displayed } = props.document

  if (!displayed?.slug?.current) {
    return <div>The page needs a slug before it can be previewed.</div>
  }

  const [isLoading, setIsLoading] = useState(true)
  const [projectUrl, setProjectUrl] = useState(null)

  useEffect(() => {
    const url = resolveProductionUrl(displayed)
    setProjectUrl(url)
  }, [])

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        {projectUrl && (
          <iframe
            src={projectUrl}
            frameBorder={'0'}
            onLoad={() => {
              setIsLoading(false)
            }}
          />
        )}
        {isLoading && (
          <Box padding={[5, 3, 4, 5]}>
            <Flex
              paddingTop={2}
              paddingBottom={2}
              align="center"
              justify="center"
            >
              <Spinner muted />
              <Text size={[2, 2, 3, 4]} style={{ marginLeft: 8 }}>
                Loading Preview Page...
              </Text>
            </Flex>
          </Box>
        )}
      </div>
    </div>
  )
}
