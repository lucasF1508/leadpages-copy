import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@design'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { getGlobalQueries } from '@lib/queries'
import useIsMount from '@hooks/useIsMount'
import { $Link } from '@components/Link'
import Loader from '@components/Loader'
import Text from '@components/Text'

const $PreviewNotificationContainer = styled(motion.div, {
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  z: '$cover',
})

const $PreviewNotificationLoader = styled(motion.div, {
  d: 'flex',
  ff: 'row nowrap',
  ai: 'center',
  jc: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  py: '$2',
  background: '$white',
  z: '$under',
})

const $PreviewNotificationContent = styled('div', {
  position: 'relative',
  z: '$aboveContent',
  background: '$white',
  d: 'flex',
  ff: 'column',
  jc: 'center',
  ai: 'center',
  p: '$2 $4',
  c: '$text',
  bs: '$xl',
})

const $PreviewNotification = styled(motion.div, {
  position: 'absolute',
  w: '100%',
  mw: '19rem',
  bottom: 0,
  right: 0,
  z: '$cover',
  pointerEvents: 'all',
  cursor: 'grab',

  '&:active': {
    cursor: 'grabbing',
  },
})

const usePreview = ({
  preview,
  initialData,
  queries,
  setPreviewData,
  setGlobalData,
}) => {
  const { pathname } = useRouter()
  const [isLoading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('Fetching draft')
  const isMount = useIsMount()
  const ref = useRef()

  const fetchDraft = async () => {
    setLoading(true)

    const { shapeData = (data) => data } =
      {
        '/404': await import('@pages/404'),
        '/blog': await import('@pages/blog'),
        '/blog/category/[category]': await import(
          '@pages/blog/category/[category]'
        ),
      }[pathname] || {}

    const getClient = (await import('client')).default
    const client = getClient({ preview: true })

    const globalQueries = await getGlobalQueries(true)
    const [navigation, leadboxes, siteMeta, footer] =
      await Promise.all(globalQueries)

    const allData = queries?.length
      ? await Promise.all(
          queries.map(({ query, params }) =>
            client.fetch(query, params || undefined)
          )
        )
      : undefined

    const previewData = await shapeData(allData)
    setPreviewData(previewData)
    setGlobalData({
      navigation,
      leadboxes,
      siteMeta,
      footer,
    })
    setLoading(false)

    return () => undefined
  }

  const clearCookies = async () => {
    setLoadingText('Clearing cookies')
    setLoading(true)
    await fetch('/api/clear-preview-cookies', {
      method: 'POST',
    })
    setLoadingText('Redirecting...')
    window?.location?.reload()
  }

  useEffect(() => {
    if (!isMount) {
      setPreviewData(initialData)
    }
  }, [initialData])

  return (
    <AnimatePresence mode="wait">
      {preview && (
        <$PreviewNotificationContainer
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: 50,
            opacity: 0,
          }}
          initial={{ y: 50, opacity: 0 }}
          ref={ref}
        >
          <$PreviewNotification drag dragConstraints={ref} dragMomentum={false}>
            <$PreviewNotificationContent>
              <Text css={{ type: 'baseType', fontSize: '0.75rem', mb: '$2' }}>
                You are currently in preview mode and are able to see drafts
                without deploying. The site will preform slower in preview mode.
              </Text>

              <$Link linkStyle="button" onClick={fetchDraft}>
                Refresh content
              </$Link>
              <$Link
                css={{ mt: '$1', jc: 'flex-start', fontSize: '0.875rem' }}
                linkStyle="text"
                onClick={clearCookies}
              >
                Exit Preview Mode
              </$Link>
            </$PreviewNotificationContent>
            <AnimatePresence initial={false} mode="wait">
              {isLoading && (
                <$PreviewNotificationLoader
                  animate={{ y: '-100%' }}
                  exit={{
                    y: 0,
                    transition: {
                      ease: 'easeOut',
                      duration: 0.3,
                    },
                  }}
                  initial={{ y: 0 }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Text
                    css={{
                      type: 'baseType',
                      tt: 'uppercase',
                      fontSize: '0.75rem',
                      fontWeight: '$bold',
                      letterSpacing: '0.1em',
                      mb: -1,
                    }}
                  >
                    {loadingText}
                  </Text>
                  <Loader
                    css={{ d: 'block', ml: '$1' }}
                    height={24}
                    width={24}
                  />
                </$PreviewNotificationLoader>
              )}
            </AnimatePresence>
          </$PreviewNotification>
        </$PreviewNotificationContainer>
      )}
    </AnimatePresence>
  )
}

export default usePreview
