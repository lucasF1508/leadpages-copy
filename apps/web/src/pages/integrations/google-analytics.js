import React from 'react'
import GoogleAnalytics from '@layouts/Integrations/GoogleAnalytics'

const GoogleAnalyticsPage = (props) => <GoogleAnalytics {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/google-analytics'

  const data = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default GoogleAnalyticsPage
