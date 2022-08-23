import React from 'react'
import Link from 'next/link'
import { styled } from '@design'
// components
import ColumnFeatureOverlap from '@legacy/components/layout/ColumnFeatureOverlap'
import ThreeColumnOverlap from '@legacy/components/layout/ThreeColumnOverlap'
// images
import rightArrowSVG from '@legacy/assets/images/global/arrow_right_purple.svg'
import webinarsImage1 from '@legacy/assets/images/resources/webinars/Brings-Business@2x.jpg'
import webinarsImage2 from '@legacy/assets/images/resources/webinars/Webinar-Essentials@2x.jpg'
import webinarsImage3 from '@legacy/assets/images/resources/webinars/Coaching-Conversion@2x.jpg'
import webinarsFeaturedTrainingImage from '@legacy/assets/images/resources/webinars/List-Building-Webinar@2x.jpg'

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

const WebinarsMainContainer = styled('div', {
  paddingTop: '160px',
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',

  '@media (max-width: 599px)': {
    paddingTop: '4rem',
  },
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

const ArrowContainer = styled('span', {})

const ArrowRight = styled('img', {
  marginTop: 'auto',
  marginBottom: 'auto',
  width: '20px',
  height: '10px',
})

const OutboundHeadingLink = styled('a', {
  textDecoration: 'none',
  color: '$primary',
})

const HeadingButton = styled('button', {
  alignSelf: 'flex-end',
  paddingLeft: '2%',
  paddingRight: '2%',
  width: '222px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$purpleLight',
  backgroundColor: '$white',
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '@media (max-width: 340px)': {
    width: '209px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $colors$primary',
  },

  [`&:hover ${ArrowRight}`]: {
    WebkitFilter: 'brightness(0) invert(1)',
    filter: 'brightness(0) invert(1)',
  },
})

const WebinarsContainer = () => {
  return (
    <WebinarsMainContainer name="webinars">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>
            Free Webinars & Marketing Training
          </CustomersHeading>
          <CustomersSubHeading>
            Take each and every stage of your business growth further with
            expert training.
          </CustomersSubHeading>
        </div>
        <OutboundHeadingLink href="/webinars" alt="all webinars">
          <HeadingButton>
            All Webinars&nbsp;
            <ArrowContainer>
              <ArrowRight src={rightArrowSVG.src} alt="right arrow" />
            </ArrowContainer>
          </HeadingButton>
        </OutboundHeadingLink>
      </HeadingFlexbox>
      <ColumnFeatureOverlap
        image={webinarsFeaturedTrainingImage}
        imageAlt="Attract Better Clients as You Build Your Email List Faster"
        supertitle="Featured Training"
        title="Attract Better Clients as You Build Your Email List Faster"
        text="Discover how to create the right type of lead magnets for your business, get more qualified leads (quickly), and turn leads into customers within 6 days."
        outboundLink="https://lp.leadpages.com/build-your-email-list/"
        linkAlt="Attract Better Clients as You Build Your Email List Faster"
        buttonText="Webinar Details"
      />
      <ThreeColumnOverlap
        column1image={webinarsImage1}
        column1imageAlt="Build a Website That (Actually) Brings You Business"
        column1heading="Build a Website That (Actually) Brings You Business"
        column1copy="Learn how to create a DIY website that works for you 24/7: collecting leads and closing sales."
        column1webinar="Free Training (Instant Access)"
        column1outboundlink="/webinars/website-brings-you-business"
        column1linkAlt="Webinar Details"
        column1CTA="Webinar Details"
        column2image={webinarsImage2}
        column2imageAlt="Leadpages Essentials"
        column2heading="Leadpages Essentials: How to master Leadpages faster"
        column2copy="This workshop is designed to guide you through the basics of the Leadpages platform."
        column2webinar="Free Training (Instant Access)"
        column2outboundlink="/webinars/essentials"
        column2linkAlt="Webinar Details"
        column2CTA="Webinar Details"
        column3image={webinarsImage3}
        column3imageAlt="Conversion Coaching"
        column3heading="Conversion Coaching: Our best conversion advice"
        column3copy="Access cutting-edge business strategy for today's digital marketer."
        column3webinar="Wednesdays at 2 PM Central"
        column3outboundlink="/webinars/conversion-coaching"
        column3linkAlt="Webinar Details"
        column3CTA="Webinar Details"
        paddingBottom="0"
      />
    </WebinarsMainContainer>
  )
}

export default WebinarsContainer
