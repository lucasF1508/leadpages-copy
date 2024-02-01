import React, { useEffect, useRef, useState } from 'react'
import { styled, keyframes } from '@design'
import useEventListener from '@hooks/useEventListener'
import Image from '@components/Image'
import ServicePoints from '@components/ServicePoints'
import ContentGroup from '@components/ContentGroup'
import Link from '@components/Link'
import useImageRatio from '@hooks/useImageRatio'
import Text from '@components/Text'

const scrollLeft = keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' },
})

const $MarqueeContainer = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  ai: 'center',
  jc: 'flex-start',
  alignSelf: 'flex-start',
  overflow: 'hidden',
  position: 'relative',
  py: '$12',

  variants: {
    linkShown: {
      true: {
        pb: '$7',
      },
    },
  },
})

const $Marquee = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
  animationName: scrollLeft,
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',

  '&.paused': {
    animationPlayState: 'paused',
  },
})

const $MarqueeItem = styled('div', {
  display: 'flex',
  fd: 'column',
  jc: 'center',
  transition: 'all $fancy',

  variants: {
    hasShadow: {
      true: {
        boxShadow: '$marqueeShadow',

        '&:hover': {
          boxShadow: '$marqueeShadowHover',
        },
      },
    },
  },
})

const $Gradient = styled('div', {
  h: 'calc(100% + 4px)',
  w: '$sizes$cols1',
  position: 'absolute',
  z: 1,
  top: '-1px',

  '@>m': {
    w: 'calc($sizes$cols1 + $space$6)',
  },

  variants: {
    position: {
      left: {
        left: 0,
        background:
          'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
      },
      right: {
        right: '-1px',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
      },
    },
  },
})

const $Link = styled('div', {
  textAlign: 'center',
  pb: '$12',

  '& a': {
    fontWeight: '$medium',
  },
})

const Marquee = ({
  heading,
  content,
  images,
  priority,
  duration: durationOrg,
  servicePoints,
  height,
  spaceBetween = 60,
  hasShadow,
  animate: animateTextContents = false,
  overline,
  links,
  ...props
}) => {
  if (!images) return null

  const duration = durationOrg || images.length * 8
  const ref = useRef()
  const mRefs = useRef([])
  const [number, setNumber] = useState(2)

  const getCloneCount = () => {
    const box = ref.current.getBoundingClientRect()
    return Math.ceil(window.innerWidth / box.width)
  }

  // eslint-disable-next-line react/display-name
  const MarqueeRow = React.forwardRef((marqueeProps, marqueeRef) => (
    <$Marquee
      ref={marqueeRef}
      css={{
        animationDuration: `${duration || 15}s`,
      }}
      {...marqueeProps}
    >
      {images.map(({ image, maxWidth, link }) => {
        const { dimension: _width, dimensionAsPx: _pxWidth } = useImageRatio(
          image,
          height
        )
        return (
          <$MarqueeItem
            key={image?.asset?._id}
            hasShadow={hasShadow}
            onMouseEnter={
              link?.condition &&
              (() => {
                ref.current.classList.add('paused')
                mRefs.current.forEach((mRef) => {
                  mRef?.classList.add('paused')
                })
              })
            }
            onMouseLeave={
              link?.condition &&
              (() => {
                ref.current.classList.remove('paused')
                mRefs.current.forEach((mRef) => {
                  mRef?.classList.remove('paused')
                })
              })
            }
            css={{
              h: height ? `${(height / 16) * 0.6}rem` : '3.125rem',
              w: `${(_pxWidth / 16) * 0.6}rem`,
              mw: `${maxWidth / 16}rem`,
              ml: `${spaceBetween / 16 / 2}rem`,

              '&:hover': { scale: link?.condition && 1.1 },

              '@>m': {
                h: height ? `${height / 16}rem` : '6.25rem',
                w: `${_width}`,
                mw: `${maxWidth / 16}rem`,
                ml: `${spaceBetween / 16}rem`,
              },
            }}
          >
            {link?.condition ? (
              <Link {...link} css={{ w: '100%', height: '100%' }}>
                <Image image={image} />
              </Link>
            ) : (
              <Image image={image} />
            )}
          </$MarqueeItem>
        )
      })}
    </$Marquee>
  ))

  useEffect(() => {
    setNumber(getCloneCount())
  }, [])

  useEventListener('resizeEnd', () => {
    setNumber(getCloneCount())
  })

  return (
    <>
      {overline && (
        <Text
          content={overline}
          tagStyle="overline"
          css={{
            textAlign: 'center',
            mb: '$3',
            fontWeight: 400,
            c: '$socialGray',
          }}
        />
      )}
      {(heading || content) && (
        <ContentGroup
          heading={heading}
          content={content}
          animate={animateTextContents}
          align="center"
          css={{
            mw: '$cols8',
          }}
          props={{
            heading: {
              tag: 'h3',
              css: {
                typeSizes: '4xl',

                '@>m': {
                  fontSize: '2.5rem',
                },
              },
            },
            content: {
              css: {
                typeSizes: 'base',
                lineHeight: '1.6em',
                fontWeight: 400,

                '@>m': {
                  typeSizes: 'lg',
                  lineHeight: '1.4em',
                },
              },
            },
          }}
        />
      )}
      <ServicePoints
        servicePoints={servicePoints}
        animateTextContents={animateTextContents}
      />
      <$MarqueeContainer linkShown={!!links?.length} {...props}>
        <$Gradient position="left" />
        <$Gradient position="right" />
        <MarqueeRow ref={ref} />
        {[...Array(number)].map((i, index) => (
          <MarqueeRow
            key={`clone-${index + 1}`}
            ref={(el) => mRefs.current.push(el)}
          />
        ))}
      </$MarqueeContainer>
      {!!links?.length && (
        <$Link>
          <Link {...links[0]} />
        </$Link>
      )}
    </>
  )
}

export default Marquee
