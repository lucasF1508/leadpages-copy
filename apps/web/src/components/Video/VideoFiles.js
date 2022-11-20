import React, { useState, useEffect } from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// utilities
import shouldDisplayVideo from '@legacy/utils/should-display-video'

const ImageContainer = styled('div', {
  position: 'relative',
  marginBottom: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
})

const BuilderVideoHolder = styled('div', {
  width: '100%',
  left: 0,
  right: 0,
  mx: 'auto',
})

const DesktopFallbackImage = styled(Image, {
  width: '100%',

  '@<s': {
    display: 'none',
  },
})

const DesktopVideo = styled('video', {
  width: '100%',

  '@<s': {
    display: 'none',
  },
})

const StaticMobileImage = styled(Image, {
  width: '100%',

  '@>s': {
    display: 'none !important',
  },
})

const VideoFiles = ({ video }) => {
  const [displayVideo, setDisplayVideo] = useState(false)
  useEffect(() => setDisplayVideo(shouldDisplayVideo()), [])

  const { files, fallbackImage } = video

  return (
    <ImageContainer>
      <BuilderVideoHolder>
        {displayVideo ? (
          <DesktopVideo autoPlay playsinline muted loop>
            {files.map((file) => (
              <source key={file} src={file} type="video/webm" />
            ))}
          </DesktopVideo>
        ) : (
          <DesktopFallbackImage
            image={fallbackImage}
            // alt="customize a landing page template" // TODO: Do an alt tag audit
          />
        )}
      </BuilderVideoHolder>
      <StaticMobileImage
        image={fallbackImage}
        // alt="using landing page builder" // TODO: Do an alt tag audit
      />
    </ImageContainer>
  )
}

export default VideoFiles
