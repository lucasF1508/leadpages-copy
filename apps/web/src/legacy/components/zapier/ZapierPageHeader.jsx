import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import Link from 'next/link'

const OuterContainer = styled('div', {
  marginTop: '-60px',
  paddingTop: '108px',
  position: 'relative',
})

const HeaderContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  px: '2rem',
  zIndex: 2,

  '@>m': {
    px: '6rem',
  },
})

const FlexRow = styled('div', {
  paddingTop: '3rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'left',
  marginBottom: '4rem',
  flex: '0 0 100%',
  maxWidth: '100%',

  '@>s': {
    flex: '0 0 40.6666%',
    maxWidth: '40.6666%',
  },

  '@>m': {
    flex: '0 0 45%',
    maxWidth: '45%',
  },
})

const HeaderImgLeft = styled('div', {
  width: '100%',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',
  alignSelf: 'flex-end',

  '@>s': {
    flex: '0 0 45%',
    maxWidth: '45%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const SmallHeading = styled('div', {
  fontFamily: 'Space Mono',
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
})

const LeftHeading = styled('div', {
  marginTop: '1rem',
  fontFamily: 'Value Serif',
  fontSize: '28px',
  lineHeight: '34px',
  letterSpacing: '0px',
  color: '$text',
  marginBottom: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: 0,
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
  },

  '@media (min-width: 993px)': {
    fontSize: '56px',
    lineHeight: '60px',
    letterSpacing: 0,
  },
})

const LeftSubHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '1.125rem',
  lineHeight: '1.875rem',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
})

const RTGButtonContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

const RTGButton = styled('button', {
  width: '278px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$primary',
  backgroundColor: '$primary',
  color: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '@<xs': {
    width: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
  },
})

const ZapierPageHeader = ({ image, imageAltText }) => (
  <OuterContainer>
    <HeaderContainer>
      <FlexRow>
        <FlexRowLeft>
          <SmallHeading>Leadpages + Zapier</SmallHeading>
          <LeftHeading>
            <h1>Send your leads to the tools you love</h1>
          </LeftHeading>
          <LeftSubHeading>
            Easily collect leads on your Leadpages site, landing pages, pop-ups,
            and alert bars, then let the data flow to 1400+ apps through Zapier.
          </LeftSubHeading>
          <RTGButtonContainer>
            <Link href="/pricing" aria-label="Leadpages Free Trial">
              <a>
                <RTGButton>Try It Free</RTGButton>
              </a>
            </Link>
          </RTGButtonContainer>
        </FlexRowLeft>
        <FlexRowRight>
          <HeaderImgLeft>
            <Image image={image} alt={imageAltText} />
          </HeaderImgLeft>
        </FlexRowRight>
      </FlexRow>
    </HeaderContainer>
  </OuterContainer>
)

ZapierPageHeader.defaultProps = {
  imageAltText: 'Zapier header background',
}

ZapierPageHeader.propTypes = {
  image: Image.isRequired,
  imageAltText: PropTypes.string,
}

export default ZapierPageHeader
