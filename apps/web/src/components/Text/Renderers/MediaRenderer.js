import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'
import useImageParser from '@hooks/useImageParser'

const Media = dynamic(() => import('@components/Media'))

const $MediaContainer = styled('div', {
  position: 'relative',
  my: '$2',

  '@>s': {
    my: '$4',
  },

  '&:first-child': { mt: '0' },
  '&:last-child': { mb: '0' },

  variants: {
    removeSpaceAround: {
      true: {
        my: 0,
        mt: '-$2',
      },
    },
  },
})

const ImageRenderer = ({
  node: { markDefs, maxWidth, removeSpaceAround, styleMap, ...media },
}) => {
  const { condition, image } = media

  if (condition === 'image') {
    const { width } = useImageParser(image)
    return (
      <$MediaContainer
        removeSpaceAround={removeSpaceAround}
        css={{ maxWidth: maxWidth || width, mx: 'auto' }}
      >
        <Media media={media} type="static" />
      </$MediaContainer>
    )
  }

  return (
    <$MediaContainer removeSpaceAround={removeSpaceAround} css={{ maxWidth }}>
      <Media media={media} type="static" />
    </$MediaContainer>
  )
}

export default ImageRenderer
