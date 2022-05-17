import React, { useCallback, useRef, useEffect, useState } from 'react'
import { m } from 'framer-motion'
import Loader from '@components/Loader'
import { useInView } from 'react-intersection-observer'
import { styled } from '@design'
import VideoEmbed from './VideoEmbed'

export const $Video = styled('div', {
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
    objectPosition: '50% 50%',
    w: '100%',
    h: '100%',
  },

  variants: {
    type: {
      static: {
        position: 'relative',
        width: '100%',

        '&::before': {
          content: `''`,
          d: 'block',
          w: '100%',
        },
      },
      fluid: {
        position: 'absolute',
        top: 0,
        left: 0,
        h: '100%',
        w: '100%',
      },
    },
  },
})

const Video = ({
  ratio: ratioOrg,
  video = {},
  videoControls = {},
  videoType = 'video/mp4',
  type = 'fluid',
  css,
  autoPlay = false,
  ...props
}) => {
  if (!video || (!video?.files?.length && !video?.embed)) {
    return null
  }

  if (!video?.files?.length) {
    return <VideoEmbed css={css} {...props} html={video.embed.html} />
  }

  const { files: sources } = video
  const controls = {
    loop: true,
    muted: true,
    playsInline: true,
    autoPlay: true,
    controls: false,
    ...videoControls,
  }

  const [muted] = useState(autoPlay)
  const [{ width: orgWidth, height }] = sources || [{}]
  const ratio = ratioOrg || `${orgWidth}:${height}`

  const ref = useRef()
  const videoRef = useRef()
  const [source, setSource] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const [inViewRef, inView, entry] = useInView({
    threshold: 0,
    rootMargin: '-200px 0px 0px',
    triggerOnce: true,
  })

  const setRefs = useCallback(
    (node) => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )
  const handleLoad = () => {
    if (!isLoaded) {
      setLoaded(true)
    }
  }

  useEffect(() => {
    if (!entry || source) return

    const { width } = entry.boundingClientRect
    const bestSource = sources.find((videoSource) => videoSource.size > width)
    const foundSource = bestSource || sources.reverse()[0]

    setSource(foundSource)
  }, [entry])

  useEffect(() => {
    if (muted && autoPlay) {
      videoRef?.current.play()
    }
  }, [muted])

  useEffect(() => {
    if (videoRef?.current?.readyState === 4 && !isLoaded) {
      setLoaded(true)
    }
  }, [videoRef?.current?.readyState])

  return (
    <$Video ref={setRefs} type={type} css={{ ratio, ...css }} {...props}>
      {!isLoaded && (
        <Loader
          type={type}
          color="var(--colors-brand)"
          height="var(--space-4)"
          width="var(--space-4)"
        />
      )}
      <m.video
        {...controls}
        ref={videoRef}
        onLoadedData={handleLoad}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              duration: 0.2,
              delay: 0.2,
            },
          },
          hidden: {
            opacity: 0,
          },
        }}
      >
        {inView && source && (
          <source data-size={source.size} type={videoType} src={source.url} />
        )}
      </m.video>
    </$Video>
  )
}

export default Video
