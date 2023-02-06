import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useIsMount from '@hooks/useIsMount'

const { GTM_CONTAINER_ID } = process.env

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}

export default function useGoogleTagManager() {
  const router = useRouter()
  const isMount = useIsMount()
  if (!GTM_CONTAINER_ID) return null

  useEffect(() => {
    if (isMount) {
      pageview(router.asPath)
    }

    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return null
}
