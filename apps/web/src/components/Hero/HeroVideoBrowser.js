import React, { useEffect, useState } from 'react'
import Image from '@components/Image'
import Media from '@components/Media'
import NextImage from 'next/image'
import { styled, keyframes } from '@design'
import shouldDisplayVideo from '@legacy/utils/should-display-video'
import { IoPlaySharp as PlayButton } from '@react-icons/all-files/io5/IoPlaySharp'
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
  height: '10px',
  bc: '$lightGray2',
  b: '4px solid $colors$lightGray2',
  bb: '0',
  btlr: '8px',
  btrr: '8px',
  mw: '918px',
  m: '0 auto',
  d: 'flex',
  ai: 'center',

  '& > span': {
    d: 'block',
    width: '5px',
    height: '5px',
    br: '3px',
    bc: '$darkGray2',
    ml: '4px',

    '&:nth-child(1)': {
      ml: '5px',
    },
  },

  '@media  (min-width: 577px) and (max-width: 768px)': {
    height: '12px',
    borderWidth: '6px',

    '& > span': {
      width: '7px',
      height: '7px',
      br: '7px',
    },
  },

  '@media  (min-width: 769px)': {
    height: '19px',
    borderWidth: '7px',

    '& > span': {
      width: '10px',
      height: '10px',
      br: '10px',
      ml: '6px',

      '&:nth-child(1)': {
        ml: '8px',
      },
    },
  },

  variants: {
    backgroundColor: {
      purple: {
        bc: '$purple',
      },
      navy: {
        bc: '$darkBlue',
      },
    },
  },
})

const VideoBrowserViewport = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  mw: '918px',
  margin: '0 auto',
  overflow: 'hidden',

  variants: {
    backgroundColor: {
      purple: {
        bc: '$purple',
      },
      navy: {
        bc: '$darkBlue',
      },
    },
    displayBrowserContainer: {
      true: {
        b: '4px solid $colors$lightGray2',

        '@media  (min-width: 577px) and (max-width: 768px)': {
          borderWidth: '6px',
        },

        '@media  (min-width: 769px)': {
          borderWidth: '7px',
        },
      },
      false: {
        bc: 'transparent',
      },
    },
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

const $PlayButton = styled(PlayButton, {
  fill: '$white',
})

const VideoButtonArrow = styled('span', {
  display: 'flex',
  width: '15px',
  height: '15px',
  br: '30px',
  ml: '10px',
  ai: 'center',
  jc: 'center',
  bc: '$primary',
  transition: 'all 0.3s ease',

  [`& ${$PlayButton}`]: {
    width: '8px',
    height: '8px',
    ml: '1px',
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
    color: '$hover',

    [`& ${VideoButtonArrow}`]: {
      bc: '$hover',
    },

    [`& ${$PlayButton}`]: {
      fill: '$hoverColor',
    },
  },
})

const HeroVideoBrowser = ({
  media,
  link,
  backgroundColor,
  displayBrowserContainer = false,
}) => {
  const [displayVideo, setDisplayVideo] = useState(false)
  useEffect(() => setDisplayVideo(shouldDisplayVideo()), [])

  const background = `url(${wavyLineVerticalLavenderSVG.src}) no-repeat`
  const { condition, video } = media
  const { files, fallbackImage } = video

  return (
    <VideoBrowser>
      {displayBrowserContainer && (
        <VideoBrowserChrome backgroundColor={backgroundColor}>
          <span></span>
          <span></span>
          <span></span>
        </VideoBrowserChrome>
      )}
      <VideoBrowserViewport
        backgroundColor={displayBrowserContainer && backgroundColor}
        displayBrowserContainer={displayBrowserContainer}
      >
        {condition === 'video' ? (
          <>
            {fallbackImage && <Image image={fallbackImage} priority />}
            {displayVideo && (
              <Video autoPlay playsinline muted loop>
                {files.map((file) => (
                  <source
                    key={file}
                    src={file}
                    type={`video/${file.split('.').pop() || 'webm'}`}
                  />
                ))}
              </Video>
            )}
          </>
        ) : (
          <Media media={media} priority />
        )}
      </VideoBrowserViewport>
      {link?.label && (
        <VideoButtonContainer>
          <WavyLineVerticalLavender css={{ background }} />
          <WistiaVideoTracked link={link}>
            <VideoButton>
              <span>{link?.label}</span>
              <VideoButtonArrow>
                <$PlayButton />
              </VideoButtonArrow>
            </VideoButton>
          </WistiaVideoTracked>
        </VideoButtonContainer>
      )}
    </VideoBrowser>
  )
}

export default HeroVideoBrowser
