import React from 'react'
import LeadpagesVsKajabi from '@layouts/Comparisons/LeadpagesVsKajabi'

const LeadpagesVsKajabiPage = (props) => <LeadpagesVsKajabi {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-kajabi'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default LeadpagesVsKajabiPage
