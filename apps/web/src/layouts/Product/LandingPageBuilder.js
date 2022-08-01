import React from 'react'
// components
import ChildPageHeader from '@legacy/components/product/ChildPageHeader'
// import CustomerSuccessTestimonialsRotator from '@legacy/components/rotators/CustomerSuccessTestimonialsRotator'
import EasilyTest from '@legacy/components/product/EasilyTest'
// import GetInspired_LandingPage from '@legacy/components/product/GetInspired_LandingPage'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
// import HomePageTraffic from '@legacy/components/product/HomePageTraffic'
// import PowerfulFeatures from '@legacy/components/product/PowerfulFeatures'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
// import SaveTime from '@legacy/components/product/SaveTime'
import SEO from '@legacy/components/SEO'
import SpacerRow from '@legacy/components/SpacerRow'
// import TakeControl from '@legacy/components/product/TakeControl'
// import ToolkitCardsGrid from '@legacy/components/grids/ToolkitCardsGrid'
// images
import heroImage from '@legacy/assets/images/heros/landing-page-builder-hero_831px@2x.png'
import semicircleGraySVG from '@legacy/assets/images/shapes/semicircle-gray.svg'

const LandingPageBuilderProductPage = () => (
  <>
    <SEO
      pathname="/product/landing-page-builder"
      title="Create Professional Landing Pages with Leadpages"
      description="Use Leadpages' drag-n-drop landing page builder to create a professional page for your business. Integrations, templates, etc.—everything you need is here."
      image="https://static.leadpages.com/images/og/og-landing-page-builder.jpg"
    />
    <ChildPageHeader
      headingText="Landing Pages"
      subheadingText="Confidently grow your business by turning clicks into customers with high-converting landing pages you can easily DIY."
      showCTA
      CTAtext="Visit the template gallery "
      link="/templates"
      linkText="Visit the template gallery"
      image={heroImage}
      imageAltText="Confidently grow your business"
      bgImage={semicircleGraySVG}
      bgImageAltText="Confidently grow your business"
    />
    {/* <PowerfulFeatures />
    <TakeControl />
    <HomePageTraffic />  */}
    <EasilyTest />
    {/* <SaveTime />
    <GetInspired_LandingPage /> */}
    <SpacerRow size="small" />
    <HeadlineSection
      supertitle="Customer Success Team"
      title="Real people answering real questions. Imagine that."
      caption="We work hard to build a product that helps your business grow with online marketing, and our support team works even harder to partner with you to generate leads. With custom videos, phone, email, and chat — we’re here when you need us."
    />
    {/* <CustomerSuccessTestimonialsRotator /> */}
    <SpacerRow size="small" backgroundColor="$grayAlt" />
    <HeadlineSection
      title="Access the complete conversion toolkit"
      caption="Explore more Leadpages tools"
      backgroundColor="$grayAlt"
    />
    {/* <ToolkitCardsGrid hide={['landingpages']} /> */}
    <ReadyToGrow headline="Ready to create your first landing page?" />
  </>
)

export default LandingPageBuilderProductPage
