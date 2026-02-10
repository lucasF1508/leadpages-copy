'use client'

import React from 'react'
import Image from '@/components/Image'
import './HowItWorks.css'

interface Step {
  _key?: string
  icon?: any
  title: string
  description?: string
}

interface HowItWorksProps {
  heading?: string
  steps?: Step[]
}

export default function HowItWorks({
  heading = 'How It Works',
  steps = [],
}: HowItWorksProps) {
  const filteredSteps = steps.filter(Boolean)
  
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-heading">{heading}</h2>
        <div className="how-it-works-steps-wrapper">
          <div className="how-it-works-steps">
            {filteredSteps.map((step, index) => (
              <div key={step._key || index} className="how-it-works-step">
                <div className="how-it-works-step-content">
                  <div className="how-it-works-icon-wrapper">
                    <div className="how-it-works-icon-circle">
                      {step.icon ? (
                        <div className="how-it-works-icon">
                          <Image
                            image={step.icon}
                            alt={step.title}
                          />
                        </div>
                      ) : (
                        <div className="how-it-works-icon-placeholder">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="how-it-works-text">
                    <h3 className="how-it-works-step-title">{step.title}</h3>
                    {step.description && (
                      <p className="how-it-works-step-description">{step.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

