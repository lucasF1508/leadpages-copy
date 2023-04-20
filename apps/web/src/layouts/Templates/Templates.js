import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
// Components
import Gallery from '@legacy/components/templates/Gallery'
import Preview from '@legacy/components/templates/Preview'
import { AppContext } from '@app'
// Utils
import { TemplateKind } from '@legacy/constants/templates'
import usePreviewTemplate from '@legacy/hooks/usePreviewTemplate'

const LandingPageTemplates = () => {
  const { planData } = useContext(AppContext)
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
      {templateId && (
        <Preview
          templateId={templateId}
          galleryRoot="/templates"
          previewTemplate={previewTemplate}
          planData={planData}
        />
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
