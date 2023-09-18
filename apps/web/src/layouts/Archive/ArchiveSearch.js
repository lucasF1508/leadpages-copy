import React from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import ArchiveSidebar from '@components/Archive/ArchiveSidebar'
import Link from '@components/Link'
import { useRouter } from 'next/router'
import { CardPostArchive } from '@components/Cards'
import fetchInfinite from '@hooks/useFetchInfinite'
import {
  LoadMoreContainer,
  $CategoryBreadcrumbs,
  $CategoryHeading,
  $Heading,
} from './Archive'
import { $ArchiveLayout } from './ArchiveSingle'

const $ArchiveCardGrid = styled('div', {
  d: 'grid',
  gridTemplateColumns: '1fr 1fr',
  grg: '$5',
  gcg: '$6',
})

const ArchiveSearch = ({ categories, settings, hasFeaturedPost }) => {
  const router = useRouter()
  const { s: searchQuery } = router.query
  const {
    docs = [],
    error,
    isLoading,
    isReachingEnd,
    ...fetchInfiniteProps
  } = fetchInfinite({
    searchQuery,
    hasFeaturedPost,
    fetch: !!searchQuery,
  })

  if (error) {
    console.error(`Failed to load. Error: ${error}`)
  }

  return (
    <Pinion component="archivePage">
      <$ArchiveLayout isSidebar>
        <div>
          <$CategoryBreadcrumbs>
            <$CategoryHeading tag="h1" tagStyle="breadcrumbs">
              <Link condition="internal" url={'/blog'}>
                Blog
              </Link>
            </$CategoryHeading>
            <$CategoryHeading heading="/" tag="h1" tagStyle="breadcrumbs" />
            <$CategoryHeading
              heading={'Search'}
              tag="h2"
              tagStyle="breadcrumbs"
            />
          </$CategoryBreadcrumbs>
          <$Heading
            category={true}
            heading={`<span style="color: black;">${
              !searchQuery || isLoading ? 'Searching...' : 'Search:'
            }</span> ${!isLoading && searchQuery ? searchQuery : ''}`}
            tag="h1"
            tagStyle="h2"
          />
          <$ArchiveCardGrid>
            {docs.map((doc, i) => (
              <CardPostArchive
                key={doc._id}
                isFeatured={i === 0 && hasFeaturedPost}
                isReachingEnd={isReachingEnd}
                {...doc}
              />
            ))}
          </$ArchiveCardGrid>
          {!isLoading && searchQuery && !isReachingEnd && (
            <LoadMoreContainer {...fetchInfiniteProps} />
          )}
        </div>
        <ArchiveSidebar categories={categories} settings={settings} />
      </$ArchiveLayout>
    </Pinion>
  )
}

export default ArchiveSearch
