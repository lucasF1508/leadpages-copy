import React from 'react'
import Contact from '@layouts/Contact'

const ContactPage = (props) => <Contact {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/contact'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default ContactPage
