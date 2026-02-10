'use client'

import Image from '@/components/Image'
import './PrivacySecurity.css'

interface Feature {
  _key?: string
  icon?: any
  title: string
  description?: string
}

interface Practice {
  _key?: string
  text: string
}

interface PrivacySecurityProps {
  heading?: string
  subtitle?: string
  features?: Feature[]
  practices?: Practice[]
}

export default function PrivacySecurity({
  heading = 'Your Privacy & Security Matter',
  subtitle = 'We take your privacy seriously. Here is how we protect your data.',
  features = [],
  practices = [],
}: PrivacySecurityProps) {
  return (
    <section className="privacy-security">
      <div className="privacy-security-container">
        <div className="privacy-security-header">
          <h2 className="privacy-security-heading">{heading}</h2>
          {subtitle && <p className="privacy-security-subtitle">{subtitle}</p>}
        </div>

        {features.length > 0 && (
          <div className="privacy-security-features">
            {features.filter(Boolean).map((feature, index) => (
              <div key={feature._key || index} className="privacy-security-feature">
                <div className="privacy-security-feature-icon">
                  {feature.icon ? (
                    <Image
                      image={feature.icon}
                      alt={feature.title}
                    />
                  ) : (
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="64" height="64" rx="8" fill="#E8D5FF"/>
                      <path
                        d="M32 20L36 28L44 30L38 36L39 44L32 40L25 44L26 36L20 30L28 28L32 20Z"
                        fill="#9061EE"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="privacy-security-feature-title">{feature.title}</h3>
                {feature.description && (
                  <p className="privacy-security-feature-description">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {practices.length > 0 && (
          <div className="privacy-security-practices">
            <h3 className="privacy-security-practices-title">
              Security Best Practices Implemented
            </h3>
            <div className="privacy-security-practices-grid">
              {practices.filter(Boolean).map((practice, index) => (
                <div key={practice._key || index} className="privacy-security-practice">
                  <svg
                    className="privacy-security-practice-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{practice.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
