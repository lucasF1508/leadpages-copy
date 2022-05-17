import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import useImageRatio from '@hooks/useImageRatio'

export const $LogoGrid = styled('div', {})

export const $LogoGridInner = styled('div', {
  d: 'grid',
  gtc: 'repeat(2, 1fr)',
  grg: '$5',
  gcg: '$5',

  '@>s': {
    gtc: 'repeat(3, 1fr)',
  },
})

export const $LogoGridItem = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',

  '&[href]': {
    cursor: 'pointer',
    transform: 'scale(1)',
    transition: 'transform 125ms linear',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})

const $Logo = styled('div', {
  img: {
    objectFit: 'contain',
  },
})

const LogoGrid = ({ logos, ...props }) => (
  <$LogoGrid {...props}>
    <$LogoGridInner>
      {logos.map(({ url, image, _key }) => {
        if (!image) return null

        const linkProps = url
          ? {
              href: url,
              as: 'a',
              rel: 'noopener noreferrer',
              target: '_blank',
            }
          : {}

        const { dimension } = useImageRatio(image, 64)

        return (
          <$LogoGridItem key={_key} {...linkProps}>
            <$Logo css={{ width: dimension }}>
              <Image image={image} hasPlaceholder={false} />
            </$Logo>
          </$LogoGridItem>
        )
      })}
    </$LogoGridInner>
  </$LogoGrid>
)

export default LogoGrid
