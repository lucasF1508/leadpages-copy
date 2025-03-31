import React, { useEffect, useRef, useState, useId } from 'react'
import { styled } from '@design'
import LottieReact, {LottiePlayer} from 'lottie-react';
import isJSON from '@utils/isJSON'
import Loader from '@components/Loader'

const $LottieContainer = styled('div', {
  transition: 'opacity 125ms $easing$base',
  position: 'relative',

  '> div': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
})

LottiePlayer.setIDPrefix('lottie-legacy-')

const Lottie = ({
  lottie: file = {},
  advancedConfig: { config } = {},
  playOnScroll,
  startInView,
  autoplay,
  offset = {},
  loop,
  yoyo,
  ...props
}) => {
  if (!file?.url) return null
  const id = useId()
  let direction = 1
  const { start = 0, end = 1 } = offset || {}
  const ref = useRef()
  const lottie = useRef(null)
  const { width, height, frames, url } = file || {}
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  const hasYoyo = () => {
    direction *= -1
    lottie?.current.setDirection(direction)
    lottie?.current.play()
  }

  const getInteractivity = () => {
    if (config && isJSON(config)) {
      return JSON.parse(config)
    }
    if (playOnScroll) {
      return {
        mode: 'scroll',
        actions: [
          {
            visibility: [start, end],
            type: 'seek',
            frames: [0, frames],
          },
        ],
      }
    }
    if (startInView) {
      return {
        mode: 'scroll',
        actions: [
          {
            visibility: [start, end],
            type: 'play',
          },
        ],
      }
    }
  }

  const handleEvent = (event) => {
    switch (event) {
      case 'complete':
        if (!config && yoyo) {
          hasYoyo()
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
    }

    const checkAnimationLoaded = setInterval(() => {
      if (lottie?.current?.animationLoaded) {
        setIsLoading(false)
        clearInterval(checkAnimationLoaded)
      }
    }, 100)

    fetchData()

    return () => {
      clearInterval(checkAnimationLoaded)
    }
  }, [])

  return (
    <>
      {isLoading && (
        <Loader
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            mt: '-$2',
            ml: '-$2',
          }}
          height="2rem"
          width="2rem"
        />
      )}
      <$LottieContainer
        {...props}
        css={{ ratio: `${width}:${height}`, opacity: isLoading ? 0 : 1 }}
      >
        <LottieReact
          animationData={data}
          autoplay={autoplay}
          interactivity={getInteractivity()}
          loop={loop}
          lottieRef={lottie}
          onComplete={() => handleEvent('complete')}
          onLoopComplete={() => handleEvent('complete')}
          ref={ref}
          id={`lottie-legacy-${id}`}
        />
      </$LottieContainer>
    </>
  )
}

export default React.memo(Lottie)
