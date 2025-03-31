import React, { useState, useEffect } from 'react'
import { styled } from '@design'
import Link from 'next/link'
// assets
import rightArrowIcon from '@legacy/assets/images/global/arrow_right.svg'

const SiloNavigationCardsWrapper = styled('div', {})

const CardSectionHeading = styled('h2', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',
  my: '60px',
  width: '80%',

  '@media (max-width: 768px)': {
    mt: '35px',
    width: '100%',
    fontSize: '20px',
    letterSpacing: '-0.07px',
    lineHeight: '24px',
  },
})

const StyledLink = styled('a', {
  color: 'rgba(15, 12, 9, 0.5)',

  [`
    &:hover,
    &.active
  `]: {
    color: '$primary',
  },
})

const Flexbox = styled('div', {
  padding: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
})

const CardTextContainer = styled('div', {})

const CardSupertitle = styled('div', {
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  opacity: 0.5,
  color: '$black',
  fontFamily: 'Space Mono',
  textTransform: 'uppercase',
  marginBottom: '1rem',
})

const CardTitle = styled('div', {
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0px',
  color: '$text',
  marginBottom: '8px',
  textAlign: 'left',

  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },

  '@media (min-width: 993px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },
})

const ArrowRight = styled('img', {
  my: 'auto',
  width: '20px',
  height: '10px',
})

const Card = styled('div', {
  maxWidth: '825px',
  backgroundColor: '$white !important',
  marginBottom: '12px',
  boxShadow:
    '0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15)',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  '&:hover': {
    cursor: 'pointer',
    boxShadow: `0 6px 12px 0 rgba(15, 12, 9, 0.3),
      0 12px 24px 0 rgba(15, 12, 9, 0.15)`,
  },

  [`&:hover ${CardTitle}`]: {
    color: '$primary',
  },

  [`&:hover ${ArrowRight}`]: {
    filter: `invert(33%) sepia(92%) saturate(6067%) hue-rotate(247deg)
      brightness(101%) contrast(102%)`,
  },
})

const SiloNavigationCards = ({
  pageRoutes,
  onlyShowNextPage,
  showSpecificPage,
}) => {
  const [activeRoute, setActiveRoute] = useState()

  useEffect(() => {
    // note: handling the trailing slash only necessary in dev environment
    const currentRoute = window.location.pathname.endsWith('/')
      ? window.location.pathname.slice(0, -1)
      : window.location.pathname
    setActiveRoute(currentRoute)
  })

  if (onlyShowNextPage) {
    const allPagesArray = pageRoutes.flatMap((x) => x.sectionPages)

    const getNextPageIndex = (route) => {
      const currentPageIndex = allPagesArray.findIndex(
        (x) => x.pageUrl === route
      )
      return currentPageIndex === allPagesArray.length - 1
        ? 0
        : currentPageIndex + 1
    }

    const nextPageIndex = getNextPageIndex(activeRoute)
    const nextPageData = allPagesArray[nextPageIndex]
    const { pageUrl, pageTitle, pageSupertitle } = nextPageData

    return (
      <>
        <CardSectionHeading>
          {nextPageIndex === 0 ? 'Review:' : 'Continue reading:'}
        </CardSectionHeading>
        <Card>
          <Link href={pageUrl} passHref legacyBehavior>
            <StyledLink>
              <Flexbox>
                <CardTextContainer>
                  <CardSupertitle>{pageSupertitle}</CardSupertitle>
                  <CardTitle>{pageTitle}</CardTitle>
                </CardTextContainer>
                <ArrowRight src={rightArrowIcon.src} alt="right arrow" />
              </Flexbox>
            </StyledLink>
          </Link>
        </Card>
      </>
    )
  }
  if (showSpecificPage || showSpecificPage === 0) {
    const allPagesArray = pageRoutes.flatMap((x) => x.sectionPages)

    const pageData = allPagesArray[showSpecificPage]
    const { pageUrl, pageTitle, pageSupertitle } = pageData

    return (
      <Card>
        <Link href={pageUrl} passHref legacyBehavior>
          <StyledLink>
            <Flexbox>
              <CardTextContainer>
                <CardSupertitle>{pageSupertitle}</CardSupertitle>
                <CardTitle>{pageTitle}</CardTitle>
              </CardTextContainer>
              <ArrowRight src={rightArrowIcon.src} alt="right arrow" />
            </Flexbox>
          </StyledLink>
        </Link>
      </Card>
    )
  }

  return (
    <>
      {pageRoutes.map(({ sectionCardTitle, sectionPages }, index) => (
        <SiloNavigationCardsWrapper
          key={index}
          css={index === 0 ? { display: 'none' } : { display: 'block' }}
        >
          <CardSectionHeading>{sectionCardTitle}</CardSectionHeading>
          {sectionPages.map(({ pageUrl, pageTitle, pageSupertitle }, idx) => (
            <Card key={idx}>
              <Link href={pageUrl} passHref legacyBehavior>
                <StyledLink>
                  <Flexbox>
                    <CardTextContainer>
                      <CardSupertitle>{pageSupertitle}</CardSupertitle>
                      <CardTitle>{pageTitle}</CardTitle>
                    </CardTextContainer>
                    <ArrowRight src={rightArrowIcon.src} alt="right arrow" />
                  </Flexbox>
                </StyledLink>
              </Link>
            </Card>
          ))}
        </SiloNavigationCardsWrapper>
      ))}
    </>
  )
}

SiloNavigationCards.defaultProps = {
  onlyShowNextPage: false,
  showSpecificPage: null,
}

export default SiloNavigationCards
