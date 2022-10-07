import React from 'react'
import Templates from '@layouts/Templates'
import { getPlanData, getGroupedPlanData } from '@utils/plans'

const TemplatesPage = (props) => <Templates {...props} />

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const slug = '/templates'
  const route = params.templates || []
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

export default TemplatesPage
