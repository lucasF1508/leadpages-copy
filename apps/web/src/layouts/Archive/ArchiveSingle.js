import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@components/Hero'

const Rack = dynamic(() => import('@components/Rack'))

const ArchiveSingle = ({ category, title, hero: heroOrg, components }) => {
  const hero = {
    label: category?.title,
    heading: title,
    ...heroOrg,
  }
  return (
    <>
      {hero && <Hero {...hero} />}
      <Rack components={components} />
    </>
  )
}

export default ArchiveSingle
