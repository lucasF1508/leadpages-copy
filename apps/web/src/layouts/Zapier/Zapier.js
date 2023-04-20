import React from 'react'
import { styled } from '@design'
// components
import CollectLeads from '@legacy/components/zapier/CollectLeads'
import ConvertYourLeads from '@legacy/components/zapier/ConvertYourLeads'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import LeadsLeadYou from '@legacy/components/zapier/LeadsLeadYou'
import ProductToolkitClickReveal from '@legacy/components/click-reveals/ProductToolkitClickReveal'
import ProductToolkitRotator from '@legacy/components/rotators/ProductToolkitRotator'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SpacerRow from '@legacy/components/SpacerRow'
import ZapierPageHeader from '@legacy/components/zapier/ZapierPageHeader'
import ZapierZaps from '@legacy/components/zapier/ZapierZaps'
// images
import headerImage from '@legacy/assets/images/integrations/Leadpages-zapier-Integrations-550px@2x.png'
import LeadpagesIcon from '@legacy/assets/images/integrations/Leadpages-Leadpages-Zapier@2x.jpg'
import revealImage1 from '@legacy/assets/images/product/website-builder/website-builder_736px@2x.png'
import revealImage2 from '@legacy/assets/images/product/landing-page-builder/landing-page-builder_736px@2x.png'
import revealImage3 from '@legacy/assets/images/product/pop-up-builder/pop-up-form-builder_736px@2x.png'
import revealImage4 from '@legacy/assets/images/product/alert-bars/alert-bar-builder_736px@2x.png'
import ZapsDemioIcon from '@legacy/assets/images/integrations/Demio-Leadpages-Zapier@2x.jpg'
import ZapsDripIcon from '@legacy/assets/images/integrations/Drip_Leadpages-Zapier@2x.jpg'
import ZapsHubspotIcon from '@legacy/assets/images/integrations/Hubspot-Leadpages-Zapier@2x.jpg'
import ZapsMailchimpIcon from '@legacy/assets/images/integrations/Mailchimp_Leadpages_Zapier@2x.jpg'
import ZapsSheetsIcon from '@legacy/assets/images/integrations/Sheets_Leadpages_Zapier@2x.jpg'
import ZapsSlackIcon from '@legacy/assets/images/integrations/Slack-Leadpages-Zapier@2x.jpg'
import bkgSVG from '@legacy/assets/images/shapes/wavy-line-diagonal-sand.svg'
import rightArrowIcon from '@legacy/assets/images/global/arrow_right_grey.svg'
import AlertBarsIconSVG from '@legacy/assets/images/icons/toolkiticons/AlertBars.svg'
import LandingPagesIconSVG from '@legacy/assets/images/icons/toolkiticons/LandingPages.svg'
import PopupsIconSVG from '@legacy/assets/images/icons/toolkiticons/Popup.svg'
import WebsitesIconSVG from '@legacy/assets/images/icons/toolkiticons/Website.svg'

const ClickRevealSection_Desktop = styled('div', {
  display: 'block',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const RotatorSection_Mobile = styled('div', {
  display: 'block',

  '@media (min-width: 769px)': {
    display: 'none',
  },
})

const ZapierPage = () => {
  const productToolkitArray = [
    {
      title: 'Websites',
      text: 'Engineered to be the easiest, most effective online website builder, Leadpages sites help you transform web traffic into leads and sales.',
      icon: WebsitesIconSVG,
      iconAltText: 'websites icon',
      linkText: 'Leadpages Sites',
      linkRoute: '/product/website-builder',
      linkAltText: 'link to website builder feature page',
      revealImage: revealImage1,
      revealImageAltText: 'website builder image',
    },
    {
      title: 'Landing Pages',
      text: 'Build unlimited drag-and-drop landing pages with the help of exclusive built-in conversion guidance that predicts your page’s performance before you publish.',
      icon: LandingPagesIconSVG,
      iconAltText: 'landing pages icon',
      linkText: 'Landing page builder',
      linkRoute: '/product/landing-page-builder',
      linkAltText: 'link to landing page builder feature page',
      revealImage: revealImage2,
      revealImageAltText: 'landing page image',
    },
    {
      title: 'Pop-Ups',
      text: 'Find the right moment for your message by creating pop-ups that trigger on click, time-delays, or exit intent and add them to any webpage with just a few clicks.',
      icon: PopupsIconSVG,
      iconAltText: 'pop-ups icon',
      linkText: 'Pop-up builder',
      linkRoute: '/product/pop-up-builder',
      linkAltText: 'link to pop-up builder feature page',
      revealImage: revealImage3,
      revealImageAltText: 'pop-up image',
    },
    {
      title: 'Alert Bars',
      text: 'Capture your audience’s attention and boost conversions by adding a non-intrusive, mobile-friendly alert bar to any webpage you own.',
      icon: AlertBarsIconSVG,
      iconAltText: 'alert bars icon',
      linkText: 'Alert bars',
      linkRoute: '/product/alert-bars',
      linkAltText: 'link to alert-bar feature page',
      revealImage: revealImage4,
      revealImageAltText: 'alert bar image',
    },
  ]

  return (
    <>
      <ZapierPageHeader image={headerImage} />
      <CollectLeads />
      <SpacerRow size="small" />
      <HeadlineSection
        title="Showcase your business with digital content that’s as sleek as it is smart"
        caption="Build & publish code-free content that’s conversion-optimized from the ground up."
      />
      {/* this section uses a click-reveal on desktop and a rotator on mobile */}
      <ClickRevealSection_Desktop>
        <ProductToolkitClickReveal itemArray={productToolkitArray} />
      </ClickRevealSection_Desktop>
      <RotatorSection_Mobile>
        <ProductToolkitRotator itemArray={productToolkitArray} />
      </RotatorSection_Mobile>
      <SpacerRow size="small" />
      <ReadyToGrow
        bgImage={bkgSVG}
        bgColor="$textHighlight"
        paddingScale={0.5}
        title=""
        headline="Ready to grow boldly?"
        buttonText="Try it now free"
      />
      <ConvertYourLeads />
      <LeadsLeadYou />
      <ZapierZaps
        demioIcon={ZapsDemioIcon}
        dripIcon={ZapsDripIcon}
        hubspotIcon={ZapsHubspotIcon}
        leadpagesIcon={LeadpagesIcon}
        mailchimpIcon={ZapsMailchimpIcon}
        rightArrowIcon={rightArrowIcon}
        slackIcon={ZapsSlackIcon}
        sheetsIcon={ZapsSheetsIcon}
      />
      <ReadyToGrow
        headline="Connect Leadpages to 1400+ Web Apps with Zapier"
        caption="Zapier connects more web apps than anyone. Now you can too. Integrate. Automate. Accelerate."
        buttonText="Try Leadpages free"
      />
    </>
  )
}

export default ZapierPage
