import React, { useState, useRef, useEffect } from 'react'
import { styled } from '@design'
import LottieReact from 'lottie-react'
import isJSON from '@utils/isJSON'
import Loader from '@components/Loader'

const $LottieContainer = styled('div', {
  transition: 'opacity 125ms $easing$base',

  '> div': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
})

const Lottie = ({
  lottie: file = {},
  advancedConfig: { config, controlBar = false } = {},
  playOnScroll,
  startInView,
  autoplay,
  offset = {},
  loop,
  yoyo,
  speed = 1,
  ...props
}) => {
  if (!file || !file.asset) return null
  let direction = 1
  const { start = 0, end = 1 } = offset || {}
  const ref = useRef()
  const lottie = useRef(null)
  const { width, height, frames } = file?.asset || {}
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
      const response = await fetch(file.asset.url)
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
          ref={ref}
          lottieRef={lottie}
          animationData={data}
          autoplay={autoplay}
          loop={loop}
          onComplete={() => handleEvent('complete')}
          onLoopComplete={() => handleEvent('complete')}
          interactivity={getInteractivity()}
        />
      </$LottieContainer>
    </>
  )
}

export default React.memo(Lottie)
