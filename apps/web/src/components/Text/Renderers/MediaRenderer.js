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
  node: {
    markDefs,
    maxWidth,
    removeSpaceAround,
    styleMap,
    url,
    align,
    ...media
  },
}) => {
  const { condition, image } = media
  const alignMargin = {
    ml: align === 'left' ? 0 : 'auto',
    mr: align === 'right' ? 0 : 'auto',
  }

  if (condition === 'image') {
    const { width } = useImageParser(image)

    if (url) {
      return (
        <$MediaContainer
          removeSpaceAround={removeSpaceAround}
          css={{ maxWidth: maxWidth || width, ...alignMargin }}
        >
          <a href={url} rel="noreferrer">
            <Media media={media} type="static" />
          </a>
        </$MediaContainer>
      )
    }

    return (
      <$MediaContainer
        removeSpaceAround={removeSpaceAround}
        css={{ maxWidth: maxWidth || width, ...alignMargin }}
      >
        <Media media={media} type="static" />
      </$MediaContainer>
    )
  }

  return (
    <$MediaContainer
      removeSpaceAround={removeSpaceAround}
      css={{ maxWidth, ...alignMargin }}
    >
      <Media media={media} type="static" />
    </$MediaContainer>
  )
}

export default ImageRenderer
