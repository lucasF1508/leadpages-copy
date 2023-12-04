import React from 'react'
import { styled } from '@design'
import Heading from '@components/Heading'
import Image from '@components/Image'
import Link from '@components/Link'
import ArchiveRelatedCTA from '@components/Archive/ArchiveRelatedCTA'
import Squiggle from '@legacy/assets/images/global/squiggle.svg'

const $Heading = styled(Heading, {})

const $ArchiveRelated = styled('section', {})

const $CategoriesFlex = styled('div', {
  d: 'flex',
  ff: 'column',
  width: '100%',

  [`${$Heading}`]: { lineHeight: 1.5, c: '$textAlt' },
})

const $CategoriesFlexInner = styled('div', {
  d: 'flex',
  gap: '$1_5',

  '@>m': {
    gap: '$3',
  },
})

const $CategoryFlexItem = styled('div', {
  py: '$1',
  bb: '1px solid $colors$lightGray',
  lineHeight: 0,

  '&:first-child': {
    bt: '1px solid $colors$lightGray',
  },
})

const $CategoryLink = styled(Link, {
  color: '$textAlt',
  fontWeight: 500,
  lineHeight: '$lineHeights$l',
  typeSizes: 'sm',

  '&:hover': {
    color: '$hover',
  },
})

const $RelatedHeading = styled('div', {
  ta: 'center',
  mb: '$3',

  '@>m': {
    mb: '$6',
  },
})

const $RelatedLink = styled(Link, {
  d: 'block',
  color: '$black',
  fontWeight: 500,
  fontSize: '15px',
  lineHeight: '$2_5',

  '&:hover': {
    color: '$hover',
  },

  '@>m': {
    [`+ a`]: {
      bt: '1px solid $colors$lightGray',
    },
  },
})

const $RelatedArticle = styled('article', {
  mt: '$3',
  d: 'flex',
  ff: 'column',
  gap: '$1',
})

const $RelatedGrid = styled('div', {
  d: 'grid',
  gtc: 'repeat(2, 1fr)',
  gcg: '$3',
  grg: '$4_5',

  '@>m': {
    grg: '$8',
  },
})

const $PublisherData = styled('div', {
  c: '$primary',
  d: 'inline',

  '&:hover': {
    c: '$hover',
  },
})

const $ArchiveFlowContainer = styled('div', {
  d: 'flex',
  ff: 'column',
  gap: '$4_5',

  '@>m': {
    ff: 'row nowrap',
  },

  variants: {
    isSidebar: {
      true: {
        '@>m': {
          ff: 'column',
        },
      },
    },
  },
})

const $ArchiveRelatedCTA = styled('div', {
  flex: '0 1 17.188rem',

  '@>m': {
    d: 'none',
  },
})
const $ArchiveCategories = styled('div', {
  flex: '1 0 8.125rem',
})
const $ArchiveTrending = styled('div', {
  flex: '0 0 18.75rem',
})

const $PopularPostGrid = styled('section', {
  d: 'flex',
  ff: 'column',

  [`${$Heading}`]: { lineHeight: 1.5, c: '$textAlt' },
})

const $PopularPostGridItem = styled('article', {
  d: 'flex',
  gap: '$1_5',
  py: '$1',
  bt: '1px solid $colors$lightGray',
  ai: 'center',

  '&:last-child': {
    bb: '1px solid $colors$lightGray',
  },
})

const $PopularPostGridItemImage = styled('div', {
  flex: '0 0 5.75rem',
})

const $SquiggleContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  my: '$9',
})

const $TrendingArticleLink = styled(Link, {
  d: 'block',
  bt: '1px solid $colors$lightGray',

  '&:last-child': {
    bb: '1px solid $colors$lightGray',
  },

  '&:hover': {
    h6: {
      color: '$hover',
    },
  },
})

const $Posted = styled('span', {
  d: 'none',

  '@>m': {
    d: 'inline',
  },
})

