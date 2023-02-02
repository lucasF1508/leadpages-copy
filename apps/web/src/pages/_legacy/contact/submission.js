import React from 'react'
import Submission from '@layouts/Contact/Submission'
import { runQueries } from '@lib'

const SubmissionPage = (props) => <Submission {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/contact/submission'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default SubmissionPage
