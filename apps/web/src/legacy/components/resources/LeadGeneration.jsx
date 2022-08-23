import React from 'react'
import { styled } from '@design'
import Link from 'next/link'
// components
import ThreeColumnOverlap from '@legacy/components/layout/ThreeColumnOverlap'
// images
import rightArrowSVG from '@legacy/assets/images/global/arrow_right_purple.svg'
import podcastImage1 from '@legacy/assets/images/resources/podcast/podcast_pat-flynn_1216px@2x.jpg'
import podcastImage2 from '@legacy/assets/images/resources/podcast/podcast_chihyu-smith_1216px@2x.jpg'
import podcastImage3 from '@legacy/assets/images/resources/podcast/podcast_talia-wolf_1216px@2x.jpg'

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

const LeadGenerationContainer = styled('div', {
  paddingTop: '160px',
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',

  '@media (max-width: 599px)': {
    paddingTop: '4rem',
  },
})

const HeadingLink = styled('a', {
  textDecoration: 'none',
  color: '$primary',
})

const ArrowContainer = styled('span', {})

const ArrowRight = styled('img', {
  marginTop: 'auto',
  marginBottom: 'auto',
  width: '20px',
  height: '10px',
})

const HeadingButton = styled('button', {
  alignSelf: 'flex-end',
  paddingLeft: '2%',
  paddingRight: '2%',
  width: '222px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$secondary',
  backgroundColor: '$white',
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '@<xs': {
    width: '209px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $primary',
  },

  [`&:hover ${HeadingLink}`]: {
    color: '$white',
  },

  [`&:hover ${ArrowRight}`]: {
    WebkitFilter: 'brightness(0) invert(1)',
    filter: 'brightness(0) invert(1)',
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

const LeadGeneration = () => {
  return (
    <LeadGenerationContainer name="podcast">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>The Lead Generation Podcast</CustomersHeading>
          <CustomersSubHeading>
            Hear from real-world entrepreneurs who share their most valuable
            lessons.
          </CustomersSubHeading>
        </div>
        <HeadingButton>
          <HeadingLink href="/podcast">
            <a aria-label="podcast">
              All Episodes&nbsp;
              <ArrowContainer>
                <ArrowRight src={rightArrowSVG.src} alt="right arrow" />
              </ArrowContainer>
            </a>
          </HeadingLink>
        </HeadingButton>
      </HeadingFlexbox>
      <ThreeColumnOverlap
        column1image={podcastImage1}
        column1imageAlt="Pat Flynn"
        column1heading="Fired From His Day Job & Free to Create His Dream Business with Pat Flynn"
        column1copy="Pat shares the entrepreneurial journey he's been on since he was fired from his promising day job, and the frustrations and lessons he's learned along the way."
        column1outboundlink="https://www.leadpages.com/blog/pat-flynn-lead-generation-podcast/"
        column1linkAlt="Pat Flynn"
        column1CTA="Listen in"
        column2image={podcastImage2}
        column2imageAlt="ChihYu Smith"
        column2heading="Delighting a Hungry Audience with Asian Paleo with ChihYu Smith"
        column2copy="ChihYu Smith shares tips on discovering your niche, how to listen better to your audience, and secrets she’s learned in building up her following."
        column2outboundlink="https://www.leadpages.com/blog/chihyu-smith-lead-generation-podcast/"
        column2linkAlt="ChihYu Smith"
        column2CTA="Listen in"
        column3image={podcastImage3}
        column3imageAlt="Talia Wolf"
        column3heading="Better Practices for Conversion Rate Optimization with Talia Wolf"
        column3copy="Go beyond landing page “best practices” with a better approach to conversion rate optimization using emotion and psychology."
        column3outboundlink="https://www.leadpages.com/blog/talia-wolf-lead-generation-podcast/"
        column3linkAlt="Talia Wolf"
        column3CTA="Listen in"
        paddingBottom="0"
      />
    </LeadGenerationContainer>
  )
}

export default LeadGeneration
