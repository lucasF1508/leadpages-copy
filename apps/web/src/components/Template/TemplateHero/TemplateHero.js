import Text from '@components/Text'
import { styled } from '@design'
import { navOffset } from '@components/Nav/Nav'
import { getTemplateTitle } from '@utils/getTemplateTitle'
import Image from 'next/legacy/image'
import useStickyHeader from '@hooks/useStickyHeader'
import { getKindTitle } from '@lib/utils/templates'
import TemplateHeroBreadcrumbs from './TemplateHeroBreadcrumbs'
import TemplateHeroRating from './TemplateHeroRating'
import TemplateHeroLinks from './TemplateHeroLinks'

const $TemplateHero = styled('div', {
  d: 'flex',
  flexDirection: 'column-reverse',
  gap: '$6',

  '@>769': {
    flexDirection: 'row',
    gap: '$4_5',
  },

  '@>1025': {
    gap: '5.75rem',
  },
})

const $TemplateHeroContent = styled('div', {
  flex: '1',
})

const $TemplateHeroContentSticky = styled('div', {
  position: 'sticky',
  pt: '$1_5',
  transition: 'top linear $duration$fast',

  '@>769': {
    pt: '$2_5',
  },

  '@>1025': {
    pt: '$3',
  },
})

const $TemplateHeroContentInner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

const $TemplateHeroImage = styled('div', {
  flex: '1',
  position: 'relative',
  mx: 'auto',
  w: '100%',

  '@>769': {
    maxWidth: '$cols5',
  },
})

const $TemplateTitle = styled('p', {
  fontWeight: '$medium',
  fontSize: '1.125rem',
  fontFamily: '$base',
  lineHeight: '1.3',
})

const $TemplateSubTitle = styled('h1', {
  typeSizes: '5xl',
  letterSpacing: '-0.005em',
  fontWeight: '700',

  '@>769': {
    typeSizes: '4xl',
  },

  '@>1025': {
    typeSizes: '6xl',
  },
})

const $Text = styled(Text, {
  mb: '0 !important',
  lineHeight: '1.6',

  '& > p': {
    typeSizes: 'lg',
  },
})

const TemplateHero = ({
  fullPageScreenshotUrlWebp,
  fullPageScreenshotUrlWebpAspectRatio,
  title,
  _id,
  slug,
  kind,
  heading,
  categories,
  content,
}) => {
  const { isSticky, showHeader } = useStickyHeader({
    offsetTop: 10,
  })
  const { rating, text, description } = content

  return (
    <$TemplateHero>
      <$TemplateHeroImage
        css={{
          '&:before': {
            content: '',
            display: 'block',
            pb: `calc(100% / ${fullPageScreenshotUrlWebpAspectRatio})`,
          },
        }}
      >
        <Image
          src={fullPageScreenshotUrlWebp}
          layout="fill"
          objectFit="cover"
          alt={`${title} ${getKindTitle(
            kind
          )?.toLowerCase()} template by Leadpages`}
        />
      </$TemplateHeroImage>
      <$TemplateHeroContent>
        <$TemplateHeroContentSticky
          css={{ top: isSticky && showHeader ? navOffset : 0 }}
        >
          <$TemplateHeroContentInner>
            {categories && (
              <TemplateHeroBreadcrumbs categories={categories} kind={kind} />
            )}
            {title && <$TemplateTitle>{title}</$TemplateTitle>}
            {title && (
              <$TemplateSubTitle>
                {getTemplateTitle({ templateTitle: title, heading, kind })}
              </$TemplateSubTitle>
            )}
            {rating && (
              <TemplateHeroRating
                rating={rating}
                ratingText={text}
                slug={slug}
                kind={kind}
              />
            )}
            {description?.length > 0 && <$Text content={description} />}
            <TemplateHeroLinks kind={kind} id={_id} slug={slug} />
          </$TemplateHeroContentInner>
        </$TemplateHeroContentSticky>
      </$TemplateHeroContent>
    </$TemplateHero>
  )
}

export default TemplateHero
