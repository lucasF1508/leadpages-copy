import React from 'react'
import Link from 'next/link'
import Image from '@components/Image'
import PropTypes from 'prop-types'
import { styled } from '@design'
// images
import ArrowRightPurple from '../../assets/images/global/arrow_right_purple.svg'

const MainContainer = styled('div', {
  w: '100%',
  bc: 'rgb(0,0,0,0)',
})

const InnerContainer = styled('div', {
  mw: '1140px',
  m: '0 auto',
  bc: 'rgb(0,0,0,0)',

  '@<s': {
    mb: 0,
  },

  '@<m': {
    pr: '6rem',
    pl: '6rem',
  },

  variants: {
    noPadding: {
      true: { p: '0 3rem' },
      false: { p: '3rem' },
    },
  },
})

const Supertitle = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  ta: 'center',
  tt: 'uppercase',
  opacity: 0.5,
  mb: '0.5rem',
  c: '$text',
})

const AlternateSupertitle = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  letterSpacing: 0,
  lineHeight: '28px',
  ta: 'center',
  tt: 'none',
  opacity: 1,
  mb: '0.5rem',
  c: '$textAlt',
})

const Title = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  ta: 'center',
  c: '$text',
  w: '70%',
  ml: '15%',

  '@<headlineSection': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
    w: '100%',
    ml: 0,
  },

  variants: {
    noPadding: {
      true: { mb: 0 },
      false: { mb: '1.5rem' },
    },
  },
})

const Subtitle = styled(Title, {
  fontSize: '2rem',
  c: '$text',
})

const Caption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  ta: 'center',
  c: '$textAlt',
  pl: '4rem',
  pr: '4rem',

  '@<headlineSection': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    pl: 0,
    pr: 0,
  },
})

const ButtonHolder = styled('div', {
  w: '100%',
  d: 'flex',
  jc: 'center',
  mt: '2rem',
})

const StyledLink = styled(Link, {
  cursor: 'default',
})

const ButtonContents = styled('div', {
  d: 'flex',
  ai: 'center',
  jc: 'center',
  c: '$primary',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  transition: 'all 0.3s ease',
})

const ArrowSVG = styled(Image, {
  h: '12px',
  w: '12px',
  ml: '12px',
  transition: 'all 0.3s ease',
})

const Button = styled('button', {
  bc: 'transparent',
  b: '3px solid $colors$secondary',
  br: '24px',
  p: '7px 33px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover': {
    bc: '$primary',
    b: '3px solid $colors$primary',

    [`& ${ButtonContents}`]: {
      c: 'white',
    },

    [`& ${ArrowSVG}`]: {
      filter:
        'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)',
    },
  },
})

const HeadlineSection = ({
  supertitle,
  alternateSupertitle,
  title,
  subtitle,
  caption,
  button,
  backgroundColor,
  textColor,
  noPadding,
  className,
}) => (
  <MainContainer className={className} css={{ backgroundColor }}>
    <InnerContainer noPadding={noPadding} css={{ backgroundColor }}>
      {supertitle && !alternateSupertitle && (
        <Supertitle
          dangerouslySetInnerHTML={{ __html: supertitle }}
          css={{ c: textColor }}
        ></Supertitle>
      )}
      {alternateSupertitle && (
        <AlternateSupertitle
          dangerouslySetInnerHTML={{ __html: supertitle }}
          css={{ c: textColor }}
        ></AlternateSupertitle>
      )}
      {title && (
        <Title
          dangerouslySetInnerHTML={{ __html: title }}
          noPadding={noPadding}
          css={{ c: textColor }}
        />
      )}
      {subtitle && (
        <Subtitle
          dangerouslySetInnerHTML={{ __html: subtitle }}
          css={{ c: textColor }}
        />
      )}
      {caption && (
        <Caption
          dangerouslySetInnerHTML={{ __html: caption }}
          css={{ c: textColor }}
        />
      )}
      {button && (
        <ButtonHolder>
          <StyledLink href={button.route} alt={button.text}>
            <Button>
              <ButtonContents>
                <span>{button.text}</span>{' '}
                <ArrowSVG image={ArrowRightPurple} alt="right arrow" />
              </ButtonContents>
            </Button>
          </StyledLink>
        </ButtonHolder>
      )}
    </InnerContainer>
  </MainContainer>
)

HeadlineSection.defaultProps = {
  supertitle: '',
  alternateSupertitle: false,
  title: '',
  subtitle: '',
  caption: '',
  button: false,
  backgroundColor: '',
  textColor: '',
  noPadding: false,
  className: null,
}

HeadlineSection.propTypes = {
  supertitle: PropTypes.string,
  alternateSupertitle: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  caption: PropTypes.string,
  button: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  noPadding: PropTypes.bool,
  className: PropTypes.string,
}

export default HeadlineSection
export { Caption }
