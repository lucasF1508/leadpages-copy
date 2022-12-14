import React from 'react'
// components
import CustomerStoriesRotator from '@components/RotatorCustomer/CustomerRotator'
import DoYourThing from '@legacy/components/customers/DoYourThing'
import FlexRow from '@legacy/components/layout/FlexRow'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import PodcastLeadbox from '@legacy/components/conversion-tools/LB_LikeLearningFromRealPeoplePodcast'
import SEO from '@legacy/components/SEO'
import SpacerRow from '@legacy/components/SpacerRow'
import TwoButtonCTA from '@legacy/components/customers/TwoButtonCTA'
// images
import imageOne from '@legacy/assets/images/totems/This-is-the-lead-generation_785px@2x.jpg'

const CustomersPage = ({ customers }) => (
  <>
    <SEO
      pathname="/customers"
      title="Leadpage Examples | Small Business Success Stories"
      description="Ready to get inspired? Learn how our customers are growing their small businesses every day with these Leadpages examples and case studies."
      image="https://static.leadpages.com/images/og/og-customers.jpg"
    />
    <PodcastLeadbox />
    <SpacerRow size="small" />
    <HeadlineSection
      title="Be inspired by someone like you"
      caption="Join more than 40,000 small businesses who trust us with their dreams."
    />
    <CustomerStoriesRotator customers={customers} showBackgroundImage />
    <DoYourThing />
    <FlexRow
      image={imageOne}
      imageAlt="This is the lead generation"
      headline="This is the lead generation."
      caption="Together, we are a community of countless specialists, enthusiasts, experts, coaches, and independent spirits. We’re building something from scratch and we’re bound together by a shared passion, to pursue ‘our thing’ and create a livelihood—and lifestyle—that is uniquely our own."
    />
    <TwoButtonCTA
      headline="Join our small business success stories."
      caption="Already a customer? Tell us what you’re up to and you may be featured as a Leadpages example or case study."
    />
  </>
)

export default CustomersPage
