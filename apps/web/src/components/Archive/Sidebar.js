import React from 'react'
import { styled } from '@design'
import Heading from '@components/Heading'
import Image from '@components/Image'
import Link from '@components/Link'
import { MdShowChart } from 'react-icons/md'
import SidebarCTA from '@components/Archive/SidebarCTA'

const $Heading = styled(Heading, {})

const $ArchiveSidebar = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$space$5',
})

const $ArticleSearchInput = styled('input', {
  background: '$grayAlt',
  border: '1px solid $colors$lightGray',
  borderRadius: '3px',
  color: '$textAlt',
  fontFamily: '$apercuPro',
  fontWeight: 500,
  fontSize: '16px',
  height: '46px',
  padding: '0 12px',
  transition: 'ease 0.3s all',

  '&:focus': {
    background: '$white',
    borderColor: '$brand',
    color: '$textAlt',
    outline: 0,
  },
})

const $HeadingStyles = {
  type: 'base',
  color: '$darkGrayAlt',
  fontFamily: '$apercuPro',
  fontWeight: '500',
  fontSize: '15px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  gridColumn: '1 / 3',
  lineHeight: '$2_5',
}

const $CategoriesGrid = styled('section', {
  d: 'grid',
  gtc: 'repeat(2, 1fr)',
  gcg: '$2',

  [`${$Heading}`]: $HeadingStyles,
})

const $CategoryGridItem = styled('div', {
  py: '$1_5',
  borderBottom: '1px solid $colors$lightGray',
})

const $CategoryLink = styled(Link, {
  color: '$primary',
  fontWeight: 500,
  fontSize: '15px',
  lineHeight: '$2_5',

  '&:hover': {
    color: '$black',
    textDecoration: 'underline',
    textDecorationColor: '$colors$primary',
  },
})

const $TrendingHeading = styled('div', {
  d: 'flex',
  gc: '1 / 3',
})

const $TrendingLink = styled(Link, {
  d: 'block',
  color: '$black',
  fontWeight: 500,
  fontSize: '15px',
  lineHeight: '$2_5',

  '&:hover': {
    color: '$primary',
  },

  '@>m': {
    [`+ a`]: {
      bt: '1px solid $colors$lightGray',
    },
  },
})

const $TrendingTitle = styled('div', {
  px: '$1_5',

  '@>m': {
    px: 0,
    pl: '$1_5',
  },
})

const $TrendingArticle = styled('div', {
  d: 'flex',
  py: '$2',
  alignItems: 'flex-start',
})

const $Icon = styled('div', {
  pl: '$1_5',
  c: '$darkGrayAlt',
})

const $TrendingGrid = styled('div', {
  '@>s': {
    d: 'grid',
    gtc: 'repeat(2, 1fr)',
  },

  '@>m': {
    d: 'block',
  },

  [`${$Heading}`]: $HeadingStyles,
})

const ArchiveSidebar = ({ categories, settings }) => {
  const { trendingArticles, sidebarCta } = settings

  return (
    <$ArchiveSidebar>
      <SidebarCTA content={sidebarCta} />
      <$ArticleSearchInput placeholder="Search..." />
      {categories && (
        <$CategoriesGrid>
          <$Heading heading={'Categories'} tag="h4" />
          {categories.map((category) => (
            <$CategoryGridItem key={category._id}>
              <$CategoryLink
                label={category.title}
                url={`/blog/category${category.path}`}
                condition={'internal'}
              />
            </$CategoryGridItem>
          ))}
        </$CategoriesGrid>
      )}
      {trendingArticles && (
        <$TrendingGrid>
          <$TrendingHeading>
            <$Heading heading={'Popular Posts'} tag="h4" />
            <$Icon>
              <MdShowChart size={18} />
            </$Icon>
          </$TrendingHeading>
          {trendingArticles.map(
            (article) =>
              article.title &&
              article.slug && (
                <$TrendingLink url={article.path} condition="internal">
                  <$TrendingArticle key={article._id}>
                    {article.image && (
                      <div style={{ minWidth: '40%' }}>
                        <Image image={article.image} />
                      </div>
                    )}
                    <$TrendingTitle>{article.title}</$TrendingTitle>
                  </$TrendingArticle>
                </$TrendingLink>
              )
          )}
        </$TrendingGrid>
      )}
    </$ArchiveSidebar>
  )
}

export default ArchiveSidebar
