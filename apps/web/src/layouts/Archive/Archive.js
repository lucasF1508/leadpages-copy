import React from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import Heading from '@components/Heading'
import ArchiveSidebar from '@components/Archive/ArchiveSidebar'
import Link, { $Link, LinkIcon } from '@components/Link'
import { CardPostArchive } from '@components/Cards'
import useFetchInfinite from '@hooks/useFetchInfinite'
import { $ArchiveLayout } from './ArchiveSingle'

const $ArchiveCardGrid = styled('div', {
  d: 'grid',
  gridTemplateColumns: '1fr',
  grg: '$3',

  '@>s': {
    gridTemplateColumns: '1fr 1fr',
    grg: '$4',
    gcg: '$3',
  },

  '@>m': {
    grg: '$5',
    gcg: '$6',
  },
})

export const $Heading = styled(Heading, {
  mb: '$4',

  '@>s': {
    mb: '$5',
  },

  '@>m': {
    mb: '$7',
  },

  variants: {
    category: {
      true: {
        '@>m': {
          mb: '$6',
        },
      },
    },
  },
})

export const $CategoryHeading = styled(Heading, {})
export const $CategoryBreadcrumbs = styled('div', {
  mb: '$1_5',
  d: 'flex',
  gap: '$1_5',
  c: '$grayTertiary',

  '@>s': {
    mb: '$2',
  },

  '@>m': {
    mb: '$3',
  },

  a: {
    bb: '1px solid transparent',

    '&:hover': {
      c: '$hover',
    },
  },

  [`${$CategoryHeading}`]: {
    '&:last-child': {
      c: '$textAlt',
    },
  },
})

export const $LoadMoreContainer = styled('div', {
  d: 'flex',
  jc: 'center',
  mt: '-45vw',
  pt: '50vw',
  position: 'relative',
  backgroundImage:
    'linear-gradient(to top, $colors$white, 83%, rgba(255, 0, 0, 0))',

  '@>s': {
    backgroundImage:
      'linear-gradient(to top, $colors$white, 90%, rgba(255, 0, 0, 0))',
    mt: '-22vw',
    pt: '27vw',
  },

  '@>sidebarTablet': {
    mt: '-15vw',
    pt: '18vw',
  },

  '@>1345': {
    mt: '-$25',
    pt: '$30',
  },
})

const $Icon = styled(LinkIcon, {
  w: '$space$2_5',
  h: '$space$2_5',
  ml: '-$0_5',
})

const $ArchiveContents = styled('div', {
  mb: '$4_5',
})

export const LoadMoreContainer = ({
  className,
  size,
  setSize,
  isLoadingMore,
}) => (
  <$LoadMoreContainer className={className}>
    <$Link
      linkStyle="ghost"
      onClick={() => setSize(size + 1)}
      disabled={isLoadingMore}
    >
      {isLoadingMore ? 'Loading More...' : 'Load More Posts'}
      {!isLoadingMore && <$Icon />}
    </$Link>
  </$LoadMoreContainer>
)

const Archive = ({
  docs: fallbackData = [],
  currentCategory: category,
  categories,
  settings,
  hasFeaturedPost,
  filters,
}) => {
  const { docs, isReachingEnd, ...fetchInfiniteProps } = useFetchInfinite({
    fallbackData,
    category,
    hasFeaturedPost,
    filters,
  })

  return (
    <Pinion component="archivePage">
      <$ArchiveLayout isSidebar>
        <$ArchiveContents>
          {category && (
            <$CategoryBreadcrumbs>
              <$CategoryHeading tag="h1" tagStyle="breadcrumbs">
                <Link condition="internal" url={'/blog'}>
                  Blog
                </Link>
              </$CategoryHeading>
              <$CategoryHeading heading="/" tag="h1" tagStyle="breadcrumbs" />
              <$CategoryHeading
                heading={category.title}
                tag="h2"
                tagStyle="breadcrumbs"
              />
            </$CategoryBreadcrumbs>
          )}
          <$Heading
            category={!!category}
            heading={category ? category?.title : 'Leadpages Blog'}
            tag="h1"
            tagStyle="h2"
          />
          <$ArchiveCardGrid>
            {docs.map(({ publishedDate, ...doc }, i) => (
              <CardPostArchive
                key={doc._id}
                isFeatured={i === 0 && hasFeaturedPost}
                isReachingEnd={isReachingEnd}
                publishedDate={publishedDate}
                {...doc}
              />
            ))}
          </$ArchiveCardGrid>
          {!isReachingEnd && <LoadMoreContainer {...fetchInfiniteProps} />}
        </$ArchiveContents>
        <ArchiveSidebar categories={categories} settings={settings} isSidebar />
      </$ArchiveLayout>
    </Pinion>
  )
}

export default Archive
