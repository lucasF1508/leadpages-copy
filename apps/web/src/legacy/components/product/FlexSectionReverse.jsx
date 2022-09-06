import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import { RPImage } from '@legacy/constants/types'

const OuterContainer = styled('div', {
  position: 'relative',
  marginTop: '6rem',
  marginBottom: '11rem',

  '@<s': {
    marginBottom: '4.5rem',
    marginTop: '2rem',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    marginBottom: '8.5rem',
    marginTop: '2rem',
  },

  '@>m': {
    marginBottom: '11rem',
  },
})

const MainContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  zIndex: 2,
  position: 'relative',
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const OuterFlexContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  marginTop: '3rem',
  marginBottom: '6rem',
})

const ReverseInnerFlexContainer = styled(FlexRow, {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  marginBottom: 0,
  flexDirection: 'row-reverse',

  '@media (max-width: 991px)': {
    px: '3rem',
  },
})

const FlexRowItem6 = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  px: '1%',
  justifyContent: 'space-between',
  textAlign: 'left',
  marginRight: '1%',
})

const TextContainer = styled(FlexRowItem6, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '@<s': {
    maxWidth: '100%',
    marginBottom: '2rem',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    maxWidth: '66%',
    marginBottom: '4rem',
  },

  '@media (min-width: 992px)': {
    my: 'auto',
    maxWidth: '40%',
    marginBottom: 0,
    flex: '0 0 34%',
    width: '34%',
  },
})

const ReverseImageContainer = styled(FlexRowItem6, {
  position: 'relative',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    flex: '0 0 66%',
    maxWidth: '66%',
    marginRight: 'auto',
  },

  '@media (min-width: 992px)': {
    marginBottom: 0,
    flex: '0 0 64%',
    maxWidth: '630px',
    width: '64%',
  },
})

const Title = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '$black',
  marginBottom: '26px',
})

const Headline = styled('div', {
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  fontSize: '22px',
  lineHeight: '32px',
  color: '$text',
  marginBottom: '16px',
})

const Caption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0px',
  color: '$textAlt',
  marginBottom: '16px',

  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
    marginBottom: '16px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    marginBottom: '16px',
  },

  '@media (min-width: 993px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
    marginBottom: '24px',
  },
})

const BackgroundImage = styled('img', {
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: 1,
  width: '50%',
  maxWidth: '800px',
  overflowX: 'hidden',
  marginLeft: '-25vw',
})

const FlexSectionReverse = ({
  bgImage,
  bgImageAlt,
  title,
  headline,
  caption,
  image,
  imageAlt,
  children,
}) => (
  <OuterContainer>
    <BackgroundImage src={bgImage.src} alt={bgImageAlt} />
    <MainContainer>
      <OuterFlexContainer>
        <ReverseInnerFlexContainer>
          <TextContainer>
            <Title>{title}</Title>
            <Headline>{headline}</Headline>
            <Caption>{caption}</Caption>
          </TextContainer>
          <ReverseImageContainer>
            {image && <Image image={image} alt={imageAlt} />}
            {children}
          </ReverseImageContainer>
        </ReverseInnerFlexContainer>
      </OuterFlexContainer>
    </MainContainer>
  </OuterContainer>
)

FlexSectionReverse.defaultProps = {
  bgImage: '',
  bgImageAlt: '',
  title: '',
  headline: '',
  caption: '',
  imageAlt: '',
  children: '',
}

FlexSectionReverse.propTypes = {
  bgImage: PropTypes.node,
  bgImageAlt: PropTypes.string,
  title: PropTypes.string,
  headline: PropTypes.string,
  caption: PropTypes.string,
  image: RPImage.isRequired,
  imageAlt: PropTypes.string,
  children: PropTypes.node,
}

export default FlexSectionReverse
