import React from 'react'
import LeadpagesVsSquarespace from '@layouts/Comparisons/LeadpagesVsSquarespace'

const LeadpagesVsSquarespacePage = (props) => (
  <LeadpagesVsSquarespace {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-squarespace'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default LeadpagesVsSquarespacePage
