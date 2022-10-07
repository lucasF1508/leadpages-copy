import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import { styled } from '@design'
import { RPImage } from '@legacy/constants/types'

const OuterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$grayAlt',
  paddingTop: '6rem',
  overflow: 'hidden',
})

const HeaderContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: '3rem',
  paddingLeft: '3rem',

  '@>m': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
  zIndex: 2,
})

const FlexRow = styled('div', {
  paddingTop: '3rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  '@media (max-width: 768px)': {
    display: 'block',
    paddingBottom: '3rem',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  paddingLeft: '1%',
  paddingRight: '1%',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'left',
  WebkitBoxFlex: 0,
  MsFlex: '0 0 100%',
  flex: '0 0 100%',
  maxWidth: '100%',

  '@media (min-width: 769px)': {
    marginBottom: '2rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 45%',
    flex: '0 0 45%',
    maxWidth: '45%',
  },
})
const HeaderImgLeft = styled('div', {
  width: '100%',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const MobileImage = styled('div', {
  display: 'none',
  width: '100%',

  '@media (max-width: 768px)': {
    display: 'block',
    marginBottom: '2rem',
  },
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',
  alignSelf: 'flex-end',

  '@>s': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 769px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 45%',
    flex: '0 0 45%',
    maxWidth: '45%',
    textAlign: 'left',
  },
})

const LeftHeading = styled('div', {
  marginTop: '1rem',
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  color: '$text',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const LeftParagraph1 = styled('div', {
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

const LeftParagraph2 = styled(LeftParagraph1, {})

const SVGContainer = styled('img', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  overflowX: 'hidden',
  maxHeight: '100%',

  '@media (max-width: 1260px)': {
    width: '50%',
    maxHeight: 'none',
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const ChildPageHeader = ({
  bgImage,
  bgImageAltText,
  headingText,
  subheadingText1,
  image,
  imageAltText,
  subheadingText2,
}) => (
  <OuterContainer>
    <SVGContainer src={bgImage.src} alt={bgImageAltText} />
    <HeaderContainer>
      <FlexRow>
        <FlexRowLeft>
          <LeftHeading>{headingText}</LeftHeading>
          <LeftParagraph1>{subheadingText1}</LeftParagraph1>
          <MobileImage>
            <Image image={image} alt={imageAltText} />
          </MobileImage>
          <LeftParagraph2>{subheadingText2}</LeftParagraph2>
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

ChildPageHeader.defaultProps = {
  bgImage: '',
  bgImageAltText: '',
  headingText: '',
  subheadingText1: '',
  imageAltText: '',
  subheadingText2: '',
}

ChildPageHeader.propTypes = {
  bgImage: PropTypes.node,
  bgImageAltText: PropTypes.string,
  headingText: PropTypes.string,
  subheadingText1: PropTypes.string,
  image: RPImage.isRequired,
  imageAltText: PropTypes.string,
  subheadingText2: PropTypes.string,
}

export default ChildPageHeader
