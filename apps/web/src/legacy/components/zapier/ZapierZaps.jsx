import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'

const OuterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$grayAlt',
})

const Container = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '6rem',
  paddingBottom: '3rem',
  px: '3rem',
  textAlign: 'center',

  '@>s': {
    px: '6rem',
    paddingTop: '10rem',
    paddingBottom: '10rem',
  },
})

const InnerContainer = styled('div', {
  position: 'relative',
  zIndex: 2,
})

const Subtitle = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textAlign: 'center',
  textTransform: 'uppercase',
  opacity: 0.5,
  marginBottom: '0.5rem',
})

const Headline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  textAlign: 'center',
  marginBottom: '1.5rem',
  color: '$text',

  '@media (max-width: 767px)': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const Footnote = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$textAlt',
  textAlign: 'center',
})

const Flexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  flexWrap: 'wrap',
  textAlign: 'center',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '2%',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'center',

  '@>s': {
    flex: '0 0 80%',
    maxWidth: '80%',
  },

  '@media (min-width: 768px)': {
    flex: '0 0 44%',
    maxWidth: '44%',
  },

  '@>m': {
    marginBottom: '0rem',
    flex: '0 0 29%',
    maxWidth: '29%',
  },
})

const LogosContainer = styled('div', {
  width: '100%',
  marginTop: '2rem',
  textAlign: 'center',
  height: '48px',

  '&::before': {
    content: '',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: 0,
  },
})

const FlexRowMiddle = styled(FlexRowItem, {
  textAlign: 'center',
  alignSelf: 'center',

  '@>s': {
    flex: '0 0 80%',
    maxWidth: '80%',
  },

  '@media (min-width: 768px)': {
    flex: '0 0 44%',
    maxWidth: '44%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 29%',
    maxWidth: '29%',
  },
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'center',
  alignSelf: 'center',

  '@>s': {
    flex: '0 0 80%',
    maxWidth: '80%',
  },

  '@media (min-width: 768px)': {
    flex: '0 0 44%',
    maxWidth: '44%',
  },

  '@>m': {
    marginBottom: '0rem',
    flex: '0 0 29%',
    maxWidth: '29%',
  },
})

const FeaturesContainer = styled('div', {
  marginBottom: '2rem',
})

const FeatureContainer = styled('div', {
  position: 'relative',
  marginBottom: '0.5rem',
  display: 'block',
})

const Feature = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '0.5rem',
  marginTop: '2rem',
})

const ImageIcon = styled(Image, {
  height: '100%',
  width: '100%',
  maxWidth: '48px',
  maxHeight: '48px',
  display: 'inline-block',
  verticalAlign: 'middle',
})

const Character = styled('div', {
  display: 'inline-block',
  verticalAlign: 'middle',
  mx: '10px',
  color: '$darkGray',
  fontSize: '20px',
})

const RightArrow = styled('img', {
  display: 'inline-block',
  verticalAlign: 'middle',
  mx: '10px',
  color: '$darkGray',
  width: '12px',
  height: '12px',
})

const ZapierZaps = ({
  leadpagesIcon,
  rightArrowIcon,
  hubspotIcon,
  dripIcon,
  sheetsIcon,
  slackIcon,
  demioIcon,
  mailchimpIcon,
}) => (
  <OuterContainer>
    <Container>
      <InnerContainer>
        <Subtitle>Zapier Premium Feature</Subtitle>
        <Headline>Multiply your free time with multi-step Zaps</Headline>
        <Flexbox>
          <FlexRowLeft>
            <LogosContainer>
              <ImageIcon image={leadpagesIcon} alt="Leadpages Icon" />
              <RightArrow src={rightArrowIcon.src} />
              <ImageIcon image={hubspotIcon} alt="Hubspot Icon" />
              <Character>+</Character>
              <ImageIcon image={dripIcon} alt="Drip Icon" />
            </LogosContainer>
            <FeaturesContainer>
              <FeatureContainer>
                <Feature>
                  Capture leads, update your Hubspot CRM contacts, and engage
                  them with automated Drip emails
                </Feature>
              </FeatureContainer>
            </FeaturesContainer>
          </FlexRowLeft>
          <FlexRowMiddle>
            <LogosContainer>
              <ImageIcon image={leadpagesIcon} alt="Leadpages Icon" />
              <RightArrow src={rightArrowIcon.src} />
              <ImageIcon image={sheetsIcon} alt="Sheets Icon" />
              <Character>+</Character>
              <ImageIcon image={slackIcon} alt="Slack Icon" />
            </LogosContainer>
            <FeaturesContainer>
              <FeatureContainer>
                <Feature>
                  Record Leadpages form submissions in a Google Sheet and send a
                  Slack notification to your sales team
                </Feature>
              </FeatureContainer>
            </FeaturesContainer>
          </FlexRowMiddle>
          <FlexRowRight>
            <LogosContainer>
              <ImageIcon image={leadpagesIcon} alt="Leadpages Icon" />
              <RightArrow src={rightArrowIcon.src} />
              <ImageIcon image={demioIcon} alt="Demio Icon" />
              <Character>+</Character>
              <ImageIcon image={mailchimpIcon} alt="Mailchimp Icon" />
            </LogosContainer>
            <FeaturesContainer>
              <FeatureContainer>
                <Feature>
                  Sign-up new leads as Demio webinar registrants and send
                  instant nurture emails with Mailchimp
                </Feature>
              </FeatureContainer>
            </FeaturesContainer>
          </FlexRowRight>
        </Flexbox>
        <Footnote>
          Mutli-step Zaps are a premium feature on Zapier and require a paid
          Zapier plan starting at $20/month.
        </Footnote>
      </InnerContainer>
    </Container>
  </OuterContainer>
)

ZapierZaps.propTypes = {
  demioIcon: PropTypes.object.isRequired,
  dripIcon: PropTypes.object.isRequired,
  hubspotIcon: PropTypes.object.isRequired,
  leadpagesIcon: PropTypes.object.isRequired,
  mailchimpIcon: PropTypes.object.isRequired,
  rightArrowIcon: PropTypes.node.isRequired,
  sheetsIcon: PropTypes.object.isRequired,
  slackIcon: PropTypes.object.isRequired,
}

export default ZapierZaps
