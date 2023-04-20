import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@components/Hero'
import CTA from '@components/Cta'

// scripts
import RedbrickStructuredDataScript from '@legacy/scripts/RedbrickStructuredDataScript'

const Rack = dynamic(() => import('@components/Rack'))

const HomePage = ({ hero, components, cta }) => (
  <>
    <RedbrickStructuredDataScript />
    {hero && <Hero hero={hero} />}
    {components && <Rack components={components} />}
    {cta && <CTA {...cta} />}
  </>
)

export default HomePage
