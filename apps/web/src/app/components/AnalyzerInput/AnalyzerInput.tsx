'use client'

import { useState, useEffect, useRef } from 'react'
import './AnalyzerInput.css'

interface AnalyzerInputProps {
  toggleLabel?: string
  toggleDescription?: string
  inputPlaceholder?: string
  buttonText?: string
  hubspotFormId?: string
  hubspotPortalId?: string
  hubspotRegion?: string
}

// Types are defined in @/types/hubspot.d.ts

export default function AnalyzerInput({
  toggleLabel = 'AI-Powered Analysis',
  toggleDescription = 'AI will automatically detect your page type and analyze it based on CRO best practices specific to that page type',
  inputPlaceholder = 'https://example.com',
  buttonText = 'Analyze Now',
  hubspotFormId,
  hubspotPortalId = '21794907',
  hubspotRegion = 'na1',
}: AnalyzerInputProps) {
  const [aiEnabled, setAiEnabled] = useState(true)
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  // Cargar script de Hubspot si se proporcionan los IDs
  useEffect(() => {
    if (!hubspotFormId || !hubspotPortalId || !formRef.current || typeof window === 'undefined') return

    // Check if Hubspot script is already loaded
    if (window.hbspt?.forms) {
      window.hbspt.forms.create({
        portalId: hubspotPortalId,
        formId: hubspotFormId,
        region: hubspotRegion || 'na1',
        target: '#hubspot-form-analyzer-inline',
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
          region: hubspotRegion || 'na1',
          target: '#hubspot-form-analyzer-inline',
        })
      }
    }
    document.head.appendChild(script)
  }, [hubspotFormId, hubspotPortalId, hubspotRegion])

  const handleAnalyze = async () => {
    if (!url) {
      alert('Please enter a URL')
      return
    }

    setIsAnalyzing(true)

    // Aquí iría la lógica de análisis y envío a Hubspot si es necesario
    // Por ahora, simulamos un delay
    setTimeout(() => {
      setIsAnalyzing(false)
      // Aquí puedes integrar con Hubspot o tu API de análisis
      console.log('Analyzing:', url, 'AI Enabled:', aiEnabled)
    }, 1500)
  }

  return (
    <div className="analyzer-input">
      <div className="analyzer-input-container">
        <div className="analyzer-toggle-section">
          <div className="analyzer-toggle-content">
            <div className="analyzer-toggle-label">
              <svg
                className="analyzer-toggle-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>{toggleLabel}</span>
            </div>
            <label className="analyzer-toggle">
              <input
                type="checkbox"
                checked={aiEnabled}
                onChange={(e) => setAiEnabled(e.target.checked)}
              />
              <span className="analyzer-toggle-slider"></span>
            </label>
          </div>
          {toggleDescription && (
            <p className="analyzer-toggle-description">{toggleDescription}</p>
          )}
        </div>

        <div className="analyzer-input-section">
          <input
            type="url"
            className="analyzer-url-input"
            placeholder={inputPlaceholder}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
          />
          <button
            className="analyzer-button"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
          >
            <svg
              className="analyzer-button-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            {isAnalyzing ? 'Analyzing...' : buttonText}
          </button>
        </div>

        {/* Div donde se renderiza el formulario de Hubspot */}
        {hubspotFormId && hubspotPortalId && (
          <div id="hubspot-form-analyzer-inline" ref={formRef} className="analyzer-hubspot-form" />
        )}
      </div>
    </div>
  )
}

