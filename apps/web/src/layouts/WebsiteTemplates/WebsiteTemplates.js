import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
// Components
import Gallery from '@legacy/components/templates/Gallery'
import Preview from '@legacy/components/templates/Preview'
import { AppContext } from '@app'
// Utils
import { TemplateKind } from '@legacy/constants/templates'
import usePreviewTemplate from '@legacy/hooks/usePreviewTemplate'

const WebsiteTemplates = () => {
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
          galleryRoot="/website-templates"
          previewTemplate={previewTemplate}
          planData={planData}
        />
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
