import React, { useCallback, useRef, useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { styled } from '@design'
import Loader from '@components/Loader'
import { useInView } from 'react-intersection-observer'

export const $Video = styled('div', {
  bc: '$blackA3',
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

const VideoVimeo = ({
  video = {},
  videoControls = {},
  videoType = 'video/mp4',
  type = 'fluid',
  autoPlay = false,
  ratio: ratioOrg,
  css,
  ...props
}) => {
  const { files } = video
  const sources = files.filter((file) => file?.link.includes('.mp4'))

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
    const bestSource = sources.find((videoSource) => videoSource.width > width)
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
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            mt: '-$2',
            ml: '-$2',
          }}
          type={type}
          color="var(--colors-brand)"
          height="2rem"
          width="2rem"
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
          <source data-size={source.size} type={videoType} src={source.link} />
        )}
      </m.video>
    </$Video>
  )
}

export default VideoVimeo
