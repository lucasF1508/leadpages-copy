import React from 'react'
import LeadpagesVsClickfunnels from '@layouts/Comparisons/LeadpagesVsClickfunnels'
import { runQueries } from '@lib'

const LeadpagesVsClickfunnelsPage = (props) => (
  <LeadpagesVsClickfunnels {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-clickfunnels'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LeadpagesVsClickfunnelsPage
