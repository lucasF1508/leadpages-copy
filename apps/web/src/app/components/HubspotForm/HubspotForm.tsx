'use client'

import { useEffect, useRef } from 'react'

interface HubspotFormProps {
  hubspotFormId: string
  hubspotPortalId: string
  hubspotRegion?: string
  heading?: string
  className?: string
}

// Types are defined in @/types/hubspot.d.ts

export default function HubspotForm({
  hubspotFormId,
  hubspotPortalId,
  hubspotRegion = 'na1',
  heading,
  className,
}: HubspotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!formRef.current || typeof window === 'undefined') return

    // Check if Hubspot script is already loaded
    if (window.hbspt?.forms) {
      window.hbspt.forms.create({
        portalId: hubspotPortalId,
        formId: hubspotFormId,
        region: hubspotRegion,
        target: `#hubspot-form-${hubspotFormId}`,
      })
      return
    }

    // Load Hubspot script if not already loaded
    const script = document.createElement('script')
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.async = true
    script.onload = () => {
      if (window.hbspt?.forms && formRef.current) {
        window.hbspt.forms.create({
          portalId: hubspotPortalId,
          formId: hubspotFormId,
          region: hubspotRegion,
          target: `#hubspot-form-${hubspotFormId}`,
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove script if component unmounts
      const existingScript = document.querySelector(
        'script[src="//js.hsforms.net/forms/embed/v2.js"]'
      )
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript)
      }
    }
  }, [hubspotPortalId, hubspotFormId, hubspotRegion])

  return (
    <div className={className}>
      {heading && <h2>{heading}</h2>}
      <div id={`hubspot-form-${hubspotFormId}`} ref={formRef} />
    </div>
  )
}

