import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const { GOOGLE_TAG_TRACKING_ID } = process.env

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}

export default function useGoogleTagManager() {
  const router = useRouter()
  if (!GOOGLE_TAG_TRACKING_ID) return null

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return null
}
