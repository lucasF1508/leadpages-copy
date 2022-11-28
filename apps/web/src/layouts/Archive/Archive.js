import React from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import Heading from '@components/Heading'
import ArchiveSidebar from '@components/Archive/Sidebar'
import Link from '@components/Link'
import Pagination from '@components/Pagination'
import { CardPostArchive } from '@components/Cards'
import { $ArchiveGrid } from './ArchiveSingle'

const $ArchiveCardGrid = styled('div', {
  d: 'grid',
  gridTemplateColumns: '1fr 1fr',
  grg: '$5',
  gcg: '$6',
})

const $CategoryHeading = styled(Heading, {})

const $CategoryBreadcrumbs = styled('div', {
  pb: '$1',
  mb: '$3',
  bb: '2px solid $colors$grayTertiaryAlt',
  d: 'flex',
  gap: '$2',
  c: '$grayTertiary',

  a: {
    bb: '1px solid transparent',

    '&:hover': {
      c: '$primary',
      bb: '1px solid $colors$primary',
    },
  },

  [`${$CategoryHeading}`]: {
    '&:last-child': {
      c: '$primary',
    },
  },
})

const Archive = ({
  docs = [],
  pagination = {},
  currentCategory,
  categories,
  settings,
  hasFeaturedPost,
}) => (
  <Pinion component="archivePage">
    <$ArchiveGrid>
      <div>
        {currentCategory ? (
          <$CategoryBreadcrumbs>
            <$CategoryHeading tag="h1" tagStyle="h5">
              <Link condition="internal" url={'/blog'}>
                Blog
              </Link>
            </$CategoryHeading>
            <$CategoryHeading heading=">" tag="h1" tagStyle="h5" />
            <$CategoryHeading
              heading={currentCategory.title}
              tag="h2"
              tagStyle="h5"
            />
          </$CategoryBreadcrumbs>
        ) : (
          <Heading
            heading={'Leadpages Blog'}
            tag="h1"
            tagStyle="h2"
            css={{ pb: '$8' }}
          />
        )}
        <$ArchiveCardGrid>
          {docs.map((doc, i) => (
            <CardPostArchive
              key={doc._id}
              isFeatured={i === 0 && hasFeaturedPost}
              {...doc}
            />
          ))}
        </$ArchiveCardGrid>
      </div>
      <ArchiveSidebar categories={categories} settings={settings} />
      <Pagination pagination={pagination} />
    </$ArchiveGrid>
  </Pinion>
)

export default Archive
