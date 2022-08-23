import React from 'react'
import { styled } from '@design'
// components
import ColumnFeatureOverlap from '@legacy/components/layout/ColumnFeatureOverlap'
import ThreeColumnOverlap from '@legacy/components/layout/ThreeColumnOverlap'
import guidesImage1 from '@legacy/assets/images/resources/guides/Guide-to-Landing-Pages_808px@2x.png'
import guidesImage2 from '@legacy/assets/images/resources/guides/Guide-to-Lead-Generation@2x.png'
import guidesImage3 from '@legacy/assets/images/resources/guides/Guide-to-Conversion-Rate-Optimization@2x.png'
import featuredGuideImage from '@legacy/assets/images/resources/guides/Landing Page Examples_808px@2x.jpg'

const HeadingFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '35px',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
  paddingRight: '3rem',
  paddingLeft: '3rem',

  '@>m': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },

  '@<m': {
    display: 'block',
    textAlign: 'center',
  },
})

const MarketingGuidesContainer = styled('div', {
  paddingTop: '160px',
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
})

const CustomersHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',

  '@<m': {
    marginBottom: '27px',
  },
})

const CustomersSubHeading = styled('div', {
  fontSize: '18px',
  lineHeight: '28px',
  fontFamily: 'Apercu Pro',
  color: '$textAlt',
  marginTop: '24px',

  '@<m': {
    display: 'none',
  },
})

const MarketingGuides = () => {
  return (
    <MarketingGuidesContainer name="guides">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>Marketing Guides</CustomersHeading>
          <CustomersSubHeading>
            Master the essentials of conversion marketing with our in-depth
            guides.
          </CustomersSubHeading>
        </div>
      </HeadingFlexbox>
      <ColumnFeatureOverlap
        image={featuredGuideImage}
        imageAlt="Get Inspired with 100+ Landing Page Examples"
        supertitle="Featured"
        title="Get Inspired with 100+ Landing Page Examples"
        text="Need some fresh ideas for an opt-in page, sales page, or to spice up your next split test? Peruse our hand-picked list of top real-world landing pages to take away key lessons and level-up your own marketing efforts."
        link="/landing-page-examples"
        linkAlt="Get Inspired with 100+ Landing Page Examples"
        buttonText="Dive in"
      />
      <ThreeColumnOverlap
        column1image={guidesImage1}
        column1imageAlt="The Ultimate Guide to Landing Pages"
        column1heading="The Ultimate Guide to Landing Pages"
        column1copy="Deliver the right message to the right audience so that you can get the biggest possible return on your time and money. We’ll start with the very basics and make our way down to the nitty-gritty of effective landing page copywriting and design."
        column1link="/landing-pages-guide/"
        column1linkAlt="The Ultimate Guide to Landing Pages"
        column1CTA="Read the Guide"
        column2image={guidesImage2}
        column2imageAlt="The Guide to Lead Generation"
        column2heading="The Guide to Lead Generation"
        column2copy="
          Learn how to create a pipeline for attracting web traffic and converting clicks into contacts—it’s the best way to ensure your small business survives and thrives over the long-term."
        column2link="/lead-generation-guide/"
        column2linkAlt="The Guide to Lead Generation"
        column2CTA="Read the Guide"
        column3image={guidesImage3}
        column3imageAlt="The Guide to Conversion Rate Optimization (CRO)"
        column3heading="The Guide to Conversion Rate Optimization (CRO)"
        column3copy="What makes a great conversion rate and how can you use A/B testing to make the most of every visitor? Become an unofficial conversion rate expert with this hands-on field guide."
        column3link="/conversion-optimization-guide/"
        column3linkAlt="The Guide to Conversion Rate Optimization (CRO)"
        column3CTA="Read the Guide"
        paddingBottom="0"
      />
    </MarketingGuidesContainer>
  )
}

export default MarketingGuides
