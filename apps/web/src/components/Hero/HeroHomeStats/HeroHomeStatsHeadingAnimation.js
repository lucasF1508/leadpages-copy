/* eslint-disable no-await-in-loop */
import React, { useEffect, useRef } from 'react'
import { styled } from '@design'
import { m as motion, useAnimationControls } from 'framer-motion'

const $HeroHeadingAnimation = styled('h1', {
  letterSpacing: '-0.0075em',
  mw: '8.5em',
  mx: 'auto',
  ta: 'center',
  type: '6xl',

  '@>700': {
    mw: 'unset',
  },

  '@>m': {
    type: 'h2',
  },

  '@>l': {
    ta: 'left',
    type: 'h1',
    mw: '8.5em',
  },

  '@>1440': {
    mw: 'unset',
  },
})

const $WordsViewport = styled('div', {
  type: '6xl',
  overflow: 'hidden',
  height: '1.225em',
  mb: '-0.25em',
  display: 'inline-block',
  ta: 'center',

  '@>m': {
    type: 'h2',
  },

  '@>l': {
    type: 'h1',
    ta: 'left',
  },
})

const $WordsContainer = styled('span', {
  position: 'relative',
  w: '100%',
  d: 'block',
  '@>l': {
    w: 'unset',
    d: 'inline-block',
  },
})

const $Words = styled(motion.div, {
  display: 'flex',
  ff: 'column',
  ai: 'center',
  jc: 'center',
  whiteSpace: 'nowrap',
  c: '$tealLighter',

  '@>l': {
    ai: 'flex-start',
    jc: 'flex-start',
  },
  span: {
    display: 'inline-block',
  },
})

const $Word = styled(motion.span, {
  display: 'inline-block',
})

const HeroHomeStatsHeadingAnimation = ({ words, heading }) => {
  const ref = useRef()
  const controls = useAnimationControls()

  const animations = async (keyFrames) => {
    for (let index = 0; index < keyFrames.length; index++) {
      await controls.start({
        y: keyFrames[index],
        transition: {
          delay: 0.8,
          type: 'tween',
          duration: 0.6,
          ease: [0.5, -0.5, 0.3, 1.5],
        },
      })
    }
  }

  useEffect(() => {
    if (ref.current) {
      const keyFrames = words
        .map((word, index) => `-${(100 / words.length) * index}%`)
        .slice(1)
      animations(keyFrames)
    }
  }, [ref.current])

  return (
    <$HeroHeadingAnimation>
      {heading}&nbsp;
      <$WordsContainer>
        <$WordsViewport>
          <$Words ref={ref} animate={controls}>
            {words.map((word, index) => (
              <$Word key={`${word}-${index}`}>{word}</$Word>
            ))}
          </$Words>
        </$WordsViewport>
      </$WordsContainer>
    </$HeroHeadingAnimation>
  )
}

export default HeroHomeStatsHeadingAnimation
