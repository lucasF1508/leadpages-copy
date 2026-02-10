'use client'

import React from 'react'
import HubspotForm from '../HubspotForm'
import SocialShare from '../Social/SocialShare'
import './PageAnalyzer.css'

interface Feature {
  title?: string
  description?: string
}

interface PageAnalyzerProps {
  heading?: string
  subtitle?: string
  hubspotFormId?: string
  hubspotPortalId?: string
  hubspotRegion?: string
  features?: Feature[]
}

export default function PageAnalyzer({
  heading = 'Page Analyzer',
  subtitle = 'Analyze your landing pages and improve conversion rates',
  hubspotFormId = 'c1c36444-2286-488c-8543-2150c34ed5dc',
  hubspotPortalId = '21794907',
  hubspotRegion = 'na1',
  features = [],
}: PageAnalyzerProps) {
  const defaultFeatures: Feature[] = features.length
    ? features
    : [
        {
          title: 'Performance Analysis',
          description: 'Get detailed insights into your page performance',
        },
        {
          title: 'Conversion Optimization',
          description: 'Learn how to improve your conversion rates',
        },
        {
          title: 'Best Practices',
          description: 'Receive recommendations based on industry standards',
        },
      ]

  return (
    <div className="pageanalyzer-container">
      <header className="pageanalyzer-header">
        <h1>{heading}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </header>

      <main className="pageanalyzer-main">
        <section className="pageanalyzer-form-section">
          <h2>Get Your Free Analysis</h2>
          <HubspotForm
            hubspotPortalId={hubspotPortalId}
            hubspotFormId={hubspotFormId}
            hubspotRegion={hubspotRegion}
          />
        </section>

        {defaultFeatures.length > 0 && (
          <section className="pageanalyzer-features">
            <h2>What You'll Get</h2>
            <div className="features-grid">
              {defaultFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  {feature.title && <h3>{feature.title}</h3>}
                  {feature.description && <p>{feature.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="pageanalyzer-footer">
        <div className="social-share-section">
          <p>Share this tool:</p>
          <SocialShare
            platforms={['facebook', 'twitter', 'mailto']}
            layout="horizontal"
          />
        </div>
      </footer>
    </div>
  )
}

