import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useIsMount from '@hooks/useIsMount'

const { GTAG_TRACKING_ID } = process.env

export const pageview = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GTAG_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

const useGTag = () => {
  const router = useRouter()
  const isMount = useIsMount()

  if (!GTAG_TRACKING_ID) return null

  return useEffect(() => {
    if (isMount) {
      pageview(router.asPath)
    }

    router.events.on('routeChangeComplete', pageview)

    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [])
}

export default useGTag
