import React from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import Heading from '@components/Heading'
import Link from '@components/Link'
import { CardPostArchive } from '@components/Cards'
import useFetchInfinite from '@hooks/useFetchInfinite'
import Author from '@components/Author'
import { LoadMoreContainer } from './Archive'

const $ArchiveCardGrid = styled('div', {
  d: 'grid',
  gridTemplateColumns: '1fr',
  grg: '$3',

  '@>s': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    grg: '$4',
    gcg: '$3',
  },

  '@>m': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    grg: '$5',
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

const ArchiveAuthor = ({
  docs: fallbackData = [],
  publisher,
  perPage = 18,
}) => {
  const { docs, isReachingEnd, ...fetchInfiniteProps } = useFetchInfinite({
    fallbackData,
    publisher,
    perPage,
  })

  return (
    <Pinion component="archivePage">
      <div>
        {publisher && (
          <$CategoryBreadcrumbs>
            <$CategoryHeading tag="h1" tagStyle="breadcrumbs">
              <Link condition="internal" url={'/blog'}>
                Blog
              </Link>
            </$CategoryHeading>
            <$CategoryHeading heading="/" tag="h1" tagStyle="breadcrumbs" />
            <$CategoryHeading
              heading={publisher?.title}
              tag="h2"
              tagStyle="breadcrumbs"
            />
          </$CategoryBreadcrumbs>
        )}
        {publisher && <Author {...publisher} />}
        <$ArchiveCardGrid>
          {docs.map((doc) => (
            <CardPostArchive
              key={doc._id}
              isReachingEnd={isReachingEnd}
              cardsPerRow={3}
              {...doc}
            />
          ))}
        </$ArchiveCardGrid>
        {!isReachingEnd && <LoadMoreContainer {...fetchInfiniteProps} />}
      </div>
    </Pinion>
  )
}

export default ArchiveAuthor
