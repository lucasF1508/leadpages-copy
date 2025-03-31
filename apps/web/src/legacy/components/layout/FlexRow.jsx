import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from '@components/Image'
import { styled } from '@design'
import { RPImage } from '@legacy/constants/types'
// images
import checkInCircleSVG from '@legacy/assets/images/global/check_in-circle.svg'
import rightArrowSVG from '@legacy/assets/images/global/arrow_right.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'visible !important',
  marginTop: '9rem',

  '@media (max-width: 768px)': {
    marginTop: '3rem',
  },
})

const BackgroundImage = styled(Image, {
  position: 'absolute',
  bottom: '0px',
  zIndex: -1,
  width: '100%',
  mx: 0,

  '@media (max-width: 768px)': {
    width: '80%',
  },

  variants: {
    reverse: {
      true: {
        left: 0,
      },
      false: {
        right: 0,
      },
    },
  },
})

const FlexContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '3rem',
  marginBottom: 0,
  fd: 'row',

  variants: {
    reverse: {
      true: {
        '@media (min-width: 576px)': {
          fd: 'row-reverse',
        },
      },
    },
  },
})

const RowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'left',
  textDecoration: 'none',
  width: '100%',
  justifyContent: 'space-between',
})

const TextContainer = styled(RowItem, {
  color: '$textAlt',
  px: '5%',
  marginRight: '1%',

  '@media (max-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 75%',
    flex: '0 0 75%',
    maxWidth: '75%',
    marginBottom: '2rem',
    paddingLeft: '12.5%',
    paddingRight: '12.5%',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 66%',
    flex: '0 0 66%',
    maxWidth: '66%',
    marginBottom: '4rem',
    paddingLeft: '10%',
    paddingRight: '20%',
  },

  '@media (min-width: 992px)': {
    marginTop: 'auto',
    marginBottom: 'auto',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 33%',
    flex: '0 0 33%',
    maxWidth: '570px',
  },

  variants: {
    reverse: {
      true: {
        pl: '10%',
        pr: '1%',

        '@media (min-width: 992px)': {
          mr: 'auto',
        },

        '@media (max-width: 576px)': {
          px: '12.5%',
        },

        '@media (min-width: 577px) and (max-width: 991px)': {
          pl: '10%',
          pr: '20%',
        },
      },
      false: {
        '@media (min-width: 992px)': {
          ml: 'auto',
        },
      },
    },
  },
})

const ImageContainer = styled(RowItem, {
  position: 'relative',
  alignSelf: 'flex-end',
  pl: 0,
  pr: 0,

  '@media (max-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 90%',
    flex: '0 0 90%',
    maxWidth: '90%',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 80%',
    flex: '0 0 80%',
    maxWidth: '80%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 46%',
    flex: '0 0 46%',
    maxWidth: '46%',
    width: '46%',
  },

  '@media (max-width: 991px)': {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 0,
    paddingRight: 0,
  },

  '> .image-wrapper': {
    mw: 'auto',
  },

  '> .image-wrapper > picture img': {
    objectFit: 'contain !important',
  },

  variants: {
    reverse: {
      true: {},
      false: {},
    },
    padImage: {
      true: {},
      false: {},
    },
    narrowOverride: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      padImage: true,
      reverse: true,
      css: {
        '@media (min-width: 992px)': {
          pl: '3rem',
        },
      },
    },
    {
      padImage: true,
      reverse: false,
      css: {
        pr: '3rem',
      },
    },
    {
      narrowOverride: true,
      reverse: false,
      css: {
        ml: '-3rem',
        mr: '3rem',
      },
    },
    {
      narrowOverride: true,
      reverse: true,
      css: {
        ml: '3rem',
        mr: '-3rem',
      },
    },
  ],
})

const Title = styled('div', {
  fontFamily: `'Space Mono'`,
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '$black',
  marginBottom: '26px',
})

const Headline = styled('h3', {
  width: '100%',
  fontFamily: `'Value Serif'`,
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  color: '$text',
  marginBottom: '16px',

  '@media (max-width: 768px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginBottom: '16px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
    marginBottom: '22px',
  },

  '@media (min-width: 993px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
    marginBottom: '26px',
  },
})

