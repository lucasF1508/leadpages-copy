import React from 'react'
import GoogleAnalytics from '@layouts/Integrations/GoogleAnalytics'
import { runQueries } from '@lib'

const GoogleAnalyticsPage = (props) => <GoogleAnalytics {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/google-analytics'

  const options = { headerBkgColor: '$grayAlt' }
  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
    },
  }
}

export default GoogleAnalyticsPage
