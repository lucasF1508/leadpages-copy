import React from 'react'
import { styled } from '@design'
import ReactAudioPlayer from 'react-audio-player'

const $Audio = styled(ReactAudioPlayer, {
  w: '100%',
})

const Audio = ({ src, ...props }) => <$Audio src={src} controls {...props} />

export default Audio
