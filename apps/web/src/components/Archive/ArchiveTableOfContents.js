import {
  getSidebarSlug,
  SidebarContext,
} from '@components/Sidebar/SidebarProvider'
import { styled } from '@design'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { m as motion, useScroll, AnimatePresence } from 'framer-motion'
import ArrowDownSVG from '@legacy/assets/images/global/arrow_down_small.svg'
import useStickyHeader from '@hooks/useStickyHeader'
import useElementHeight from '@hooks/useElementHeight'
import useMediaQuery from '@hooks/useMediaQuery'
import ArchiveTableOfContentsInner from './ArchiveTableOfContentsInner'

const filterDuplicateByKey = (array, key) =>
  array.filter(
    (v, i, a) => a.findIndex((t) => (key ? t[key] === v[key] : t === v)) === i // Remove duplicates
  )

const $ArchiveTableOfContentsContainer = styled(motion.div, {
  position: 'fixed',
  width: '100%',
  zIndex: '$dropdown',
  background: '$white',
  top: 0,
  pt: 'calc($headerHeight$s + 1.375rem)',
  maxHeight: 'calc(50vh - $headerHeight$s)',
  transition: 'opacity 0.15s ease-in-out',

  '@>1400': {
    top: 'calc($headerHeight$s + 1.375rem)',
    pt: 0,
    position: 'fixed',
    transition: 'transform 0.15s ease-in-out',
    width: 300,
    mt: '$3',
    maxHeight: 'unset',
    bottom: 0,
  },

  variants: {
    visible: {
      true: {
        '@>1400': {
          opacity: '1 !important',
        },
      },
      false: {
        '@>1400': {
          opacity: '0 !important',
        },
      },
    },
  },
})

const $ArchiveTableOfContents = styled(motion.div, {
  overflowY: 'hidden',
  height: 0,
  maxHeight: 'calc(50vh - $headerHeight$s)',

  '@>1400': {
    maxHeight: 'unset',
    height: 'auto',
  },
})

const $ArchiveTableOfContentsToggle = styled('div', {
  bc: '$white',
  py: '0.406rem',
  ta: 'center',
  d: 'flex',
  jc: 'space-between',
  bb: '1px solid $colors$lightGray3',

  '@>1400': {
    display: 'none',
    border: 'none',
    px: 0,
  },
})

const $ArchiveTableOfContentsToggleInner = styled('div', {
  flex: 1,
  typeSizes: 'sm',
  fontWeight: 400,
})

const $ArchiveTableOfContentsHeight = styled(motion.div, {
  zIndex: '$cover',
  bc: '$white',
  height: 'calc(50vh - $headerHeight$s)',
  overflowY: 'auto',

  '@>1400': {
    height: 'calc(100vh - $headerHeight$s - 1.5rem) !important',
  },
})

const $ScrollProgress = styled(motion.div, {
  w: '100%',
  h: '0.375rem',
  mb: '-0.375rem',
  bc: '$lightGray3',
  zIndex: '$cover',

  '@>1400': {
    position: 'fixed',
    top: '$headerHeight$s',
  },

  variants: {
    isDesktop: {
      true: {
        display: 'none',

        '@>1400': {
          display: 'block',
        },
      },
      false: {
        display: 'block',

        '@>1400': {
          display: 'none',
        },
      },
    },
  },
})

const $ScrollProgressInner = styled('div', {
  position: 'relative',
  h: '100%',
  w: '100%',
})

const $ScrollProgressIndicator = styled(motion.div, {
  bc: '$primary',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  h: '100%',
  transformOrigin: '0%',
})

