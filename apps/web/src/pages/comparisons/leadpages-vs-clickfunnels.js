import React from 'react'
import LeadpagesVsClickfunnels from '@layouts/Comparisons/LeadpagesVsClickfunnels'

const LeadpagesVsClickfunnelsPage = (props) => (
  <LeadpagesVsClickfunnels {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-clickfunnels'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadpagesVsClickfunnelsPage
