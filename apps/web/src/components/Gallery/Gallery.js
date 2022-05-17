import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'

export const $Gallery = styled('div', {
  d: 'grid',
  gtc: '1fr',
  gap: '$3',

  '@>s': {
    gtc: 'repeat(2, 1fr)',
  },

  '@>l': {
    gtc: 'repeat(3, 1fr)',
  },
})

const Gallery = ({ images }) => (
  <$Gallery>
    {images.map((image) => (
      <Image key={image._key} image={image} />
    ))}
  </$Gallery>
)

export default Gallery
