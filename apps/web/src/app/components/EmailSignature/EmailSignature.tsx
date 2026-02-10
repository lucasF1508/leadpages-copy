'use client'

import { useState, useEffect } from 'react'
import HubspotForm from '../HubspotForm'
import './EmailSignature.css'

interface EmailSignatureProps {
  heading?: string
  subtitle?: string
  hubspotFormId?: string
  hubspotPortalId?: string
  hubspotRegion?: string
  enableStickyHeader?: boolean
  enableStickyPreview?: boolean
}

export default function EmailSignature({
  heading = 'Create Your Professional Email Signature',
  subtitle = 'Fill in your details and generate a professional HTML signature',
  hubspotFormId = 'c3520deb-f584-401a-9f62-e51f5e6eefe3',
  hubspotPortalId = '21794907',
  hubspotRegion = 'na1',
  enableStickyHeader = false,
  enableStickyPreview = false,
}: EmailSignatureProps) {
  const [showFormOnly, setShowFormOnly] = useState(false)

  // Check if we should show only the form (when hash is #signature-form)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#signature-form') {
        setShowFormOnly(true)
        // Hide body content
        document.body.style.overflow = 'hidden'
        // Hide main content (header, footer, other components)
        const mainContent = document.querySelector('main, header, footer, [class*="Layout"]')
        if (mainContent) {
          ;(mainContent as HTMLElement).style.display = 'none'
        }
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setShowFormOnly(false)
        document.body.style.overflow = ''
        // Show main content again
        const mainContent = document.querySelector('main, header, footer, [class*="Layout"]')
        if (mainContent) {
          ;(mainContent as HTMLElement).style.display = ''
        }
      }
    }

    // Check on mount
    checkHash()

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash)
    return () => {
      window.removeEventListener('hashchange', checkHash)
      document.body.style.overflow = ''
      const mainContent = document.querySelector('main, header, footer, [class*="Layout"]')
      if (mainContent) {
        ;(mainContent as HTMLElement).style.display = ''
      }
    }
  }, [])

  const handleBack = () => {
    // Remove hash and go back
    window.history.pushState('', document.title, window.location.pathname)
    setShowFormOnly(false)
    document.body.style.overflow = ''
    // Show main content again
    const mainContent = document.querySelector('main, header, footer, [class*="Layout"]')
    if (mainContent) {
      ;(mainContent as HTMLElement).style.display = ''
    }
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // If showFormOnly is true, show only the HubspotForm with back button
  if (showFormOnly) {
    return (
      <div id="signature-form" className="emailsignature-container emailsignature-form-only">
        <button onClick={handleBack} className="emailsignature-back-btn" aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="emailsignature-form-wrapper">
          <div className="emailsignature-form-content">
            {heading && <h1>{heading}</h1>}
            {subtitle && <p>{subtitle}</p>}
            <HubspotForm
              hubspotPortalId={hubspotPortalId}
              hubspotFormId={hubspotFormId}
              hubspotRegion={hubspotRegion}
            />
          </div>
        </div>
      </div>
    )
  }

  // Normal view - just show the HubspotForm
  return (
    <div id="signature-form" className="emailsignature-container">
      {heading && <h1>{heading}</h1>}
      {subtitle && <p>{subtitle}</p>}
      <HubspotForm
        hubspotPortalId={hubspotPortalId}
        hubspotFormId={hubspotFormId}
        hubspotRegion={hubspotRegion}
      />
    </div>
  )
}
