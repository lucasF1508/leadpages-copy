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
  const { preview = false } = context

  const slug = '/website-templates'
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)
  const options = { hideBar: true }

  return {
    props: {
      options,
      slug,
      preview,
      planData,
    },
  }
}

export default WebsiteTemplatesPage
