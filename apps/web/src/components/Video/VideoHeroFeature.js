import React, { useEffect, useState } from 'react'
import { VideoButton } from '@components/Button'
import { styled, keyframes } from '@design'
import Image from 'next/image'
// utilities
import shouldDisplayVideo from '@legacy/utils/should-display-video'
// images
import totemLeftSVG from '@legacy/assets/images/totems/homepage-hero-totem-left.svg'
import totemRightSVG from '@legacy/assets/images/totems/homepage-hero-totem-right.svg'
import videoFallbackImage from '@legacy/assets/images/heros/homepage-hero-fallback@2x.jpg'
import WistiaDemoVideo from '@legacy/components/videos/Wistia_DemoVideo'

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

export default function VideoHeroFeature({ videos }) {
  const [displayVideo, setDisplayVideo] = useState(false)
  useEffect(() => setDisplayVideo(shouldDisplayVideo()), [])

  return (
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
            lazyBoundary="1000px"
          />
          {displayVideo && (
            <Video autoPlay playsinline muted loop>
              {videos.map((video, index) => {
                const type = video.split('/').pop().split('.')[1]
                return (
                  <source
                    key={index}
                    src={video}
                    type={type && `video/${type}`}
                  />
                )
              })}
            </Video>
          )}
        </VideoBrowserViewport>
        <VideoButton VideoComponent={WistiaDemoVideo} />
      </VideoBrowser>
    </VideoBrowserContainer>
  )
}
