'use client'

import { useState } from 'react'
import Text from '@/components/Text'
import './FAQSimple.css'

interface FAQ {
  _key?: string
  question: string
  answer: any[]
}

interface FAQSimpleProps {
  heading?: string
  subtitle?: string
  faqs?: FAQ[]
}

export default function FAQSimple({
  heading = 'Frequently Asked Questions',
  subtitle,
  faqs = [],
}: FAQSimpleProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Debug: Log all props to console
  console.log('=== FAQSimple Component Debug ===')
  console.log('heading:', heading)
  console.log('subtitle:', subtitle)
  console.log('faqs (raw):', faqs)
  console.log('faqs type:', typeof faqs)
  console.log('faqs is array?', Array.isArray(faqs))
  console.log('faqs length:', faqs?.length)
  if (faqs && faqs.length > 0) {
    console.log('First FAQ:', faqs[0])
    console.log('First FAQ question:', faqs[0]?.question)
    console.log('First FAQ answer:', faqs[0]?.answer)
  }
  console.log('================================')

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFaqs = (faqs || []).filter(Boolean)
  console.log('filteredFaqs length:', filteredFaqs.length)

  return (
    <section className="faq-simple">
      <div className="faq-simple-container">
        <div className="faq-simple-header">
          <h2 className="faq-simple-heading">{heading}</h2>
          {subtitle && <p className="faq-simple-subtitle">{subtitle}</p>}
        </div>

        <div className="faq-simple-list">
          {filteredFaqs.map((faq, index) => (
            <div key={faq._key || index} className="faq-simple-item">
              <button
                className={`faq-simple-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
                type="button"
              >
                <span>{faq?.question || ''}</span>
                <svg
                  className="faq-simple-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === index && faq?.answer && (
                <div className="faq-simple-answer">
                  <Text content={faq.answer} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

