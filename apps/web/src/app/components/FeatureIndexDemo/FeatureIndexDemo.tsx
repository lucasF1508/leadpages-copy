'use client'

import React, { useState } from 'react'
import FeatureIndexOption1 from '../FeatureIndexOption1/FeatureIndexOption1'
import FeatureIndexOption2 from '../FeatureIndexOption2/FeatureIndexOption2'
import FeatureIndexOption3 from '../FeatureIndexOption3/FeatureIndexOption3'
import type {
  FeatureCategory,
} from '../FeatureIndexOption1/FeatureIndexOption1'

// Demo data for demonstration
const demoCategories: FeatureCategory[] = [
  {
    _key: 'builder',
    title: 'Builders',
    description: 'Powerful tools to create amazing landing pages',
    subsections: [
      {
        _key: 'drag-drop',
        title: 'Drag & Drop Builder',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Create professional pages by dragging and dropping elements. No code needed, build unique designs in minutes.',
              },
            ],
          },
        ],
      },
      {
        _key: 'pre-built',
        title: 'Pre-built Templates',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Over 200 professional templates ready to use. Customize colors, fonts, and content to match your brand.',
              },
            ],
          },
        ],
      },
      {
        _key: 'responsive',
        title: 'Responsive Design',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'All your pages look perfect on mobile, tablet, and desktop automatically.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _key: 'conversion-tools',
    title: 'Conversion Tools',
    description: 'Maximize your conversions with proven tools',
    subsections: [
      {
        _key: 'popups',
        title: 'Smart Pop-ups',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Create pop-ups that appear at the perfect moment. Use triggers based on behavior, time, or scroll.',
              },
            ],
          },
        ],
      },
      {
        _key: 'ab-testing',
        title: 'Integrated A/B Testing',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Test different versions of your pages and discover what converts better. Statistical analysis included.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _key: 'integrations',
    title: 'Integrations',
    description: 'Connect with your favorite tools',
    subsections: [
      {
        _key: 'email',
        title: 'Email Marketing Integration',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Connect with Mailchimp, Constant Contact, AWeber and over 40 email marketing platforms.',
              },
            ],
          },
        ],
      },
      {
        _key: 'crm',
        title: 'CRM Integrations',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Automatically sync leads with Salesforce, HubSpot, Pipedrive and other popular CRMs.',
              },
            ],
          },
        ],
      },
      {
        _key: 'webhooks',
        title: 'Webhooks & Zapier',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Automate your workflow with custom webhooks and thousands of integrations through Zapier.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _key: 'design-templates',
    title: 'Design & Templates',
    description: 'Professional designs for every industry',
    subsections: [
      {
        _key: 'industry',
        title: 'Industry Templates',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Find the perfect design for your industry: technology, health, real estate, e-commerce and more.',
              },
            ],
          },
        ],
      },
      {
        _key: 'customization',
        title: 'Full Customization',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Customize every detail: brand colors, fonts, spacing, images and much more.',
              },
            ],
          },
        ],
      },
    ],
  },
]

const navigationLinks = [
  { title: 'Builder', href: '#category-builder' },
  { title: 'Conversion Tools', href: '#category-conversion-tools' },
  { title: 'Integrations', href: '#category-integrations' },
  { title: 'Design & Templates', href: '#category-design-templates' },
]

const FeatureIndexDemo = () => {
  const [showOptions, setShowOptions] = useState<{
    1: boolean
    2: boolean
    3: boolean
  }>({ 1: true, 2: true, 3: true })

  const toggleOption = (option: 1 | 2 | 3) => {
    setShowOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }))
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-4 z-30">
          <h2 className="type-h2 font-bold text-black mb-4" style={{ color: '#000000' }}>
            Feature Index Design Options Comparison
          </h2>
          <p className="type-body-base text-gray-600 mb-4" style={{ color: '#4B5563' }}>
            Compare all three options side by side. Toggle any option on/off to
            focus on specific designs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => toggleOption(1)}
              className={`px-6 py-3 rounded-lg type-body-base font-semibold transition-all border-2 ${
                showOptions[1]
                  ? 'bg-purple-100 text-purple-700 border-purple-700 shadow-lg'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              {showOptions[1] ? '✓ ' : ''}Option 1: Grid Cards
            </button>
            <button
              onClick={() => toggleOption(2)}
              className={`px-6 py-3 rounded-lg type-body-base font-semibold transition-all border-2 ${
                showOptions[2]
                  ? 'bg-purple-100 text-purple-700 border-purple-700 shadow-lg'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              {showOptions[2] ? '✓ ' : ''}Option 2: Horizontal Tabs
            </button>
            <button
              onClick={() => toggleOption(3)}
              className={`px-6 py-3 rounded-lg type-body-base font-semibold transition-all border-2 ${
                showOptions[3]
                  ? 'bg-purple-100 text-purple-700 border-purple-700 shadow-lg'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              {showOptions[3] ? '✓ ' : ''}Option 3: Fixed Sidebar
            </button>
          </div>
        </div>

        {/* Show all three options */}
        <div className="space-y-12">
          {showOptions[1] && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-purple-100 px-6 py-3 border-b border-purple-200">
                <h3 className="type-h3 font-bold text-purple-700" style={{ color: '#7C3AED' }}>
                  Option 1: Grid Cards Layout
                </h3>
                <p className="type-body-sm text-gray-600 mt-1" style={{ color: '#4B5563' }}>
                  Grid layout with all categories visible in expanded cards.
                </p>
              </div>
              <FeatureIndexOption1
                heading="Feature Index"
                categories={demoCategories}
                navigationLinks={navigationLinks}
              />
            </div>
          )}

          {showOptions[2] && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-purple-100 px-6 py-3 border-b border-purple-200">
                <h3 className="type-h3 font-bold text-purple-700" style={{ color: '#7C3AED' }}>
                  Option 2: Horizontal Tabs Layout
                </h3>
                <p className="type-body-sm text-gray-600 mt-1" style={{ color: '#4B5563' }}>
                  Horizontal tab navigation with always visible content.
                </p>
              </div>
              <FeatureIndexOption2
                heading="Feature Index"
                categories={demoCategories}
              />
            </div>
          )}

          {showOptions[3] && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-purple-100 px-6 py-3 border-b border-purple-200">
                <h3 className="type-h3 font-bold text-purple-700" style={{ color: '#7C3AED' }}>
                  Option 3: Fixed Sidebar Layout
                </h3>
                <p className="type-body-sm text-gray-600 mt-1" style={{ color: '#4B5563' }}>
                  Fixed navigation sidebar with vertically expanded content.
                </p>
              </div>
              <FeatureIndexOption3
                heading="Feature Index"
                categories={demoCategories}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeatureIndexDemo

