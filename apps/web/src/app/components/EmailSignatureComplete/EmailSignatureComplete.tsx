'use client'

import { useEffect, useRef } from 'react'
import './EmailSignatureComplete.css'

interface EmailSignatureCompleteProps {
  hubspotFormId?: string
  hubspotPortalId?: string
  hubspotRegion?: string
}

// Types are defined in @/types/hubspot.d.ts

export default function EmailSignatureComplete({
  hubspotFormId = 'c3520deb-f584-401a-9f62-e51f5e6eefe3',
  hubspotPortalId = '21794907',
  hubspotRegion = 'na1',
}: EmailSignatureCompleteProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!formRef.current || typeof window === 'undefined') return

    const loadHubspotForm = () => {
      if (window.hbspt?.forms) {
        window.hbspt.forms.create({
          portalId: hubspotPortalId,
          formId: hubspotFormId,
          region: hubspotRegion,
          target: '#hubspot-form-emailsig-main',
        })
        return
      }
    }

    // Check if script is already loaded
    if (window.hbspt) {
      loadHubspotForm()
      return
    }

    // Load script
    const script = document.createElement('script')
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.async = true
    script.onload = loadHubspotForm
    document.head.appendChild(script)
  }, [hubspotFormId, hubspotPortalId, hubspotRegion])

  return (
    <div className="email-signature-complete">
      {/* Formulario Hubspot - se renderiza aquí */}
      <div className="emailsig-form-section">
        <div id="hubspot-form-emailsig-main" ref={formRef} />
      </div>
    </div>
  )
}

