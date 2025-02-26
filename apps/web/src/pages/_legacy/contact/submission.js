import React from 'react'
import Submission from '@layouts/Contact/Submission'
import { runQueries } from '@lib/queries'

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
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Leadpages® Landing Page Builder & Lead Gen Software`,
            seoDescription: `Generate leads and increase revenue using the industry-leading landing page creator with accompanying suite of lead generation and opt-in tools.`,
            seoImage: 'https://static.leadpages.com/images/og/og-contact.jpg',
          },
        },
      ],
    },
  }
}

export default SubmissionPage
