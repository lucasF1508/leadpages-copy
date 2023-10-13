import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import MandrelApi from '@lp/template-gallery/dist/mandrel-api'
import { TemplateShape, templatesBaseUrl } from '@legacy/constants/templates'
import Footer from '@components/Footer'
import { useRouter } from 'next/router'
import useEvalBreakpoint from '@hooks/useEvalBreakpoint'
import ReadyToGrow from '../product/ReadyToGrow'
import TemplatePreview from './TemplatePreview'
import PreviewBackdrop from './PreviewBackdrop'

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl })
const Preview = ({
  templateId,
  galleryRoot,
  SEO,
  previewTemplate,
  planData,
}) => {
  const showFooter = useEvalBreakpoint('>xs')
  const [selectedTemplate, setSelectedTemplate] = useState(previewTemplate)
  const router = useRouter()

  useEffect(() => {
    async function fetchPreviewTemplate(id) {
      try {
        const template = await mandrelApi.getTemplateById(id)
        // If we could pass the screenshot to the SEO component from here,
        // we could avoid an extra call to the Mandrel API
        // const templateScreenshot = template.template.thumbnailUrlWebp
        setSelectedTemplate(template)
      } catch {
        router.push(galleryRoot)
      }
    }

    if (templateId && !selectedTemplate) {
      fetchPreviewTemplate(templateId)
    } else if (!templateId && selectedTemplate) {
      setSelectedTemplate(false)
    }
  }, [templateId, selectedTemplate])

  return (
    <>
      {SEO}
      <PreviewBackdrop>
        {selectedTemplate && (
          <>
            <TemplatePreview
              template={selectedTemplate}
              galleryRoot={galleryRoot}
              planData={planData}
            />
            {showFooter && (
              <div>
                <ReadyToGrow />
                <Footer />
              </div>
            )}
          </>
        )}
      </PreviewBackdrop>
    </>
  )
}

Preview.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  previewTemplate: TemplateShape,
  galleryRoot: PropTypes.string.isRequired,
}

Preview.defaultProps = { previewTemplate: null }

export default Preview
