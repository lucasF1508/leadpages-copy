import dynamic from 'next/dynamic'
import React from 'react'
import Hero from '@components/Hero'

const Rack = dynamic(() => import('@components/Rack'))

const HomePage = ({ hero, components }) => (
  <>
    {hero && <Hero {...hero} />}
    {components && <Rack components={components} />}
  </>
)

export default HomePage
