import React from 'react'
import WistiaTrackingScript from '@legacy/scripts/WistiaTrackingScript'
import Link from '@components/Link'

const WistiaVideoTracked = ({ children, link }) => {
  const fbTrackingEvent = () => {
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'WatchDemo_Click')
    }
  }
  return (
    <>
      <WistiaTrackingScript />
      <Link aria-label="wistia video" {...link} onClick={fbTrackingEvent}>
        {children}
      </Link>
    </>
  )
}

export default WistiaVideoTracked
