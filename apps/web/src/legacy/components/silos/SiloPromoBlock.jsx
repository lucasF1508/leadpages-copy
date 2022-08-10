import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import Link from 'next/link'
// Images
import defaultPromoImage from '@legacy/assets/images/silos/landing-page-examples/Product-Leadpages_Landing-Pages@2x.png'
import rightArrowSVG from '@legacy/assets/images/global/arrow_right_white.svg'

const FlexContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$grayAlt',
  margin: '1rem 0',
  boxSizing: 'border-box',

  '@media (max-width: 425px)': {
    display: 'block',
  },
})

const ImageFlexItem = styled('div', {
  maxWidth: '35%',
  flex: '0 0 35%',
  paddingTop: '2.5rem',
  paddingBottom: '2.5rem',

  '@media (max-width: 425px)': {
    maxWidth: '100%',
    paddingBottom: 0,
  },
})

const ContentFlexItem = styled('div', {
  maxWidth: '51%',
  margin: '3.75rem 3.75rem 1.25rem 3.5rem',
  flex: '0 0 51%',
  paddingBottom: '2.5rem',

  '@media (max-width: 425px)': {
    margin: '2.5rem 2.25rem 0 2.25rem',
    maxWidth: '100%',
  },
})

const ImageContainer = styled(Image, {
  display: 'block',
  width: '100%',
  maxWidth: '340px',
})

const Headline = styled('h2', {
  fontSize: '30px',
  fontFamily: 'Value Serif',
  lineHeight: '36px',
})

const MainText = styled('p', {
  fontSize: '18px',
  lineHeight: '32px',
  color: '$textAlt',
  margin: '1.25rem 0',

  '@media (max-width: 425px)': {
    marginBottom: '1.5rem',
  },
})

const Button = styled('button', {
  width: 'auto',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$primary',
  backgroundColor: '$primary',
  color: '$white',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  padding: '0 1rem',

  '@media (max-width: 340px)': {
    width: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '@media (min-width: 426px) and (max-width: 768px)': {
    fontSize: '14px',
    padding: 0,
    width: '100%',
  },

  '@media (max-width: 425px)': {
    maxWidth: '100%',
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
  },
})

const ArrowRight = styled('img', {
  my: 'auto',
  width: '20px',
  height: '10px',
})

const SiloPromoBlock = ({ overridePromoContent }) => {
  const defaultPromoContent = {
    promoImage: defaultPromoImage,
    promoImageAlt: 'Landing page builder',
    headlineText: 'Create Unlimited Landing Pages with Leadpages',
    mainText:
      'Confidently grow your business by turning clicks into customers with high-converting landing pages you can easily DIY.',
    link: '/product/landing-page-builder',
    linkAlt: 'Landing page builder',
    externalLink: false,
    buttonText: 'Discover Landing Pages',
  }

  // Use override content or fallback to default promo content
  const {
    promoImage,
    promoImageAlt,
    headlineText,
    mainText,
    link,
    linkAlt,
    externalLink,
    buttonText,
  } = overridePromoContent || defaultPromoContent

  return (
    <FlexContainer>
      <ImageFlexItem>
        <ImageContainer
          image={promoImage || defaultPromoContent.promoImage}
          alt={promoImageAlt || defaultPromoContent.promoImageAlt}
        />
      </ImageFlexItem>
      <ContentFlexItem>
        <Headline>{headlineText}</Headline>
        <MainText>{mainText}</MainText>
        {externalLink ? (
          <Button
            as="a"
            href={link}
            aria-label={linkAlt}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
            <ArrowRight src={rightArrowSVG.src} />
          </Button>
        ) : (
          <Link href={link}>
            <a aria-label={linkAlt}>
              <Button>
                {buttonText}
                <ArrowRight src={rightArrowSVG.src} />
              </Button>
            </a>
          </Link>
        )}
      </ContentFlexItem>
    </FlexContainer>
  )
}

SiloPromoBlock.defaultProps = {
  overridePromoContent: null,
}

SiloPromoBlock.propTypes = {
  overridePromoContent: PropTypes.shape({
    promoImage: Image.isRequired,
    promoImageAlt: PropTypes.string.isRequired,
    headlineText: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkAlt: PropTypes.string.isRequired,
    externalLink: PropTypes.bool.isRequired,
    buttonText: PropTypes.string.isRequired,
  }),
}

export default SiloPromoBlock
