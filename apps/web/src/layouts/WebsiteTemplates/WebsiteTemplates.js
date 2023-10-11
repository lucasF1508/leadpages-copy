import React, { useEffect, useState, useContext, useRef } from 'react'
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
  const [currentURL, setCurrentURL] = useState(pathname)
  const [previousURL, setPreviousURL] = useState('')
  const previousURLRef = useRef(previousURL)

  const templateIdUrl = pathname.split('preview/')[1]
  const [templateId, setTemplateId] = useState(templateIdUrl)
  const [previewTemplate, handlePreviewTemplate] = usePreviewTemplate()

  const handleSetCurrentURL = (url) => setCurrentURL(url)

  useEffect(() => {
    setTemplateId(previewTemplate?._meta.id || templateIdUrl)
  }, [previewTemplate])

  useEffect(() => {
    if (templateId) {
      setPreviousURL(window.location.pathname)
    }
  }, [templateId])

  useEffect(() => {
    previousURLRef.current = previousURL
  }, [previousURL]);

  useEffect(() => {
    function handlePopState(event) {
      if (previousURLRef.current.includes('preview')) {
        setTemplateId(false)
      }
  }

    window.addEventListener('popstate', handlePopState);
    return () => {
        window.removeEventListener('popstate', handlePopState);
    };
  }, [])

  return (
    <>
      {templateId && (
        <Preview
          templateId={templateId}
          galleryRoot={currentURL}
          previewTemplate={previewTemplate}
          planData={planData}
        />
      )}

      <Gallery
        kind={TemplateKind.Site}
        handlePreviewTemplate={handlePreviewTemplate}
        isPreviewing={!!templateId}
        handleSetCurrentURL={handleSetCurrentURL}
      />
    </>
  )
}

export default WebsiteTemplates
