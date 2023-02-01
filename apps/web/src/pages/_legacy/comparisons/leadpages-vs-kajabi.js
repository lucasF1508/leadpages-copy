import React from 'react'
import LeadpagesVsKajabi from '@layouts/Comparisons/LeadpagesVsKajabi'
import { runQueries } from '@lib'

const LeadpagesVsKajabiPage = (props) => <LeadpagesVsKajabi {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-kajabi'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LeadpagesVsKajabiPage
