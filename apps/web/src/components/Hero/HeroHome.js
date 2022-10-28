import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { styled, keyframes } from '@design'
import { blocksToText } from '@utils/blockContent'
import Link from '@components/Link'
// components
// utilities
import shouldDisplayVideo from '@legacy/utils/should-display-video'
// images
import playButtonSVG from '@legacy/assets/images/global/play-button_purple.svg'
import totemLeftSVG from '@legacy/assets/images/totems/homepage-hero-totem-left.svg'
import totemRightSVG from '@legacy/assets/images/totems/homepage-hero-totem-right.svg'
import wavyLineVerticalLavenderSVG from '@legacy/assets/images/shapes/wavy-line-vertical-lavender.svg'
import videoFallbackImage from '@legacy/assets/images/heros/homepage-hero-fallback@2x.jpg'
import Wistia_DemoVideo from '@legacy/components/videos/Wistia_DemoVideo'
// videos
const videoWebM =
  'https://static.leadpages.com/mktg/videos/homepage-hero-variant-w918.webm'
const videoMp4 =
  'https://static.leadpages.com/mktg/videos/homepage-hero-variant-w918.mp4'

const OuterContainer = styled('div', {
  position: 'relative',
  minHeight: '600px',
  ox: 'hidden',
  o: 'hidden',

  '@media (max-width: 768px)': {
    h: '100%',
  },
})

const InnerContainer = styled('div', {
  mw: '1140px',
  p: '0 4rem',
  m: '0 auto 52px auto',
  minHeight: '600px',
  position: 'relative',

  '@media (max-width: 768px)': {
    height: '100%',
    minHeight: '1px',
  },

  '@media (min-width: 577px) and (max-width: 768px)': {
    mb: '44px',
  },

  '@media (min-width: 769px)': {
    mb: '36px',
  },
})

const LinksContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
})

const ShapesLeft = styled('div', {
  position: 'absolute',
  top: '-18%',
  left: '-69.85%',
  w: '100%',
  h: '100%',
  z: -1,

  img: {
    width: '70%',
  },

  '@media (min-width: 1066px)': {
    top: '-48%',
    left: '-60.35%',
  },
})

const ShapesRight = styled('div', {
  position: 'absolute',
  top: '-3.75%',
  right: '-61%',
  width: '100%',
  height: '100%',
  z: -1,

  img: {
    width: '110%',
  },

  '@media (min-width: 1066px)': {
    top: '-27.25%',
    right: '-51%',
  },
})

const TextContainer = styled('div', {
  position: 'relative',
  mt: '17px',
  ml: 'auto',
  mr: 'auto',
  ta: 'center',
  width: '100%',

  '@media  (min-width: 577px) and (max-width: 768px)': {
    mt: '55px',
  },

  '@media  (min-width: 769px)': {
    mt: '68px',
    mw: '760px',
  },
})

const Headline = styled('div', {
  mb: '2rem',
})

const Caption = styled('div', {
  c: '$textAlt',
  mb: '2rem',
})

const SVG = styled(Image, {})

const VideoBrowserContainer = styled('div', {
  position: 'relative',
  width: '100%',
  mt: '38px',

  '@media  (min-width: 577px) and (max-width: 768px)': {
    mt: '64px',
  },

  '@media  (min-width: 769px)': {
    mt: '86px',
  },
})

const RevealVideoBrowserAnimation = keyframes({
  '0%': { opacity: '0', transform: 'translateY(25%)' },
  '100%': { opacity: '1', transform: 'translateY(0)' },
})

const VideoBrowser = styled('div', {
  width: '100%',
  opacity: '0',
  animationDelay: '0.5s',
  animationDuration: '0.75s',
  animationName: `${RevealVideoBrowserAnimation}`,
  animationTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
  animationFillMode: 'forwards',
})

const VideoBrowserChrome = styled('div', {
  width: '100%',
  height: '11px',
  bc: '$white',
  b: '2px solid $colors$textAlt',
  bb: '0',
  btlr: '7px',
  btrr: '7px',
  mw: '918px',
  m: '0 auto',
  d: 'flex',
  ai: 'center',

  '& > span': {
    d: 'block',
    width: '3px',
    height: '3px',
    br: '3px',
    bc: '#c3c2c1',
    ml: '4px',

    '&:nth-child(1)': {
      ml: '6px',
    },
  },

  '@media  (min-width: 577px) and (max-width: 768px)': {
    height: '19px',

    '& > span': {
      width: '7px',
      height: '7px',
      br: '7px',
    },
  },

  '@media  (min-width: 769px)': {
    height: '26px',
    borderWidth: '3px',

    '& > span': {
      width: '10px',
      height: '10px',
      br: '10px',
      ml: '6px',

      '&: nth-child(1)': {
        ml: '9px',
      },
    },
  },
})

