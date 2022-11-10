import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@components/Hero'
import CTA from '@components/Cta'
import SEO from '@legacy/components/SEO'

// scripts
import RedbrickStructuredDataScript from '@legacy/scripts/RedbrickStructuredDataScript'

const Rack = dynamic(() => import('@components/Rack'))

const HomePage = ({ hero, components, cta }) => (
  <>
    {/* homepage seo metadata is set in the SEO component */}
    <SEO pathname="/" canonical="/" />
    <RedbrickStructuredDataScript />
    {hero && <Hero hero={hero} />}
    {components && <Rack components={components} />}
    {cta && <CTA {...cta} />}
  </>
)

export default HomePage
