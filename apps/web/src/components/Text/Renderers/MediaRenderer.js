import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'

const Media = dynamic(() => import('@components/Media'))

const $MediaContainer = styled('div', {
  mb: '$4',
})

const ImageRenderer = ({ node: { markDefs, ...media } }) => (
  <$MediaContainer>
    <Media media={media} type="static" />
  </$MediaContainer>
)

export default ImageRenderer
