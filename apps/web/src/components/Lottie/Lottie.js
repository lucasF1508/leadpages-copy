import React, { useState, useRef } from 'react'
import { styled } from '@design'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { create } from '@lottiefiles/lottie-interactivity'
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

  const hasYoyo = () => {
    direction *= -1
    ref.current.setPlayerDirection(direction)
    ref.current.play()
  }

  const hasPlayOnScroll = () => {
    if (!lottie?.current) {
      console.error('Lottie not initialized. Lottie:', lottie?.current)
      return false
    }
    return create({
      player: lottie?.current,
      mode: 'scroll',
      actions: [
        {
          visibility: [start, end],
          type: 'seek',
          frames: [0, frames],
        },
      ],
    })
  }

  const hasStartInView = () => {
    if (!lottie?.current) {
      console.error('Lottie not initialized. Lottie:', lottie?.current)
      return false
    }

    return create({
      player: lottie?.current,
      mode: 'scroll',
      actions: [
        {
          visibility: [start, end],
          type: 'play',
        },
      ],
    })
  }

  const hasConfig = () => {
    if (!lottie?.current) {
      console.error('Lottie not initialized. Lottie:', lottie?.current)
      return false
    }

    return create({
      player: lottie?.current,
      ...JSON.parse(config),
    })
  }

  const handleEvent = (event) => {
    switch (event) {
      case 'load':
        setIsLoading(false)
        break
      case 'complete':
        if (!config && yoyo) {
          hasYoyo()
        }
        break
      default:
        break
    }
  }

  const getInstance = (instance) => {
    lottie.current = instance
    if (config && isJSON(config)) {
      hasConfig()
    } else if (playOnScroll) {
      hasPlayOnScroll()
    } else if (startInView) {
      hasStartInView()
    }
  }

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
        <Player
          ref={ref}
          lottieRef={(instance) => getInstance(instance)}
          onEvent={handleEvent}
          keepLastFrame
          autoplay={autoplay}
          loop={loop}
          src={file.asset.url}
          speed={speed}
        >
          <Controls
            visible={controlBar}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      </$LottieContainer>
    </>
  )
}

export default React.memo(Lottie)
