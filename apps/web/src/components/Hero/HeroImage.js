import React from 'react'
import { styled } from '@design'
import Media from '@components/Media'

export const $HeroImage = styled('div', {
  bs: '$xl',
})

const HeroImage = ({ image, ...props }) => {
  if (!image) return null
  return (
    <$HeroImage {...props}>
      <Media
        media={{
          condition: 'image',
          image,
        }}
        type="static"
        priority
      />
    </$HeroImage>
  )
}

export default HeroImage
