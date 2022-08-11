import React from 'react'
import LeadpagesVsUnbounce from '@layouts/Comparisons/LeadpagesVsUnbounce'

const LeadpagesVsUnbouncePage = (props) => <LeadpagesVsUnbounce {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-unbounce'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadpagesVsUnbouncePage
