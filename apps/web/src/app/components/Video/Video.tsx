'use client'
import type {  ImageType } from '@types'
import type { ClassValue } from 'clsx'
import type { IntersectionOptions } from 'react-intersection-observer'
import type { ReactPlayerProps } from 'react-player'
import React, { memo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
import { motion } from 'motion/react'
import ReactPlayer from 'react-player/lazy'
import Image from '@/components/Image'
import { getFileVideoInfo, hasVideo } from './utils'

export interface VideoProps extends Partial<ReactPlayerProps> {
  callBack?: any
  className?: ClassValue
  classNames?: {
    container?: ClassValue
    player?: ClassValue
    root?: ClassValue
    thumbnail?: ClassValue
  }
  controls?: boolean
  fill?: boolean
  inViewProps?: IntersectionOptions
  loop?: boolean
  muted?: boolean
  playing?: boolean
  playsinline?: boolean
  video?: {
    condition?: string
    controls?: boolean
    file?: {
      asset?: {
        _ref?: string
        _type?: string
      }
    }
    height?: number
    thumbnail?: ImageType | undefined
    url?: string
    width?: number
  }
  videoRef?: React.RefObject<ReactPlayer>
  volume?: number
}

const Video = ({
  className,
  classNames,
  controls: _controls = true,
  fill = false,
  hasThumbnail = true,
  inViewProps = {
    rootMargin: `0px`,
    threshold: 0.1,
  },
  light = false,
  loop = true,
  muted = true,
  onBuffer,
  onBufferEnd,
  onClickPreview,
  onDisablePIP,
  onDuration,
  onEnablePIP,
  onEnded,
  onError,
  onPause,
  onPlay,
  onProgress,
  onReady: _onReady,
  onSeek,
  onStart,
  playing = true,
  playsinline = true,
  sizes = '1200px',
  video,
  videoRef,
  volume,
}: VideoProps) => {
  const [isReady, setIsReady] = useState(false)
  const [inViewRef, inView] = useInView({
    ...inViewProps,
    triggerOnce: true,
  })

  if (!hasVideo(video)) return null

  const fileInfo = getFileVideoInfo(video)

  if (fileInfo) {
    return (
      <div
        className={clsx(
          'block w-full',
          fill ? 'absolute left-0 top-0 h-full' : 'relative',
          className,
          classNames?.root
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          className={clsx(
            fill
              ? 'absolute left-0 top-0 h-full w-full object-cover'
              : 'w-full h-auto object-cover',
            classNames?.player
          )}
          loop={loop}
          muted={muted}
          playsInline={playsinline}
          preload="auto"
        >
          <source
            src={fileInfo.url}
            type={fileInfo.mimeType}
          />
        </video>
      </div>
    )
  }

  // Legacy URL-based video (ReactPlayer)
  const { height = 9, thumbnail, url, width = 16 } = video || {}
  const controls =
    typeof video?.controls !== 'undefined' ? video?.controls : _controls


  const onReady: ReactPlayerProps['onReady'] = (player) => {
    setIsReady(true)

    if (typeof _onReady === 'function') {
      _onReady(player)
    }
  }

  return (
    <div
      className={clsx(
        'bg-surface-shadow block w-full',
        fill ? 'absolute left-0 top-0 h-full' : 'relative',
        className,
        classNames?.root
      )}
      ref={inViewRef}
    >
      {!fill && (
        <span
          className={clsx(
            'block w-full',
          )}
          style={{
            paddingBottom: `${(height / width) * 100}%`,
          }}
        />
      )}
      {hasThumbnail && thumbnail && (
        <Image
          className={clsx(
            classNames?.thumbnail,
            'z-content absolute left-0 top-0 h-full w-full object-cover'
          )}
          fill
          image={thumbnail}
          sizes={sizes}
        />
      )}
      <motion.div
        animate={{ opacity: isReady ? 1 : 0 }}
        className={clsx(
          classNames?.container,
          'z-above-content absolute left-0 top-0 h-full w-full'
        )}
        initial={{ opacity: 0 }}
        transition={{  duration: 0.2, ease: 'linear' }}
      >
        {inView && (
          <ReactPlayer
            className={clsx(
              classNames?.player,
              'z-above-content absolute left-0 top-0 [&_video]:object-cover'
            )}
            controls={controls}
            height="100%"
            light={light}
            loop={loop}
            muted={muted}
            onBuffer={onBuffer}
            onBufferEnd={onBufferEnd}
            onClickPreview={onClickPreview}
            onDisablePIP={onDisablePIP}
            onDuration={onDuration}
            onEnablePIP={onEnablePIP}
            onEnded={onEnded}
            onError={onError}
            onPause={onPause}
            onPlay={onPlay}
            onProgress={onProgress}
            onReady={onReady}
            onSeek={onSeek}
            onStart={onStart}
            playIcon={<></>}
            playing={playing}
            playsinline={playsinline}
            ref={videoRef}
            url={url}
            volume={volume}
            width="100%"
          />
        )}
      </motion.div>
    </div>
  )
}

export default memo(Video)
