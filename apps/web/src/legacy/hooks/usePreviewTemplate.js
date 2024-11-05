import { useState } from 'react'
import { Events } from '@legacy/components/templates/tracker'
import { useRouter } from 'next/router'
import { kebabCase } from 'lodash'

import { getTemplateUrl } from '../../lib/utils/templates'

const usePreviewTemplate = () => {
  const router = useRouter()
  const [previewTemplate, setPreviewTemplate] = useState(null)

  const handlePreviewTemplate = (template) => {
    const url = getTemplateUrl(
      router.asPath.includes('website-templates')
        ? 'WebsiteTemplate'
        : 'LeadpageTemplate',
      kebabCase(template.template.name)
    )

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
