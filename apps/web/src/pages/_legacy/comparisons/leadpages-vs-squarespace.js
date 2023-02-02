import React from 'react'
import LeadpagesVsSquarespace from '@layouts/Comparisons/LeadpagesVsSquarespace'
import { runQueries } from '@lib'

const LeadpagesVsSquarespacePage = (props) => (
  <LeadpagesVsSquarespace {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-squarespace'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LeadpagesVsSquarespacePage
