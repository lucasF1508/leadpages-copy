import React from 'react'
// Components
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'
// Images
import heroImage from '@legacy/assets/images/integrations/subpages/Infusionsoft+Leadpages_304px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/Infusionsoft-connect_730px@2x.png'

const integrationName = 'InfusionSoft'

const testimonial = {
  quote: `“I am sooooo happy. These pages are so easy to put together and publish. Not only that but the integration with my email auto responder is fabulous.”`,
  clientName: 'Judy Gray',
  clientTitle: 'Leadpages Customer',
}

const integrationInfo = [
  {
    headline: 'Add leads directly to Infusionsoft using tags',
    description:
      'Automatically add or update contact information from form submissions to InfusionSoft using tags.',
  },
  {
    headline: 'Create custom form fields',
    description:
      'If you’d like to collect more than a name and email address, easily embed your ConvertKit form using the Leadpages HTML widget. ',
  },
  {
    headline: 'Receive email notifications for new opt-ins',
    description:
      'Set up automated notifications in either Leadpages or ConvertKit to get new subscriber data sent straight to your inbox.',
  },
  {
    headline: 'Automate your follow-up emails',
    description:
      "Use InfusionSoft’s marketing automation to create targeted emails that send when triggered by a specific date, event, or contact's activity. ",
  },
]

const InfusionSoft = () => {
  const heroData = {
    headlineText: 'Leadpages + Infusionsoft',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Build cohesive campaigns and manage your contacts by integrating Leadpages with Infusionsoft by Keap.',
    heroImage,
  }

  const twoColumnInfo = {
    headline: 'Connect your account in a matter of minutes',
    description: '',
    image: twoColumnImage,
    imageAlt: 'Connecting Infusionsoft',
    checkboxInfo: [
      'Click to integrate your accounts',
      'Select tags to apply to form submissions',
      'Customize your form fields & design',
      'Publish and let the leads roll in!',
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

export default InfusionSoft
