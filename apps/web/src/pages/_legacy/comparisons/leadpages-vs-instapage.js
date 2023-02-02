import React from 'react'
import LeadpagesVsInstapage from '@layouts/Comparisons/LeadpagesVsInstapage'
import { runQueries } from '@lib'

const LeadpagesVsInstapagePage = (props) => <LeadpagesVsInstapage {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-instapage'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LeadpagesVsInstapagePage
