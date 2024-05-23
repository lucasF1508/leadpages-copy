import React, { useState, useEffect } from 'react'
import { styled, theme } from '@design'
import { m as motion, AnimatePresence } from 'framer-motion'
import Image from '@components/Image'

const $Cards = styled('div', {
  display: 'flex',
  ff: 'row wrap',
  jc: 'center',
  ai: 'stretch',
  flex: '1 1 auto',

  '@>700': {
    px: '6.5rem',
    pb: '$2',
  },
})

const $CardsInner = styled('div', {
  display: 'flex',
  ff: 'row wrap',
  jc: 'center',
  ai: 'stretch',
  w: '30rem',
  gap: '$2',

  '@>l': {
    box: { property: 'mr', multiplier: -0.75 },
  },
  '@>1345': {
    mr: 0,
  },
  '@>1440': {
    box: { property: 'mr', multiplier: -0.8 },
  },
})

const $CardContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  pr: '6.5rem',

  '@>700': {
    f: '0 0 calc(50% - 0.5rem)',
    pr: 'unset',

    '&:nth-child(even)': {
      top: '1rem',
    },
  },

  '@<700': {
    '&:nth-child(n + 2)': {
      d: 'none',
    },
  },

  variants: {
    child: {
      1: {
        ai: 'flex-start',
        jc: 'flex-start',

        '@>700': {
          ai: 'flex-end',
          jc: 'flex-end',
        },
      },
      2: {
        ai: 'flex-end',
        jc: 'flex-start',
      },
      3: {
        ai: 'flex-start',
        jc: 'flex-end',
      },
      4: {
        ai: 'flex-start',
        jc: 'flex-start',
      },
    },
  },
})

const $Card = styled('div', {
  display: 'block',
  position: 'relative',
  flex: '0 0 auto',

  variants: {
    size: {
      small: {
        w: '13.25rem',
        h: '13.25rem',
      },
      large: {
        w: '14.5rem',
        h: '14.5rem',
      },
    },
  },
  defaultVariants: {
    size: 'large',
  },
})

const $CardImage = styled('div', {
  display: 'block',
  position: 'absolute',
  inset: 0,
  o: 'hidden',

  variants: {
    child: {
      1: {
        btrr: '3.125rem',

        '@>700': {
          btlr: '3.125rem',
          btrr: 'unset',
        },
      },
      2: {
        btrr: '3.125rem',
      },
      3: {
        bblr: '3.125rem',
      },
      4: {
        bbrr: '3.125rem',
      },
    },
  },
})

const $CardOverlay = styled('div', {
  position: 'absolute',
  bottom: '0',
  z: '$content',
  left: 0,
  w: '100%',
  h: '5.6875rem',
  background:
    'linear-gradient(180deg, transparent 0%, $colors$purpleDark 100%)',
})

const $CardContent = styled('div', {
  boxSizing: 'border-box',
  position: 'absolute',
  mw: '9.5rem',
  w: '100%',
  bs: '$marqueeShadow',
  z: '$aboveContent',
  overflow: 'hidden',

  '& p': {
    fontFamily: '$heading',
    fontSize: '1.9375rem',
    lineHeight: 21 / 31,
    letterSpacing: '-0.005em',
    c: '$purple',
    whiteSpace: 'nowrap',
  },
  '& span': {
    typeSizes: 'xs',
    fontWeight: '$medium',
    letterSpacing: '0.1em',
    c: '$darkBlue',
  },

  variants: {
    size: {
      small: {
        top: '$4',
      },
      large: {
        top: '$5',
      },
    },
    side: {
      left: {
        left: '$6',
        transform: 'translateX(-100%)',
      },
      right: {
        right: '$6',
        transform: 'translateX(100%)',
      },
    },
  },
})

const $CardContentInner = styled(motion.div, {
  display: 'flex',
  ff: 'column',
  ai: 'start',
  jc: 'start',
  gap: '$1_5',
  p: '$2',
  bc: '$white',
  c: '$text',
})

