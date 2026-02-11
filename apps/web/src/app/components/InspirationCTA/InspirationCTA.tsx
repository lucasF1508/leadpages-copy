import React from 'react'
import clsx from 'clsx'
import Link from '@/components/Link'
import Pinion from '@/components/Pinion'

export interface InspirationCTAProps {
  heading?: string
  subtext?: string
  button?: {
    label: string
    url: string
  }
  className?: string
}

const InspirationCTA = ({
  heading = "You've seen what's possible. Now build it.",
  subtext = 'Templates for structure. Sections for style. Integrations for Power.',
  button,
  className,
}: InspirationCTAProps) => (
  <Pinion
    component="inspirationCTA"
    className={clsx(
      'theme-dark bg-gradient-to-b from-primary/20 to-body/10 py-16 md:py-20',
      className
    )}
  >
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
      <h2 className="type-title-t6 md:type-title-t5 text-body mb-4">
        {heading}
      </h2>
      {subtext && (
        <p className="type-body-lg text-body/80 mb-8">{subtext}</p>
      )}
      {button && (
        <Link
          condition="internal"
          linkStyle="button-solid"
          url={button.url}
          className="bg-[#4ADE80] hover:bg-[#3BC96F] text-white font-medium px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
        >
          {button.label}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      )}
    </div>
  </Pinion>
)

export default InspirationCTA



