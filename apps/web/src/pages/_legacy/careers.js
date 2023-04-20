import React from 'react'
import Careers from '@layouts/Careers'
import { runQueries } from '@lib'

const CareersPage = (props) => <Careers {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/careers'

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
            seoTitle: `Leadpages Careers | Website & Landing Page Builder`,
            seoDescription: `At Leadpages, you're part of a team of builders. No matter what department you work in, you have a pivotal role here.`,
            seoImage: 'https://static.leadpages.com/images/og/og-careers.jpg',
          },
        },
      ],
    },
  }
}

export default CareersPage
