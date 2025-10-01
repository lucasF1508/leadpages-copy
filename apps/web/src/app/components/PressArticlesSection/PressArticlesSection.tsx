// /apps/web/src/components/Press/PressArticlesSection.tsx
'use client'
import React from 'react'
import Section from '@/components/Section'
import Text from '@/components/Text'
import PressCard from '@/components/PressCard'

type Item = {
  _key?: string
  layout?: 'half' | 'full'
  title: string
  date?: string
  excerpt?: string
  image?: any
  cta?: { label?: string; href: string; target?: '_self' | '_blank' }
}

export default function PressArticlesSection({
  eyebrow,
  heading,
  subheading,
  items = [],
}: {
  eyebrow?: string
  heading?: string
  subheading?: string
  items: Item[]
}) {
  return (
    <Section className="relative z-auto overflow-visible h-auto min-h-0 mb-16 md:mb-20 clear-both isolate">
      <header className="relative z-20 not-prose px-4 sm:px-6 md:px-8 pt-6 md:pt-10 text-center">
        {eyebrow && (
          <div className="text-xs tracking-widest text-neutral-500 mb-1 uppercase">
            {eyebrow}
          </div>
        )}
        {heading && (
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 m-0">
            {heading}
          </h2>
        )}
        {subheading && (
          <Text className="mt-2 max-w-3xl mx-auto text-neutral-700">
            {subheading}
          </Text>
        )}
      </header>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 mt-6 pb-10 md:pb-14">
    <div className="px-4 sm:px-6 md:px-8 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 isolate">
        {items.map((it, i) => (
          <div key={it._key ?? i} className={it.layout === 'full' ? 'md:col-span-2' : ''}>
            <PressCard {...it} className="relative z-10" />
          </div>
        ))}
      </div>
      </div>
    </Section>
  )
}
