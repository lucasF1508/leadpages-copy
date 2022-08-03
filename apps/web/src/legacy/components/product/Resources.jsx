import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from 'next/link'
// images
import imageOne from '@legacy/assets/images/totems/staci-support-totem-chat.png'
import leftbkgSVG from '@legacy/assets/images/shapes/wedge-sand-curve.svg'
import rightbkgSVG from '@legacy/assets/images/shapes/arch-stepright-rose.svg'
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const ResourcesContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingLeft: '3rem',
  paddingTop: '3rem',

  '@>s': {
    paddingLeft: '6rem',
    paddingTop: '6rem',
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
})

const FlexCopyContainer = styled(FlexRow, {
  flexWrap: 'wrap',

  '@>s': {
    flexWrap: 'nowrap',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
})

const FlexRowItem6 = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'left',
  marginRight: '1%',
  flex: '0 0 98%',
  maxWidth: '98%',
  marginBottom: '2rem',

  '@>s': {
    flex: '0 0 47%',
    maxWidth: '47%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const FlexRowItem6Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1.25rem',
})

const FlexRowItem6Copy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1.25rem',
})

const FlexRowItem6CTA = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1rem',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'left',
  flex: '0 0 90%',
  maxWidth: '90%',
  marginBottom: '2rem',

  '@>s': {
    flex: '0 0 70%',
    maxWidth: '70%',
    marginBottom: '3rem',
  },

  '@>m': {
    flex: '0 0 45.6666%',
    maxWidth: '45.6666%',
  },
})
const HeaderImgLeft = styled('div', {
  width: '100%',
  position: 'relative',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',
  alignSelf: 'flex-end',
  marginLeft: 'auto',
  padding: 0,

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 49%',
    maxWidth: '49%',
  },
})

const LeftHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  color: '$text',
  marginBottom: '4rem',
  maxWidth: '375px',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const SVGLeftContainer = styled('img', {
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: '$under',
  marginBottom: '-3rem',
  marginLeft: '-3rem',

  '@<m': {
    display: 'none',
  },
})

const SVGRightContainer = styled('img', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: '$under',
})

const ArrowRightPurple = styled('img', {
  width: '20px',
  height: '10px',
})

const Resources = () => (
  <OuterContainer>
    <SVGLeftContainer src={leftbkgSVG.src} alt="background svg" />
    <SVGRightContainer src={rightbkgSVG.src} alt="background svg" />
    <ResourcesContainer>
      <FlexRow>
        <FlexRowLeft>
          <LeftHeading>
            Get the support & resources that will help you go the distance
          </LeftHeading>
          <FlexCopyContainer>
            <FlexRowItem6>
              <FlexRowItem6Heading>Tech Support</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Have a question? Hit a snag? Get the help you need, when you
                need it.
              </FlexRowItem6Copy>
              <a
                href="https://support.leadpages.com/hc/en-us"
                aria-label="support link"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FlexRowItem6CTA>
                  Visit the Help Center&nbsp;
                  <ArrowRightPurple
                    src={rightArrowPurple.src}
                    alt="purple right arrow"
                  />
                </FlexRowItem6CTA>
              </a>
            </FlexRowItem6>
            <FlexRowItem6>
              <FlexRowItem6Heading>Webinars + Coaching</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Level-up your skills with virtual workshops, coaching, and free
                resources.
              </FlexRowItem6Copy>
              <Link href="https://www.leadpages.com/marketing-resources">
                <a
                  aria-label="resources link"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FlexRowItem6CTA>
                    Discover Marketing Resources&nbsp;
                    <ArrowRightPurple
                      src={rightArrowPurple.src}
                      alt="purple right arrow"
                    />
                  </FlexRowItem6CTA>
                </a>
              </Link>
            </FlexRowItem6>
          </FlexCopyContainer>
          <FlexCopyContainer>
            <FlexRowItem6>
              <FlexRowItem6Heading>Online Community</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Connect with thousands of small business owners just like you.
              </FlexRowItem6Copy>
              <a
                href="https://facebook.com/groups/leadpages"
                aria-label="link to facebook page"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FlexRowItem6CTA>
                  Join the Facebook Community&nbsp;
                  <ArrowRightPurple
                    src={rightArrowPurple.src}
                    alt="purple right arrow"
                  />
                </FlexRowItem6CTA>
              </a>
            </FlexRowItem6>
            <FlexRowItem6>
              <FlexRowItem6Heading>Certified Professionals</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Partner with a Leadpages certified professional to do the work
                for you.
              </FlexRowItem6Copy>
              <a
                href="https://www.convertedu.com/certified/"
                aria-label="Connect with a certified professional"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FlexRowItem6CTA>
                  Hire a Pro&nbsp;
                  <ArrowRightPurple
                    src={rightArrowPurple.src}
                    alt="purple right arrow"
                  />
                </FlexRowItem6CTA>
              </a>
            </FlexRowItem6>
          </FlexCopyContainer>
        </FlexRowLeft>
        <FlexRowRight>
          <HeaderImgLeft>
            <Image image={imageOne} alt="Hire a Leadpages pro" />
          </HeaderImgLeft>
        </FlexRowRight>
      </FlexRow>
    </ResourcesContainer>
  </OuterContainer>
)

export default Resources
