import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'

const Media = dynamic(() => import('@components/Media'))

const $MediaContainer = styled('div', {
  position: 'relative',
  mb: '$5',

  '&:last-child': {
    mb: '0',
  },
})

const ImageRenderer = ({ node: { markDefs, ...media } }) => (
  <$MediaContainer>
    <Media media={media} type="static" />
  </$MediaContainer>
)

export default ImageRenderer
