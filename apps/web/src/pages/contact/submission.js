import React from 'react'
import Submission from '@layouts/Contact/Submission'

const SubmissionPage = (props) => <Submission {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/contact/submission'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default SubmissionPage
