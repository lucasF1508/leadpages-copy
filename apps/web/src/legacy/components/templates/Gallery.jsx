import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
// Components
import {
  TemplateState,
  TemplateActions,
  TemplateKind,
} from '@legacy/constants/templates'
import HeadlineSection from '../layout/HeadlineSection'
import ReadyToGrow from '../product/ReadyToGrow'
// Constants

const TabLink = styled('a', {
  fontFamily: 'Apercu Pro',
  textAlign: 'center',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.75rem',
  textDecoration: 'none',
  color: '$text',
  opacity: 0.35,
  paddingBottom: '0.5rem',
  px: '1rem',
  mx: '0.5rem',
  cursor: 'pointer',

  '&:hover': {
    opacity: 1,
  },

  '&.active-template': {
    opacity: 1,
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
  },
})

const TabHeadingContainer = styled('div', {
  zIndex: 1600,
  textAlign: 'center',
  mx: 'auto',
  width: '100%',

  '@media (min-width: 1025px)': {
    paddingTop: '2.5rem',
  },
})

const TabHeadingFlexbox = styled('div', {
  display: 'flex',
  mx: 'auto',
  justifyContent: 'center',
})

const FallbackDiv = styled('div', {
  height: '100vh',
  width: '100%',
  backgroundColor: 'rgb(247, 247, 247)',
  padding: '24px',
})

const HeadlineContainer = styled('div', {
  "& [class*='HeadlineSection__Caption']": {
    '@media (max-width: 479px)': {
      display: 'none',
    },
  },
})

const Templates = dynamic(() => import('./Templates'), {
  loading: () => <FallbackDiv />,
  ssr: false,
})

const Gallery = ({
  SEO,
  kind,
  children,
  handlePreviewTemplate,
  isPreviewing,
  handleSetCurrentURL,
}) => {
  const { asPath } = useRouter()

  return (
    <>
      {children && children}
      {SEO}
      <HeadlineContainer>
        <HeadlineSection
          title="Choose a template you love."
          caption="Grow your business faster when you start with a high-converting, mobile-responsive template."
        />
      </HeadlineContainer>
      <TabHeadingContainer name="tab-toolbar">
        <TabHeadingFlexbox>
          <Link href="/templates" passHref>
            <TabLink
              className={asPath.includes('/templates') ? 'active-template' : ''}
            >
              Landing Pages
            </TabLink>
          </Link>
          <Link href="/website-templates" passHref>
            <TabLink
              className={asPath.includes('/website-templates') ? 'active-template' : ''}
            >
              Websites
            </TabLink>
          </Link>
        </TabHeadingFlexbox>
      </TabHeadingContainer>
      <Templates
        kind={kind}
        onPreviewTemplate={handlePreviewTemplate}
        isPreviewing={isPreviewing}
        handleSetCurrentURL={handleSetCurrentURL}
      />
      <ReadyToGrow zIndex={1200} />
    </>
  )
}

Gallery.propTypes = {
  state: TemplateState.isRequired,
  actions: TemplateActions.isRequired,
  SEO: PropTypes.node,
  kind: PropTypes.oneOf([TemplateKind.LandingPage, TemplateKind.Site])
    .isRequired,
  handlePreviewTemplate: PropTypes.func.isRequired,
  children: PropTypes.node,
  isPreviewing: PropTypes.bool.isRequired,
  handleSetCurrentURL: PropTypes.func.isRequired,
}

Gallery.defaultProps = { hideBar: false, SEO: null, children: null }

export default Gallery
