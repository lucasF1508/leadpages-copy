import React from 'react'
// components
import ContactMenu from '@legacy/components/contact/ContactMenu'
import SEO from '@legacy/components/SEO'

const ContactPage = () => (
  <>
    <SEO
      pathname="/contact"
      title="Contact Leadpages Support"
      description="Considering Leadpages or need help with your account? Our tech support team is available via chat, phone, and email to assist you."
      image="https://static.leadpages.com/images/og/og-contact.jpg"
    />
    <ContactMenu />
  </>
)

export default ContactPage
