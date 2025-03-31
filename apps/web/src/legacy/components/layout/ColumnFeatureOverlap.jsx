import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@design'
import Image from '@components/Image'
import Link from 'next/link'
import { RPImage } from '@legacy/constants/types'

const OuterContainer = styled('div', {
  position: 'relative',
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '4rem',
  paddingRight: '3rem',
  paddingLeft: '3rem',

  '@>s': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const InnerContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'start',

  '@media (max-width: 768px)': {
    display: 'block',
  },
})

const ColumnSection = styled('div', {
  position: 'relative',
  display: 'flex',
  WebkitBoxFlex: 0,
  MsFlex: '0 0 48%',
  flex: '0 0 48%',
  width: '100%',
  minHeight: '1px',
  maxWidth: '48%',
  textDecoration: 'none',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

const TextSection = styled(ColumnSection, {
  zIndex: 4,
  alignSelf: 'center',
  marginLeft: '-10%',
  padding: '5%',
  background: '$white',

  '@media (max-width: 768px)': {
    marginLeft: '-5%',
  },
})

const Title = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '24px',
  lineHeight: '30px',
  fontWeight: 500,
  marginBottom: '1.25rem',
  color: '$text',

  '@media (max-width: 844px)': {
    paddingTop: '20px',
  },
})

const MainText = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '1.25rem',
  color: '$textAlt',
})

const Supertitle = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  marginBottom: '1.25rem',
  color: '$darkBlue',
  background: '$tealLight',
  textTransform: 'uppercase',
  textAlign: 'center',
  borderRadius: '3px',
  display: 'inline-block',
  padding: '4px 8px',

  '@media (max-width: 844px)': {
    marginTop: '30px',
  },
})

const TextContainer = styled('div', {
  zIndex: 2,
  position: 'relative',
  background: '$white',
  width: '100%',
})

const StyledLink = styled(Link, {
  color: '$primary',
  zIndex: 4,
})

const OutboundLink = styled('a', {
  color: '$primary',
  zIndex: 4,
})

const Button = styled('button', {
  width: '222px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$primary',
  backgroundColor: '$primary',
  color: '$white',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
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

const ColumnFeatureOverlap = ({
  image,
  imageAlt,
  title,
  text,
  supertitle,
  link,
  outboundLink,
  linkAlt,
  buttonText,
}) => (
  <OuterContainer>
    <InnerContainer>
      <ColumnSection>
        <Image image={image} alt={imageAlt} />
      </ColumnSection>
      <TextSection>
        <TextContainer>
          {supertitle && <Supertitle>{supertitle}</Supertitle>}
          <Title>{title}</Title>
          <MainText>{text}</MainText>
          {link && (
            <StyledLink href={link} legacyBehavior>
              <a aria-label={linkAlt}>
                <Button>{buttonText}</Button>
              </a>
            </StyledLink>
          )}
          {outboundLink && (
            <OutboundLink href={outboundLink} alt={linkAlt}>
              <Button>{buttonText}</Button>
            </OutboundLink>
          )}
        </TextContainer>
      </TextSection>
    </InnerContainer>
  </OuterContainer>
)

ColumnFeatureOverlap.defaultProps = {
  supertitle: '',
  link: '',
  outboundLink: '',
  linkAlt: '',
}

ColumnFeatureOverlap.propTypes = {
  image: RPImage.isRequired,
  imageAlt: PropTypes.string.isRequired,
  supertitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  outboundLink: PropTypes.string,
  linkAlt: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
}

export default ColumnFeatureOverlap
