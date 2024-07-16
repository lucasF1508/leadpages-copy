import React, { useEffect, useState, useRef, memo } from 'react'
import Lottie from 'lottie-react'
import LogoLottie from '@public/Leadpages-Logo.json'
import { styled } from '@design'
import { m, backInOut } from 'framer-motion'
import { useNavStore } from '@components/Nav/NavStore'

const $LottieWrapper = styled(m.div, {
  width: 145,
  height: 43.5,
  position: 'relative',
  cursor: 'pointer',

  '> div': {
    position: 'absolute',
    width: 145,
    top: 0,
    bottom: 0,
    left: 0,
    d: 'flex',
    jc: 'center',
    ai: 'center',
    pointerEvents: 'none',
  },

  svg: {
    '*': {
      fill: 'currentColor',
      transition: 'fill 0.3s cubic-bezier(0.73, 0.00, 0.68, 0.94) 0.1s',
    },

    '&:hover *': {
      transition: 'fill 0.3s cubic-bezier(0.32, 0.06, 0.27, 1.00)',
    },
  },

  variants: {
    lightLogo: {
      true: {
        color: '$white',

        '&:hover *': {
          fill: '$lavenderLight',
        },
      },
      false: {
        color: '$text',

        '&:hover *': {
          fill: '$primary',
        },
      },
    },
  },
})

const NavLogo = ({ isSticky, darkHero, isStartPageHeader }) => {
  const { isNavOpen } = useNavStore()
  const [loaded, setLoaded] = useState(false)
  const lottie = useRef(null)
  const lightLogo = darkHero && !isNavOpen && !isSticky

  const mouseEnter = () => {
    lottie?.current.playSegments(isSticky ? [86, 103] : [40, 57], true)
  }

  const mouseLeave = () => {
    lottie?.current.playSegments(isSticky ? [103, 119] : [57, 73], true)
  }

  useEffect(() => {
    const checkAnimationLoaded = setInterval(() => {
      if (lottie?.current?.animationLoaded) {
        lottie?.current?.playSegments(isSticky ? [86] : [1, 40], true)
        setLoaded(true)
        clearInterval(checkAnimationLoaded)
      }
    }, 100)

    return () => {
      clearInterval(checkAnimationLoaded)
      setLoaded(false)
    }
  }, [])

  useEffect(() => {
    if (!loaded) return
    lottie?.current?.playSegments(isSticky ? [73, 86] : [90, 73], true)
  }, [isSticky])

  return (
    <$LottieWrapper
      animate={{
        width: isSticky ? 40 : 145,
      }}
      transition={{
        duration: isSticky ? 0.6 : 0.5,
        ease: backInOut,
        delay: isSticky ? 0.3 : 0,
      }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      lightLogo={lightLogo}
    >
      <Lottie
        autoplay={false}
        lottieRef={lottie}
        animationData={LogoLottie}
        loop={false}
      />
    </$LottieWrapper>
  )
}

export default memo(NavLogo)
