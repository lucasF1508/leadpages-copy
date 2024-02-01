import React from 'react'
import { styled, darkTheme } from '@design'
import Text from '@components/Text'
import Link from '@components/Link'
import Image from '@components/Image'
import StatCards from '@components/StatCards'
import HeroHomeStatsHeadingAnimation from './HeroHomeStatsHeadingAnimation'
import HeroHomeStatsCards from './HeroHomeStatsCards'
import { $ShapesRight, $ShapesRightInner } from '../HeroHomeAlt'

const $HeroHomeStats = styled('div', {
  bc: '$purpleDark',
  c: '$text',
  mt: '-$headerHeight$s',
  pt: '$headerHeight$s',
  position: 'relative',
  z: '$content',
  box: { property: 'px' },
  pb: '$6',

  overflow: 'hidden',
  '&, & *': {
    boxSizing: 'border-box',
  },

  '@>700': {
    box: { property: 'pt', multiplier: 2.25 },
  },

  '@>m': {
    box: { property: 'pt', multiplier: 1.125 },
  },

  '@>l': {
    box: { property: 'pt', multiplier: 1.5 },
  },
})
const $HeroHomeStatsInner = styled('div', {
  mw: '$base',
  mx: 'auto',
  d: 'flex',
  ff: 'row wrap',
  ai: 'center',
  jc: 'center',
  gap: '$7',

  '@>l': {
    gap: '$3',
    h: '100%',
    ff: 'row nowrap',
    jc: 'space-between',
  },
})

const $HeroHomeContentContainer = styled('div', {
  mw: '$cols6',
  display: 'flex',
  ff: 'column',
  ai: 'flex-start',
  jc: 'flex-start',
  gap: '$4',
  '@>m': {
    mw: '48.75rem',
  },
})

const $HeroHomeContent = styled('div', {
  display: 'flex',
  ff: 'column',
  jc: 'center',
  ai: 'center',
  gap: '$4',
  mx: 'auto',
  mw: '22.75rem',

  '@>700': {
    mw: '35.5rem',
  },

  '@>m': {
    mw: '37.375rem',
  },

  '@>l': {
    ml: 0,
    mw: '$cols5',
    jc: 'flex-start',
    ai: 'flex-start',
  },
})

const $StatCards = styled('div', {
  mw: '$base',
  mx: 'auto',
})

export const $SVG = styled(Image, {
  height: '100%',
  width: '115%',
  right: '15%',

  '@media (min-width: 700px)': {
    width: '105%',
    right: 0,
  },

  '@>m': {
    width: '115%',
    right: '15%',
  },

  '@>l': {
    width: '100%',
    right: 0,
  },
})

const HeroHomeStats = ({
  className,
  stats,
  cards,
  words,
  heading,
  content,
  links,
  backgroundImages,
  cardAnimationInterval = 3000,
}) => (
  <$HeroHomeStats className={`${className || ''} ${darkTheme}`}>
    <$HeroHomeStatsInner>
      <$HeroHomeContentContainer>
        <HeroHomeStatsHeadingAnimation heading={heading} words={words} />
        <$HeroHomeContent>
          <Text
            as="p"
            css={{
              type: 'lg',
              fontWeight: '$normal',
              ta: 'center',

              '@>l': {
                type: 'xl',
                ta: 'left',
                mw: '22em',
              },

              '@>1440': {
                mw: 'unset',
              },
            }}
            content={content}
          />
          {!!links.length && (
            <Link {...links[0]} css={{ boxSizing: 'content-box' }} />
          )}
        </$HeroHomeContent>
      </$HeroHomeContentContainer>
      <HeroHomeStatsCards
        cards={cards}
        cardAnimationInterval={cardAnimationInterval}
      />
    </$HeroHomeStatsInner>
    <$StatCards>
      <StatCards stats={stats} />
    </$StatCards>
    {backgroundImages?.right && (
      <$ShapesRight css={{ z: '$under' }}>
        <$ShapesRightInner>
          <$SVG image={backgroundImages?.right} alt="shapes" priority />
        </$ShapesRightInner>
      </$ShapesRight>
    )}
  </$HeroHomeStats>
)

export default HeroHomeStats
