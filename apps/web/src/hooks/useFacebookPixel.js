import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useIsMount from '@hooks/useIsMount'

const { FB_PIXEL_ID } = process.env

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq('track', name, options)
}

export default function useFacebookPixel() {
  const router = useRouter()
  const isMount = useIsMount()
  if (!FB_PIXEL_ID) return null

  useEffect(() => {
    if (isMount) {
      pageview()
    }

    const handleRouteChange = () => {
      pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null
}
