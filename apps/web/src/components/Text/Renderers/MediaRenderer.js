import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'

const Media = dynamic(() => import('@components/Media'))

const $MediaContainer = styled('div', {
  position: 'relative',
  my: '$2',

  '@>s': {
    my: '$8',
  },

  '&:first-child': { mt: '0' },
  '&:last-child': { mb: '0' },
})

const ImageRenderer = ({ node: { markDefs, ...media } }) => (
  <$MediaContainer>
    <Media media={media} type="static" />
  </$MediaContainer>
)

export default ImageRenderer
