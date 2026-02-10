'use client'

import { useState, useEffect, useRef } from 'react'
import './PageAnalyzerComplete.css'

interface PageAnalyzerCompleteProps {
  hubspotFormId?: string
  hubspotPortalId?: string
  hubspotRegion?: string
}

interface AnalysisResult {
  score: number
  categories: Array<{
    name: string
    score: number
    status: string
    recommendations: string[]
  }>
  tips: string[]
}

// Types are defined in @/types/hubspot.d.ts

export default function PageAnalyzerComplete({
  hubspotFormId = 'c1c36444-2286-488c-8543-2150c34ed5dc',
  hubspotPortalId = '21794907',
  hubspotRegion = 'na1',
}: PageAnalyzerCompleteProps) {
  const [aiEnabled, setAiEnabled] = useState(true)
  const [pageType, setPageType] = useState('general-landing')
  const [url, setUrl] = useState('')
  const [step, setStep] = useState<'input' | 'analyzing' | 'ready' | 'results'>('input')
  const [progress, setProgress] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const pageTypes = [
    { value: 'sales-page', label: 'Sales Page (long-form)' },
    { value: 'lead-generation', label: 'Lead Generation Page' },
    { value: 'click-through', label: 'Click-Through Page' },
    { value: 'product-detail', label: 'Product Detail Page' },
    { value: 'webinar-registration', label: 'Webinar / Event Registration' },
    { value: 'squeeze-page', label: 'Squeeze Page (minimalist)' },
    { value: 'coming-soon', label: 'Coming Soon / Pre-Launch' },
    { value: 'thank-you', label: 'Thank You Page' },
    { value: 'thank-you-upsell', label: 'Thank You Page with Upsell' },
    { value: 'general-landing', label: 'General Landing Page' },
  ]

  const tips = [
    'Try Leadpages A/B Split Testing to discover which headline, CTA, or image drives more conversions—data-driven decisions eliminate guesswork',
    'Keep your form fields to a minimum—each additional field can reduce conversions by up to 5%',
    'Place your most important content above the fold—users decide in 3 seconds whether to stay or leave',
  ]

  const steps = [
    'Analyzing Above the Fold...',
    'Checking Call to Action...',
    'Evaluating Form Optimization...',
    'Reviewing Mobile Responsiveness...',
    'Testing Page Speed...',
    'Analyzing Trust Signals...',
    'Evaluating Content Clarity...',
    'Checking Visual Hierarchy...',
    'Reviewing Social Proof...',
    'Final Analysis...',
  ]

  const handleAnalyze = async () => {
    if (!url) {
      alert('Please enter a URL')
      return
    }

    setStep('analyzing')
    setProgress(0)
    setCurrentTip(0)

    try {
      // Simular progreso mientras se analiza
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(progressInterval)
            return 95
          }
          return prev + Math.random() * 15
        })
      }, 500)

      // Rotar tips cada 8 segundos
      const tipInterval = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length)
      }, 8000)

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          pageType: aiEnabled ? undefined : pageType,
          analysisMode: aiEnabled ? 'ai' : 'manual',
        }),
      })

      clearInterval(progressInterval)
      clearInterval(tipInterval)

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      const data = await response.json()
      setAnalysis(data)
      setProgress(100)
      
      setTimeout(() => {
        setStep('ready')
      }, 500)
    } catch (error) {
      console.error('Analysis error:', error)
      alert('Failed to analyze page. Please try again.')
      setStep('input')
    }
  }

  // Cargar script de Hubspot cuando estamos en step 'ready'
  useEffect(() => {
    if (step !== 'ready' || !formRef.current || typeof window === 'undefined') return

    const loadHubspotForm = () => {
      if (window.hbspt?.forms) {
        window.hbspt.forms.create({
          portalId: hubspotPortalId,
          formId: hubspotFormId,
          region: hubspotRegion,
          target: '#hubspot-form-results',
          onFormSubmit: () => {
            setTimeout(() => {
              setStep('results')
            }, 1000)
          },
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
  }, [step, hubspotFormId, hubspotPortalId, hubspotRegion])

  const currentStepText = steps[Math.floor((progress / 100) * steps.length)] || steps[0]

  return (
    <div className="page-analyzer-complete">
      {/* Step 1: Input */}
      {step === 'input' && (
        <div className="analyzer-input-view">
          <div className="analyzer-input-container">
            <div className="analyzer-toggle-section">
              <div className="analyzer-toggle-content">
                <div className="analyzer-toggle-label">
                  <svg className="analyzer-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                  </svg>
                  <span>AI-Powered Analysis</span>
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
              
              {aiEnabled ? (
                <p className="analyzer-toggle-description">
                  AI will automatically detect your page type and analyze it based on CRO best practices specific to that page type
                </p>
              ) : (
                <div className="analyzer-page-type-selector">
                  <label htmlFor="pageType" className="analyzer-page-type-label">Select Page Type:</label>
                  <select
                    id="pageType"
                    value={pageType}
                    onChange={(e) => setPageType(e.target.value)}
                    className="analyzer-page-type-dropdown"
                  >
                    {pageTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="analyzer-input-section">
              <input
                type="url"
                className="analyzer-url-input"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
              />
              <button className="analyzer-button" onClick={handleAnalyze}>
                <svg className="analyzer-button-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                Analyze Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Analyzing */}
      {step === 'analyzing' && (
        <div className="analyzer-loading-view">
          <div className="analyzer-loading-container">
            <div className="analyzer-loading-header">
              <div className="analyzer-spinner"></div>
              <h2>Analyzing Your Landing Page</h2>
            </div>

            <div className="analyzer-progress-section">
              <div className="analyzer-progress-label">Progress</div>
              <div className="analyzer-progress-bar">
                <div className="analyzer-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="analyzer-progress-percent">{Math.round(progress)}%</div>
            </div>

            <div className="analyzer-current-step">
              <svg className="analyzer-step-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span>{currentStepText}</span>
            </div>

            <div className="analyzer-tip-box">
              <div className="analyzer-tip-header">
                <svg className="analyzer-tip-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                <span>CRO Tip</span>
              </div>
              <p>{tips[currentTip]}</p>
            </div>

            <p className="analyzer-loading-note">
              This may take up to 60 seconds depending on page complexity...
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Ready - Show Hubspot Form */}
      {step === 'ready' && (
        <div className="analyzer-ready-view">
          <div className="analyzer-ready-container">
            <svg className="analyzer-ready-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <h2>Your Analysis is Ready!</h2>
            <p>Enter your email to view your detailed CRO analysis and actionable recommendations.</p>
            
            <div id="hubspot-form-results" ref={formRef} />
            
            <p className="analyzer-ready-note">
              We'll send you a copy of your analysis. No spam, ever.
            </p>
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {step === 'results' && analysis && (
        <div className="analyzer-results-view">
          <div className="analyzer-results-container">
            <h2>Your Landing Page Analysis</h2>
            <div className="analyzer-score-card">
              <div className="analyzer-score-main">
                <span className="analyzer-score-number">{analysis.score}</span>
                <span className="analyzer-score-label">/100</span>
              </div>
              <p>Overall CRO Score</p>
            </div>

            <div className="analyzer-categories">
              {analysis.categories.map((category, index) => (
                <div key={index} className="analyzer-category">
                  <div className="analyzer-category-header">
                    <h3>{category.name}</h3>
                    <span className={`analyzer-category-score ${category.status}`}>
                      {category.score}
                    </span>
                  </div>
                  <ul className="analyzer-category-recommendations">
                    {category.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button className="analyzer-button-new" onClick={() => setStep('input')}>
              Analyze Another Page
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
