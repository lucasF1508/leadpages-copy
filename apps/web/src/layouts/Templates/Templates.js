import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
// Components
import Gallery from '@legacy/components/templates/Gallery'
import Preview from '@legacy/components/templates/Preview'
import SEO from '@legacy/components/SEO'
// Utils
import { TemplateKind } from '@legacy/constants/templates'
import usePreviewTemplate from '@legacy/hooks/usePreviewTemplate'

const SEO_DEFAULTS = {
  image: 'https://static.leadpages.com/images/og/og-templates.jpg',
  canonical: '/templates',
}

const GallerySEO = ({ pathname }) => (
  <SEO
    pathname={pathname}
    title="Website & Landing Page Template Gallery | Leadpages"
    description="Grow your leads and conversion with the best website and landing page templates from Leadpages. All templates are fully customizable and user-friendly across devices."
    ogtitle="Landing Page Templates by Leadpages"
    ogdescription="Get free, high-converting website and landing page templates with Leadpages. Easily customize with a code-free builder & turn more clicks into customers."
    {...SEO_DEFAULTS}
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
    noIndex
    {...SEO_DEFAULTS}
  />
)

PreviewSEO.propTypes = {
  pathname: PropTypes.string.isRequired,
}

const LandingPageTemplates = ({ planData }) => {
  const router = useRouter()
  const pathname = router.asPath
  const templateIdUrl = pathname.split('preview/')[1]

  const [templateId, setTemplateId] = useState(templateIdUrl)
  const [previewTemplate, handlePreviewTemplate] = usePreviewTemplate()

  useEffect(() => {
    setTemplateId(previewTemplate?._meta.id || templateIdUrl)
  }, [previewTemplate])

  return (
    <>
      {templateId ? (
        <>
          <PreviewSEO pathname={pathname} />
          <Preview
            templateId={templateId}
            galleryRoot="/templates"
            previewTemplate={previewTemplate}
            planData={planData}
          />
        </>
      ) : (
        <GallerySEO pathname={pathname} />
      )}
      <Gallery
        kind={TemplateKind.LandingPage}
        handlePreviewTemplate={handlePreviewTemplate}
        isPreviewing={!!templateId}
      />
    </>
  )
}

export default LandingPageTemplates
