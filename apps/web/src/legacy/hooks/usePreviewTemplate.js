import { useState } from 'react'
import { Events } from '@legacy/components/templates/tracker'
import { useRouter } from 'next/router'
import { kebabCase } from 'lodash'

const usePreviewTemplate = () => {
  const router = useRouter()
  const [previewTemplate, setPreviewTemplate] = useState(null)

  const handlePreviewTemplate = (template) => {
    const basePath = router.asPath.includes('website-templates')
      ? '/website-templates/website-template'
      : '/templates/landing-page-template'

    const formattedTemplateName = kebabCase(template.template.name)

    const url = `${basePath}/${formattedTemplateName}`
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: Events.templatePreviewed,
      previewedTemplateName: `${template.template.name} (${template._meta.id})`,
    })

    router.push(url)
  }

  return [previewTemplate, handlePreviewTemplate]
}

export default usePreviewTemplate
