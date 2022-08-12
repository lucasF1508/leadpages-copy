import React from 'react'
import { styled } from '@design'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'
import { useRouter } from 'next/router'
// Components
import SiloCompareImage from './SiloCompareImage'

const SidebarContainer = styled('div', {
  '@media (max-width: 991px)': {
    display: 'none',
  },

  '@>m': {
    position: 'absolute',
    top: '6rem',
    paddingRight: '2rem',
    marginLeft: '2rem',
    width: '200px',
    borderRight: '1px solid rgba(15, 12, 9, 0.08)',
  },
})

const SidebarSection = styled('div', {
  paddingBottom: '16px',
})

const SidebarInnerSeparator = styled('hr', {
  backgroundColor: '$text',
  opacity: 0.08,
  marginBottom: '16px',
})

const SidebarHeading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  color: '$text',
  fontSize: '18px',
  lineHeight: '28px',
  letterSpacing: '0px',
  marginBottom: '24px',
})

const SidebarSubHeading = styled('div', {
  color: 'inherit',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  paddingBottom: '1rem',

  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
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

  '&.activeRoute': {
    color: '$primary',
    textDecoration: 'none',
  },
})

const StyledScrollLink = styled(ScrollLink, {
  textDecoration: 'none',
  color: 'rgba(15, 12, 9, 0.5)',
  cursor: 'pointer',

  '&:hover': {
    color: '$primary',
  },

  '&.active': {
    color: 'rgba(15, 12, 9, 0.5)',
  },
})

const SiloSidebar = ({
  pageRoutes,
  competitorImage,
  className,
  useScrollLink,
}) => {
  const router = useRouter()

  return (
    <SidebarContainer id="silo-sidebar" className={className}>
      {competitorImage && (
        <SiloCompareImage competitorImage={competitorImage} />
      )}
      {pageRoutes.map(({ sectionName, sectionPages }) => (
        <SidebarSection key={sectionName}>
          <SidebarInnerSeparator />
          <SidebarHeading>{sectionName}</SidebarHeading>
          {sectionPages.map(({ pageName, pageUrl }) => {
            if (useScrollLink) {
              return (
                <StyledScrollLink
                  key={pageUrl}
                  to={pageUrl}
                  alt={pageName}
                  spy
                  smooth
                  duration={300}
                  offset={-100}
                >
                  <SidebarSubHeading>{pageName}</SidebarSubHeading>
                </StyledScrollLink>
              )
            }
            return (
              <Link href={pageUrl} key={pageUrl} passHref>
                <StyledLink
                  aria-label={pageName}
                  css={{ textDecoration: 'none' }}
                  className={router.pathname === pageUrl ? 'activeRoute' : ''}
                >
                  <SidebarSubHeading>{pageName}</SidebarSubHeading>
                </StyledLink>
              </Link>
            )
          })}
        </SidebarSection>
      ))}
    </SidebarContainer>
  )
}

SiloSidebar.defaultProps = {
  pageRoutes: [],
  competitorImage: null,
  className: '',
  useScrollLink: false,
}

SiloSidebar.propTypes = {
  pageRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      sectionName: PropTypes.string,
      sectionCardTitle: PropTypes.string,
      sectionPages: PropTypes.arrayOf(
        PropTypes.shape({
          pageName: PropTypes.string,
          pageUrl: PropTypes.string,
          pageTitle: PropTypes.string,
          pageSupertitle: PropTypes.string,
        })
      ),
    })
  ),
  competitorImage: PropTypes.string,
  className: PropTypes.string,
  useScrollLink: PropTypes.bool,
}

export default SiloSidebar
