import React from 'react'
import { styled } from '@design'
// components
import ThreeColumn from '@legacy/components/layout/ThreeColumn'
// images
import rightArrowSVG from '@legacy/assets/images/global/arrow_right_purple.svg'
import blogImage1 from '@legacy/assets/images/resources/blog/blog-website-builder-announcement_690px@2x.jpg'
import blogImage2 from '@legacy/assets/images/resources/blog/blog-secrets-of-high-converting-sales-pags_1200px@2x.jpg'
import blogImage3 from '@legacy/assets/images/resources/blog/blog-calendly-and-leadpages_790px@2x.jpg'
import Link from 'next/link'

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

const BlogContainer = styled('div', {
  paddingTop: '107px',
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
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
    border: '3px solid $colors$primary',
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

const BlogSection = () => {
  return (
    <BlogContainer id="blogsection" name="blog">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>Faves from our Blog</CustomersHeading>
          <CustomersSubHeading>
            Stay up-to-date on marketing trends with articles that will teach
            and inspire. From conversion optimization tips, social media
            marketing tricks, and case studies, to the nitty-gritties of
            copywriting tactics and timing for scheduling posts, it’s everything
            you need to optimize your marketing strategy.
          </CustomersSubHeading>
        </div>
        <Link href="https://www.leadpages.com/blog" passHref legacyBehavior>
          <HeadingLink alt="blog">
            <HeadingButton>
              Visit the Blog&nbsp;
              <ArrowContainer>
                <ArrowRight src={rightArrowSVG.src} alt="right arrow" />
              </ArrowContainer>
            </HeadingButton>
          </HeadingLink>
        </Link>
      </HeadingFlexbox>
      <ThreeColumn
        column1image={blogImage1}
        column1imageAlt="[Feature Release] Get online and grow with Leadpages Sites"
        column1heading="[Feature Release] Get online and grow with Leadpages Sites"
        column1outboundlink="https://www.leadpages.com/blog/leadpages-website-builder/"
        column1linkAlt="Read More"
        column1CTA="Read More"
        column2image={blogImage2}
        column2imageAlt="The Secrets of High-Converting, Non-Sleazy Sales Pages"
        column2heading="The Secrets of High-Converting, Non-Sleazy Sales Pages"
        column2outboundlink="https://www.leadpages.com/blog/sales-page/"
        column2linkAlt="Read More"
        column2CTA="Read More"
        column3image={blogImage3}
        column3imageAlt="Calendly + Leadpages: Book an Appointment Right on Your Landing Page"
        column3heading="Calendly + Leadpages: Book an Appointment Right on Your Landing Page"
        column3outboundlink="https://www.leadpages.com/blog/calendly-widget/"
        column3linkAlt="Read More"
        column3CTA="Read More"
      />
    </BlogContainer>
  )
}

export default BlogSection
