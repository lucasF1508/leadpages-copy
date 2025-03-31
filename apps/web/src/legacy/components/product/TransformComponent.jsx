import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from 'next/link'
// images
import imageOne from '@legacy/assets/images/product/leadmeter/leadmeter-totem_690px@2x.png'
import imageTwo from '@legacy/assets/images/product/landing-page-builder/templates-totem_569px@2x.png'
import skillbkgSVG from '@legacy/assets/images/shapes/wedge-forest.svg'
import conversionbkgSVG from '@legacy/assets/images/shapes/rounded-square-lavender.svg'
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'

const TransformContainer = styled('div', {})

const TransformHeadline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  textAlign: 'center',
  marginBottom: '4rem',
  color: '$text',
  px: '3rem',

  '@>s': {
    px: '3rem',
    flexDirection: 'row-reverse',
  },
  '@>m': {
    px: '6rem',
  },

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const ConversionOuterContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  marginTop: '3rem',
  marginBottom: '10rem',

  '@<s': {
    marginBottom: '6rem',
  },
})

const ConversionContainer = styled(FlexRow, {
  maxWidth: '1140px',
  mx: 'auto',
  flexWrap: 'wrap',
  px: '3rem',

  '@>m': {
    px: '6rem',
  },
})

const SkillOuterContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  marginTop: '3rem',
  marginBottom: '6rem',

  '@<s': {
    marginBottom: '4rem',
  },
})

const SkillContainer = styled(FlexRow, {
  maxWidth: '1140px',
  mx: 'auto',
  flexWrap: 'wrap',
  flexDirection: 'row',
  px: '3rem',

  '@>s': {
    px: '3rem',
    flexDirection: 'row-reverse',
  },

  '@>m': {
    px: '6rem',
  },
})

const FlexRowItem6 = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
  justifyContent: 'space-between',
  textAlign: 'left',
  marginRight: '1%',
  marginBottom: '2rem',

  '@>s': {
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const ConversionTextContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const ConversionHeadingContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const ConversionCopyContainer = styled(FlexRowItem6, {
  display: 'flex',
  flexWrap: 'wrap',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const ConversionImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',
  marginBottom: '0rem',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 577px) and (max-width: 993px)': {
    maxWidth: '80%',
    mx: 'auto',
  },

  '@>m': {
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const SkillTextContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const SkillHeadingContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const SkillCopyContainer = styled(FlexRowItem6, {
  display: 'flex',
  flexWrap: 'wrap',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const SkillImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',
  position: 'relative',
  marginBottom: '0rem',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const FlexRowItem6Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1rem',
})

const FlexRowItem6Copy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
})

const LeftHeading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '1.375rem',
  fontWeight: 500,
  lineHeight: '2rem',
  color: '$text',
  marginBottom: '1rem',

  '@<s': {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
})

const TransformCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '4rem',
})

const SVGLeftContainer = styled('img', {
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: '$under',
  overflowX: 'hidden',

  '@media (max-width: 768px)': {
    maxWidth: '60%',
  },
})

const SVGRightContainer = styled('img', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: '$under',
  overflowX: 'hidden',

  '@media (max-width: 768px)': {
    maxWidth: '80%',
  },
})

const CTA = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'left',
  fontWeight: 500,
  marginBottom: '1rem',
})

const ArrowRightPurple = styled('img', {
  width: '20px',
  height: '10px',
})

const TransformComponent = () => (
  <TransformContainer>
    <TransformHeadline>
      Transform your web traffic into business growth
    </TransformHeadline>
    <ConversionOuterContainer>
      <SVGRightContainer
        src={conversionbkgSVG.src}
        alt="transform your web traffic into business growth"
      />
      <ConversionContainer>
        <ConversionTextContainer>
          <ConversionHeadingContainer>
            <LeftHeading>Access the complete conversion toolkit</LeftHeading>
            <TransformCopy>
              Only Leadpages products are conversion-optimized from the ground
              up, so you can rest assured that your marketing has maximum
              impact.
            </TransformCopy>
          </ConversionHeadingContainer>
          <ConversionCopyContainer>
            <FlexRowItem6>
              <FlexRowItem6Heading>Real-time guidance</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Experience the only platform that gives you optimization tips in
                real time, to help predict a page’s performance before you
                publish.
              </FlexRowItem6Copy>
              <Link href="/product/leadmeter">
                <CTA>
                  Discover Leadmeter &nbsp;
                  <ArrowRightPurple
                    src={rightArrowPurple.src}
                    alt="purple right arrow"
                  />
                </CTA>
              </Link>
            </FlexRowItem6>
            <FlexRowItem6>
              <FlexRowItem6Heading>Simplified analytics</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Quickly check up on your content’s performance with an
                easy-to-read, real-time data dashboard.
              </FlexRowItem6Copy>
            </FlexRowItem6>
            <FlexRowItem6>
              <FlexRowItem6Heading>A/B split testing</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Optimize your landing pages for higher conversions by running
                unlimited split tests—including A/B tests.
              </FlexRowItem6Copy>
            </FlexRowItem6>
          </ConversionCopyContainer>
        </ConversionTextContainer>
        <ConversionImageContainer>
          <Image image={imageOne} alt="A/B split testing" />
        </ConversionImageContainer>
      </ConversionContainer>
    </ConversionOuterContainer>
    <SkillOuterContainer>
      <SVGLeftContainer src={skillbkgSVG.src} alt="background svg" />
      <SkillContainer>
        <SkillTextContainer>
          <SkillHeadingContainer>
            <LeftHeading>
              No high-tech skill? No problem.
              <br />
              Finally, digital marketing you can truly DIY
            </LeftHeading>
            <TransformCopy>
              Intuitive tools that make it easy to create, publish, and update
              your content at the drop of a hat. Forget freelancers, delays, and
              extra expenses—we’re making it easier than you ever thought
              possible.
            </TransformCopy>
          </SkillHeadingContainer>
          <SkillCopyContainer>
            <FlexRowItem6>
              <FlexRowItem6Heading>Code-free publishing</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Create and publish professional-quality, mobile-responsive pages
                in a matter of minutes without touching a speck of code.
              </FlexRowItem6Copy>
            </FlexRowItem6>
            <FlexRowItem6>
              <FlexRowItem6Heading>Ready-made templates</FlexRowItem6Heading>
              <FlexRowItem6Copy>
                Publish in minutes with professionally-designed templates and
                drag-and-drop customization.
              </FlexRowItem6Copy>
              <Link href="/templates">
                <CTA>
                  Visit template gallery &nbsp;
                  <ArrowRightPurple
                    src={rightArrowPurple.src}
                    alt="purple right arrow"
                  />
                </CTA>
              </Link>
            </FlexRowItem6>
          </SkillCopyContainer>
        </SkillTextContainer>
        <SkillImageContainer>
          <Image image={imageTwo} alt="Ready-made templates" />
        </SkillImageContainer>
      </SkillContainer>
    </SkillOuterContainer>
  </TransformContainer>
)

export default TransformComponent