export const shapeSidebarData = (content, useCustomSidebarLinks) => {
  const sideBarData = content.reduce(
    (acc, { markDefs, children, style: itemStyle, _type }) => {
      if (useCustomSidebarLinks) {
        const isCustomSidebarLink = markDefs?.find(
          (mark) => mark._type === 'sidebarLink'
        )
        if (isCustomSidebarLink) {
          const { _key, style, text } = isCustomSidebarLink
          const child = children?.find(({ marks }) => marks.includes(_key))

          const childText = child?.text

          if (childText && childText.length > 0) {
            return [
              ...acc,
              {
                component: style,
                slug: getSidebarSlug(childText),
                label: text || childText,
              },
            ]
          }
        }
        return acc
      }

      if (_type === 'block' && itemStyle === 'h2') {
        const childText = children?.map(({ text }) => text).join(' ')

        if (childText && childText.length > 0) {
          return [
            ...acc,
            {
              component: itemStyle,
              slug: getSidebarSlug(childText),
              label: childText,
            },
          ]
        }
      }
      return acc
    },
    []
  )

  return filterDuplicateByKey(sideBarData, 'slug')
}

// eslint-disable-next-line react/display-name
const ArchiveTableOfContents = React.forwardRef(
  ({ content, offset, isVisible = true, useCustomSidebarLinks }, ref) => {
    const { active, setSidebarSlugs } = useContext(SidebarContext) || {}
    const [open, setOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const { isSticky, stickyMotionProps, showHeader } = useStickyHeader({
      offsetTop: offset,
    })
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start', 'end end'],
    })
    const { height: leadbarOffset } = useElementHeight(
      '.lp-bar__iframe-wrapper',
      true
    )

    const filteredSidebarData = useMemo(
      () => shapeSidebarData(content, useCustomSidebarLinks),
      [content]
    )

    const toggleMenu = () => {
      setOpen(!open)
    }

    const handleClick = () => {
      setOpen(false)
    }

    useMemo(() => {
      setSidebarSlugs(filteredSidebarData.map(({ slug }) => slug))
    }, [])

    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    const isDesktop = useMediaQuery('(min-width: 1400px)')

    return (
      <AnimatePresence initial={true}>
        {isVisible && (
          <$ArchiveTableOfContentsContainer
            initial={{ opacity: 0 }}
            animate={{
              y: showHeader ? 0 : -90,
              opacity: isDesktop || isSticky ? 1 : 0,
            }}
            exit={{ opacity: 0 }}
            transition={stickyMotionProps?.transition}
            css={{
              '@>1400': {
                transform: leadbarOffset
                  ? `translateY(${
                      leadbarOffset - scrollPosition > 0
                        ? leadbarOffset - scrollPosition
                        : 0
                    }px) !important`
                  : 'none !important',
              },
            }}
          >
            <$ArchiveTableOfContentsToggle onClick={toggleMenu}>
              <$ArchiveTableOfContentsToggleInner />
              <$ArchiveTableOfContentsToggleInner>
                Jump to Section
              </$ArchiveTableOfContentsToggleInner>
              <$ArchiveTableOfContentsToggleInner
                css={{ display: 'flex', justifyContent: 'right' }}
              >
                <div style={{ paddingRight: '1.5rem' }}>
                  <img src={ArrowDownSVG.src} alt="arrow down" />
                </div>
              </$ArchiveTableOfContentsToggleInner>
            </$ArchiveTableOfContentsToggle>
            <$ArchiveTableOfContents
              animate={open || isDesktop ? 'opened' : 'closed'}
              variants={{
                opened: {
                  height: 'auto',
                },
                closed: {
                  height: 0,
                },
              }}
              transition={{
                ease: 'linear',
              }}
            >
              <$ArchiveTableOfContentsHeight id="scroller">
                <ArchiveTableOfContentsInner
                  active={active}
                  data={filteredSidebarData}
                  handleClick={handleClick}
                  open={open || isDesktop}
                  visible={isVisible}
                />
              </$ArchiveTableOfContentsHeight>
            </$ArchiveTableOfContents>
            <$ScrollProgress
              animate={{ opacity: isSticky ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              isDesktop={false}
            >
              <$ScrollProgressInner>
                <$ScrollProgressIndicator style={{ scaleX: scrollYProgress }} />
              </$ScrollProgressInner>
            </$ScrollProgress>
          </$ArchiveTableOfContentsContainer>
        )}
      </AnimatePresence>
    )
  }
)

export default ArchiveTableOfContents
