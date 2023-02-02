import React from 'react'
import Contact from '@layouts/Contact'
import { runQueries } from '@lib'

const ContactPage = (props) => <Contact {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/contact'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default ContactPage
