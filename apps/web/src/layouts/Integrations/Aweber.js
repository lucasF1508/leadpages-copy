import React from 'react'
// Components
import SEO from '@legacy/components/SEO'
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'
// Images
import heroImage from '@legacy/assets/images/integrations/subpages/AWeber+Leadpages_304px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/AWeber-connect_730px@2x.png'
import marcoTestimonial from '@legacy/assets/images/testimonials/Marco-Cirillo-72px@2x.png'

const integrationName = 'AWeber'

const integrationInfo = [
  {
    headline: 'Collect & segment your leads',
    description:
      'Automatically add or update contact information from form submissions to AWeber list and apply tags to further segment your audience.',
  },
  {
    headline: 'Embed an AWeber form',
    description:
      'Easily embed any AWeber form on a Leadpages pop-up, landing page, or web page.',
  },
  {
    headline: 'Create and apply tags to subscribers',
    description:
      'In addition to sending your leads to an AWeber list, you can also apply AWeber tags to subscribers, selecting up to 10 tags per Leadpages form.',
  },
  {
    headline: 'Create custom form fields',
    description:
      'Customize your field inputs and response styles by setting up additional custom fields within your AWeber account.',
  },
  {
    headline: 'Receive email notifications for new opt-ins',
    description:
      'Set up automated notifications in either Leadpages or AWeber to get new subscriber data sent straight to your inbox.',
  },
  {
    headline: 'Automate your follow-up emails',
    description:
      "Use AWeber’s marketing automation to create targeted emails that send when triggered by a specific date, event, or contact's activity",
  },
]

const Aweber = () => {
  const testimonial = {
    quote: `"Leadpages is easy to use! I had been using ClickFunnels since 2015 but I immediately switched to Leadpages as soon as I saw it. I love the templates and the "clean" pages. It's also great that you can live chat with the support team."`,
    clientName: 'Marco Cirillo',
    clientTitle: 'Leadpages Customer',
    image: marcoTestimonial,
  }

  const heroData = {
    headlineText: 'Leadpages + AWeber',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Connect multiple AWeber accounts to Leadpages, send leads to designated lists, create and apply tags, then nurture subscribers with automated email sequences.',
    heroImage,
  }

  const twoColumnInfo = {
    headline: 'Connect your account in a matter of minutes',
    description: '',
    image: twoColumnImage,
    imageAlt: 'Connecting AWeber',
    checkboxInfo: [
      'Click to integrate your accounts',
      'Select an Aweber list or form embed',
      'Customize your form fields & design',
      'Apply up to 10 tags per opt-in form',
      'Publish and let the leads roll in! ',
    ],
  }

  return (
    <>
      <SEO
        pathname="integrations/aweber"
        title="Connect your Leadpages to AWeber| Get Online & Grow"
        description="Easily integrate Leadpages with AWeber. Connect your Leadpages froms to collect, segment, and update subscribers and trigger automated email campaigns."
        image="https://static.leadpages.com/images/og/og-Leadpages+AWeber.jpg"
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

export default Aweber
