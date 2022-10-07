import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { RPImage } from '@legacy/constants/types'
// Image
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'

const OuterContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: '#0b236d',
})

const InnerContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1400px',

  '@media (max-width: 769px)': {
    flexDirection: 'column',
  },
})

const TextFlexItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 23%',
  margin: '6rem 10rem 6rem 4.2rem',

  '@media (max-width: 769px)': {
    margin: '3rem 5.2rem 3rem 3rem',
  },

  '@media (max-width: 425px)': {
    margin: '3rem 1.8rem 2.25rem 1.8rem',
  },
})

const Headline = styled('h2', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  color: '$white',
  marginBottom: '1.4rem',
})

const Description = styled('p', {
  fontSize: '18px',
  lineHeight: '28px',
  color: '$white',
  marginBottom: '1.4rem',
})

const ChecklistItem = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  color: '$white',
  paddingLeft: '2rem',
  paddingBottom: '0.7rem',
})

const ImageFlexItem = styled('div', {
  flex: '0 0 70%',
  marginTop: '7.2rem',
  position: 'relative',

  '@media (max-width: 769px)': {
    position: 'static',
    order: 2,
    margin: '0 0.5rem',
    minHeight: 0,
  },

  '@media (min-width: 426px) and (max-width: 769px)': {
    flex: '0 0 60%',
    margin: '9px 5.2rem 0 3rem',
  },
})

const StyledImage = styled(Image, {
  width: '100%',
  minHeight: '300px',

  position: 'absolute !important',
  bottom: '0px',
  left: '0px',

  '@media (max-width: 769px)': {
    position: 'relative !important',
    minHeight: 0,
  },
})

const SVG = styled('img', {
  filter: 'brightness(100)',
  position: 'absolute',
  top: '3px',
})

const CheckboxContainer = styled('div', {
  position: 'relative',
})

const StyledLink = styled('a', {
  marginTop: '1.5rem',
})

const Button = styled('button', {
  width: '256px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$primary',
  backgroundColor: '$primary',
  color: '$white',
  fontWeight: 500,
  lineHeight: '28px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  padding: '0 1rem',

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
  },

  '@media (max-width: 425px)': {
    maxWidth: '100%',
  },
})

const IntegrationsPromoSection = ({
  image,
  imageAlt,
  headline,
  description,
  checklist,
  buttonText,
  link,
  linkAlt,
}) => (
  <OuterContainer>
    <InnerContainer>
      <ImageFlexItem>
        <StyledImage image={image} alt={imageAlt} />
      </ImageFlexItem>
      <TextFlexItem>
        <Headline>{headline}</Headline>
        {description && <Description>{description}</Description>}
        {checklist.map((info) => (
          <CheckboxContainer>
            <SVG src={checkSVG.src} alt="check mark" />
            <ChecklistItem>{info}</ChecklistItem>
          </CheckboxContainer>
        ))}
        <Link href={link} passHref>
          <StyledLink aria-label={linkAlt}>
            <Button>{buttonText}</Button>
          </StyledLink>
        </Link>
      </TextFlexItem>
    </InnerContainer>
  </OuterContainer>
)

IntegrationsPromoSection.defaultProps = {
  checklist: null,
  description: null,
}

IntegrationsPromoSection.propTypes = {
  image: RPImage.isRequired,
  imageAlt: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string,
  checklist: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkAlt: PropTypes.string.isRequired,
}

export default IntegrationsPromoSection
