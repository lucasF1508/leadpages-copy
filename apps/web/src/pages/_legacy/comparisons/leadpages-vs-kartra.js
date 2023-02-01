import React from 'react'
import LeadpagesVsKartra from '@layouts/Comparisons/LeadpagesVsKartra'
import { runQueries } from '@lib'

const LeadpagesVsKartraPage = (props) => <LeadpagesVsKartra {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-kartra'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LeadpagesVsKartraPage
