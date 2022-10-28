import React from 'react'
import HeroHome from './HeroHome'

const Hero = ({ hero: heroOrg }) => {
  if (!heroOrg) return null
  const [hero] = Array.isArray(heroOrg) ? heroOrg : [heroOrg]

  switch (hero?._type) {
    case 'heroHome':
      return <HeroHome {...hero} />
    default:
      return <>No Hero</>
  }
}

export default Hero
