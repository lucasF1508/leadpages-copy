import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import PropTypes from 'prop-types'
// Image
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'

const OuterContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

const FlexContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '6.4rem 6rem 7rem 6rem',

  width: '100%',
  maxWidth: '1140px',

  '@media (max-width: 1023px)': {
    marginRight: '3rem',
    marginLeft: '3rem',
  },

  '@media (max-width: 768px)': {
    margin: '5.8rem 1.2rem 4rem 2.7rem',
  },

  '@media (max-width: 425px)': {
    display: 'block',
    margin: '2.75rem 1.8rem 3.8rem 1.8rem',
  },
})

const TextFlexItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  marginRight: '8.3rem',

  '@media (max-width: 769px)': {
    flex: '0 0 45%',
    marginRight: '3.7rem',
  },

  '@media (max-width: 425px)': {
    marginRight: 0,
    marginBottom: '3.3rem',
  },
})

const Headline = styled('h2', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  marginBottom: '0.9rem',

  '@media (max-width: 425px)': {
    marginBottom: '2.4rem',
  },
})

const Description = styled('p', {
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
})

const ImageFlexItem = styled('div', {
  flex: '0 0 55%',

  '@media (max-width: 769px)': {
    flex: '0 0 45%',
  },
})

const StyledImage = styled(Image, {
  width: '100%',
})

const SVG = styled('img', {
  position: 'absolute',
  top: '3px',
})

const CheckboxContainer = styled('div', {
  position: 'relative',
})

const CheckboxItem = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  paddingLeft: '2rem',
  paddingBottom: '0.7rem',
})

const TwoColumnIntegrationInfo = ({
  headline,
  description,
  image,
  imageAlt,
  checkboxInfo,
}) => (
  <OuterContainer>
    <FlexContainer>
      <TextFlexItem>
        <Headline>{headline}</Headline>
        {checkboxInfo ? (
          <>
            {checkboxInfo.map((info) => (
              <CheckboxContainer key={info}>
                <SVG src={checkSVG.src} alt="check mark" />
                <CheckboxItem>{info}</CheckboxItem>
              </CheckboxContainer>
            ))}
          </>
        ) : (
          <Description>{description}</Description>
        )}
      </TextFlexItem>
      <ImageFlexItem>
        <StyledImage image={image} alt={imageAlt} />
      </ImageFlexItem>
    </FlexContainer>
  </OuterContainer>
)

TwoColumnIntegrationInfo.defaultProps = {
  checkboxInfo: null,
  description: null,
}

TwoColumnIntegrationInfo.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: Image.isRequired,
  imageAlt: PropTypes.string.isRequired,
  checkboxInfo: PropTypes.arrayOf(PropTypes.string),
}

export default TwoColumnIntegrationInfo
