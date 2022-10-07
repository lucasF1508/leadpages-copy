import React from 'react'
import WebsiteTemplates from '@layouts/WebsiteTemplates'
import { getPlanData, getGroupedPlanData } from '@utils/plans'

const WebsiteTemplatesPage = (props) => <WebsiteTemplates {...props} />

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const { preview = false, params } = context

  const slug = '/website-templates'
  const route = params['website-templates'] || []
  const isPreviewPage = route?.includes('preview')

  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)
  const options = { isPreviewPage, planData }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default WebsiteTemplatesPage
