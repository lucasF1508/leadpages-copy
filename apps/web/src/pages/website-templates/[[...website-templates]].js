import React from 'react'
import WebsiteTemplates from '@layouts/WebsiteTemplates'
import { getGroupedPlanData } from '@legacy/utils/plans'

const WebsiteTemplatesPage = (props) => <WebsiteTemplates {...props} />

const getPlanData = async (variant) => {
  const result = await fetch(
    `${process.env.LEADPAGES_API_HOST}/billing/plans${
      variant ? '?variants=1' : ''
    }`,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  const resultData = await result.json()
  return resultData._items
}

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
  const data = { isPreviewPage, planData }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default WebsiteTemplatesPage