const Caption = styled('div', {
  fontFamily: `'Apercu Pro'`,
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

const LinkHolder = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const StyledLink = styled('a', {
  width: 'fit-content',
  marginBottom: '1rem',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
})

const OutboundStyledLink = styled('a', {
  width: 'fit-content',
  marginBottom: '1rem',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
})

const TextWrapper = styled('span', {
  paddingBottom: '2px',
  transition: 'all 0.3s ease',
  borderBottom: '2px solid transparent',
})

const CheckInCircle = styled('img', {
  width: '18px',
  height: '18px',
  marginBottom: '-3px',
  marginRight: '20px',
  filter: `brightness(0) saturate(100%) invert(3%) sepia(4%) saturate(4575%)
    hue-rotate(349deg) brightness(97%) contrast(96%)`,
  transition: 'filter 0.3s ease',
})

const ArrowRight = styled('img', {
  width: '20px',
  height: '10px',
  marginLeft: '17px',
  filter: `brightness(0) saturate(100%) invert(32%) sepia(9%) saturate(194%)
    hue-rotate(341deg) brightness(94%) contrast(87%)`,
  transition: 'filter 0.3s ease',
})

const CTA = styled('div', {
  color: '$textAlt',
  fontFamily: `'Apercu Pro'`,
  fontSize: '16px',
  lineHeight: '30px',
  textAlign: 'left',
  fontWeight: 500,

  [`&:hover ${ArrowRight}, &:hover ${CheckInCircle}`]: {
    filter: `invert(23%) sepia(63%) saturate(3382%) hue-rotate(243deg)
      brightness(102%) contrast(107%)`,
    transition: 'filter 0.3s ease',
  },

  [`&:hover ${TextWrapper}`]: {
    color: '$primary',
    borderBottom: '2px solid $colors$primary',
    transition: 'all 0.3s ease',
  },
})

const FlexRow = ({
  title,
  headline,
  caption,
  image,
  imageAlt,
  imageMaxWidth,
  padImage,
  bgImage,
  bgImageAlt,
  bgImageMargin,
  ctaArray,
  flexDirectionReverse,
  narrowOverride,
  arrows,
  checkmarks,
}) => (
  <OuterContainer>
    <FlexContainer reverse={flexDirectionReverse}>
      <TextContainer reverse={flexDirectionReverse}>
        {title && <Title>{title}</Title>}
        {headline && <Headline>{headline}</Headline>}
        {caption && <Caption>{caption}</Caption>}
        <LinkHolder>
          {!!ctaArray.length &&
            ctaArray.map((item, index) => {
              const { text, link, linkAlt, outbound } = item
              return outbound ? (
                <OutboundStyledLink
                  key={index}
                  href={link}
                  alt={linkAlt || TextEncoder}
                >
                  <CTA>
                    {checkmarks && (
                      <CheckInCircle
                        src={checkInCircleSVG.src}
                        alt="checkmark circle"
                      />
                    )}
                    <TextWrapper>{text}</TextWrapper>
                    {arrows && (
                      <ArrowRight src={rightArrowSVG.src} alt="right arrow" />
                    )}
                  </CTA>
                </OutboundStyledLink>
              ) : (
                <Link href={link} key={index} passHref legacyBehavior>
                  <StyledLink aria-label={linkAlt || text}>
                    <CTA>
                      {checkmarks && (
                        <CheckInCircle
                          src={checkInCircleSVG.src}
                          alt="checkmark circle"
                        />
                      )}
                      <TextWrapper>{text}</TextWrapper>
                      {arrows && (
                        <ArrowRight src={rightArrowSVG.src} alt="right arrow" />
                      )}
                    </CTA>
                  </StyledLink>
                </Link>
              )
            })}
        </LinkHolder>
      </TextContainer>
      <ImageContainer
        reverse={flexDirectionReverse}
        padImage={padImage}
        narrowOverride={narrowOverride}
      >
        {bgImage && (
          <BackgroundImage
            image={bgImage}
            alt={bgImageAlt}
            reverse={flexDirectionReverse}
            margin={bgImageMargin}
            css={{
              ...(flexDirectionReverse
                ? { ml: bgImageMargin }
                : { mr: bgImageMargin }),
            }}
          />
        )}
        <Image
          className="image-wrapper"
          image={image}
          alt={imageAlt || title}
          css={{
            ...(imageMaxWidth ? { maxWidth: imageMaxWidth } : {}),
          }}
        />
      </ImageContainer>
    </FlexContainer>
  </OuterContainer>
)

FlexRow.defaultProps = {
  title: '',
  headline: '',
  caption: '',
  imageAlt: null,
  imageMaxWidth: null,
  padImage: false,
  bgImage: '',
  bgImageAlt: 'background image',
  bgImageMargin: null,
  ctaArray: [],
  flexDirectionReverse: false,
  narrowOverride: false,
  arrows: true,
  checkmarks: false,
}

FlexRow.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  caption: PropTypes.string,
  image: RPImage.isRequired,
  imageAlt: PropTypes.string,
  imageMaxWidth: PropTypes.string,
  padImage: PropTypes.bool,
  bgImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bgImageAlt: PropTypes.string,
  bgImageMargin: PropTypes.string,
  ctaArray: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      linkAlt: PropTypes.string,
      outbound: PropTypes.bool,
    })
  ),
  flexDirectionReverse: PropTypes.bool,
  narrowOverride: PropTypes.bool,
  arrows: PropTypes.bool,
  checkmarks: PropTypes.bool,
}

export default FlexRow
