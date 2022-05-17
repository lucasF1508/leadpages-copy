import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@components/Hero'

const Rack = dynamic(() => import('@components/Rack'))

const Page = ({ hero, components }) => (
  <>
    {hero && <Hero {...hero} />}
    {components && <Rack components={components} />}
  </>
)
export default Page
