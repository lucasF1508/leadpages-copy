import React from 'react'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries } from '@lib'
import Templates from '@layouts/Templates'
import getTemplateData from '@utils/getStaticTemplateData'

const WebsiteTemplatesPage = (props) => (
  <Templates {...props} isWebsiteGallery />
)

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { id: templateId } = params
  const slug = '/website-templates'

  const { _id, ...rest } = await getTemplateData({
    templateId,
    templateType: 'website',
  })

  if (!_id) {
    return {
      notFound: true,
    }
  }

  const { global } = await runQueries([])
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)
  const options = { hideBar: true }

  return {
    props: {
      options,
      slug,
      preview,
      planData,
      global,
      data: [rest],
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default WebsiteTemplatesPage
