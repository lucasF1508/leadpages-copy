// The following will needed to be added to the SEO component
// in replacement of the Google Tag Manager Script
// <>
//   <script
//     async
//     src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_TRACKING_ID}`}
//   />
//   <script
//     dangerouslySetInnerHTML={{
//       __html: `
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());

//     gtag('config', '${GOOGLE_TAG_TRACKING_ID}', {
//       page_path: window.location.pathname,
//     });
//   `,
//     }}
//   />
// </>
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useIsMount from '@hooks/useIsMount'

const { GOOGLE_TAG_TRACKING_ID } = process.env

export const pageview = (url) => {
  window.gtag('config', GOOGLE_TAG_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

const useGTag = () => {
  const router = useRouter()
  const isMount = useIsMount()

  if (!GOOGLE_TAG_TRACKING_ID) return null

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
