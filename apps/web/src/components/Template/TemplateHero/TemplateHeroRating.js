import Link from '@components/Link'
import { Ratings } from '@components/Testimonial'
import { styled } from '@design'
import { useTabsStore } from '@components/Template/TemplateTabs/TemplateTabs'
import { getTemplateUrl } from '@lib/utils/templates'

const $TemplateHeroRating = styled('div', {
  d: 'flex',
  gap: '0.375rem',
  color: '$textAlt',
  flexWrap: 'wrap',
  flexDirection: 'column',

  '@>420': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const $TemplateHeroRatingStars = styled('div', {
  d: 'flex',
  gap: '0.375rem',
  alignItems: 'center',
})

const $TemplateHeroRatingContent = styled('div', {
  d: 'flex',
  gap: '0.375rem',
  alignItems: 'center',
})

const $TemplateHeroRatingStarsInner = styled('div', {
  maxWidth: '4.875rem',
  maxHeight: '1.125rem',
})

const $TemplateHeroRatingText = styled('p', {
  typeSizes: 'sm',
  fontWeight: '$normal',
  lineHeight: '$l',
  position: 'relative',
  top: '0.125rem',
})

const $TemplateHeroRatingLinkUnderline = styled('div', {
  height: '3px',
  width: '100%',
  position: 'absolute',
  backgroundColor: '$lavender',
  bottom: 0,
  transition: 'background-color 0.3s ease',
})

const $TemplateHeroRatingLink = styled('div', {
  position: 'relative',

  '> a': {
    typeSizes: 'sm',
    fontWeight: '$normal',
    lineHeight: '$l',
    color: '$textAlt !important',
  },

  '&:hover': {
    [`& ${$TemplateHeroRatingLinkUnderline}`]: {
      backgroundColor: '$primary',
    },

    '> a': {
      color: '$primary !important',
    },
  },
})

const TemplateHeroRating = ({ rating, ratingText, kind, slug }) => {
  const { setActiveTab } = useTabsStore()
  const link = {
    condition: 'internal',
    hasIcon: false,
    hasHash: true,
    label: 'Reviews',
    url: getTemplateUrl(kind, slug),
    hash: 'reviews',
  }

  const handleLink = () => {
    setActiveTab('reviews')
  }

  return (
    <$TemplateHeroRating>
      {rating && (
        <$TemplateHeroRatingStars>
          <$TemplateHeroRatingStarsInner>
            <Ratings rating={rating} />
          </$TemplateHeroRatingStarsInner>
          <$TemplateHeroRatingText>Rated Excellent •</$TemplateHeroRatingText>
        </$TemplateHeroRatingStars>
      )}
      <$TemplateHeroRatingContent>
        {ratingText && (
          <$TemplateHeroRatingText>{ratingText} •</$TemplateHeroRatingText>
        )}
        {link && (
          <$TemplateHeroRatingLink onClick={handleLink}>
            <Link linkStyle="text" scrollOffset={-190} {...link} />
            <$TemplateHeroRatingLinkUnderline />
          </$TemplateHeroRatingLink>
        )}
      </$TemplateHeroRatingContent>
    </$TemplateHeroRating>
  )
}

export default TemplateHeroRating
