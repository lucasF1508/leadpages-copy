import React from 'react'
import { styled, darkTheme, theme } from '@design'
import Link from '@components/Link'
import Image from 'next/image'
import Text from '@components/Text'
import { Link as ScrollLink } from 'react-scroll'
import { features } from 'config'
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

  '@>m': {
    px: '6rem',
  },

  '@media (max-width: 360px)': {
    px: '1rem',
  },

  variants: {
    bgColor: {
      gray: {
        bc: '$grayAlt',
      },
      gray4: {
        bc: '$gray',
      },
      white: {
        bc: '$white',
      },
      lavender: {
        bc: '$lavenderLight',
      },
      teal: {
        bc: '$tealLight',
      },
      purple: {
        bc: '$purple',
      },
      navy: {
        bc: '#0a236d',
      },
    },
  },

  defaultVariants: {
    bgColor: 'navy',
  },
})

const ScrollingLink = styled(ScrollLink, {
  cursor: 'pointer',
  textDecoration: 'none',
})

const FlexItem = styled('div', {
  alignSelf: 'center',
})

const RTGTitle = styled(FlexItem, {
  mb: '$3',
  type: 'overline',
  c: '$textAlt',

  variants: {
    darkBackground: {
      true: {
        opacity: 0.6,
      },
    },
  },
})

const RTGHeadline = styled(FlexItem, {
  mb: '2rem',
  mw: '730px',
  fontFamily: '$heading',
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
  mb: '1rem',
})

const MainButtonContainer = styled('div', {
  d: 'flex',
  ff: 'row-reverse wrap',
  jc: 'center',
})

const RTGButtonContainer = styled('div', {
  display: 'flex',
  fd: 'column',
  gap: '$3',
  alignSelf: 'center',
  p: '0.75rem',

  '@>s': {
    fd: 'row',
  },

  [`
    a[class*="linkStyle-text"],
  `]: {
    c: '$white',
  },
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

const Cta = ({
  bgImage,
  bgColor: _bgColor,
  paddingScale = 1,
  title,
  overline,
  headlineType = 'h2',
  headlineFontSize,
  mobileHeadlineFontSize,
  mobileHeadlineLineHeight,
  content,
  buttonText,
  subText,
  showCTA = true,
  showDemoVideo,
  showDownloader,
  scrollTarget = false,
  links,
  zIndex,
}) => {
  const bgColor = _bgColor || 'navy'
  const darkBackground = features.darkHeros.includes(bgColor)
  const RTGContainerPadding = paddingScale
    ? { py: `${6 * paddingScale}rem`, '@>s': { py: `${10 * paddingScale}rem` } }
    : {}
  const RTGZindex = zIndex ? { zIndex } : {}
  const RTGHeadlineCss = {
    c: '$text',
    h2: {
      type: headlineType,
      fontSize: headlineFontSize,

      '@<s': {
        fontSize: mobileHeadlineFontSize,
        lh: mobileHeadlineLineHeight,
      },
    },
  }

  return (
    <RTGContainer
      className={darkBackground && darkTheme}
      bgColor={bgColor}
      css={{ ...RTGContainerPadding, ...RTGZindex }}
    >
      {bgImage && (
        <BGImage src={bgImage.src} alt="background svg squiggly line" />
      )}
      <RTGTitle darkBackground={darkBackground}>{overline}</RTGTitle>
      <RTGHeadline css={RTGHeadlineCss}>
        <h2>{title}</h2>
      </RTGHeadline>
      {content && (
        <RTGCaption>
          <Text css={{ mb: 0 }} content={content} />
        </RTGCaption>
      )}
      <MainButtonContainer>
        {showCTA && (
          <RTGButtonContainer>
            {!scrollTarget &&
              links.map(({ _key, ...link }) => (
                <Link
                  className={
                    bgColor !== 'purple' && link.linkStyle === 'button' && theme
                  }
                  key={_key}
                  {...link}
                />
              ))}
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
          </RTGButtonContainer>
        )}
        {showDownloader && (
          <RTGButtonContainer>
            <a href="https://s3.amazonaws.com/lpmarketinglibrary/Brand+Assets+-+Leadpages/Leadpages+Press+Kit.zip">
              <RTGButton>Download Brand Assets</RTGButton>
            </a>
          </RTGButtonContainer>
        )}
      </MainButtonContainer>
    </RTGContainer>
  )
}

export default Cta