const ArchiveRelated = ({
  categories = [],
  settings = {},
  relatedArticles = [],
}) => {
  const { trendingArticles = [], cta = {} } = settings
  const hasRelatedArticles = relatedArticles && relatedArticles?.length > 0

  const middleIndex = Math.ceil(categories.length / 2)

  const catColumn1 = categories.slice().splice(0, middleIndex)
  const catColumn2 = categories.slice().splice(-middleIndex)

  return (
    <$ArchiveRelated>
      {hasRelatedArticles && (
        <>
          <$RelatedHeading>
            <$Heading
              heading={'Related Content'}
              tag="h4"
              tagStyle="headingRelated"
              css={{ fontWeight: '$bold' }}
            />
          </$RelatedHeading>
          <$RelatedGrid>
            {relatedArticles?.map(
              ({
                title,
                slug,
                path,
                _id,
                image,
                publisher,
                publishedDate,
                _createdAt,
                primaryCategory,
              }) =>
                title &&
                slug && (
                  <div key={_id}>
                    <$RelatedLink url={path} condition="internal">
                      {image && <Image image={image} />}
                    </$RelatedLink>
                    <$RelatedArticle>
                      {primaryCategory && (
                        <Link
                          url={primaryCategory.path}
                          condition="internal"
                          css={{ d: 'block' }}
                        >
                          <Heading
                            tag="h6"
                            tagStyle="captionSm"
                            heading={primaryCategory.title}
                            css={{ c: '$primary' }}
                          />
                        </Link>
                      )}
                      {title && (
                        <$RelatedLink url={path} condition="internal">
                          <Heading
                            heading={title}
                            tag="h5"
                            tagStyle="blogCard"
                            css={{ '@>m': { lh: 1.3 } }}
                          />
                        </$RelatedLink>
                      )}
                      {publisher && (
                        <Heading
                          tag="h6"
                          css={{
                            c: '$darkGrayAlt',
                            type: 'blogMeta',
                            fontFamily: '$apercuPro',
                            fontWeight: 400,
                            lineHeight: '$lineHeights$l',
                          }}
                        >
                          <$Posted>Posted </$Posted>By{' '}
                          <Link url={publisher.path} condition="internal">
                            <$PublisherData>{publisher.title}</$PublisherData>
                          </Link>
                          <>&nbsp;&nbsp;</>|<>&nbsp;&nbsp;</>
                          {new Date(
                            publishedDate || _createdAt
                          ).toLocaleDateString('en-US', {
                            month: 'short',
                            day: '2-digit',
                          })}
                          ,{' '}
                          {new Date(
                            publishedDate || _createdAt
                          ).toLocaleDateString('en-US', {
                            year: 'numeric',
                          })}
                        </Heading>
                      )}
                    </$RelatedArticle>
                  </div>
                )
            )}
          </$RelatedGrid>
        </>
      )}
      {hasRelatedArticles && (
        <$SquiggleContainer>
          <img src={Squiggle.src} alt="squiggle seperator" />
        </$SquiggleContainer>
      )}
      <$ArchiveFlowContainer>
        <$ArchiveRelatedCTA>
          <ArchiveRelatedCTA content={cta} />
        </$ArchiveRelatedCTA>
        <$ArchiveCategories>
          <>
            <$Heading
              heading={'Categories'}
              tag="h4"
              tagStyle="xs"
              css={{ mb: '$2', lineHeight: '1.4', c: '$textAlt' }}
            />
            <$CategoriesFlexInner>
              {catColumn1 && (
                <$CategoriesFlex>
                  {catColumn1.map(
                    (category) =>
                      category.postCount > 0 && (
                        <$CategoryFlexItem key={category._id}>
                          <$CategoryLink
                            label={category.title}
                            url={category.path}
                            condition={'internal'}
                          />
                        </$CategoryFlexItem>
                      )
                  )}
                </$CategoriesFlex>
              )}
              {catColumn2 && (
                <$CategoriesFlex>
                  {catColumn2.map(
                    (category) =>
                      category.postCount > 0 && (
                        <$CategoryFlexItem key={category._id}>
                          <$CategoryLink
                            label={category.title}
                            url={category.path}
                            condition={'internal'}
                          />
                        </$CategoryFlexItem>
                      )
                  )}
                </$CategoriesFlex>
              )}
            </$CategoriesFlexInner>
          </>
        </$ArchiveCategories>
        <$ArchiveTrending>
          {trendingArticles && (
            <>
              <$Heading
                heading={'Popular Posts'}
                tag="h4"
                tagStyle="xs"
                css={{ mb: '$2', lineHeight: '1.4', c: '$textAlt' }}
              />
              <$PopularPostGrid>
                {trendingArticles.map((article) => {
                  const { _id: articleId, title, image, path } = article
                  return (
                    <$TrendingArticleLink
                      condition="internal"
                      url={path}
                      key={articleId}
                    >
                      <$PopularPostGridItem>
                        {image && (
                          <$PopularPostGridItemImage>
                            <Image image={image} />
                          </$PopularPostGridItemImage>
                        )}
                        <Heading tag="h6" tagStyle="sm" heading={title} />
                      </$PopularPostGridItem>
                    </$TrendingArticleLink>
                  )
                })}
              </$PopularPostGrid>
            </>
          )}
        </$ArchiveTrending>
      </$ArchiveFlowContainer>
    </$ArchiveRelated>
  )
}

export default ArchiveRelated
