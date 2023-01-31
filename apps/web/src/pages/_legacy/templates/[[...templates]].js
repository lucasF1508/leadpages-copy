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
  const { preview = false } = context

  const slug = '/templates'
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)

  return {
    props: {
      slug,
      preview,
      planData,
    },
  }
}

export default TemplatesPage
