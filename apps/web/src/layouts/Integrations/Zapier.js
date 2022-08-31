import React from 'react'
// Components
import SEO from '@legacy/components/SEO'
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'
// Images
import heroImage from '@legacy/assets/images/integrations/subpages/Zapier+Leadpages_464px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/Connect_Zapier+Leadpages_730px@2x.png'
import columnImage1 from '@legacy/assets/images/integrations/subpages/zapier/Send-leads-to-email-lists_Zapier+Leadpages_238px@2x.png'
import columnImage2 from '@legacy/assets/images/integrations/subpages/zapier/Deliver-text-messages_Zapier+Leadpages_178px@2x.png'
import columnImage3 from '@legacy/assets/images/integrations/subpages/zapier/Update-CRM-contacts_Zapier+Leadpages_238px@2x.png'
import columnImage4 from '@legacy/assets/images/integrations/subpages/zapier/Log-submissions_Zapier+Leadpages_238px@2x.png'
import columnImage5 from '@legacy/assets/images/integrations/subpages/zapier/Get-submission-digests_Zapier+Leadpages_238px@2x.png'
import columnImage6 from '@legacy/assets/images/integrations/subpages/zapier/Build-custom-workflows_Zapier+Leadpages_238px@2x.png'
import sallyTestimonial from '@legacy/assets/images/testimonials/sally-zimney-72px@2x.png'

const integrationName = 'Zapier'

const Zapier = () => {
  const integrationInfo = [
    {
      image: columnImage1,
      headline: 'Send leads to email lists',
      description:
        'Capture and collect form subscribers directly inside a segmented email database.',
    },
    {
      image: columnImage2,
      headline: 'Deliver SMS text messages',
      description:
        'Start a text message conversation with people who submit a form.',
      additionalStyle: {
        maxWidth: '185px',
      },
    },
    {
      image: columnImage3,
      headline: 'Update CRM contacts',
      description:
        'Add or update CRM contacts after incoming form submissions.',
    },
    {
      image: columnImage4,
      headline: 'Log submissions',
      description:
        'Register form submissions in a Google Sheet or MySQL table for future reference. ',
    },
    {
      image: columnImage5,
      headline: 'Get submission digests',
      description:
        'Provide your team with a daily/weekly/monthly report via email or Slack.',
    },
    {
      image: columnImage6,
      headline: 'Build custom workflows',
      description:
        'Set up multi-step integrations to automate your project management and marketing stack.',
    },
  ]

  const testimonial = {
    quote: `“Leadpages takes the daunting tasks - tasks that my business depends on, but that are not in my wheelhouse as founder - and makes them doable and beautiful. Leadpages is essential.”`,
    clientName: 'Sally Zimney',
    clientTitle: 'Leadpages Customer',
    image: sallyTestimonial,
  }

  const heroData = {
    headlineText: 'Leadpages + Zapier',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Do more (by doing less) when you access more than 2000+ integrations through Zapier.',
    heroImage,
  }

  const twoColumnInfo = {
    headline: 'Collect Leads + Connect to Powerful Workflows',
    description:
      'Instantly move information between your Leadpages account and web apps, as well as automate your CRM, lead conversion, email, outreach, and more.',
    image: twoColumnImage,
    imageAlt: 'Connecting Zapier',
  }

  return (
    <>
      <SEO
        pathname="integrations/zapier"
        title="Connect Leadpages to 2000+ Apps With Zapier"
        description="Connect your Leadpages account to more than 2000+ apps via Zapier. Easily set up automation rules to free up your daily tasks. No coding required."
        image="https://static.leadpages.com/images/og/og-Leadpages+Zapier.jpg"
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

export default Zapier