const $CardName = styled(motion.div, {
  position: 'absolute',
  bottom: '$2',
  left: 0,
  w: '100%',
  display: 'flex',
  ff: 'column',
  jc: 'center',
  ai: 'center',
  gap: '$0_5',
  z: '$aboveContent',
  '& p': {
    fontFamily: '$base',
    fontSize: '1.125rem',
    fontWeight: '$bold',
    lineHeight: 1.3333,
    letterSpacing: '-0.005em',
    c: '$white',
  },
  '& span': {
    fontFamily: '$base',
    fontSize: '0.75rem',
    fontWeight: '$medium',
    lineHeight: 1.3333,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    c: '$white',
  },
})

const HeroHomeStatsCards = ({ cards: allCards, cardAnimationInterval }) => {
  const [cards, setCards] = useState(allCards)
  const [intervalCount, setIntervalsCount] = useState(-1)

  useEffect(() => {
    let interval

    const startInterval = () => {
      interval = setInterval(() => {
        setIntervalsCount((prevCount) =>
          prevCount === -1 || prevCount + 1 === allCards?.length
            ? 0
            : prevCount + 1
        )
      }, cardAnimationInterval)
    }

    const stopInterval = () => {
      clearInterval(interval)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval()
      } else {
        startInterval()
      }
    }

    // Start the interval initially
    const delay = setTimeout(() => {
      startInterval()
    }, 1000)

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      // Cleanup: clear interval and remove event listener
      clearTimeout(delay)
      stopInterval()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  useEffect(() => {
    if (intervalCount === -1) return

    const cardClone = cards

    if (window.innerWidth < 700 && cardClone) {
      setCards([...cardClone.slice(1), cardClone[0]])
    } else {
      if (!allCards) return
      const order = [0, 3, 1, 2]
      const cardOutIndex = order[intervalCount % (allCards.length / 2)]
      const cardInIndex = cardOutIndex + allCards.length / 2
      const cardItem = cardClone[cardOutIndex]
      cardClone[cardOutIndex] = cardClone[cardInIndex]
      cardClone[cardInIndex] = cardItem

      setCards(cardClone)
    }
  }, [intervalCount])

  return (
    <$Cards>
      <$CardsInner>
        {!!cards?.length &&
          !!allCards?.length &&
          cards
            .slice(0, allCards.length / 2)
            .map(({ stat, label, image, name, title }, index) => {
              const child = index + 1
              const side = [1, 3].includes(child) ? 'left' : 'right'
              const size = [2, 3].includes(child) ? 'small' : 'large'
              const altText = name?.toLowerCase().replace(/\s+/g, '_') || title

              return (
                <$CardContainer key={child} child={child}>
                  <$Card
                    size={{ '@initial': 'small', '@>700': size }}
                    className={theme}
                  >
                    <$CardContent
                      size={{ '@initial': 'small', '@>700': size }}
                      side={{ '@initial': 'right', '@>700': side }}
                    >
                      <AnimatePresence initial={false} mode="popLayout">
                        <$CardContentInner
                          key={stat}
                          initial={{ y: '100%', opacity: 1 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{
                            y: 0,
                            opacity: 0,
                            transition: { duration: 1.2 },
                          }}
                          transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                          }}
                        >
                          <p>{stat}</p>
                          <span>{label}</span>
                        </$CardContentInner>
                      </AnimatePresence>
                    </$CardContent>
                    <$CardImage child={child}>
                      <AnimatePresence initial={false} mode="popLayout">
                        <motion.div
                          key={stat}
                          exit={{ y: '-100%' }}
                          initial={{ y: '100%' }}
                          animate={{ y: '0%' }}
                          transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                          }}
                        >
                          <Image
                            image={{ ...image, altText }}
                            priority
                            sizes="240px"
                          />
                        </motion.div>
                      </AnimatePresence>
                      <$CardOverlay />
                      <AnimatePresence initial={false} mode="wait">
                        <$CardName
                          key={stat}
                          initial={{ y: '100%', opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{
                            y: 0,
                            opacity: 0,
                            transition: { duration: 0.2 },
                          }}
                          transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                          }}
                        >
                          <p>{name}</p>
                          <span>{title}</span>
                        </$CardName>
                      </AnimatePresence>
                    </$CardImage>
                  </$Card>
                </$CardContainer>
              )
            })}
      </$CardsInner>
    </$Cards>
  )
}

export default HeroHomeStatsCards
