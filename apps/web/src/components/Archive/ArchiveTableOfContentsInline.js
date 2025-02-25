import React, { useState } from 'react'
import { styled } from '@design'
import { AnimatePresence, m as motion } from 'framer-motion'
import DownArrow from '@components/Svgs/DownArrow'
import { shapeSidebarData } from './ArchiveTableOfContents'
import ArchiveTableOfContentsInner from './ArchiveTableOfContentsInner'

const $ArchiveTableOfContentsInline = styled('div', {
  position: 'relative',
  pb: '$2',
  mb: '$3',

  '@>1400': {
    display: 'none',
  },
})

const $ArchiveTableOfContentsAnimate = styled(motion.div, {})

const $Expand = styled('div', {
  position: 'absolute',
  bottom: 0,
  w: '100%',
  d: 'flex',
  jc: 'center',
  ai: 'center',
})

const $ExpandButton = styled('button', {
  boxShadow: `$marqueeShadow`,
  p: '$1_5',
  d: 'flex',
  ai: 'center',
  jc: 'center',
  br: '$round',
  zIndex: '$aboveContent',

  '> svg': {
    transition: 'transform $fast',
  },

  variants: {
    expanded: {
      true: {
        '> svg': {
          transform: 'rotate(180deg)',
        },
      },
    },
  },
})

const $Gradient = styled('div', {
  position: 'absolute',
  bottom: 0,
  w: '100%',
  h: '35%',
  background:
    'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
})

// eslint-disable-next-line react/display-name
const ArchiveTableOfContentsInline = React.forwardRef(
  ({ content, useCustomSidebarLinks }, ref) => {
    const filteredSidebarData = shapeSidebarData(content, useCustomSidebarLinks)
    const visibleItems = filteredSidebarData?.slice(0, 5) || []
    const extraItems = filteredSidebarData?.slice(5)
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
      setExpanded(!expanded)
    }

    return (
      <$ArchiveTableOfContentsInline ref={ref}>
        <$ArchiveTableOfContentsAnimate>
          <ArchiveTableOfContentsInner
            data={
              expanded ? [...visibleItems, ...extraItems] : [...visibleItems]
            }
            isInline
          />
        </$ArchiveTableOfContentsAnimate>
        {extraItems && (
          <>
            <$Expand>
              <$ExpandButton onClick={handleClick} expanded={expanded}>
                <DownArrow />
              </$ExpandButton>
            </$Expand>
            <AnimatePresence initial={false}>
              {!expanded && (
                <$Gradient
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                  }}
                />
              )}
            </AnimatePresence>
          </>
        )}
      </$ArchiveTableOfContentsInline>
    )
  }
)

export default ArchiveTableOfContentsInline
