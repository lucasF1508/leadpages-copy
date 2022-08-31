import React from 'react'
// Components
import SEO from '@legacy/components/SEO'
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'
// Images
import heroImage from '@legacy/assets/images/integrations/subpages/Mailchimp+Leadpages_304px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/Mailchimp-connect_730px@2x.png'

const integrationName = 'Mailchimp'

const testimonial = {
  quote: `“I am sooooo happy. These pages are so easy to put together and publish. Not only that but the integration with my email auto responder is fabulous.”`,
  clientName: 'Judy Gray',
  clientTitle: 'Leadpages Customer',
}

const integrationInfo = [
  {
    headline: 'Collect & segment your leads',
    description:
      'Automatically add or update contact information from form submissions to Mailchimp using tags.',
  },
  {
    headline: 'Update subscriber fields in Mailchimp',
    description:
      'Collect information beyond an email address and name, by setting up additional fields within Mailchimp.',
  },
  {
    headline: 'Add hidden fields to a signup form',
    description:
      'Use auto-filled hidden form fields to further segment your subscribers into pre-selected groups.',
  },
  {
    headline: 'Use flexible double opt-in settings',
    description:
      'Choose whether to require subscribers to confirm their subscription (via an email link) before they end up on your audience.',
  },
  {
    headline: 'Receive email notifications for new opt-ins',
    description:
      'Set up automated notifications in either Leadpages or Mailchimp to get new subscriber data sent straight to your inbox.',
  },
  {
    headline: 'Automate your follow-up emails',
    description:
      "Use Mailchimp’s marketing automation to create targeted emails that send when triggered by a specific date, event, or contact's activity.",
  },
]

const Mailchimp = () => {
  const heroData = {
    headlineText: 'Leadpages + Mailchimp',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Send leads directly to your Mailchimp account, segment them into audiences lists and groups, then nurture them with automated email sequences.',
    heroImage,
  }

  const twoColumnInfo = {
    headline: 'Connect your account in a matter of minutes',
    description: '',
    image: twoColumnImage,
    imageAlt: 'Connecting Mailchimp',
    checkboxInfo: [
      'Copy & paste your Mailchimp API key into Leadpages',
      'Connect a Leadpages form to a target email list (audience)',
      'Customize your form fields & design',
      'Publish and let the leads roll in!',
    ],
  }

  return (
    <>
      <SEO
        pathname="integrations/mailchimp"
        title="Connect your Leadpages to Mailchimp | Get Online & Grow"
        description="Easily integrate Leadpages with Mailchimp. Connect your Leadpages froms to collect, segment, and update subscribers and trigger automated email campaigns."
        image="https://static.leadpages.com/images/og/og-Leadpages+Mailchimp.jpg"
      />
      <IntegrationsSubpage
        heroData={heroData}
        twoColumnInfo={twoColumnInfo}
        buttonText={`Try Leadpages + ${integrationName}`}
        testimonial={testimonial}
        integrationInfo={integrationInfo}
      />
    </>
  )
}

export default Mailchimp
