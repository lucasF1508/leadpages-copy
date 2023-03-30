import React from 'react'
import { styled } from '@design'
import NextLink from 'next/link'
// components
import { IconCardsGrid } from '@components/Cards'

const SectionContainer = styled('div', {
  position: 'relative',
  p: '$6',

  '@>577': {
    px: '$12',
  },

  variants: {
    backgroundColor: {
      transparent: {
        py: 'unset',
        box: [
          { property: 'px' },
          {
            property: 'my',
          },
        ],
      },
    },
  },
})

const SectionLink = styled('div', {
  ta: 'center',
  color: '$textAlt',
  mb: '4rem',
  pt: '3rem',
})

const StyledLink = styled('a', {
  d: 'inline',
  c: '$primary',
  pb: '3px',
  bb: '2px solid $colors$purpleLight',

  '&:hover': {
    bb: '2px solid $colors$primary',
  },
})

const FeatureIconsGrid = ({
  items,
  itemsPerRow = '4',
  showSectionLink,
  backgroundColor = 'transparent',
  align,
  asCards = false,
}) => (
  <SectionContainer backgroundColor={backgroundColor}>
    <IconCardsGrid
      items={items}
      itemsPerRow={itemsPerRow}
      align={align}
      asCards={asCards}
    />
    {showSectionLink && (
      <SectionLink>
        Visit Leadpages{' '}
        <NextLink href="/product/feature-index" passHref>
          <StyledLink>feature index</StyledLink>
        </NextLink>{' '}
        for the full story.
      </SectionLink>
    )}
  </SectionContainer>
)

export default FeatureIconsGrid
