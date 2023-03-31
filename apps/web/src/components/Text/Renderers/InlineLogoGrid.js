import React from 'react'
// import TextColumns from '@components/Text/TextColumns'
import { styled } from '@design'
import Link from '@components/Link'
import Image from '@components/Image'

const $LogoGridContainer = styled('div', {
  box: { property: 'my', multiplier: 0.1 },
  d: 'flex',
  gap: '$1',
  ai: 'center',
  jc: 'space-around',
  fw: 'wrap',
  pb: '$1',

  '@>m': {
    jc: 'flex-start',
  },
})

const $LogoGridInner = styled('div', {
  w: '190px',
})

const $LogoGridImage = styled(Image, {
  maxHeight: '$space$9',
})

const InlineLogoGrid = ({ node: { items, ...props } = {} }) => {
  const { logos } = props

  return (
    logos &&
    logos.length && (
      <$LogoGridContainer>
        {logos.map((logo) => {
          const { url, image } = logo

          return url ? (
            <Link
              condition="external"
              url={url}
              key={url}
              target="_blank"
              style={{ width: '190px' }}
            >
              <$LogoGridImage
                image={{ _type: 'image', asset: { ...image.asset } }}
              />
            </Link>
          ) : (
            <$LogoGridInner>
              <$LogoGridImage
                image={{ _type: 'image', asset: { ...image.asset } }}
                objectFit="contain"
              />
            </$LogoGridInner>
          )
        })}
      </$LogoGridContainer>
    )
  )
}

export default InlineLogoGrid
