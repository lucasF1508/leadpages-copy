import React from 'react'
import HeroHome from './HeroHome'
import HeroDefault from './HeroDefault'

const Hero = ({ hero: heroOrg }) => {
  if (!heroOrg) return null
  const [hero] = Array.isArray(heroOrg) ? heroOrg : [heroOrg]

  switch (hero?._type) {
    case 'heroHome':
      return <HeroHome {...hero} />
    case 'heroSimple':
      return <>No Hero</>
    default:
      return <HeroDefault {...hero} />
  }
}

export default Hero
