import React from 'react'
import LeadpagesVsInstapage from '@layouts/Comparisons/LeadpagesVsInstapage'

const LeadpagesVsInstapagePage = (props) => <LeadpagesVsInstapage {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-instapage'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default LeadpagesVsInstapagePage
