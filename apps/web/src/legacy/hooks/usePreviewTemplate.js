import { useState } from 'react'
import { Events } from '@legacy/components/templates/tracker'
import { useRouter } from 'next/router'

const usePreviewTemplate = () => {
  const router = useRouter()
  const [previewTemplate, setPreviewTemplate] = useState(null)

  const handlePreviewTemplate = (template) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: Events.templatePreviewed,
      previewedTemplateName: `${template.template.name} (${template._meta.id})`,
    })
    setPreviewTemplate(template)
    router.push(`preview/${template._meta.id}`)
  }

  return [previewTemplate, handlePreviewTemplate]
}

export default usePreviewTemplate
