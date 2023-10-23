import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useIsMount from '@hooks/useIsMount'
import cookies from 'js-cookie'

const { GA4_TRACKING_ID } = process.env

export const experimentEvent = ({ experimentName, variantName }) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'Experiment Started', {
      experiment_name: experimentName,
      variant_name: variantName,
    })
  }
}

const useGTag = () => {
  const router = useRouter()
  const isMount = useIsMount()
  const __lpst = cookies.get('__lpst')

  if (!GA4_TRACKING_ID) return null

  return useEffect(() => {
    const lpst = __lpst && JSON.parse(decodeURIComponent(__lpst))

    const experimentTrigger = (url) => {
      const experiment = lpst?.[url]
      const [, variantName, experimentName] =
        (experiment && experiment.split('::')) || []

      if (!experimentName || !variantName) return null

      experimentEvent({
        experimentName,
        variantName,
      })
    }

    if (isMount) {
      experimentTrigger(router.asPath)
    }

    router.events.on('routeChangeComplete', experimentTrigger)

    return () => {
      router.events.off('routeChangeComplete', experimentTrigger)
    }
  }, [])
}

export default useGTag
