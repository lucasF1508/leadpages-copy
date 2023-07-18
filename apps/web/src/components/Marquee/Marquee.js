import React, { useEffect, useRef, useState } from 'react'
import { styled, keyframes } from '@design'
import useEventListener from '@hooks/useEventListener'
import Image from '@components/Image'
import ContentGroup from '@components/ContentGroup'
import Link from '@components/Link'
import useImageRatio from '@hooks/useImageRatio'
import {
  viewport,
  item as framerItem,
  transition,
} from '@design/tokens/framerTokens'
import { m as motion } from 'framer-motion'

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

const $ServicePoints = styled(motion.div, {
  d: 'flex',
  mx: 'auto',
  fd: 'column',
  grg: '$9',
  gcg: '$4_5',
  mw: '19.5rem',
  mt: '$4_5',

  '@>m': {
    fd: 'row',
    mw: '$cols10',
    mt: '$9',
  },
})

const $ServicePoint = styled(motion.div, {
  textAlign: 'center',

  '@>m': {
    textAlign: 'left',
    flex: '0 1 19.5rem',
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

const $ServicePointImage = styled('div', {
  mb: '$3',
  mx: 'auto',
  mw: '$space$6',

  '@>m': {
    mx: 0,
  },
})

const $ServicePointHeading = styled('h6', {
  typeSizes: 'xl',
  typeStyles: 'buttonSm',
  mb: '$3',
})

const $ServicePointContent = styled('p', {
  typeSizes: 'lg',
  lineHeight: '1.6em',
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
      {(heading || content) && (
        <ContentGroup
          heading={heading}
          content={content}
          animate={animateTextContents}
          align="center"
          css={{
            mw: 'calc($cols10 + $space$8)',
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
                typeSizes: 'lg',
                lineHeight: '1.6em',

                '@>m': {
                  typeSizes: 'xl',
                  lineHeight: '1.4em',
                },
              },
            },
          }}
        />
      )}
      {servicePoints && (
        <$ServicePoints
          variants={
            animateTextContents && {
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  when: 'beforeChildren',
                  staggerChildren: 0.2,
                },
              },
            }
          }
          initial={animateTextContents && 'hidden'}
          whileInView={animateTextContents && 'visible'}
          viewport={animateTextContents && viewport}
        >
          {servicePoints.map(({ _key, heading: _heading, text, image }) => (
            <$ServicePoint
              key={_key}
              variants={framerItem}
              transition={transition}
            >
              {image && (
                <$ServicePointImage>
                  <Image image={image} />
                </$ServicePointImage>
              )}
              {_heading && (
                <$ServicePointHeading>{_heading}</$ServicePointHeading>
              )}
              {text && <$ServicePointContent>{text}</$ServicePointContent>}
            </$ServicePoint>
          ))}
        </$ServicePoints>
      )}
      <$MarqueeContainer {...props}>
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
    </>
  )
}

export default Marquee
