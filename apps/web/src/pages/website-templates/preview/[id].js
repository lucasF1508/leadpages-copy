import React from 'react'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries } from '@lib'
import Templates from '@layouts/Templates'
import getTemplateData from '@utils/getStaticTemplateData'
import getClient from 'client'

const client = getClient()

const WebsiteTemplatesPage = (props) => (
  <Templates {...props} isWebsiteGallery />
)

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { id: templateId } = params
  const slug = '/website-templates'

  const [templateData, templateSlug] = await Promise.all([
    getTemplateData({ templateId, templateType: 'website' }),
    client.fetch(`
      *[ _type == "template" && (slug.current == "${templateId}" || _id == "${templateId}") ][0].slug
    `),
  ])

  const { _id, ...rest } = templateData

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
      data: [{ ...rest, slug: templateSlug }],
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
