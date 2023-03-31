import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'

const OuterContainer = styled('div', {
  position: 'relative',
})

const InnerContainer = styled('div', {
  ta: 'center',
})

const HighlightedArticleContainer = styled('div', {
  d: 'flex',
  jc: 'space-between',
  flexWrap: 'wrap',
})

const HighlightedArticle_TextContainer = styled('div', {
  position: 'relative',
  pt: '1rem',
  px: '2rem',
  pb: '3rem',
  ta: 'left',
  mt: '-2rem',
  z: '$aboveContent',
  bc: '$white',
  ml: '3rem',

  '@<s': {
    ml: 0,
    p: '10%',
  },

  '@media (min-width: 577px) and (max-width: 870px)': {
    ml: 0,
    p: '5%',
  },
})

const HighlightedArticle_Heading = styled('div', {
  c: '$text',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  mb: '1rem',
})

const HighlightedArticle_Body = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  c: '$textAlt',
  mb: '1rem',
})

const HighlightedArticle_ReadMore = styled('span', {
  fontSize: '16px',
  lineHeight: '24px',
  mb: '1rem',
  c: '$textAlt',
  pb: '3px',
  bb: '3px solid $colors$primary',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover': {
    c: '$primary',
    bb: '3px solid $colors$indigoDark',
  },
})

const $HighlightedArticle = styled('div', {
  position: 'relative',
  bc: '$white',
  f: '0 0 calc(50% - $space$2)',
  w: 'calc(50% - $2)',
  minWidth: '300px',
  mb: '5%',
  cursor: 'pointer',
  bs: '0 0 2px 0 rgba(15, 12, 9, 0.1), 0 1px 4px 0 rgba(15, 12, 9, 0.1)',

  '@<m': {
    f: '0 0 100%',
    w: '100%',
  },

  '&:hover': {
    bs: '0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15)',
  },

  [`&:hover ${HighlightedArticle_Heading}`]: {
    c: '$primary',
  },

  [`&:hover ${HighlightedArticle_ReadMore}`]: {
    c: '$primary',
    bb: '3px solid $colors$indigoDark',
  },
})

const HighlightedArticle_Image = styled(Image, {})

const Article_TextContainer = styled('div', {
  position: 'relative',
  ta: 'left',
  z: '$aboveContent',
  bc: '$white',
  px: '3%',

  '@<s': {
    p: '10%',
  },

  '@media (min-width: 577px) and (max-width: 870px)': {
    p: '5%',
  },

  '@media (min-width: 871px)': {
    f: '0 0 60%',
    w: '60%',
  },
})

const Article_Heading = styled('div', {
  c: '$text',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  mb: '1rem',
})

const Article_Body = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  c: '$textAlt',
  mb: '1rem',
})

const Article_ReadMore = styled('span', {
  fontSize: '16px',
  lineHeight: '24px',
  mb: '1rem',
  c: '$textAlt',
  pb: '3px',
  bb: '3px solid $colors$primary',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover': {
    color: '$primary',
    bb: '3px solid $colors$indigoDark',
  },
})

const ArticleContainer = styled('div', {
  position: 'relative',
  bc: '$white',
  w: '95%',
  mx: 'auto',
  mb: '5%',
  bs: '0 0 2px 0 rgba(15, 12, 9, 0.1), 0 1px 4px 0 rgba(15, 12, 9, 0.1)',
  cursor: 'pointer',

  '@media (min-width: 871px)': {
    py: '3%',
  },

  '@media (max-width: 870px)': {
    w: '100%',
  },

  '&:hover': {
    bs: '0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15)',
  },

  [`&:hover ${Article_Heading}`]: {
    c: '$primary',
  },

  [`&:hover ${Article_ReadMore}`]: {
    c: '$primary',
    bb: '3px solid $colors$indigoDark',
  },

  '&:last-child': {
    mb: 0,
  },
})

const Article_ImageContainer = styled('div', {
  w: '30%',
  f: '0 0 30%',
  pl: '3%',
  ta: 'center',

  '@media (max-width: 870px)': {
    w: '100%',
    pl: 0,
    pt: '5%',
  },
})

const Article_ImageSVG = styled(Image, {
  position: 'relative',
  left: 0,
  d: 'inline-block',
  w: '60%',
  mw: '200px',
  pr: '4px',

  '@media (max-width: 870px)': {
    w: '30%',
  },
})

const Article_Image = styled(Image, {
  d: 'inline-block',
  w: '85%',
  mw: '200px',
  pr: '4px',

  '@media (max-width: 870px)': {
    w: '60%',
  },
})

const Article_OutboundLink = styled('a', {
  d: 'flex',

  '@media (max-width: 870px)': {
    d: 'block',
  },
})

const HighlightedArticle = ({ heading, content, url, ariaLabel, image }) => (
  <$HighlightedArticle>
    <a
      href={url}
      aria-label={ariaLabel}
      rel="noreferrer noopener"
      target="_blank"
    >
      {image && <HighlightedArticle_Image image={image} alt={image.altText} />}
      <HighlightedArticle_TextContainer>
        {heading && (
          <HighlightedArticle_Heading>{heading}</HighlightedArticle_Heading>
        )}
        {content && (
          <HighlightedArticle_Body>{content}</HighlightedArticle_Body>
        )}
        <HighlightedArticle_Body>
          <HighlightedArticle_ReadMore>Read More</HighlightedArticle_ReadMore>
        </HighlightedArticle_Body>
      </HighlightedArticle_TextContainer>
    </a>
  </$HighlightedArticle>
)

const StandardArticle = ({ heading, content, url, linkAltText, image }) => (
  <ArticleContainer>
    <Article_OutboundLink
      href={url}
      aria-label={linkAltText}
      rel="noreferrer noopener"
      target="_blank"
    >
      {image && image.asset.mimeType.includes('svg') && (
        <Article_ImageContainer>
          <Article_ImageSVG image={image} alt={image.altText} />
        </Article_ImageContainer>
      )}
      {image && !image.asset.mimeType.includes('svg') && (
        <Article_ImageContainer>
          <Article_Image image={image} alt={image.altText} />
        </Article_ImageContainer>
      )}
      <Article_TextContainer>
        {heading && <Article_Heading>{heading}</Article_Heading>}
        {content && <Article_Body>{content}</Article_Body>}
        <Article_Body>
          <Article_ReadMore>Read More</Article_ReadMore>
        </Article_Body>
      </Article_TextContainer>
    </Article_OutboundLink>
  </ArticleContainer>
)

const PressArticles = ({ cards, ...props }) => {
  const highlightedArticles = cards.filter(
    ({ isHighlightedArticle }) => isHighlightedArticle
  )
  const standardArticles = cards.filter(
    ({ isHighlightedArticle }) => !isHighlightedArticle
  )

  return (
    <OuterContainer {...props}>
      <InnerContainer>
        {highlightedArticles?.length > 0 && (
          <HighlightedArticleContainer>
            {highlightedArticles.map(({ _key, ...article }) => (
              <HighlightedArticle key={_key} {...article} />
            ))}
          </HighlightedArticleContainer>
        )}
        {standardArticles.map(({ _key, ...article }) => (
          <StandardArticle key={_key} {...article} />
        ))}
      </InnerContainer>
    </OuterContainer>
  )
}

export default PressArticles
