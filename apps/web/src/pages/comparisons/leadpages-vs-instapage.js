import React from 'react'
import LeadpagesVsInstapage from '@layouts/Comparisons/LeadpagesVsInstapage'

const LeadpagesVsInstapagePage = (props) => <LeadpagesVsInstapage {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-instapage'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadpagesVsInstapagePage
