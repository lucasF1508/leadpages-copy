import { useSanityImage } from 'sanity-hooks'
import { useRouter } from 'next/router'
import { currentSplitTestPaths } from '@components/Optimize/Optimize'

/* eslint-disable prefer-destructuring */
const GTAG_TRACKING_ID = process.env.GTAG_TRACKING_ID
const GTM_CONTAINER_ID = process.env.GTM_CONTAINER_ID
const FB_PIXEL_ID = process.env.FB_PIXEL_ID
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL
const VERCEL_ENV = process.env.VERCEL_ENV
/* eslint-enable prefer-destructuring */

if (VERCEL_ENV !== 'production') {
  /* eslint-disable no-console */
  console.log(
    `Meta Robots set to: noindex,nofollow, VERCEL_ENV is not production`
  )
  console.log('VERCEL_ENV: ', VERCEL_ENV)
  /* eslint-enable no-console */
}

const getSeoSiteTitle = ({
  seoTitle = '',
  siteName = '',
  seoTitlePattern = '%PAGE_TITLE% | %SITE_NAME%',
}) =>
  seoTitlePattern
    .replace('%PAGE_TITLE%', seoTitle)
    .replace('%SITE_NAME%', siteName)

const useSeo = ({ seo, siteMeta, isVariant } = {}) => {
  const { asPath } = useRouter()
  const { seoTitlePattern, seoImageDefault, siteName, twitterUser } =
    siteMeta || {}
  const {
    seoImage,
    seoTitle,
    seoDescription,
    hasCustomSeoTitle,
    hasImageUrl,
    publishDate,
    modifyDate,
  } = seo || {}
  const image = !hasImageUrl && useSanityImage(seoImage || seoImageDefault)

  const robots =
    VERCEL_ENV !== 'production' ||
    (isVariant && !currentSplitTestPaths.includes(asPath))
      ? 'noindex,nofollow'
      : ''

  return {
    GTM_CONTAINER_ID,
    GTAG_TRACKING_ID,
    FB_PIXEL_ID,
    seoTitle: hasCustomSeoTitle
      ? seoTitle
      : getSeoSiteTitle({
          seoTitle,
          seoTitlePattern,
          siteName,
        }),
    seoDescription,
    image: hasImageUrl
      ? { url: seoImage }
      : image
      ? {
          width: 1200,
          height: 630,
          url: image?.builder?.width(1200).height(630).url(),
        }
      : {},
    url: isVariant
      ? NEXT_PUBLIC_URL
      : `${NEXT_PUBLIC_URL || ''}${asPath
          .replace(/(\/_legacy|\?.*)/, '') // Strip out /_legacy and params
          .replace(/\/$/, '')}`, // Remove trailing slash if exists
    locale: 'en_CA',
    type: 'website',
    robots,
    siteName,
    twitterUser,
    publishDate,
    modifyDate,
  }
}

export default useSeo
