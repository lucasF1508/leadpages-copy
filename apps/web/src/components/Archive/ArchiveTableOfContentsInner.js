import { Link as ScrollLink } from 'react-scroll'
import Heading from '@components/Heading'
import { styled } from '@design'
import { m as motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const $ArchiveTableOfContentsInner = styled(motion.div, {
  py: '$3',
})

const $StyledScrollLink = styled(ScrollLink, {
  textDecoration: 'none',
  color: '$textAlt',
  cursor: 'pointer',
  d: 'flex',
  ai: 'flex-start',
  p: '$1 $4_5 $1 $4',
  borderLeft: '$space$0_5 solid transparent',

  [`
    &:hover,
    &.active
  `]: {
    color: '$purple',
    borderLeft: '$space$0_5 solid $colors$primary',

    '@media (min-width: 1400px)': {
      color: '$text',
    },
  },

  variants: {
    isInline: {
      true: {
        px: 0,
        borderLeft: 'none',

        [`
          &:hover,
          &.active
        `]: {
          borderLeft: 'none',
        },
      },
    },
  },
})

const $StyledScrollLinkInnerSpan = styled('span', {
  position: 'relative',

  [`&:after`]: {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    backgroundColor: '$purpleLight',

    '@media (min-width: 1400px)': {
      backgroundColor: 'transparent',
      height: 0,
    },
  },

  [`&:hover:after`]: {
    backgroundColor: '$purple',
  },
})

const $StyledScrollLinkInner = styled(Heading, {
  px: '$2',
  py: '$1',
  mx: '-$2',
  my: '-$1',
  w: '100%',
  d: 'flex',
  ai: 'flex-start',
  gap: '$1',

  [`&:hover`]: {
    '@media (min-width: 1400px)': {
      backgroundColor: '$gray',
    },
  },

  '> svg': {
    fill: '#C3C2C1',
  },

  [`
    &:hover,
    &.active
  `]: {
    '> svg': {
      fill: '$purple',
    },
  },

  variants: {
    primary: {
      true: {
        fontWeight: 400,
        lineHeight: '$lineHeights$l',
      },
    },
  },
})

// eslint-disable-next-line react/display-name
const Component = React.forwardRef(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
))

const MotionComponent = motion(Component)

const ArchiveTableOfContentsInner = ({
  data,
  active,
  handleClick,
  isInline = false,
  open = true,
  visible,
}) => {
  if (!data || data.length === 0) return null

  const refs = useRef({})
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const scrollTargetRef = refs.current[selected] || refs.current[active]
    const scroller = document.getElementById('scroller')

    if (scrollTargetRef && scroller && open && visible) {
      scroller.scrollTo({ top: scrollTargetRef.offsetTop - 100 })
    }
  }, [open, visible, active, selected])

  useEffect(() => {
    if (selected === active) {
      setSelected(null)
    }
  }, [selected, active])

  return (
    <AnimatePresence initial={false}>
      {open && (
        <$ArchiveTableOfContentsInner
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence initial={false}>
            <Heading
              tag="h4"
              tagStyle="cardHeading"
              css={{
                lineHeight: '$lineHeights$l',
                fontWeight: 500,
                pb: '$1_5',
                px: !isInline && '$4',
              }}
              heading={'In this article:'}
            />
            {data.map(({ component, slug, label }, i) => {
              if (component === 'h2') {
                return (
                  <MotionComponent
                    // eslint-disable-next-line no-return-assign
                    ref={(el) => (refs.current[slug] = el)}
                    key={`${slug}-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        opacity: { duration: 0.2 },
                        height: { duration: 0.2, delay: 0.2 },
                      },
                    }}
                  >
                    <$StyledScrollLink
                      className={active === slug && 'active'}
                      to={slug}
                      alt={label}
                      spy
                      hashSpy
                      smooth
                      duration={300}
                      offset={-90}
                      onClick={() => {
                        if (handleClick) handleClick()
                        setSelected(slug)
                      }}
                      isInline={isInline}
                      href={`#${slug}`}
                    >
                      <$StyledScrollLinkInnerSpan>
                        <$StyledScrollLinkInner
                          tag="h5"
                          tagStyle="sm"
                          heading={label}
                          primary={true}
                        />
                      </$StyledScrollLinkInnerSpan>
                    </$StyledScrollLink>
                  </MotionComponent>
                )
              }

              if (component === 'h3') {
                return (
                  <MotionComponent
                    // eslint-disable-next-line no-return-assign
                    ref={(el) => (refs.current[slug] = el)}
                    key={`${slug}-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        opacity: { duration: 0.2 },
                        height: { duration: 0.2, delay: 0.2 },
                      },
                    }}
                  >
                    <$StyledScrollLink
                      className={active === slug && 'active'}
                      to={slug}
                      alt={label}
                      spy
                      hashSpy
                      smooth
                      duration={300}
                      offset={-90}
                      onClick={() => {
                        if (handleClick) handleClick()
                        setSelected(slug)
                      }}
                      isInline={isInline}
                      href={`#${slug}`}
                    >
                      <$StyledScrollLinkInner tag="h6" tagStyle="captionSm">
                        <svg
                          width="6"
                          height="17"
                          viewBox="0 0 6 17"
                          fill="none"
                          style={{ flex: `0 0 auto` }}
                        >
                          <g id="Bullet frame">
                            <circle id="Bullet" cx="3" cy="8" r="3" />
                          </g>
                        </svg>
                        <div>{label}</div>
                      </$StyledScrollLinkInner>
                    </$StyledScrollLink>
                  </MotionComponent>
                )
              }

              return <></>
            })}
          </AnimatePresence>
        </$ArchiveTableOfContentsInner>
      )}
    </AnimatePresence>
  )
}

export default ArchiveTableOfContentsInner
