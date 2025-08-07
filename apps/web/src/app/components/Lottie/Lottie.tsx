import type {
  PlayerDirection,
  PlayerEvent,
  Player as PlayerType,
} from '@lottiefiles/react-lottie-player'
import type { AnimationItem } from 'lottie-web'
import React, { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { create } from '@lottiefiles/lottie-interactivity'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import Loader from '@/components/Loader'
import isJSON from '@utils/isJSON'

type LottieType = {
  animationName: string
  asset?: {
    _id?: string
    _ref: string
  }
  file?: any,
  frameRate: number
  frames: number
  height: number
  width: number
}

export interface LottieProps {
  advancedConfig?: {
    config?: string
    controlBar?: boolean
  }
  autoplay?: boolean
  className?: string
  classNames?: {
    loader?: string
    root?: string
  }
  loader?: boolean
  loop?: boolean
  lottie: LottieType
  offset?: {
    end?: number
    start?: number
  }
  playOnScroll?: boolean
  progress?: number
  speed?: number
  startInView?: boolean
  yoyo?: boolean
}

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_API_DATASET

const getAssetUrl = ({ _id, _ref }: { _id?: string; _ref: string }) => {
  const id = _id || _ref
  const [, hash, extension] = id.split('-')
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${hash}.${extension}`
}

const Lottie = ({
  advancedConfig: { config, controlBar = false } = {},
  autoplay,
  className,
  classNames,
  loader = false,
  loop,
  lottie: file = {} as LottieType,
  offset = {},
  playOnScroll,
  speed = 1,
  startInView,
  yoyo
}: LottieProps) => {
  if (!file?.file && !file?.asset) return null
  const id = useId()
  const [isLoading, setIsLoading] = useState(true)

  let direction: PlayerDirection = 1
  const { end = 1, start = 0 } = offset || {}
  const ref = useRef<PlayerType | null>(null)
  const lottie = useRef<AnimationItem | null>(null)
  const { animationName, asset, frames, height, width } = file || {}
  const url = asset ? getAssetUrl(asset) : undefined

  const hasYoyo = () => {
    if (!ref?.current) return undefined

    direction *= -1
    ref.current.setPlayerDirection(direction as PlayerDirection)
    ref.current.play()
  }

  const hasPlayOnScroll = () => {
    if (!lottie?.current) {
      console.error('Lottie not initialized. Lottie:', lottie?.current)
      return false
    }
    return create({
      actions: [
        {
          frames: [0, frames],
          type: 'seek',
          visibility: [start, end],
        },
      ],
      mode: 'scroll',
      player: lottie?.current,
    })
  }

  const hasStartInView = () => {
    if (!lottie?.current) {
      console.error('Lottie not initialized. Lottie:', lottie?.current)
      return false
    }

    return create({
      actions: [
        {
          type: 'playOnce',
          visibility: [start, end],
        },
      ],
      mode: 'scroll',
      player: lottie?.current,
    })
  }

  const hasConfig = () => {
    if (!lottie?.current) {
      console.error('Lottie not initialized. Lottie:', lottie?.current)
      return false
    }

    return create({
      player: lottie?.current,
      ...(config ? JSON.parse(config) : {}),
    })
  }

  const handleEvent = (event: PlayerEvent) => {
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

  const getInstance = (instance: AnimationItem) => {
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
      {loader && isLoading && (
        <Loader
          className={clsx(
            'absolute left-1/2 top-1/2 -ml-4 -mt-4',
            classNames?.loader
          )}
          height="2rem"
          width="2rem"
        />
      )}
      <div
        className={clsx(
          'relative flex h-full w-full flex-col items-center justify-center transition-opacity',
          '[&>div]:h-full [&>div]:w-full',
          isLoading ? 'opacity-0' : 'opacity-100',
          className,
          classNames?.root
        )}
        style={{ aspectRatio: `${width / height}` }}
      >
        <Player
          autoplay={autoplay}
          id={`${animationName}-${id}`}
          keepLastFrame
          loop={loop}
          lottieRef={(instance) => getInstance(instance)}
          onEvent={handleEvent}
          ref={ref}
          speed={speed}
          src={url || file?.file}
        >
          <Controls
            buttons={['play', 'repeat', 'frame', 'debug']}
            visible={controlBar}
          />
        </Player>
      </div>
    </>
  )
}

export default React.memo(Lottie)