const VideoBrowserViewport = styled('div', {
  bc: '$white',
  position: 'relative',
  width: '100%',
  height: '100%',
  mw: '918px',
  margin: '0 auto',
  overflow: 'hidden',
  b: '2px solid $colors$textAlt',
  bbrr: '7px',
  bblr: '7px',

  '@media  (min-width: 769px)': {
    borderWidth: '3px',
  },
})

const Video = styled('video', {
  d: 'block',
  width: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
})

const VideoFallbackImage = styled(Image, {
  pt: '0',

  '& > div': {
    pb: '0 !important',
  },
})

const VideoButtonContainer = styled('div', {
  position: 'relative',
  mt: '52px',
  textAlign: 'center',

  '@media  (min-width: 577px) and (max-width: 768px)': {
    mt: '44px',
  },

  '@media  (min-width: 769px)': {
    mt: '36px',
  },
})

const WavyLineVerticalLavender = styled('div', {
  position: 'absolute',
  top: '-71px',
  left: '0',
  bottom: '0',
  right: '0',
  m: '0 auto',
  width: '9px',
  height: '66px',
})

const VideoButtonArrow = styled('span', {
  display: 'flex',
  width: '30px',
  height: '30px',
  br: '30px',
  ml: '10px',
  ai: 'center',
  jc: 'center',
  bc: '$white',
  bs: '0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08)',
  transition: 'all 0.3s ease',

  [`& ${SVG}`]: {
    width: '8px',
    height: '10px',
    ml: '2px',
  },
})

const VideoButton = styled('button', {
  background: 'none',
  b: '0',
  d: 'inline-flex',
  ai: 'center',
  height: '30px',
  type: 'buttonSm',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  color: '$primary',

  '&:hover': {
    color: '$primary',

    [`& ${VideoButtonArrow}`]: {
      bc: '$primary',
    },

    [`& ${SVG}`]: {
      filter: 'brightness(0) invert(1)',
    },
  },
})

const HomepageHeader = ({ heading, content, links }) => {
  const [displayVideo, setDisplayVideo] = useState(false)
  const background = `url(${wavyLineVerticalLavenderSVG.src}) no-repeat`

  useEffect(() => setDisplayVideo(shouldDisplayVideo()), [])

  return (
    <OuterContainer>
      <InnerContainer>
        <TextContainer>
          {heading && (
            <Headline>
              <h1>{heading}</h1>
            </Headline>
          )}
          {content && <Caption>{blocksToText(content)}</Caption>}
          {links && (
            <LinksContainer>
              {links.map(({ _key, ...link }) => (
                <Link key={_key} {...link} />
              ))}
            </LinksContainer>
          )}
        </TextContainer>
        <VideoBrowserContainer>
          <ShapesLeft>
            <div style={{ width: '70%' }}>
              <SVG src={totemLeftSVG} alt="shapes" priority />
            </div>
          </ShapesLeft>
          <ShapesRight>
            <div style={{ width: '110%' }}>
              <SVG src={totemRightSVG} alt="shapes" priority />
            </div>
          </ShapesRight>
          <VideoBrowser>
            <VideoBrowserChrome>
              <span></span>
              <span></span>
              <span></span>
            </VideoBrowserChrome>
            <VideoBrowserViewport>
              <VideoFallbackImage
                src={videoFallbackImage}
                alt="website template image"
                height="1080"
                width="1920"
                lazyBoundary="501px"
              />
              {displayVideo && (
                <Video autoPlay playsinline muted loop>
                  <source src={videoWebM} type="video/webm" />
                  <source src={videoMp4} type="video/mp4" />
                </Video>
              )}
            </VideoBrowserViewport>
            <VideoButtonContainer>
              <WavyLineVerticalLavender css={{ background }} />
              <Wistia_DemoVideo>
                <VideoButton>
                  <span>Watch the Full Demo</span>
                  <VideoButtonArrow>
                    <SVG
                      src={playButtonSVG}
                      alt="purple right arrow"
                      lazyBoundary="501px"
                    />
                  </VideoButtonArrow>
                </VideoButton>
              </Wistia_DemoVideo>
            </VideoButtonContainer>
          </VideoBrowser>
        </VideoBrowserContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

export default HomepageHeader
