import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import ArchiveBreadcrumbs from '@components/Breadcrumbs/ArchiveBreadcrumbs'
import Heading from '@components/Heading'
import Image from '@components/Image'
import ArchiveRelated from '@components/Archive/ArchiveRelated'
import Text from '@components/Text'
import Squiggle from '@legacy/assets/images/global/squiggle.svg'
import { m as motion, useScroll } from 'framer-motion'
import CTA from '@components/Cta'
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

const $ScrollProgress = styled(motion.div, {
  position: 'sticky',
  w: '100%',
  h: '0.375rem',
  mb: '-0.375rem',
  bc: '$lightGray3',
  top: '$headerHeight$s',
  zIndex: '$cover',
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

const ArchiveSingle = ({
  _createdAt,
  _updatedAt,
  publishedDate,
  content,
  image,
  primaryCategory,
  title,
  categories,
  publisher,
  relatedArticles,
  settings,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const contentRef = useRef(null)
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

  return (
    <>
      <$ScrollProgress
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : '-100%' }}
        transition={{ duration: 0.2 }}
      >
        <$ScrollProgressInner>
          <$ScrollProgressIndicator style={{ scaleX: scrollYProgress }} />
        </$ScrollProgressInner>
      </$ScrollProgress>
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
              updatedAt={_updatedAt}
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
              <Text content={content} isPost={true} />
            </div>
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
    </>
  )
}

export default ArchiveSingle
