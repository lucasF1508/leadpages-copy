import React from 'react'
import GoogleAnalytics from '@layouts/Integrations/GoogleAnalytics'

const GoogleAnalyticsPage = (props) => <GoogleAnalytics {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/google-analytics'

  const options = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default GoogleAnalyticsPage
