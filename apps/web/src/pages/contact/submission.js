import React from 'react'
import Submission from '@layouts/Contact/Submission'

const SubmissionPage = (props) => <Submission {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/contact/submission'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default SubmissionPage
