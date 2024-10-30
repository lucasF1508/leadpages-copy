import Link from '@components/Link'
import { styled } from '@design'
import Image from '@components/Image'
import { Ratings } from '@components/Testimonial'
import {
  $TemplateTabInner,
  $TemplateTabContent,
  $TemplateTabColumn,
  $TemplateTabData,
  $TemplateTabTitle,
  $TemplateTabText,
} from './TemplateTabs'

const $TemplateTabsReview = styled('div', {
  w: '100%',
  py: '$3',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  borderBottom: '1px solid $colors$lightGray3',

  '&:fist-child': {
    borderTop: '1px solid $colors$lightGray3',
  },
})

const $Rating = styled('div', {
  display: 'flex',
  width: '7.375rem',
})

const $Title = styled('h5', {
  typeSizes: 'lg',
  fontFamily: '$base',
})

const $Content = styled('p', {
  typeSizes: 'base',
  color: '$textAlt',
  fontWeight: '$normal',
})

const $Link = styled('div', {
  a: {
    typeSizes: 'base',
    fontWeight: '$normal',
    p: 0,
    lineHeight: '$l',
    color: '$textAlt',
    borderBottom: '3px solid $colors$purpleLight',

    '&:hover': {
      borderBottom: '3px solid $colors$primary',
    },
  },
})

const $Author = styled('div', {
  d: 'flex',
  gap: '1.125rem',
})

const $AuthorImage = styled('div', {
  w: '$space$7_5',
})

const $AuthorContent = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  fontWeight: '$normal',
  lineHeight: '$l',
  justifyContent: 'center',
})

const $AuthorName = styled('div', {
  typeSizes: 'sm',
  fontWeight: '$normal',
})

const $AuthorTitle = styled('div', {
  typeSizes: 'xs',
  color: '$textAlt',
  textTransform: 'none',
  letterSpacing: '0',
})

const TemplateTabsReviews = ({ data }) => {
  const { title, text, link: links = [], defaultReviews } = data
  const link = links?.[0]

  return (
    <$TemplateTabInner>
      <$TemplateTabColumn>
        <$TemplateTabData>
          {title && <$TemplateTabTitle>{title}</$TemplateTabTitle>}
          {text && <$TemplateTabText content={text} />}
          {link && (
            <div>
              <Link linkStyle="ghost" {...link} />
            </div>
          )}
        </$TemplateTabData>
      </$TemplateTabColumn>
      <$TemplateTabColumn columnSpan="large">
        <$TemplateTabContent css={{ gap: 0 }}>
          {defaultReviews?.map(
            ({
              _id,
              rating,
              title: reviewTitle,
              testimonial,
              image,
              authorName,
              authorTitle,
              source,
            }) => {
              const [reviewLink] = source || []

              return (
                <$TemplateTabsReview key={_id}>
                  <$Rating>
                    <Ratings rating={rating || 5} />
                  </$Rating>
                  {reviewTitle && <$Title>{reviewTitle}</$Title>}
                  {testimonial && <$Content>{testimonial}</$Content>}
                  {reviewLink && (
                    <$Link>
                      <Link linkStyle="text" {...reviewLink} />
                    </$Link>
                  )}
                  <$Author>
                    {image && (
                      <$AuthorImage>
                        <Image image={image} />
                      </$AuthorImage>
                    )}
                    {(authorName || authorTitle) && (
                      <$AuthorContent>
                        <$AuthorName>{authorName}</$AuthorName>
                        <$AuthorTitle>{authorTitle}</$AuthorTitle>
                      </$AuthorContent>
                    )}
                  </$Author>
                </$TemplateTabsReview>
              )
            }
          )}
        </$TemplateTabContent>
      </$TemplateTabColumn>
    </$TemplateTabInner>
  )
}

export default TemplateTabsReviews
