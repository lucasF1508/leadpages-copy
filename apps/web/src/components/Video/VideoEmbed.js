import React, { useMemo } from 'react'
import urlParser from 'js-video-url-parser'
import { styled } from '@design'

export const $VideoEmbed = styled('figure', {
  position: 'relative',
  bc: '$black',

  '&::before': {
    d: 'block',
    content: `''`,
    pb: '56.25%',
    w: '100%',
    bc: '$grey3',
  },

  '& iframe': {
    position: 'absolute',
    top: 0,
    left: 0,
    h: '100%',
    w: '100%',
    m: 0,
    p: 0,
  },
})

const getVideoData = (orgUrl) => {
  const parsedUrl = urlParser.parse(orgUrl)
  const url = urlParser.create({
    videoInfo: {
      ...parsedUrl,
    },
    params: {
      playsinline: 0,
      autoplay: 1,
    },
    format: 'embed',
  })

  return url.includes('https:') ? url : `https:${url}`
}

const VideoEmbed = ({ video, url, children, ...props }) => {
  if (video?.embed?.html) {
    return (
      <$VideoEmbed
        {...props}
        dangerouslySetInnerHTML={{ __html: video?.embed?.html }}
      />
    )
  }

  const parsedUrl = useMemo(() => getVideoData(video || url), [])

  return (
    <$VideoEmbed {...props}>
      {children || (
        <iframe
          title={parsedUrl}
          src={parsedUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </$VideoEmbed>
  )
}

export default VideoEmbed
