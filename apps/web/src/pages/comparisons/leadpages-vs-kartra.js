import React from 'react'
import LeadpagesVsKartra from '@layouts/Comparisons/LeadpagesVsKartra'

const LeadpagesVsKartraPage = (props) => <LeadpagesVsKartra {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-kartra'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default LeadpagesVsKartraPage
