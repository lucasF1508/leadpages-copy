import React from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import Link from '@components/Link'
import Heading from '@components/Heading'
import { $CategoryBreadcrumbs, $CategoryHeading, $Heading } from './Archive'

const $Hr = styled('div', {
  borderBottom: '$base',
  my: '$4',

  '@>s': {
    my: '$6',
  },
})

const $SitemapHeading = styled(Heading, {
  mb: '$4',
})

const $SitemapLink = styled(Link, {
  display: 'block',
  mb: '$2',

  '&:hover': {
    color: '$hover',
  },
})

const $SitemapPosts = styled('ul', {
  listStyleType: 'none',

  '@>m': {
    columns: '2',
    columnGap: '$6',
  },
})

const $SitemapCategories = styled('ul', {
  columns: '2',
  columnGap: '$2',
  listStyleType: 'none',

  '@>s': {
    columns: '3',
    columnGap: '$4',
  },

  '@>m': {
    columns: '4',
  },
})

const $SitemapCategory = styled('li', {
  breakInside: 'avoid-column',
})

const $SitemapList = styled('ul', {
  listStyleType: 'none',
  mb: '$6',
  ml: '$1',

  '@>m': {
    ml: '$2',
  },
})

const ArchiveSitemap = ({ docs }) => (
  <Pinion component="archivePage">
    <div>
      <$CategoryBreadcrumbs>
        <$CategoryHeading tag="h1" tagStyle="breadcrumbs">
          <Link condition="internal" url={'/blog'}>
            Blog
          </Link>
        </$CategoryHeading>
        <$CategoryHeading heading="/" tag="h1" tagStyle="breadcrumbs" />
        <$CategoryHeading heading={'Sitemap'} tag="h2" tagStyle="breadcrumbs" />
      </$CategoryBreadcrumbs>
      <$Heading
        category={true}
        heading={'Blog Sitemap'}
        tag="h1"
        tagStyle="h2"
      />
      {docs && (
        <>
          <$SitemapCategories>
            {Object.values(docs).map(({ title, url }, index) => (
              <$SitemapLink
                key={`${Object.keys(docs)[index]}-category`}
                condition="internal"
                url={url}
              >
                {title}
              </$SitemapLink>
            ))}
          </$SitemapCategories>
          <$Hr />
          <$SitemapPosts>
            {Object.values(docs).map(({ title, url, posts }, index) => (
              <$SitemapCategory key={`${Object.keys(docs)[index]}-post`}>
                <Link condition="internal" url={url}>
                  <$SitemapHeading tagStyle="h5">{title}</$SitemapHeading>
                </Link>
                <$SitemapList>
                  {posts.map((post) => (
                    <li key={post?.url}>
                      <$SitemapLink condition="internal" url={post?.url}>
                        {post?.title}
                      </$SitemapLink>
                    </li>
                  ))}
                </$SitemapList>
              </$SitemapCategory>
            ))}
          </$SitemapPosts>
        </>
      )}
    </div>
  </Pinion>
)

export default ArchiveSitemap
