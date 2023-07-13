import React from 'react'
import HeroHome from './HeroHome'
import HeroHomeAlt from './HeroHomeAlt'
import HeroDefault from './HeroDefault'
import HeroCustomer from './HeroCustomer'
import HeroSimple from './HeroSimple'
import HeroIntegration from './HeroIntegration'
import HeroCareers from './HeroCareers'
import HeroPricing from './HeroPricing'

const Hero = ({ hero: heroOrg }) => {
  if (!heroOrg) return null
  const [hero] = Array.isArray(heroOrg) ? heroOrg : [heroOrg]

  switch (hero?._type) {
    case 'heroHome':
      return <HeroHome {...hero} />
    case 'heroHomeAlt':
      return <HeroHomeAlt {...hero} />
    case 'heroCustomer':
      return <HeroCustomer {...hero} />
    case 'heroSimple':
      return <HeroSimple {...hero} />
    case 'heroIntegration':
      return <HeroIntegration {...hero} />
    case 'heroCareers':
      return <HeroCareers {...hero} />
    case 'heroPricing':
      return <HeroPricing {...hero} />
    default:
      return <HeroDefault {...hero} />
  }
}

export default Hero
