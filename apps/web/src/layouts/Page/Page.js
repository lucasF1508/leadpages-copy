import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@components/Hero'
import CTA from '@components/Cta'
import SEO from '@legacy/components/SEO'

const Rack = dynamic(() => import('@components/Rack'))

const Page = ({ hero, components, cta }) => (
  <>
    {hero && <Hero hero={hero} />}
    {components && <Rack components={components} />}
    {cta && <CTA {...cta} />}
  </>
)
export default Page
