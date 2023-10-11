import { useState, useEffect } from 'react'
import { Events } from '@legacy/components/templates/tracker'
import { useRouter } from 'next/router'

const usePreviewTemplate = () => {
  const router = useRouter()
  const [previewTemplate, setPreviewTemplate] = useState(null)

  const handlePreviewTemplate = (template) => {
    const basePath = router.asPath.includes('website-templates') ? '/website-templates' : '/templates';
    const url = `${basePath}/preview/${template._meta.id}`
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: Events.templatePreviewed,
      previewedTemplateName: `${template.template.name} (${template._meta.id})`,
    })

    setPreviewTemplate(template)

    // Doesn't trigger a router state
    window.history.pushState({ ...window.history.state, as: url }, '', url)
  }

  useEffect(() => {
    if (previewTemplate) {
      setPreviewTemplate(null)
    }
  }, [router])

  return [previewTemplate, handlePreviewTemplate]
}

export default usePreviewTemplate
