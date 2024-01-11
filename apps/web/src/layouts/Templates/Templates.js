import React, { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
// Components
import Gallery from '@legacy/components/templates/Gallery'
import Preview from '@legacy/components/templates/Preview'
import { AppContext } from '@app'
// Utils
import { TemplateKind } from '@legacy/constants/templates'
import usePreviewTemplate from '@legacy/hooks/usePreviewTemplate'
import { createClient } from '@sanity/client'

const sanityConfig = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
}

const client = createClient(sanityConfig)

const Templates = ({
  title: _title,
  heroTitle,
  heroContent: _heroContent,
  isWebsiteGallery = false,
  seo,
}) => {
  const router = useRouter()
  const pathname = router.asPath
  const { seoTitle, seoDescription } = seo || {}
  const templateIdUrl = pathname.split('preview/')[1]

  const { planData } = useContext(AppContext)

  const [currentURL, setCurrentURL] = useState(pathname)
  const [previousURL, setPreviousURL] = useState('')
  const [templateId, setTemplateId] = useState(templateIdUrl)
  const [pageData, setPageData] = useState({
    title: heroTitle || _title,
    heroContent: _heroContent,
  })

  const previousURLRef = useRef(previousURL)
  const [previewTemplate, handlePreviewTemplate] = usePreviewTemplate()

  const fetchPageData = async (category) => {
    const [templateCategoryDoc] = await client.fetch(
      `*[_type == 'templateCategory' && templateType == "${
        isWebsiteGallery ? 'website' : 'landingPage'
      }" && slug.current == '${category}']`
    )

    setPageData({
      title: templateCategoryDoc?.heroTitle || templateCategoryDoc?.title,
      heroContent: templateCategoryDoc?.heroContent,
      seo: templateCategoryDoc?.seo,
    })
  }

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
  }, [previousURL])

  useEffect(() => {
    const [, previousCategory] = previousURL?.split('category/') || []
    const currentCategory = currentURL?.split('category/')[1]?.split('?')[0]

    if (currentCategory && currentCategory !== previousCategory) {
      fetchPageData(currentCategory)
    }

    if (!currentCategory) {
      setPageData({})
    }
  }, [currentURL])

  useEffect(() => {
    function handlePopState() {
      if (previousURLRef.current.includes('preview')) {
        setTemplateId(false)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{pageData?.seo?.seoTitle || seoTitle}</title>
        <meta
          name="description"
          content={pageData?.seo?.seoDescription || seoDescription}
        />
      </Head>
      {templateId && (
        <Preview
          templateId={templateId}
          galleryRoot={currentURL}
          previewTemplate={previewTemplate}
          planData={planData}
        />
      )}
      <Gallery
        kind={isWebsiteGallery ? TemplateKind.Site : TemplateKind.LandingPage}
        handlePreviewTemplate={handlePreviewTemplate}
        isPreviewing={!!templateId}
        setCurrentURL={setCurrentURL}
        setPreviousURL={setPreviousURL}
        {...pageData}
      />
    </>
  )
}

export default Templates
