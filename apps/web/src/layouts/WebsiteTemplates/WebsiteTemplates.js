import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
// Components
import SEO from '@legacy/components/SEO'
import Gallery from '@legacy/components/templates/Gallery'
import Preview from '@legacy/components/templates/Preview'
// Utils
import { TemplateKind } from '@legacy/constants/templates'
import usePreviewTemplate from '@legacy/hooks/usePreviewTemplate'

const SEO_DEFAULTS = {
  title: 'Build Your Website Faster with These Free Templates | Leadpages',
  description:
    'Grow your business faster when you start with our high-converting, mobile-responsive templates. Use our drag-and-drop builder to customize your own website.',
  image: 'https://static.leadpages.com/images/og/og-templates.jpg',
  canonical: '/website-templates',
}

const GallerySEO = ({ pathname }) => (
  <SEO
    pathname={pathname}
    ogtitle="Website Templates by Leadpages"
    ogdescription="Get free, high-converting website and landing page templates with Leadpages. Easily customize with a code-free builder & turn more clicks into customers."
    {...SEO_DEFAULTS}
  />
)

GallerySEO.propTypes = {
  pathname: PropTypes.string.isRequired,
}

const PreviewSEO = ({ pathname }) => (
  <SEO pathname={pathname} noIndex {...SEO_DEFAULTS} />
)

PreviewSEO.propTypes = {
  pathname: PropTypes.string.isRequired,
}

const WebsiteTemplates = ({ planData }) => {
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
            galleryRoot="/website-templates"
            previewTemplate={previewTemplate}
            planData={planData}
          />
        </>
      ) : (
        <GallerySEO pathname={pathname} />
      )}

      <Gallery
        kind={TemplateKind.Site}
        handlePreviewTemplate={handlePreviewTemplate}
        isPreviewing={!!templateId}
      />
    </>
  )
}

export default WebsiteTemplates
