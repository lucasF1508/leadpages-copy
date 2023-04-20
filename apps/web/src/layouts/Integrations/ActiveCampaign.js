import React from 'react'
// Components
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'
// Images
import heroImage from '@legacy/assets/images/integrations/subpages/ActiveCampaign+Leadpages_304px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/ActiveCampaign-connect_730px@2x.png'

const integrationName = 'ActiveCampaign'

const testimonial = {
  quote:
    'I am sooooo happy. These pages are so easy to put together and publish. Not only that but the integration with my email auto responder is fabulous.',
  clientName: 'Judy Gray',
  clientTitle: 'Leadpages Customer',
}

const integrationInfo = [
  {
    headline: 'Collect & segment your leads',
    description:
      'Automatically add or update contact information from form submissions to any ActiveCampaign list.',
  },
  {
    headline: 'Embed an ActiveCampaign form',
    description:
      'Easily embed any ActiveCampaign form on a Leadpages pop-up, landing page, or web page.',
  },
  {
    headline: 'Create custom form fields',
    description:
      'Customize your field inputs and response styles by setting up additional custom fields within your ActiveCampaign account.',
  },
  {
    headline: 'Receive email notifications for new opt-ins',
    description:
      'Set up automated notifications in either Leadpages or ActiveCampaign to get new subscriber data sent straight to your inbox.',
  },
  {
    headline: 'Automate your follow-up emails',
    description:
      "Use ActiveCampaign’s marketing automation to create targeted emails that send when triggered by a specific date, event, or contact's activity.",
  },
  {
    headline: 'Go even further when you connect to Zapier',
    description:
      'Ready to automate your marketing like a true pro? Connect Zapier to Leadpages and ActiveCampaign for unlimited possibilities. ',
  },
]

const ActiveCampaign = () => {
  const heroData = {
    headlineText: 'Leadpages + ActiveCampaign',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Kick off your automated email campaigns by sending leads from Leadpages to ActiveCampaign.',
    heroImage,
  }

  const twoColumnInfo = {
    headline: 'Connect your account in a matter of minutes',
    description: '',
    image: twoColumnImage,
    imageAlt: 'Connecting ActiveCampaign',
    checkboxInfo: [
      'Click to integrate your accounts',
      'Select an ActiveCampaign list or form embed',
      'Customize your form fields & design',
      'Publish and let the leads roll in! ',
    ],
  }

  return (
    <>
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

export default ActiveCampaign
