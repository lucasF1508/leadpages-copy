import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '@reach/router'
import { useTemplateState } from '@lp/template-gallery'
// Components
import Gallery from '../../legacy/components/templates/Gallery'
import Preview from '../../legacy/components/templates/Preview'
import SEO from '../../legacy/components/SEO'
import tracker from '../../legacy/components/templates/tracker'
// Utils
import {
  baseFilters,
  templatesBaseUrl,
  TemplateKind,
} from '../../legacy/constants/templates'
import usePreviewTemplate from '../../legacy/hooks/usePreviewTemplate'

const GallerySEO = ({ pathname }) => (
  <SEO
    pathname={pathname}
    title="Website & Landing Page Template Gallery | Leadpages"
    description="Grow your leads and conversion with the best website and landing page templates from Leadpages. All templates are fully customizable and user-friendly across devices."
    image="https://static.leadpages.com/images/og/og-templates.jpg"
    ogtitle="Landing Page Templates by Leadpages"
    ogdescription="Get free, high-converting website and landing page templates with Leadpages. Easily customize with a code-free builder & turn more clicks into customers."
    canonical="/templates"
  />
)

GallerySEO.propTypes = {
  pathname: PropTypes.string.isRequired,
}

const PreviewSEO = ({ pathname }) => (
  <SEO
    pathname={pathname}
    title="Get more leads with high-converting landing page templates | Leadpages"
    description="Get more leads and grow quicker with high-converting templates for landing pages and websites. Designed by pros and easy to customize, start for free today."
    image="https://static.leadpages.com/images/og/og-templates.jpg"
    noIndex
    canonical="/templates"
  />
)

PreviewSEO.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default function LandingPageTemplates({ navigate }) {
  if (typeof window === 'undefined') {
    return null
  }

  const location = window.location

  const isPreviewing = location.pathname.match(/preview\/(.+)/) || false
  const SEOMatch = isPreviewing ? PreviewSEO : GallerySEO
  const [previewTemplate, handlePreviewTemplate] = usePreviewTemplate(
    navigate,
    location.pathname
  )
  const [state, actions] = useTemplateState({
    kind: TemplateKind.LandingPage,
    baseUrl: templatesBaseUrl,
    baseFilters,
    hideSidebar: false,
    tracker,
  })

  return (
    <Router primary={false} basepath="/templates">
      <Gallery
        path="/"
        state={state}
        actions={actions}
        SEO={<SEOMatch pathname={location.pathname} />}
        kind={TemplateKind.LandingPage}
        handlePreviewTemplate={handlePreviewTemplate}
        isPreviewing={!!isPreviewing}
      >
        <Preview
          path="preview/:templateId"
          galleryRoot="/templates"
          previewTemplate={previewTemplate}
          navigate={navigate}
        />
      </Gallery>
    </Router>
  )
}

LandingPageTemplates.propTypes = {
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
