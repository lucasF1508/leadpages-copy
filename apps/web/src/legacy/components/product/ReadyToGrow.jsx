import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@design'
import Link from 'next/link'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
// images
import PlayButtonSVG from '@legacy/assets/images/global/play-button_purple.svg'

const RTGContainer = styled('div', {
  position: 'relative',
  d: 'flex',
  fd: 'column',
  jc: 'center',
  px: '3rem',
  ta: 'center',
  ox: 'hidden',

  '@>s': {
    px: '6rem',
  },

  '@media (max-width: 360px)': {
    px: '1rem',
  },
})

const ScrollingLink = styled(ScrollLink, {
  cursor: 'pointer',
  textDecoration: 'none',
})

const FlexItem = styled('div', {
  alignSelf: 'center',
  c: '$white',
})

const RTGTitle = styled(FlexItem, {
  fontFamily: 'Space Mono',
  fontWeight: 700,
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  tt: 'uppercase',
  opacity: 0.5,
  mb: '0.5rem',
})

const RTGHeadline = styled(FlexItem, {
  mb: '2rem',
  mw: '730px',
  fontFamily: 'Value Serif',
  fontWeight: 400,
  letterSpacing: '-0.0625rem',
  lineHeight: '3.75rem',

  '@<s': {
    letterSpacing: 0,
  },
})

const RTGCaption = styled(FlexItem, {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  letterSpacing: '-0.1px',
  lineHeight: '28px',
  mb: '2rem',
})

const MainButtonContainer = styled('div', {
  d: 'flex',
  ff: 'row-reverse wrap',
  jc: 'center',
})

const RTGButtonContainer = styled('div', {
  alignSelf: 'center',
  p: '0.75rem',
})

const RTGButton = styled('button', {
  w: 'auto',
  h: '48px',
  br: '48px',
  b: '3px solid $colors$primary',
  bc: '$primary',
  c: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
  ta: 'center',
  p: '0 1.5rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '@media (min-width: 341px) and (max-width: 425px)': {
    h: 'auto',
  },

  '@media (max-width: 340px)': {
    w: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    bc: '$indigoDark',
    b: '3px solid $colors$indigoDark',
  },
})

const RTGVideoButton = styled(RTGButton, {
  bc: 'transparent',
  b: '3px solid $colors$offWhite',
})

const PlayButtonIcon = styled('div', {
  d: 'inline-block',
  mr: '1rem',
  filter:
    'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7478%) hue-rotate(186deg) brightness(114%) contrast(100%)',
})

const BGImage = styled('img', {
  position: 'absolute',
  inset: 0,
  z: '$content',
  h: '100%',
  w: 'auto',

  '@media (max-width: 768px)': {
    d: 'none',
  },
})

const SubText = styled(FlexItem, {
  fontFamily: 'Apercu Pro',
  fontSize: '12px',
  letterSpacing: '-0.1px',
  lineHeight: '18px',
  ta: 'center',
  c: '$white',
  w: '500px',
  mw: '90%',
  mt: '2rem',
  mx: 'auto',
})

const ReadyToGrow = ({
  bgImage,
  bgColor,
  paddingScale,
  title,
  headline,
  headlineFontSize,
  mobileHeadlineFontSize,
  mobileHeadlineLineHeight,
  caption,
  buttonText,
  subText,
  showCTA,
  showDemoVideo,
  showDownloader,
  scrollTarget,
  zIndex,
}) => {
  const RTGHeadlineCss = {
    fontSize: headlineFontSize || '3.5rem',

    '@<s': {
      fontSize: mobileHeadlineFontSize || '1.875rem',
      lh: mobileHeadlineLineHeight || '2.125rem',
    },
  }
  const RTGContainerPadding = paddingScale
    ? { py: `${6 * paddingScale}rem`, '@>s': { py: `${10 * paddingScale}rem` } }
    : {}
  const RTGBackground = { bc: bgColor || '#0a236d' }
  const RTGZindex = zIndex ? { zIndex } : {}

  return (
    <RTGContainer
      css={{ ...RTGContainerPadding, ...RTGBackground, ...RTGZindex }}
    >
      {bgImage && (
        <BGImage src={bgImage.src} alt="background svg squiggly line" />
      )}
      <RTGTitle>{title}</RTGTitle>
      <RTGHeadline css={RTGHeadlineCss}>
        <h2>{headline}</h2>
      </RTGHeadline>
      {caption && (
        <RTGCaption>
          <div dangerouslySetInnerHTML={{ __html: caption }} />
        </RTGCaption>
      )}
      <MainButtonContainer>
        {showCTA && (
          <RTGButtonContainer>
            {!scrollTarget && (
              <Link href="/pricing">
                <a>
                  <RTGButton>{buttonText}</RTGButton>
                </a>
              </Link>
            )}
            {scrollTarget && (
              <ScrollingLink
                to={scrollTarget}
                smooth
                duration={500}
                offset={-15}
              >
                <RTGButton>{buttonText}</RTGButton>
              </ScrollingLink>
            )}
            {subText && (
              <SubText>
                <p>{subText}</p>
              </SubText>
            )}
          </RTGButtonContainer>
        )}
        {showDemoVideo && (
          <RTGButtonContainer>
            <Link href="">
              <a
                href=""
                data-leadbox-popup="nTViYpWLsxbkHpgfxpzrM2"
                data-leadbox-domain="lps.leadpages.net"
              >
                <RTGVideoButton>
                  <PlayButtonIcon>
                    <Image
                      src={PlayButtonSVG}
                      alt="play button icon"
                      lazyBoundary="501px"
                    />
                  </PlayButtonIcon>
                  Watch a quick demo
                </RTGVideoButton>
              </a>
            </Link>
          </RTGButtonContainer>
        )}
        {showDownloader && (
          <RTGButtonContainer>
            <Link href="https://s3.amazonaws.com/lpmarketinglibrary/Brand+Assets+-+Leadpages/Leadpages+Press+Kit.zip">
              <a>
                <RTGButton>Download Brand Assets</RTGButton>
              </a>
            </Link>
          </RTGButtonContainer>
        )}
      </MainButtonContainer>
    </RTGContainer>
  )
}

ReadyToGrow.defaultProps = {
  bgImage: null,
  bgColor: null,
  paddingScale: 1,
  title: "Let's Get Started",
  headline: 'Ready to grow?',
  headlineFontSize: '56px',
  caption:
    '<p>Take Leadpages for a test drive when you start your free 14-day trial.<br />No obligation. No reason not to.</p>',
  buttonText: 'Start a Leadpages Free Trial',
  subText: '',
  showCTA: true,
  showDemoVideo: false,
  showDownloader: false,
  scrollTarget: '',
  zIndex: 'unset',
}

ReadyToGrow.propTypes = {
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  paddingScale: PropTypes.number,
  title: PropTypes.string,
  headline: PropTypes.string,
  headlineFontSize: PropTypes.string,
  mobileHeadlineFontSize: PropTypes.string,
  mobileHeadlineLineHeight: PropTypes.string,
  caption: PropTypes.string,
  buttonText: PropTypes.string,
  subText: PropTypes.string,
  showCTA: PropTypes.bool,
  showDemoVideo: PropTypes.bool,
  showDownloader: PropTypes.bool,
  scrollTarget: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default ReadyToGrow
