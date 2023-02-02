import React from 'react'
import LeadpagesVsUnbounce from '@layouts/Comparisons/LeadpagesVsUnbounce'
import { runQueries } from '@lib'

const LeadpagesVsUnbouncePage = (props) => <LeadpagesVsUnbounce {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-unbounce'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LeadpagesVsUnbouncePage
