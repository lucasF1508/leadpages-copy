import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import ArchiveBreadcrumbs from '@components/Breadcrumbs/ArchiveBreadcrumbs'
import Heading from '@components/Heading'
import Image from '@components/Image'
import ArchiveRelated from '@components/Archive/ArchiveRelated'
import ArchiveTableOfContents from '@components/Archive/ArchiveTableOfContents'
import ArchiveSocialShare from '@components/Archive/ArchiveSocialShare'
import Text from '@components/Text'
import Squiggle from '@legacy/assets/images/global/squiggle.svg'
import { withSidebar } from '@components/Sidebar/SidebarProvider'
import { m as motion, useScroll } from 'framer-motion'
import CTA from '@components/Cta'
import { useRouter } from 'next/router'
import ArchiveTableOfContentsInline from '@components/Archive/ArchiveTableOfContentsInline'
import Waypoint from '@components/Waypoint'
import useStickyHeader from '@hooks/useStickyHeader'
import ArchiveAuthorBio from './ArchiveAuthorBio'
import ArchivePublishDate from './ArchivePublishDate'

export const $ArchiveLayout = styled('div', {
  d: 'flex',
  ff: 'column',

  mw: '$contentArchive',
  mx: 'auto',

  variants: {
    isSidebar: {
      true: {
        d: 'grid',
        mw: 'unset',

        '@>sidebarTablet': {
          gridTemplateColumns: 'auto $cols3',
          gridColumnGap: '$4_5',
        },

        '@>l': {
          gridColumnGap: '$sizes$cols1',
        },
      },
    },
  },
})

export const $ArchiveSocialIcon = styled('button', {
  c: '$textAlt',
  border: '1px solid $colors$grayTertiary',
  borderRadius: '3px',
  width: 25,
  height: 25,
  transition: 'ease 0.3s all',

  svg: {
    c: '$grayTertiary',
    transition: 'ease 0.3s all',
    h: '$space$1_5',
    mt: 2,
  },

  '@>m': {
    width: 40,
    height: 40,
    border: '2px solid $colors$grayTertiary',

    svg: {
      h: '$space$2',
      mt: '$0_5',
    },
  },

  variants: {
    platform: {
      facebook: {
        '&:hover': {
          border: '2px solid #3b5998',
          c: '#3b5998',

          svg: {
            c: '#3b5998',
          },
        },
      },
      twitter: {
        '&:hover': {
          border: '2px solid #4099ff',
          c: '#4099ff',

          svg: {
            c: '#4099ff',
          },
        },
      },
      linkedIn: {
        '&:hover': {
          border: '2px solid #007bb6',
          c: '#007bb6',

          svg: {
            c: '#007bb6',
          },
        },
      },
    },
  },
})

export const $ArchiveSocial = styled('div', {
  position: 'fixed',
  d: 'flex',
  bottom: 0,
  bc: '$white',
  w: '100%',
  jc: 'center',
  zIndex: '$cover',
  gap: '$1',
  p: '$1',
  left: 0,
  boxSizing: 'border-box',

  '@>m': {
    p: 0,
    top: '35%',
    left: '$3',
    flexDirection: 'column',
    jc: 'flex-start',
    gap: '$2',
    w: 'unset',
  },
})

const $SquiggleContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  my: '$9',
})

const $ScrollProgressOuter = styled(motion.div, {
  display: 'none',
  position: 'sticky',
  top: 0,
  background: '$white',
  pt: `calc($headerHeight$s + 1.375rem)`,
  zIndex: '$aboveContent',

  '@>1400': {
    display: 'block',
  },
})

const $ScrollProgress = styled('div', {
  w: '100%',
  h: '0.375rem',
  mb: '-0.375rem',
  bc: '$lightGray3',
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

const $CTA = styled('div', {
  d: 'none',

  '@>m': {
    d: 'block',
  },
})

const $ArchiveSocialShare = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
  mb: '$8',
})

const ArchiveSingle = ({
  _createdAt,
  _updatedAt,
  modified,
  publishedDate,
  content,
  image,
  primaryCategory,
  title,
  categories,
  publisher,
  relatedArticles,
  settings,
  useCustomSidebarLinks,
}) => {
  const contentRef = useRef(null)
  const offsetRef = useRef(null)
  const { asPath } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [offset, setOffset] = useState(25)
  const [showSidebar, setShowSidebar] = useState(true)
  const { showHeader } = useStickyHeader({
    offsetTop: 10,
  })
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start', 'end end'],
  })
  const { cta } = settings || {}

  useEffect(() => {
    const unsubscribeScrollY = scrollYProgress.onChange((scrollValue) => {
      setIsScrolled(scrollValue > 0)
    })

    return () => unsubscribeScrollY()
  }, [])

  useEffect(() => {
    if (offsetRef.current) {
      const rect = offsetRef.current.getBoundingClientRect()
      const distanceFromTopOfDocument =
        rect.top + window.pageYOffset + rect.height
      setOffset(distanceFromTopOfDocument)
    }
  }, [offsetRef.current])

  const openingH2 = content?.findIndex(({ style }) => style === 'h2')
  const excerpt = content?.slice(0, openingH2)
  const rest = content?.slice(openingH2)

  return (
    <div>
      <ArchiveTableOfContents
        content={content}
        ref={contentRef}
        offset={offset}
        isVisible={showSidebar}
        useCustomSidebarLinks={useCustomSidebarLinks}
      />
      <$ScrollProgressOuter
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: showHeader ? 0 : '-5.75rem',
        }}
        transition={{ duration: 0.2, ease: 'linear' }}
      >
        <$ScrollProgress>
          <$ScrollProgressInner>
            <$ScrollProgressIndicator style={{ scaleX: scrollYProgress }} />
          </$ScrollProgressInner>
        </$ScrollProgress>
      </$ScrollProgressOuter>
      <Pinion component="archivePage">
        <$ArchiveLayout>
          <div>
            <ArchiveBreadcrumbs primaryCategory={primaryCategory} />
            <Heading
              heading={title}
              tag="h1"
              tagStyle="heroCustomer"
              css={{
                lineHeight: '$lineHeights$m',
                marginBottom: '$1_5',
                fontWeight: 700,

                '@>navigationDesktopAlt': { mb: '$3' },
              }}
            />
            <ArchivePublishDate
              publisher={publisher}
              updatedAt={modified || _updatedAt}
              publishedDate={publishedDate || _createdAt}
            />
            {publisher && (
              <ArchiveAuthorBio publisher={publisher} isMobile={true} />
            )}
            <div ref={contentRef}>
              <Image
                image={image}
                css={{
                  mb: '$5',
                  d: 'none',
                  '@>navigationDesktopAlt': { d: 'block' },
                }}
              />
              {!!excerpt?.length && (
                <Text content={excerpt} usePostTokens={true} displayIds />
              )}
              <ArchiveTableOfContentsInline
                content={content}
                ref={offsetRef}
                useCustomSidebarLinks={useCustomSidebarLinks}
              />
              {!!rest?.length && (
                <Text content={rest} usePostTokens={true} displayIds />
              )}
            </div>
            <Waypoint
              onEnter={(direction) =>
                direction === 'bottom' && setShowSidebar(false)
              }
              onLeave={(direction) =>
                direction === 'bottom' && setShowSidebar(true)
              }
              css={{ position: 'relative', mb: '-1px' }}
            />
            <$ArchiveSocialShare isDesktop>
              <Heading
                tag="h6"
                tagStyle="subHeading"
                css={{
                  fontWeight: 500,
                  typeSizes: 'base',
                  textAlign: 'center',
                }}
              >
                Share this post:
              </Heading>
              <ArchiveSocialShare title={asPath} />
            </$ArchiveSocialShare>
            {publisher && <ArchiveAuthorBio publisher={publisher} />}
            <Image
              image={image}
              css={{ '@>navigationDesktopAlt': { d: 'none' } }}
            />
            <$SquiggleContainer>
              <img src={Squiggle.src} alt="squiggle seperator" />
            </$SquiggleContainer>
            <ArchiveRelated
              categories={categories}
              settings={settings}
              relatedArticles={relatedArticles}
            />
          </div>
        </$ArchiveLayout>
      </Pinion>
      {cta && (
        <$CTA>
          <CTA {...cta} />
        </$CTA>
      )}
    </div>
  )
}

export default withSidebar(ArchiveSingle)
