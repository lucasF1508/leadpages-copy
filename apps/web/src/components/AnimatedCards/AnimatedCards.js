import { styled } from '@design'
import { useEffect, useState } from 'react'
import Link from '@components/Link'
import AnimatedCardsSlider from '../AnimatedCardsSlider'

const $AnimatedCardsOuter = styled('div', {
  transition: 'background-color $base',
  box: [{ property: 'py' }, { property: 'px' }],
  overflow: 'hidden',
})

const $AnimatedCards = styled('div', {
  ml: 'auto',
  mr: 'auto',
  mw: '1320px',
  position: 'relative',

  '*': {
    boxSizing: 'border-box',
  },
})

const $CardsHeading = styled('h2', {
  ta: 'center',
  mb: '4.125rem',

  '@>m': {
    fontSize: '$space$5',
    mb: '$6',
  },
})

const $Card = styled('div', {
  position: 'relative',
  d: 'flex',
  fd: 'column',
  px: '$3',
  py: '$4_5',
  gap: '$3',
  bc: '$white',
  transition: 'all $base',

  '@>m': {
    px: '$4_5',
    py: '$6',
  },

  variants: {
    active: {
      true: {
        boxShadow: '$activeHomeCard',
      },
      false: {
        boxShadow: '$homeCard',
      },
    },
  },
})

const $CardHeading = styled('h5', {
  typeSizes: 'xl',
  typeStyles: 'buttonSm',
})

const $CardContent = styled('article', {
  typeSizes: 'base',
  typeStyles: 'baseType',
  c: '$textAlt',
})

const $CardLink = styled('div', {
  typeSizes: 'base',
  mt: 'auto',
})

const $CardProgress = styled('div', {
  position: 'absolute',
  w: '100%',
  h: 0,
  bottom: 0,
  left: 0,
  bc: '#eaeaea',
  transition: `height $base`,

  variants: {
    active: {
      true: {
        height: '6px',
      },
    },
  },
})

const $CardProgressInner = styled('div', {
  h: '100%',
})

const AnimatedCards = ({ cards, heading, delay }) => {
  const [activeIndex, setActiveIndex] = useState(undefined)
  const [activeCard, setActiveCard] = useState(cards[0])

  const media = cards.reduce((acc, { media: _media }) => [...acc, _media], [])

  const progressColors = cards.map(({ backgroundColor }) => {
    switch (backgroundColor) {
      case 'rgba(143,239,239,0.25)':
        return '#8FEFEF'
      case 'rgba(228,222,252,0.5)':
        return '#D1C6F9'
      default:
        return '#603EFF'
    }
  })

  useEffect(() => {
    if (activeIndex !== undefined && activeIndex !== null) {
      setActiveCard(cards[activeIndex])
    }
  }, [activeIndex])

  return (
    <$AnimatedCardsOuter css={{ bc: activeCard.backgroundColor }}>
      <$AnimatedCards>
        <$CardsHeading>{heading}</$CardsHeading>
        <AnimatedCardsSlider
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          config={{ autoplay: true }}
          media={media}
          delay={delay}
          css={{
            slide: {
              '@>s': {
                w: '26.5rem',
              },
              '@>l': {
                w: 'calc((100% - $space$6)/3)',
              },
            },
          }}
        >
          {cards.map(({ heading: _heading, link, _key, subheading }, i) => (
            <$Card key={_key} active={activeIndex === i}>
              <$CardHeading>{_heading}</$CardHeading>
              <$CardContent>{subheading}</$CardContent>
              <$CardLink>
                <Link {...link} />
              </$CardLink>
              <$CardProgress active={activeIndex === i}>
                <$CardProgressInner
                  active={activeIndex === i}
                  css={{
                    bc: progressColors[i],
                    opacity: 0.5,
                    w: activeIndex === i ? '100%' : '0%',
                    transition: `width ${delay}s`,
                  }}
                />
              </$CardProgress>
            </$Card>
          ))}
        </AnimatedCardsSlider>
      </$AnimatedCards>
    </$AnimatedCardsOuter>
  )
}

export default AnimatedCards
