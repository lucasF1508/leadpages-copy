import React, { useEffect, useState } from 'react'
import Image from '@components/Image'
import Media from '@components/Media'
import NextImage from 'next/image'
import { styled, keyframes } from '@design'
import shouldDisplayVideo from '@legacy/utils/should-display-video'
import playButtonSVG from '@legacy/assets/images/global/play-button_purple.svg'
import wavyLineVerticalLavenderSVG from '@legacy/assets/images/shapes/wavy-line-vertical-lavender.svg'
import WistiaVideoTracked from '@components/Wistia/WistiaVideoTracked'

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

const SVG = styled(NextImage, {})

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

const HeroVideoBrowser = ({ media, link }) => {
  const [displayVideo, setDisplayVideo] = useState(false)
  useEffect(() => setDisplayVideo(shouldDisplayVideo()), [])

  const background = `url(${wavyLineVerticalLavenderSVG.src}) no-repeat`
  const { condition, video } = media
  const { files, fallbackImage } = video

  return (
    <VideoBrowser>
      <VideoBrowserChrome>
        <span></span>
        <span></span>
        <span></span>
      </VideoBrowserChrome>
      <VideoBrowserViewport>
        {condition === 'video' ? (
          <>
            {fallbackImage && <Image image={fallbackImage} priority />}
            {displayVideo && (
              <Video autoPlay playsinline muted loop>
                {files.map((file) => (
                  <source key={file} src={file} type="video/webm" />
                ))}
              </Video>
            )}
          </>
        ) : (
          <Media media={media} />
        )}
      </VideoBrowserViewport>
      {link?.label && (
        <VideoButtonContainer>
          <WavyLineVerticalLavender css={{ background }} />
          <WistiaVideoTracked link={link}>
            <VideoButton>
              <span>{link?.label}</span>
              <VideoButtonArrow>
                <SVG
                  src={playButtonSVG}
                  alt="purple right arrow"
                  lazyBoundary="501px"
                />
              </VideoButtonArrow>
            </VideoButton>
          </WistiaVideoTracked>
        </VideoButtonContainer>
      )}
    </VideoBrowser>
  )
}

export default HeroVideoBrowser
