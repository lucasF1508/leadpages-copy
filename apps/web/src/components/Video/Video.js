import React from 'react'
import isString from 'lodash/isString'
import VideoEmbed from './VideoEmbed'
import VideoVimeo from './VideoVimeo'
import VideoFiles from './VideoFiles'

const Video = (props) => {
  const { video } = props

  if (!video || (!video?.files?.length && !video?.embed && !isString(video))) {
    return null
  }

  switch (video?.condition) {
    case 'vimeo':
      return <VideoVimeo {...props} />

    case 'files':
      return <VideoFiles {...props} />

    default:
      if (!video?.files?.length) {
        return <VideoEmbed {...props} />
      }

      return null
  }
}

export default Video
