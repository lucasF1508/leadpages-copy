import React, { useContext } from 'react'
import { styled } from '@design'
import Link from '@components/Link'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'
import SidebarCompareImage from '@components/Sidebar/SidebarCompareImage'
import SidebarPageMobile from './SidebarPageMobile'
import { getSidebarSlug, SidebarContext } from './SidebarProvider'

const SidebarContainer = styled('div', {
  display: 'none',

  '@>m': {
    display: 'block',
    box: [{ property: 'my' }],
    position: 'relative',
    width: '16.5rem',
    borderRight: '1px solid rgba(15, 12, 9, 0.08)',
  },
})

const $SidebarInner = styled('div', {
  position: 'sticky',
  top: 'calc($headerHeight$s - 1px)',
  paddingRight: '2rem',
  boxSizing: 'content-box',
  overflow: 'auto',
  maxHeight: 'calc(100vh - $headerHeight$s)',
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

const StyledScrollLink = styled(ScrollLink, {
  textDecoration: 'none',
  color: 'rgba(15, 12, 9, 0.5)',
  cursor: 'pointer',

  [`
    &:hover,
    &.active
  `]: {
    color: '$primary',
  },
})

const SidebarPage = (props) => {
  const { active } = useContext(SidebarContext)
  const { links, compareLogo, className, useScrollLink, pageTitle } = props

  const verbiage = {
    main: { title: pageTitle },
    menu: {
      title_closed: 'Jump to a Section...',
      title_open: 'Jump to a Section...',
    },
  }

  return (
    <>
      <SidebarContainer id="silo-sidebar" className={className}>
        <$SidebarInner>
          {compareLogo && <SidebarCompareImage compareLogo={compareLogo} />}
          {links.map(({ title: sectionTitle, links: sectionLinks }) => (
            <SidebarSection key={sectionTitle}>
              <SidebarInnerSeparator />
              <SidebarHeading>{sectionTitle}</SidebarHeading>
              {sectionLinks?.map(({ heading, title, link }) => {
                const sectionHeading = title || heading
                const sectionSlug = getSidebarSlug(heading)

                if (useScrollLink) {
                  return (
                    <StyledScrollLink
                      className={active === sectionSlug && 'active'}
                      key={sectionSlug}
                      to={sectionSlug}
                      alt={sectionHeading}
                      spy
                      smooth
                      duration={300}
                      offset={-100}
                    >
                      <SidebarSubHeading>{sectionHeading}</SidebarSubHeading>
                    </StyledScrollLink>
                  )
                }

                return <Link key={sectionSlug} link={link} />
              })}
            </SidebarSection>
          ))}
        </$SidebarInner>
      </SidebarContainer>
      <SidebarPageMobile {...props} verbiage={verbiage} />
    </>
  )
}

SidebarPage.defaultProps = {
  pageRoutes: [],
  competitorImage: null,
  className: '',
  useScrollLink: false,
}

SidebarPage.propTypes = {
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

export default SidebarPage
