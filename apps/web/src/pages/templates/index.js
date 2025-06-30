import React from 'react'
import Templates from '@layouts/Templates'
import { getGroupedPlanData, getPlanData } from '@utils/plans'
import { runQueries } from '@lib/queries'

const TemplatesPage = (props) => <Templates {...props} />

const seo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Get more leads with high-converting landing page templates | Leadpages`,
  seoDescription: `Get more leads and grow quicker with high-converting templates for landing pages and websites. Designed by pros and easy to customize, start for free today.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

export async function getStaticProps(context) {
  const { preview = false } = context

  const slug = '/templates'

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
      data: [
        {
          title: `Choose From 200+ High-Converting Landing Page Templates`,
          heroContent: `Every template is professionally-designed with over a decade of conversion marketing expertise baked in, so you can be confident you'll capture leads and sales. Use our intuitive drag-and-drop builder to quickly make a beautiful mobile-responsive landing page in 30 minutes or less.`,
          seo,
        },
      ],
    },
  }
}

export default TemplatesPage