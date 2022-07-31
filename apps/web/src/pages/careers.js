import React from 'react'
import Careers from '@layouts/Careers'

const CareersPage = (props) => <Careers {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/careers'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default CareersPage
