import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { styled } from '@design'

// Images
import arrowRightPurpleSVG from '../../assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const InnerContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  maxWidth: '1140px',
  margin: '0 auto 3rem',
  padding: '0 3rem',

  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
})

const TextBlock = styled('div', {
  padding: '0 1rem',
  width: '100%',
  maxWidth: '300px',

  '@media (max-width: 900px)': {
    maxWidth: '250px',
  },

  '@media (max-width: 600px)': {
    padding: '1rem 0',
    maxWidth: '100%',
  },
})

const Heading = styled('div', {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1rem',
  color: '$text',
})

const MainText = styled('div', {
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
  color: '$textAlt',
})

const LinkText = styled('div', {
  color: '$primary',
  fontSize: '16px',
  lineHeight: '30px',
  textAlign: 'left',
  fontWeight: 500,
  position: 'relative',
})

const ArrowSVG = styled('img', {
  width: '20px',
  height: '10px',
  position: 'absolute',
  top: '10px',
  marginLeft: '4px',
})

const StyledLink = styled('a', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  cursor: 'pointer',

  [`&:hover ${LinkText}`]: {
    color: '$indigoDark',
  },

  [`&:hover ${ArrowSVG}`]: {
    filter: `invert(18%) sepia(97%) saturate(3719%) hue-rotate(249deg)
      brightness(81%) contrast(95%)`,
  },
})

const NextLink = styled('a', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  cursor: 'pointer',

  [`&:hover ${LinkText}`]: {
    color: '$indigoDark',
  },

  [`&:hover ${ArrowSVG}`]: {
    filter: `invert(18%) sepia(97%) saturate(3719%) hue-rotate(249deg)
      brightness(81%) contrast(95%)`,
  },
})

const TwoColumnTextBlock = ({ textBlockArray }) => (
  <OuterContainer>
    <InnerContainer>
      {textBlockArray.map((item, index) => {
        const { heading, text, linkType, linkRoute, linkText, linkAltText } =
          item
        return (
          <TextBlock key={index}>
            <Heading>{heading}</Heading>
            <MainText>{text}</MainText>
            {linkType === 'external' && (
              <StyledLink
                href={linkRoute}
                alt={linkAltText}
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkText>
                  {linkText}
                  <ArrowSVG
                    src={arrowRightPurpleSVG.src}
                    alt="purple right arrow"
                  />
                </LinkText>
              </StyledLink>
            )}
            {linkType === 'internal' && (
              <Link href={linkRoute} passHref>
                <NextLink aria-label={linkAltText} target="_blank">
                  <LinkText>
                    {linkText}
                    <ArrowSVG
                      src={arrowRightPurpleSVG.src}
                      alt="purple right arrow"
                    />
                  </LinkText>
                </NextLink>
              </Link>
            )}
          </TextBlock>
        )
      })}
    </InnerContainer>
  </OuterContainer>
)

TwoColumnTextBlock.propTypes = {
  textBlockArray: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      linkType: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkRoute: PropTypes.string.isRequired,
      linkAltText: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TwoColumnTextBlock
